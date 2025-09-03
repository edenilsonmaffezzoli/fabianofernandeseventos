#!/usr/bin/env python
import sys
import os
import time

# Force unbuffered output
sys.stdout.reconfigure(line_buffering=True)
sys.stderr.reconfigure(line_buffering=True)

# Add the project root to Python path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

print("=== STARTING FLASK SERVER ===")
print(f"Python version: {sys.version}")
print(f"Current directory: {os.getcwd()}")
print(f"Script location: {__file__}")
print("Python path:")
for p in sys.path:
    print(f"  - {p}")

print("\n=== IMPORTING APP ===")
try:
    from src.main import app
    print("✓ App imported successfully!")
    print("✓ Starting server on http://0.0.0.0:5000")
    print("✓ Server is running... Press Ctrl+C to stop")
    app.run(host='0.0.0.0', port=5000, debug=True, use_reloader=False)
except Exception as e:
    print(f"✗ Error starting server: {e}")
    import traceback
    traceback.print_exc()
    time.sleep(5)  # Keep the script alive to see the error