#!/usr/bin/env python
import os
import sys

# Adicionar o diretório atual ao path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

if __name__ == '__main__':
    try:
        from waitress import serve
        from src.main import app
        
        print("=" * 60)
        print("SERVIDOR FLASK INICIANDO COM WAITRESS...")
        print("URL: http://localhost:5000")
        print("URL: http://127.0.0.1:5000")
        print("=" * 60)
        
        # Servir a aplicação com waitress
        serve(app, host='0.0.0.0', port=5000)
        
    except Exception as e:
        print(f"ERRO: {e}")
        import traceback
        traceback.print_exc()
        input("Pressione Enter para sair...")