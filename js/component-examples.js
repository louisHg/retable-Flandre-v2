/**
 * 🎨 EXEMPLES D'UTILISATION - Component System
 * Copier-coller ces exemples dans vos pages
 */

// ═══════════════════════════════════════════════════════════
// EXEMPLE 1 : Charger des sections complètes
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    // Charger le footer (utilisé sur TOUTES les pages)
    loadComponent('#footerContainer', 'sections/footer');

    // Charger la section contact (réutilisable partout)
    loadComponent('#contactContainer', 'sections/contact');

    // Charger la newsletter CTA
    loadComponent('#newsletterContainer', 'sections/newsletter-cta');
});


// ═══════════════════════════════════════════════════════════
// EXEMPLE 2 : Grille d'articles scientifiques
// ═══════════════════════════════════════════════════════════

loadComponentsGrid('#articlesGrid', [
    { path: 'articles/article-hertel', colClass: 'col-lg-6 col-12' },
    { path: 'articles/article-oger', colClass: 'col-lg-6 col-12' }
]);


// ═══════════════════════════════════════════════════════════
// EXEMPLE 3 : Sidebar avec notifications compactes
// ═══════════════════════════════════════════════════════════

// Charger les prochaines activités en format notification
loadComponents('#sidebarActivites', [
    { path: 'activites/activite-wormhout', variant: 'notification' },
    { path: 'activites/activite-zegers', variant: 'notification' }
]);

// Charger les articles recommandés en format notification
loadComponents('#sidebarArticles', [
    { path: 'articles/article-hertel', variant: 'notification' },
    { path: 'articles/article-oger', variant: 'notification' }
]);


// ═══════════════════════════════════════════════════════════
// EXEMPLE 4 : Grille d'églises (3 colonnes)
// ═══════════════════════════════════════════════════════════

loadComponentsGrid('#eglisesGrid', [
    { path: 'eglises/eglise-wormhout', colClass: 'col-lg-4 col-md-6 col-12' },
    { path: 'eglises/eglise-zegers', colClass: 'col-lg-4 col-md-6 col-12' },
    { path: 'eglises/eglise-herzeele', colClass: 'col-lg-4 col-md-6 col-12' }
]);


// ═══════════════════════════════════════════════════════════
// EXEMPLE 5 : Chargement conditionnel
// ═══════════════════════════════════════════════════════════

// Charger différents composants selon l'URL
if (window.location.pathname.includes('activites')) {
    loadComponentsGrid('#mainContent', [
        { path: 'activites/activite-wormhout', colClass: 'col-lg-4' },
        { path: 'activites/activite-zegers', colClass: 'col-lg-4' },
        { path: 'activites/activite-herzeele', colClass: 'col-lg-4' }
    ]);
} else if (window.location.pathname.includes('articles')) {
    loadComponentsGrid('#mainContent', [
        { path: 'articles/article-hertel', colClass: 'col-lg-6' },
        { path: 'articles/article-oger', colClass: 'col-lg-6' }
    ]);
}


// ═══════════════════════════════════════════════════════════
// EXEMPLE 6 : Popup/Modal avec composant
// ═══════════════════════════════════════════════════════════

// Ouvrir une modale et charger le composant dedans
function openActivityModal(activityId) {
    const modal = document.getElementById('activityModal');
    const modalBody = modal.querySelector('.modal-body');

    // Charger le composant complet dans la modale
    loadComponent(modalBody, `activites/activite-${activityId}`).then(() => {
        // Ouvrir la modale Bootstrap
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
    });
}

// Utilisation :
// <button onclick="openActivityModal('wormhout')">Voir détails</button>


// ═══════════════════════════════════════════════════════════
// EXEMPLE 7 : Actualiser dynamiquement
// ═══════════════════════════════════════════════════════════

// Bouton pour recharger les activités
document.getElementById('refreshActivities')?.addEventListener('click', function() {
    loadComponentsGrid('#activitiesContainer', [
        { path: 'activites/activite-wormhout', colClass: 'col-lg-6' },
        { path: 'activites/activite-zegers', colClass: 'col-lg-6' }
    ]).then(() => {
        console.log('✅ Activités rechargées');
    });
});


