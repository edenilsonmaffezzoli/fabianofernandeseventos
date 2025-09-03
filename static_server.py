import http.server
import socketserver
import os

# Definir o diretório dos arquivos estáticos
STATIC_DIR = os.path.join(os.path.dirname(__file__), 'src', 'static')
PORT = 5000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=STATIC_DIR, **kwargs)
    
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    print(f"Iniciando servidor estático...")
    print(f"Diretório: {STATIC_DIR}")
    print(f"Servidor rodando em: http://localhost:{PORT}")
    print("Pressione Ctrl+C para parar o servidor")
    
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor parado.")