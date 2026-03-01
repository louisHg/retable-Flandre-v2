// ==========================================
// 📱 SIDEBAR - GESTION TOGGLE & COLLAPSE
// ==========================================

(function() {
    'use strict';

    function initSidebar() {
        const sidebar = document.getElementById("rfSidebar");
        const toggle = document.getElementById("rfSidebarToggle");
        const content = document.getElementById("rfContent");

        if (!sidebar || !toggle || !content) {
            console.warn('⚠️ Éléments sidebar non trouvés');
            return;
        }

        console.log('🔧 Initialisation de la sidebar...');

        // État initial: visible sur desktop, cachée sur mobile
        const isMobile = window.matchMedia("(max-width: 991px)").matches;
        if (isMobile) {
            sidebar.classList.add("is-collapsed");
            content.classList.add("is-expanded");
        }

        // Fonction toggle
        function toggleSidebar() {
            const isCollapsed = sidebar.classList.toggle("is-collapsed");
            content.classList.toggle("is-expanded", isCollapsed);

            console.log('🔄 Sidebar', isCollapsed ? 'repliée' : 'dépliée');
        }

        // Event listener sur le bouton hamburger
        toggle.addEventListener("click", function(e) {
            e.stopPropagation();
            toggleSidebar();
        });

        // Fermer la sidebar après clic sur un lien (uniquement sur mobile)
        sidebar.querySelectorAll("a.nav-link").forEach(link => {
            link.addEventListener("click", () => {
                const mobileNow = window.matchMedia("(max-width: 991px)").matches;
                if (mobileNow && !sidebar.classList.contains("is-collapsed")) {
                    toggleSidebar();
                }
            });
        });

        // Gérer le redimensionnement
        let resizeTimer;
        window.addEventListener("resize", function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                const isMobile = window.matchMedia("(max-width: 991px)").matches;
                if (isMobile && !sidebar.classList.contains("is-collapsed")) {
                    // Sur mobile, on peut forcer la fermeture
                } else if (!isMobile && sidebar.classList.contains("is-collapsed")) {
                    // Sur desktop, l'utilisateur peut choisir de garder la sidebar repliée
                }
            }, 250);
        });

        console.log('✅ Sidebar initialisée');
    }

    // Auto-initialisation au chargement du DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSidebar);
    } else {
        initSidebar();
    }

    // Export pour usage manuel si besoin
    window.initSidebar = initSidebar;
})();

