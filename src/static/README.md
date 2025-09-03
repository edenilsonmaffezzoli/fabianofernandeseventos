# Fabiano Fernandes Eventos - Site Moderno

Site moderno e responsivo para a empresa Fabiano Fernandes Eventos, especializada em buffet e churrasco para eventos em Blumenau, SC.

## 🚀 Deploy no GitHub Pages

### Pré-requisitos
- Conta no GitHub
- Repositório público no GitHub

### Passos para Deploy

1. **Criar repositório no GitHub**
   - Acesse [GitHub](https://github.com) e faça login
   - Clique em "New repository"
   - Nome sugerido: `fabiano-fernandes-eventos`
   - Marque como "Public"
   - Clique em "Create repository"

2. **Fazer upload dos arquivos**
   - Faça upload de todos os arquivos desta pasta para o repositório
   - Estrutura necessária:
     ```
     /
     ├── index.html
     ├── assets/
     │   ├── styles.css
     │   ├── script.js
     │   ├── logo-BHDzhw-A.png
     │   ├── chef_fabiano-1ERHk-Ue.png
     │   └── (outros arquivos de imagem)
     └── README.md
     ```

3. **Configurar GitHub Pages**
   - No repositório, vá em "Settings"
   - Role até a seção "Pages"
   - Em "Source", selecione "Deploy from a branch"
   - Em "Branch", selecione "main" (ou "master")
   - Em "Folder", selecione "/ (root)"
   - Clique em "Save"

4. **Acessar o site**
   - Aguarde alguns minutos
   - O site estará disponível em: `https://[seu-usuario].github.io/fabiano-fernandes-eventos`

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica moderna
- **CSS3** - Design responsivo com Flexbox e Grid
- **JavaScript ES6+** - Interatividade e funcionalidades
- **Google Fonts** - Tipografia Inter
- **SVG Icons** - Ícones vetoriais escaláveis

## 📱 Características

### Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Menu hambúrguer para dispositivos móveis
- Imagens otimizadas para diferentes tamanhos de tela

### Funcionalidades
- **Navegação suave** entre seções
- **Formulário de contato** integrado com WhatsApp
- **Animações CSS** e efeitos de hover
- **Header fixo** com efeito de transparência
- **Validação de formulário** em tempo real
- **Formatação automática** de telefone

### Seções
1. **Header** - Logo, navegação e redes sociais
2. **Hero** - Apresentação principal com call-to-action
3. **Serviços** - Cards dos tipos de eventos oferecidos
4. **Sobre** - Informações sobre a empresa
5. **Contato** - Formulário e informações de contato
6. **Footer** - Links e informações adicionais

## 🎨 Paleta de Cores

- **Primária**: #e74c3c (Vermelho)
- **Secundária**: #2c3e50 (Azul escuro)
- **Gradiente**: #667eea → #764ba2
- **Neutras**: #f8f9fa, #666, #333

## 📞 Integração WhatsApp

O formulário de contato está integrado com WhatsApp, enviando automaticamente uma mensagem formatada com:
- Dados do cliente
- Tipo de evento
- Data e número de convidados
- Mensagem personalizada

## 🔧 Customização

### Alterar Informações de Contato
Edite o arquivo `assets/script.js` na linha que contém o número do WhatsApp:
```javascript
const whatsappUrl = `https://wa.me/5547991727277?text=${encodeURIComponent(whatsappMessage)}`;
```

### Alterar Cores
Edite o arquivo `assets/styles.css` nas variáveis de cor:
```css
.btn-primary {
    background: #e74c3c; /* Cor principal */
}
```

### Adicionar/Remover Serviços
Edite o arquivo `index.html` na seção de serviços e adicione/remova cards conforme necessário.

## 📊 Performance

- **Carregamento rápido** - CSS e JS minificados
- **Imagens otimizadas** - Formato WebP quando possível
- **Fontes otimizadas** - Google Fonts com preload
- **SEO otimizado** - Meta tags e estrutura semântica

## 🌐 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas versões)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Resolução mínima**: 320px

## 📝 Manutenção

### Atualizações de Conteúdo
1. Edite os arquivos HTML, CSS ou JS
2. Faça commit das alterações no GitHub
3. O GitHub Pages atualizará automaticamente

### Backup
- Mantenha uma cópia local dos arquivos
- Use o controle de versão do GitHub

## 🆘 Suporte

Para dúvidas sobre o site:
1. Verifique a documentação do GitHub Pages
2. Consulte os logs de build no GitHub
3. Teste localmente antes de fazer deploy

## 📄 Licença

Este projeto foi desenvolvido especificamente para Fabiano Fernandes Eventos.

---

**Desenvolvido com ❤️ para Fabiano Fernandes Eventos**