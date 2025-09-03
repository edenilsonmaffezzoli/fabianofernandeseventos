const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8000;
const STATIC_DIR = path.join(__dirname, 'src', 'static');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let filePath = path.join(STATIC_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Verificar se o arquivo existe
  if (!fs.existsSync(filePath)) {
    // Se não existir, servir index.html (para SPAs)
    filePath = path.join(STATIC_DIR, 'index.html');
  }
  
  const extname = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500);
      res.end('Erro interno do servidor');
      return;
    }
    
    res.writeHead(200, { 
      'Content-Type': contentType,
      'Cache-Control': 'no-cache'
    });
    res.end(content, 'utf-8');
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Servindo arquivos de: ${STATIC_DIR}`);
});

server.on('error', (err) => {
  console.error('Erro no servidor:', err);
});