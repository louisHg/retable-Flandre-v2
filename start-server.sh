#!/bin/zsh
# Lance le serveur Node local + ouvre la home dans le navigateur.
# Joignable depuis le téléphone (même Wi-Fi) — l'URL réseau s'affiche au démarrage.

cd "$(dirname "$0")"

PORT="${PORT:-8080}"

if ! command -v node >/dev/null 2>&1; then
    echo "❌ Node n'est pas installé. Installe-le depuis https://nodejs.org puis relance."
    exit 1
fi

# Ouvre le navigateur dès que le serveur écoute (petit délai)
( sleep 1 && open "http://localhost:$PORT/index.html" ) &

PORT="$PORT" exec node server.js