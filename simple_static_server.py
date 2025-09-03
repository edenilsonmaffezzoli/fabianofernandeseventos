import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'src', 'static'))

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_static(path):
    if path == '' or path == 'index.html':
        return send_from_directory(app.static_folder, 'index.html')
    
    # Verificar se o arquivo existe
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        # Se o arquivo não existir, retornar index.html (para SPAs)
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    print("Iniciando servidor estático...")
    print("Servidor rodando em: http://localhost:5000")
    app.run(host='0.0.0.0', port=5000, debug=True)