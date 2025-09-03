#!/usr/bin/env python3
import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configurações
PORT = 8000
PROJECT_ROOT = Path(__file__).parent

class ProjectHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(PROJECT_ROOT), **kwargs)
    
    def end_headers(self):
        # Adicionar headers para evitar cache durante desenvolvimento
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def do_GET(self):
        # Se a requisição for para a raiz, servir index.html
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

if __name__ == '__main__':
    print("🚀 Iniciando servidor do projeto Fabiano Fernandes Eventos...")
    print(f"📁 Diretório: {PROJECT_ROOT}")
    print(f"🌐 Servidor rodando em: http://localhost:{PORT}")
    print("📱 Pressione Ctrl+C para parar o servidor\n")
    
    # Verificar se o index.html existe
    index_path = PROJECT_ROOT / 'index.html'
    if not index_path.exists():
        print("❌ Erro: arquivo index.html não encontrado!")
        exit(1)
    
    try:
        with socketserver.TCPServer(("", PORT), ProjectHTTPRequestHandler) as httpd:
            print(f"✅ Servidor iniciado com sucesso!")
            print(f"🔗 Acesse: http://localhost:{PORT}")
            print("\n" + "="*50)
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n🛑 Servidor parado pelo usuário.")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Erro: Porta {PORT} já está em uso!")
            print("💡 Tente usar uma porta diferente ou pare o processo que está usando esta porta.")
        else:
            print(f"❌ Erro: {e}")
    except Exception as e:
        print(f"❌ Erro inesperado: {e}")