#!/usr/bin/env python
import os
import sys

# Adicionar o diretório atual ao path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

if __name__ == '__main__':
    try:
        from src.main import app
        print("=" * 50)
        print("SERVIDOR FLASK INICIANDO...")
        print("URL: http://localhost:5000")
        print("=" * 50)
        app.run(
            host='0.0.0.0',
            port=5000,
            debug=True,
            use_reloader=False,
            threaded=True
        )
    except Exception as e:
        print(f"ERRO: {e}")
        import traceback
        traceback.print_exc()
        input("Pressione Enter para sair...")