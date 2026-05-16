#!/bin/zsh

# Lance un serveur local sur le port 8080 et ouvre l'accueil dans le navigateur.

echo "Démarrage du serveur local sur http://localhost:8080"
echo "Pages :"
echo "   • http://localhost:8080/index.html"
echo "   • http://localhost:8080/generic.html              (Qui sommes-nous ?)"
echo "   • http://localhost:8080/qu-est-ce-qu-un-retable.html"
echo "   • http://localhost:8080/depliants-eglises.html   (Que peut-on visiter ?)"
echo "   • http://localhost:8080/actualites.html"
echo "   • http://localhost:8080/boutique.html"
echo ""
echo "Pour arrêter le serveur : Ctrl+C"
echo ""

sleep 1
open http://localhost:8080/index.html

python3 -m http.server 8080
