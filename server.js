// Petit serveur statique Node — zéro dépendance.
// Écoute sur 0.0.0.0 pour être joignable depuis le téléphone (même Wi-Fi).

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = Number(process.env.PORT) || 8080;
const ROOT = __dirname;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.htm':  'text/html; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.mjs':  'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.map':  'application/json; charset=utf-8',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.JPG':  'image/jpeg',
    '.JPEG': 'image/jpeg',
    '.gif':  'image/gif',
    '.svg':  'image/svg+xml',
    '.webp': 'image/webp',
    '.ico':  'image/x-icon',
    '.pdf':  'application/pdf',
    '.woff':  'font/woff',
    '.woff2': 'font/woff2',
    '.ttf':   'font/ttf',
    '.otf':   'font/otf',
    '.eot':   'application/vnd.ms-fontobject',
    '.txt':   'text/plain; charset=utf-8',
    '.xml':   'application/xml; charset=utf-8',
    '.mp4':   'video/mp4',
    '.webm':  'video/webm'
};

function getLanIp() {
    const ifaces = os.networkInterfaces();
    for (const name of Object.keys(ifaces)) {
        for (const i of ifaces[name]) {
            if (i.family === 'IPv4' && !i.internal) return i.address;
        }
    }
    return null;
}

function safeJoin(root, urlPath) {
    const decoded = decodeURIComponent(urlPath.split('?')[0]);
    const joined = path.normalize(path.join(root, decoded));
    if (!joined.startsWith(root)) return null;
    return joined;
}

function sendError(res, code, msg) {
    res.writeHead(code, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(code + ' — ' + msg);
}

function serveFile(filePath, res) {
    const ext = path.extname(filePath);
    const mime = MIME[ext] || MIME[ext.toLowerCase()] || 'application/octet-stream';
    res.writeHead(200, {
        'Content-Type': mime,
        'Cache-Control': 'no-store'
    });
    fs.createReadStream(filePath).on('error', () => sendError(res, 500, 'Read error')).pipe(res);
}

const server = http.createServer((req, res) => {
    let filePath = safeJoin(ROOT, req.url || '/');
    if (!filePath) return sendError(res, 403, 'Forbidden');

    fs.stat(filePath, (err, stat) => {
        if (err) return sendError(res, 404, req.url);
        if (stat.isDirectory()) {
            const indexFile = path.join(filePath, 'index.html');
            fs.stat(indexFile, (e2) => {
                if (e2) return sendError(res, 404, req.url);
                serveFile(indexFile, res);
            });
            return;
        }
        serveFile(filePath, res);
    });
});

server.listen(PORT, '0.0.0.0', () => {
    const lan = getLanIp();
    console.log('');
    console.log('  📡 Serveur Node prêt sur le port ' + PORT);
    console.log('');
    console.log('  • Local      http://localhost:' + PORT);
    if (lan) {
        console.log('  • Téléphone  http://' + lan + ':' + PORT + '   (même Wi-Fi)');
    }
    console.log('');
    console.log('  Ctrl+C pour arrêter');
    console.log('');
});