// ═══════════════════════════════════════════════════════════
// EXEMPLE 8 : Filtre par catégorie
// ═══════════════════════════════════════════════════════════

function filterByCategory(category) {
    const container = document.getElementById('filteredContent');

    const componentsMap = {
        'activites': [
            { path: 'activites/activite-wormhout', colClass: 'col-lg-4' },
            { path: 'activites/activite-zegers', colClass: 'col-lg-4' }
        ],
        'articles': [
            { path: 'articles/article-hertel', colClass: 'col-lg-6' },
            { path: 'articles/article-oger', colClass: 'col-lg-6' }
        ],
        'eglises': [
            { path: 'eglises/eglise-wormhout', colClass: 'col-lg-4' }
        ]
    };

    loadComponentsGrid(container, componentsMap[category] || []);
}

// Utilisation :
// <button onclick="filterByCategory('activites')">Activités</button>
// <button onclick="filterByCategory('articles')">Articles</button>


// ═══════════════════════════════════════════════════════════
// EXEMPLE 9 : Toast notifications animées
// ═══════════════════════════════════════════════════════════

function showToastNotification(componentPath) {
    const toastContainer = document.getElementById('toastContainer') ||
                          createToastContainer();

    loadComponent(toastContainer, componentPath, 'notification').then(() => {
        // Animation d'entrée
        const toast = toastContainer.lastElementChild;
        toast.style.animation = 'slideInRight 0.3s ease-out';

        // Auto-fermeture après 5 secondes
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    });
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 400px;
    `;
    document.body.appendChild(container);
    return container;
}

// Utilisation :
// showToastNotification('activites/activite-wormhout');


// ═══════════════════════════════════════════════════════════
// EXEMPLE 10 : Pagination de composants
// ═══════════════════════════════════════════════════════════

class ComponentPagination {
    constructor(containerId, components, itemsPerPage = 6) {
        this.container = document.getElementById(containerId);
        this.components = components;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1;
    }

    render() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        const pageComponents = this.components.slice(start, end);

        loadComponentsGrid(this.container, pageComponents);
    }

    nextPage() {
        const maxPage = Math.ceil(this.components.length / this.itemsPerPage);
        if (this.currentPage < maxPage) {
            this.currentPage++;
            this.render();
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.render();
        }
    }
}

// Utilisation :
// const pagination = new ComponentPagination('articlesContainer', [
//     { path: 'articles/article-1', colClass: 'col-lg-4' },
//     { path: 'articles/article-2', colClass: 'col-lg-4' },
//     // ... 20 articles
// ], 6);
// pagination.render();


// ═══════════════════════════════════════════════════════════
// EXEMPLE 11 : Recherche dans les composants
// ═══════════════════════════════════════════════════════════

async function searchComponents(query, componentsToSearch) {
    const results = [];

    for (const comp of componentsToSearch) {
        const html = await componentLoader.loadComponent(comp.path);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const text = tempDiv.textContent.toLowerCase();

        if (text.includes(query.toLowerCase())) {
            results.push(comp);
        }
    }

    return results;
}

// Utilisation :
// const allComponents = [
//     { path: 'activites/activite-wormhout', colClass: 'col-lg-4' },
//     { path: 'activites/activite-zegers', colClass: 'col-lg-4' },
//     { path: 'articles/article-hertel', colClass: 'col-lg-6' }
// ];
//
// searchComponents('wormhout', allComponents).then(results => {
//     loadComponentsGrid('#searchResults', results);
// });


// ═══════════════════════════════════════════════════════════
// EXEMPLE 12 : Préchargement pour optimiser la performance
// ═══════════════════════════════════════════════════════════

// Précharger les composants fréquemment utilisés au démarrage
document.addEventListener('DOMContentLoaded', function() {
    componentLoader.preload([
        'sections/footer',
        'sections/contact',
        'sections/newsletter-cta',
        'articles/article-hertel',
        'articles/article-oger'
    ]).then(() => {
        console.log('✅ Composants préchargés en cache');
        // Affichage instantané car déjà en cache
        loadComponent('#footer', 'sections/footer');
    });
});

