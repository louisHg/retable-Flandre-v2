// APP VUE 3 - PAGE RETABLE
document.addEventListener('DOMContentLoaded', function () {
    const { createApp } = Vue;
    const isMobile = window.matchMedia('(max-width: 991px)').matches;

    const app = createApp({
        data() {
            return {
                sidebarOpen: !isMobile,
                schemaModalOpen: false
            };
        },
        mounted() {
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.schemaModalOpen) {
                    this.closeSchema();
                }
            });
        },
        methods: {
            openSchema() {
                this.schemaModalOpen = true;
                document.body.style.overflow = 'hidden';
            },
            closeSchema() {
                this.schemaModalOpen = false;
                document.body.style.overflow = '';
            }
        }
    });

    if (window.RFComponents) {
        Object.entries(window.RFComponents).forEach(([name, def]) => {
            app.component(name, def);
        });
    }

    app.mount('#app');
    console.log('Vue app retable montee');
});
