import sys
import os
sys.path.insert(0, '.')

try:
    print("Tentando importar o app...")
    from src.main import app
    print("App importado com sucesso!")
    print(f"App: {app}")
    print("Iniciando servidor...")
    app.run(host='0.0.0.0', port=5000, debug=True)
except Exception as e:
    print(f"Erro ao importar ou executar: {e}")
    import traceback
    traceback.print_exc()
    input("Pressione Enter para continuar...")