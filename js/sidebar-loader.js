// ==========================================
// 📱 SIDEBAR COMPONENT LOADER
// Charge la sidebar et le toggle, et gère la page active automatiquement
// ==========================================

(function() {
    'use strict';

    /**
     * Charge la sidebar et le bouton toggle en tant que composants
     * @param {string} activePage - Identifiant de la page active (ex: 'index', 'retable', etc.)
     */
    async function loadSidebarComponents(activePage = null) {
        console.log('📱 Chargement de la sidebar...');

        try {
            // Attendre que le bundle soit chargé (avec retry)
            let retries = 0;
            while (!window.COMPONENTS_BUNDLE && retries < 10) {
                console.log('⏳ Attente du bundle... tentative', retries + 1);
                await new Promise(resolve => setTimeout(resolve, 100));
                retries++;
            }

            if (!window.COMPONENTS_BUNDLE) {
                console.error('❌ Bundle non trouvé après 10 tentatives');
                return;
            }

            console.log('✅ Bundle détecté avec', Object.keys(window.COMPONENTS_BUNDLE).length, 'composants');

            // 1. Charger la sidebar
            const sidebarHTML = window.COMPONENTS_BUNDLE['sidebar'];
            if (!sidebarHTML) {
                console.error('❌ Composant sidebar non trouvé dans le bundle');
                console.log('📋 Composants disponibles:', Object.keys(window.COMPONENTS_BUNDLE));
                return;
            }

            // Insérer la sidebar au début du <main>
            const main = document.querySelector('main');
            if (!main) {
                console.error('❌ Élément <main> non trouvé');
                return;
            }

            // Créer un container temporaire pour parser le HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = sidebarHTML.trim();
            const sidebarElement = tempDiv.firstElementChild;

            // Ajouter la sidebar au début du main
            main.insertBefore(sidebarElement, main.firstChild);
            console.log('✅ Sidebar insérée dans le DOM');

            // 2. Charger le bouton toggle
            const toggleHTML = window.COMPONENTS_BUNDLE['sidebar-toggle'];
            if (toggleHTML) {
                const toggleDiv = document.createElement('div');
                toggleDiv.innerHTML = toggleHTML.trim();
                const toggleElement = toggleDiv.firstElementChild;
                main.insertBefore(toggleElement, sidebarElement.nextSibling);
                console.log('✅ Toggle button inséré dans le DOM');
            } else {
                console.warn('⚠️ Composant sidebar-toggle non trouvé');
            }

            // 3. Détecter automatiquement la page active si non spécifiée
            if (!activePage) {
                const currentPath = window.location.pathname;
                const fileName = currentPath.split('/').pop().replace('.html', '') || 'index';
                activePage = fileName;

                // Mapping spécial pour "qu-est-ce-qu-un-retable.html"
                if (fileName === 'qu-est-ce-qu-un-retable') {
                    activePage = 'retable';
                }
            }

            console.log('🔍 Page détectée:', activePage);

            // 4. Ajouter la classe 'active' au lien correspondant
            const links = sidebarElement.querySelectorAll('.nav-link[data-page]');
            links.forEach(link => {
                const pageName = link.getAttribute('data-page');
                if (pageName === activePage) {
                    link.classList.add('active');
                    console.log('✅ Lien activé:', pageName);
                }
            });

            // 5. Initialiser la sidebar (après un court délai)
            setTimeout(() => {
                if (window.initSidebar) {
                    console.log('🔧 Appel de initSidebar()...');
                    window.initSidebar();
                } else {
                    console.error('❌ window.initSidebar() non disponible');
                }
            }, 150);

        } catch (error) {
            console.error('❌ Erreur lors du chargement de la sidebar:', error);
        }
    }

    // Auto-chargement au démarrage
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            console.log('📱 DOMContentLoaded - Lancement du chargement sidebar');
            loadSidebarComponents();
        });
    } else {
        console.log('📱 DOM déjà chargé - Lancement immédiat du chargement sidebar');
        loadSidebarComponents();
    }

    // Export pour usage manuel si besoin
    window.loadSidebarComponents = loadSidebarComponents;
})();

