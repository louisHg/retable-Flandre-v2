/**
 * RETABLES DE FLANDRE - COMPONENT LOADER
 * Système de chargement de composants HTML réutilisables
 * Similaire à Vue.js mais en vanilla JavaScript
 */

class ComponentLoader {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Charge un composant HTML depuis le dossier components/
     * @param {string} path - Chemin du composant (ex: "activites/activite-wormhout")
     * @param {string} variant - Variante du composant (ex: "notification")
     * @returns {Promise<string>} - HTML du composant
     */
    async loadComponent(path, variant = null) {
        const key = variant ? `${path}-${variant}` : path;
        const fullPath = `components/${key}.html`;

        // Vérifier le cache
        if (this.cache.has(key)) {
            return this.cache.get(key);
        }

        // 🔥 PRIORITÉ 1 : Utiliser le bundle si disponible (pas de CORS)
        if (window.COMPONENTS_BUNDLE && window.COMPONENTS_BUNDLE[key]) {
            const html = window.COMPONENTS_BUNDLE[key];
            this.cache.set(key, html);
            return html;
        }

        // 🔥 PRIORITÉ 2 : Fetch (nécessite un serveur HTTP)
        try {
            const response = await fetch(fullPath);
            if (!response.ok) {
                throw new Error(`Composant non trouvé: ${fullPath}`);
            }
            const html = await response.text();
            this.cache.set(key, html);
            return html;
        } catch (error) {
            console.error(`❌ Erreur lors du chargement du composant:`, error);
            console.warn(`💡 Astuce: Lancez "python3 build-components.py" pour générer le bundle`);
            return `<div class="alert alert-warning">Composant introuvable: ${path}</div>`;
        }
    }

    /**
     * Injecte un composant dans un conteneur
     * @param {string} selector - Sélecteur CSS du conteneur
     * @param {string} path - Chemin du composant
     * @param {string} variant - Variante du composant
     */
    async inject(selector, path, variant = null) {
        const container = document.querySelector(selector);
        if (!container) {
            console.error(`Conteneur non trouvé: ${selector}`);
            return;
        }

        const html = await this.loadComponent(path, variant);
        container.innerHTML = html;
    }

    /**
     * Injecte plusieurs composants dans un conteneur
     * @param {string} selector - Sélecteur CSS du conteneur
     * @param {Array} components - Tableau de {path, variant}
     */
    async injectMultiple(selector, components) {
        const container = document.querySelector(selector);
        if (!container) {
            console.error(`Conteneur non trouvé: ${selector}`);
            return;
        }

        const promises = components.map(comp =>
            this.loadComponent(comp.path, comp.variant)
        );

        try {
            const htmlArray = await Promise.all(promises);
            container.innerHTML = htmlArray.join('');
        } catch (error) {
            console.error('Erreur lors du chargement multiple:', error);
        }
    }

    /**
     * Charge des composants en mode grille Bootstrap
     * @param {string} selector - Sélecteur CSS du conteneur
     * @param {Array} components - Tableau de {path, variant, colClass}
     */
    async injectGrid(selector, components) {
        const container = document.querySelector(selector);
        if (!container) {
            console.error(`Conteneur non trouvé: ${selector}`);
            return;
        }

        const promises = components.map(async (comp) => {
            const html = await this.loadComponent(comp.path, comp.variant);
            const colClass = comp.colClass || 'col-lg-6 col-12';
            return `<div class="${colClass}">${html}</div>`;
        });

        try {
            const htmlArray = await Promise.all(promises);
            container.innerHTML = htmlArray.join('');
        } catch (error) {
            console.error('Erreur lors du chargement en grille:', error);
        }
    }

    /**
     * Précharge des composants dans le cache
     * @param {Array} paths - Tableau de chemins de composants
     */
    async preload(paths) {
        const promises = paths.map(path => this.loadComponent(path));
        await Promise.all(promises);
        console.log(`✅ ${paths.length} composant(s) préchargé(s)`);
    }
}

// Instance globale
const componentLoader = new ComponentLoader();

// Fonction helper pour faciliter l'utilisation
window.loadComponent = (selector, path, variant = null) => {
    return componentLoader.inject(selector, path, variant);
};

window.loadComponents = (selector, components) => {
    return componentLoader.injectMultiple(selector, components);
};

window.loadComponentsGrid = (selector, components) => {
    return componentLoader.injectGrid(selector, components);
};

// Auto-chargement des composants avec data-attributes
document.addEventListener('DOMContentLoaded', async function () {
    console.log('🔄 Auto-chargement des composants avec data-load-component...');

    // Chercher tous les éléments avec data-load-component
    const autoLoadElements = document.querySelectorAll('[data-load-component]');
    console.log(`📌 ${autoLoadElements.length} composants à charger automatiquement`);

    // Charger tous les composants en parallèle
    const loadPromises = Array.from(autoLoadElements).map(async (element) => {
        const path = element.getAttribute('data-load-component');
        const variant = element.getAttribute('data-component-variant') || null;

        if (path) {
            console.log(`📦 Chargement: ${path}${variant ? '-' + variant : ''}`);
            const html = await componentLoader.loadComponent(path, variant);
            element.innerHTML = html;
            console.log(`✅ Chargé: ${path}`);
        }
    });

    await Promise.all(loadPromises);
    console.log('✅ Tous les composants auto-chargés');

    // Chercher tous les conteneurs avec data-load-components (multiple)
    const multiLoadElements = document.querySelectorAll('[data-load-components]');

    const multiLoadPromises = Array.from(multiLoadElements).map(async (element) => {
        const componentsJson = element.getAttribute('data-load-components');
        const variant = element.getAttribute('data-component-variant') || null;

        if (componentsJson) {
            try {
                const components = JSON.parse(componentsJson);
                const htmlArray = await Promise.all(
                    components.map(path => componentLoader.loadComponent(path, variant))
                );
                element.innerHTML = htmlArray.join('');
            } catch (error) {
                console.error('Erreur de parsing JSON:', error);
            }
        }
    });

    await Promise.all(multiLoadPromises);
});

console.log('✅ Component Loader initialisé');

