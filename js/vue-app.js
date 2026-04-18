// ==========================================
// APP VUE 3 — GENERIQUE (toutes les pages simples)
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    const { createApp } = Vue;
    const isMobile = window.matchMedia('(max-width: 991px)').matches;

    const app = createApp({
        data() {
            return { sidebarOpen: !isMobile };
        },
        mounted() {
            // Initialiser les carousels Bootstrap présents dans la page
            this.$nextTick(function () {
                document.querySelectorAll('.carousel[data-bs-ride="carousel"]').forEach(function (el) {
                    if (!bootstrap.Carousel.getInstance(el)) {
                        new bootstrap.Carousel(el, { ride: 'carousel', interval: 3000 });
                    }
                });

                // Initialiser la recherche de dépliants si présente
                initDepliants();
            });
        }
    });

    if (window.RFComponents) {
        Object.entries(window.RFComponents).forEach(function ([name, def]) {
            app.component(name, def);
        });
    }

    app.mount('#app');
    console.log('Vue app (generique) montee');
});

// ==========================================
// Recherche dépliants (page depliants-eglises)
// ==========================================
function initDepliants() {
    var input = document.getElementById('depliantSearch');
    var list  = document.getElementById('depliantList');
    var count = document.getElementById('depliantCount');
    if (!input || !list || !count) return;

    var items = Array.from(list.querySelectorAll('div[class*="col-"]'));

    function normalize(s) {
        return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function update() {
        var q = normalize(input.value.trim());
        var visible = 0;
        items.forEach(function (li) {
            var show = !q || normalize(li.textContent).includes(q);
            li.style.display = show ? '' : 'none';
            if (show) visible++;
        });
        count.textContent = visible + ' dépliant(s) affiché(s) sur ' + items.length + '.';
    }

    input.addEventListener('input', update);
    update();
}

