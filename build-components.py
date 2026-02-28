#!/usr/bin/env python3
"""
RETABLES DE FLANDRE - Component Builder
Génère un fichier JS contenant tous les composants HTML pour éviter les problèmes CORS
"""

import os
import json
from pathlib import Path

def build_components():
    """Scan le dossier components/ et génère un fichier JS avec tous les composants"""

    components_dir = Path('components')
    components_data = {}

    # Scanner tous les fichiers HTML
    for html_file in components_dir.rglob('*.html'):
        # Chemin relatif depuis components/
        relative_path = html_file.relative_to(components_dir)
        key = str(relative_path).replace('.html', '').replace('\\', '/')

        # Lire le contenu
        with open(html_file, 'r', encoding='utf-8') as f:
            content = f.read()

        components_data[key] = content
        print(f"✅ Ajouté: {key}")

    # Générer le fichier JS
    js_content = f"""/**
 * RETABLES DE FLANDRE - Components Bundle
 * Généré automatiquement par build-components.py
 * Date: {Path('components').stat().st_mtime}
 */

// Tous les composants HTML en un seul objet
window.COMPONENTS_BUNDLE = {json.dumps(components_data, indent=2, ensure_ascii=False)};

console.log('✅ Bundle de composants chargé ({len(components_data)} composants)');
"""

    # Écrire le fichier
    output_file = Path('js/components-bundle.js')
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(js_content)

    print(f"\n🎉 Build terminé ! {len(components_data)} composants générés")
    print(f"📦 Fichier créé: {output_file}")
    print(f"\n💡 Utilisation:")
    print(f"   <script src='js/components-bundle.js'></script>")
    print(f"   <script src='js/component-loader.js'></script>")

if __name__ == '__main__':
    build_components()

