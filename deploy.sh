#!/bin/bash
#
# Déploiement de la v2 sur Ionos, dans un SOUS-DOSSIER du site v1 :
#   https://www.retablesdeflandre.fr/retableFlandreV2/
# La v1 (racine) n'est pas touchée ; le --delete ne s'applique qu'au sous-dossier.
#
# Mot de passe : variable d'environnement IONOS_PASSWORD (secret GitHub / export local).
# À défaut, repli sur le deploy.sh de la v1 (checkout local uniquement).
# Aucun identifiant ne doit être écrit en clair dans ce fichier.

set -euo pipefail

REMOTE_USER="u56684116"
REMOTE_HOST="home311546021.1and1-data.host"
REMOTE_DIR="~/html5up-editorial/retableFlandreV2"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)/"

PASSWORD="${IONOS_PASSWORD:-}"
if [ -z "$PASSWORD" ] && [ -f "$LOCAL_DIR/../retableFlandre/deploy.sh" ]; then
    PASSWORD="$(sed -n 's/^PASSWORD="\(.*\)"$/\1/p' "$LOCAL_DIR/../retableFlandre/deploy.sh")"
fi
if [ -z "$PASSWORD" ]; then
    echo "Erreur : définir IONOS_PASSWORD (ou disposer du deploy.sh de la v1 à côté)." >&2
    exit 1
fi

echo "Déploiement de la v2 vers $REMOTE_HOST:$REMOTE_DIR ..."
sshpass -p "$PASSWORD" rsync -avz --progress --delete \
    --exclude '.git/' \
    --exclude '.idea/' \
    --exclude '.DS_Store' \
    --exclude 'README.md' \
    --exclude 'LICENSE' \
    --exclude 'server.js' \
    --exclude 'start-server.sh' \
    --exclude 'deploy.sh' \
    "$LOCAL_DIR" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR"

echo "Ajustement des permissions..."
sshpass -p "$PASSWORD" ssh "$REMOTE_USER@$REMOTE_HOST" "chmod -R 755 $REMOTE_DIR"

echo "Déploiement v2 terminé : https://www.retablesdeflandre.fr/retableFlandreV2/"
