#!/bin/zsh

# 🚀 SCRIPT DE DÉMARRAGE - Retables de Flandre v2
# Lance le serveur local et ouvre le site

echo "🔄 Génération du bundle de composants..."
python3 build-components.py

echo ""
echo "🚀 Démarrage du serveur local sur http://localhost:8080"
echo "📖 Pages disponibles:"
echo "   • http://localhost:8080/index.html"
echo "   • http://localhost:8080/qu-est-ce-qu-un-retable.html"
echo "   • http://localhost:8080/components-demo.html"
echo ""
echo "⚠️  Pour arrêter le serveur: Ctrl+C"
echo ""

# Ouvrir le navigateur
sleep 1
open http://localhost:8080/index.html

# Lancer le serveur
python3 -m http.server 8080

