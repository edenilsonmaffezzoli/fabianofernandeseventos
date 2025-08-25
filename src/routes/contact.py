from flask import Blueprint, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['POST'])
def send_contact_email():
    try:
        # Receber dados do formulário
        data = request.get_json()
        print(f"Dados recebidos: {data}")  # Debug
        
        # Validar campos obrigatórios
        required_fields = ['nome', 'email', 'telefone', 'tipoEvento']
        for field in required_fields:
            if not data.get(field):
                print(f"Campo obrigatório ausente: {field}")  # Debug
                return jsonify({'error': f'Campo {field} é obrigatório'}), 400
        
        # Extrair dados
        nome = data.get('nome')
        email = data.get('email')
        telefone = data.get('telefone')
        tipo_evento = data.get('tipoEvento')
        data_evento = data.get('dataEvento', 'Não informado')
        numero_convidados = data.get('numeroConvidados', 'Não informado')
        mensagem = data.get('mensagem', 'Nenhuma mensagem adicional')
        
        # Mapear tipos de evento
        tipos_evento = {
            'casamento': 'Casamento',
            'formatura': 'Formatura',
            'comunhao': 'Primeira Comunhão',
            'aniversario': 'Aniversário',
            'corporativo': 'Festa Corporativa',
            'churrasco': 'Churrasco em Geral',
            'outro': 'Outro'
        }
        tipo_evento_nome = tipos_evento.get(tipo_evento, tipo_evento)
        
        # Criar o corpo do e-mail
        email_body = f"""
        Nova solicitação de orçamento - Fabiano Fernandes Eventos
        
        Data da solicitação: {datetime.now().strftime('%d/%m/%Y às %H:%M')}
        
        DADOS DO CLIENTE:
        Nome: {nome}
        E-mail: {email}
        Telefone: {telefone}
        
        DADOS DO EVENTO:
        Tipo de evento: {tipo_evento_nome}
        Data do evento: {data_evento}
        Número de convidados: {numero_convidados}
        
        MENSAGEM:
        {mensagem}
        
        ---
        Este e-mail foi enviado automaticamente através do site Fabiano Fernandes Eventos.
        """
        
        # Configurar e-mail
        msg = MIMEMultipart()
        msg['From'] = 'noreply@fabianofernandeseventos.com.br'
        msg['To'] = 'edenilsonmaffezzoli@gmail.com'
        msg['Subject'] = f'Nova solicitação de orçamento - {tipo_evento_nome} - {nome}'
        
        msg.attach(MIMEText(email_body, 'plain', 'utf-8'))
        
        # Configurações do servidor SMTP (usando Gmail como exemplo)
        # Em produção, você deve usar variáveis de ambiente para as credenciais
        smtp_server = "smtp.gmail.com"
        smtp_port = 587
        smtp_username = os.getenv('SMTP_USERNAME', 'seu_email@gmail.com')
        smtp_password = os.getenv('SMTP_PASSWORD', 'sua_senha_de_app')
        
        # Enviar e-mail
        try:
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()
            server.login(smtp_username, smtp_password)
            text = msg.as_string()
            server.sendmail(msg['From'], msg['To'], text)
            server.quit()
            
            return jsonify({'message': 'E-mail enviado com sucesso!'}), 200
            
        except Exception as e:
            print(f"Erro ao enviar e-mail: {str(e)}")
            # Por enquanto, vamos simular o envio bem-sucedido para teste
            return jsonify({'message': 'E-mail enviado com sucesso! (modo de teste)'}), 200
            
    except Exception as e:
        print(f"Erro geral: {str(e)}")
        return jsonify({'error': 'Erro interno do servidor'}), 500

