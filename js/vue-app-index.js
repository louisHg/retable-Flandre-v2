// ==========================================
// 🏠 APP VUE 3 — PAGE ACCUEIL (index.html)
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    const { createApp } = Vue;
    const isMobile = window.matchMedia('(max-width: 991px)').matches;
    const app = createApp({
        data() {
            return { sidebarOpen: !isMobile };
        },
        watch: {
            sidebarOpen(val) {
                if (window.matchMedia('(max-width: 991px)').matches) {
                    document.body.classList.toggle('rf-sidebar-open', val);
                }
            }
        }
    });
    if (window.RFComponents) {
        Object.entries(window.RFComponents).forEach(([name, def]) => {
            app.component(name, def);
        });
    }
    app.mount('#app');
    console.log('✅ Vue app (index) montée');
});
