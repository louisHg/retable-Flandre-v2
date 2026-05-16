// ==========================================
// COMPOSANTS VUE 3 — RETABLES DE FLANDRE
// ==========================================
//
// ORGANISATION DU FICHIER
//
//   Layout / navigation
//     rf-sidebar              ligne  11   sidebar gauche + cloche nouveautés
//     rf-footer               ligne 410   pied de page
//
//   Page d'accueil
//     rf-hero-home            ligne 143   hero accueil
//     rf-gallery-carousel     ligne 464   carrousel retables (data: RFContent.galleries.retables)
//     rf-newsletter-cta       ligne 263   CTA newsletter
//
//   Page "Qu'est-ce qu'un retable"
//     rf-hero-retable         ligne 183   hero + schéma
//     rf-texte-collectif      ligne 227   texte collectif
//
//   Pages activités / visite / dépliants
//     rf-gallery-activites    ligne 603   galerie événements (data: RFContent.galleries.activites)
//     rf-gallery-eglises      ligne 666   galerie églises    (data: RFContent.galleries.eglises)
//
//   Articles
//     rf-article-hertel       ligne 432   article Hertel (texte: RFContent.articles.hertel)
//     rf-article-oger         ligne 448   article Oger   (texte: RFContent.articles.oger)
//
//   Transversal
//     rf-contact              ligne 289   formulaire contact (EmailJS)
//     rf-lightbox             ligne 732   modale d'agrandissement automatique
//     rf-news-banner          ligne 840   bandeau "Nouveautés" (data: RFNews)
//
// DONNÉES (textes, photos, articles)  →  js/content.js
// NOUVEAUTÉS / cloche                 →  js/news.js
//
// Les numéros de ligne ci-dessus peuvent dériver. Mettre à jour à la main si besoin.
// ==========================================

(function () {
    'use strict';

    // ==========================================
    // 📌 rf-sidebar
    // ==========================================
    const RFSidebar = {
        props: {
            isOpen: {type: Boolean, default: true},
            currentPage: {type: String, default: ''}
        },
        emits: ['close'],
        data() {
            const api = window.RFNewsAPI;
            return {
                showNews: false,
                notifications: api ? api.all() : [],
                unread: api ? api.unreadCount() : 0
            };
        },
        methods: {
            handleNavClick() {
                if (window.matchMedia('(max-width: 991px)').matches) {
                    this.$emit('close');
                }
            },
            scrollToContact() {
                const target = document.getElementById('section_contact');
                if (target) {
                    target.scrollIntoView({behavior: 'smooth'});
                } else {
                    window.location.href = 'index.html#section_contact';
                }
                this.handleNavClick();
            },
            toggleNews() {
                this.showNews = !this.showNews;
            },
            isRead(id) {
                return window.RFNewsAPI ? window.RFNewsAPI.isRead(id) : false;
            },
            refreshUnread() {
                if (window.RFNewsAPI) this.unread = window.RFNewsAPI.unreadCount();
            },
            openNewsItem(item) {
                if (window.RFNewsAPI) {
                    window.RFNewsAPI.markAsRead(item.id);
                    this.refreshUnread();
                }
                const samePage = item.page && window.location.pathname.endsWith('/' + item.page);
                if (samePage && item.anchor) {
                    const target = document.getElementById(item.anchor);
                    if (target) {
                        target.scrollIntoView({behavior: 'smooth'});
                        this.handleNavClick();
                        return;
                    }
                }
                if (item.page) {
                    window.location.href = item.page + (item.anchor ? '#' + item.anchor : '');
                }
            },
            markAllRead() {
                if (window.RFNewsAPI) {
                    window.RFNewsAPI.markAllAsRead();
                    this.refreshUnread();
                }
            }
        },
        template: `
            <aside id="rfSidebar" class="rf-sidebar" :class="{ 'is-collapsed': !isOpen }">
                <a class="rf-brand d-flex align-items-center" href="index.html">
                    <img src="images/previous-image/logo.jpg" class="rf-brand-image img-fluid" alt="Retables de Flandre">
                    <span class="rf-brand-text">
                        Retables
                        <small>de Flandre</small>
                    </span>
                </a>

                <button type="button" class="rf-sidebar-bell" @click="toggleNews"
                        :aria-expanded="showNews" aria-controls="rfNewsPanel">
                    <i class="bi bi-bell-fill"></i>
                    <span class="rf-bell-label">Nouveautés</span>
                    <span v-if="unread > 0" class="rf-bell-badge">{{ unread }}</span>
                    <i class="bi" :class="showNews ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
                </button>

                <div v-show="showNews" id="rfNewsPanel" class="rf-news-panel">
                    <div v-if="notifications.length === 0" class="text-muted small px-2 py-2">
                        Aucune nouveauté pour l'instant.
                    </div>
                    <div v-else>
                        <div class="rf-news-actions" v-if="unread > 0">
                            <button type="button" class="btn btn-link btn-sm" @click="markAllRead">
                                Tout marquer comme lu
                            </button>
                        </div>
                        <div class="rf-notification-list">
                            <div v-for="item in notifications" :key="item.id"
                                 class="rf-notification rf-notification-compact"
                                 :class="{ 'rf-notification-unread': !isRead(item.id) }"
                                 @click="openNewsItem(item)">
                                <div class="rf-notification-icon">
                                    <i class="bi bi-bell"></i>
                                </div>
                                <div class="rf-notification-content">
                                    <div class="rf-notification-title">{{ item.label }}</div>
                                    <div class="rf-notification-text">{{ item.description }}</div>
                                    <div class="rf-notification-date">{{ item.date }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="rf-sidebar-nav">
                    <a class="nav-link" :class="{ active: currentPage === 'index' }" href="index.html" @click="handleNavClick">Accueil</a>
                    <a class="nav-link" :class="{ active: currentPage === 'generic' }" href="generic.html" @click="handleNavClick">Association</a>
                    <a class="nav-link" :class="{ active: currentPage === 'activites' }" href="activites.html" @click="handleNavClick">Activités</a>
                    <a class="nav-link" :class="{ active: currentPage === 'retable' }" href="qu-est-ce-qu-un-retable.html" @click="handleNavClick">Qu'est-ce qu'un retable ?</a>
                    <a class="nav-link" :class="{ active: currentPage === 'depliants' }" href="depliants-eglises.html" @click="handleNavClick">Dépliants des églises à retables</a>
                    <a class="nav-link" :class="{ active: currentPage === 'visite' }" href="visite-eglises.html" @click="handleNavClick">Visite des églises</a>
                    <a class="nav-link" :class="{ active: currentPage === 'actualites' }" href="actualites.html" @click="handleNavClick">Actualités</a>
                    <a class="nav-link" :class="{ active: currentPage === 'boutique' }" href="boutique.html" @click="handleNavClick">Boutique</a>
                    <a class="nav-link" href="#section_contact" @click.prevent="scrollToContact">Contact</a>
                </nav>
                <div class="rf-sidebar-footer">
                    <a class="rf-social-link" target="_blank" href="https://www.facebook.com/lesretablesdeflandres">
                        <i class="bi bi-facebook"></i>
                    </a>
                </div>
            </aside>
        `
    };

    // ==========================================
    // 🏠 rf-hero-home
    // ==========================================
    const RFHeroHome = {
        template: `
            <section class="about-section section-padding" id="section_hero">
                <div class="container">
                    <div class="row align-items-center g-4">
                        <div class="col-lg-7 col-12">
                            <div class="d-flex align-items-center mb-3">
                                <img src="images/previous-image/logo.jpg" alt="Logo"
                                     style="width: 70px; height: 70px; object-fit: cover; border-radius: 12px; margin-right: 15px;">
                                <div>
                                    <h2 class="mb-0">Association<br>RETABLES de FLANDRE</h2>
                                    <p class="mb-0" style="color:#717275;">Bienvenue sur le site de l'association</p>
                                </div>
                            </div>
                            <p class="mt-4">
                                Les membres de l'association vous adressent leurs <strong>meilleurs vœux pour 2026</strong>
                                <br/>
                                Que cette nouvelle année vous apporte santé, sérénité et joie,
                                au fil de belles découvertes de notre patrimoine.
                                <br/><br/>
                                <em>Merci pour votre soutien et votre fidélité.</em>
                            </p>
                            <a target="_blank" href="images/2025/retablesdeflandre/Redecouvrir-n-51.pdf"
                               class="btn custom-btn smoothscroll" style="font-size: 1.1rem; padding: 12px 22px;">
                                Lettre d'infos REDECOUVRIR N.51
                            </a>
                        </div>
                        <div class="col-lg-5 col-12">
                            <img src="images/previous-image/bambecque.jpg" class="img-fluid w-100 rounded-4 shadow-sm"
                                 style="height: 420px; object-fit: cover;" alt="Bambecque">
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 📖 rf-hero-retable
    // ==========================================
    const RFHeroRetable = {
        emits: ['open-schema'],
        template: `
            <section class="about-section section-padding" id="section_1">
                <div class="container">
                    <div class="row align-items-center g-4">
                        <div class="col-lg-7 col-12">
                            <div class="d-flex align-items-center mb-3">
                                <img src="images/previous-image/logo.jpg" alt="Logo"
                                     style="width: 70px; height: 70px; object-fit: cover; border-radius: 12px; margin-right: 15px;">
                                <div>
                                    <h2 class="mb-0">Qu'est-ce qu'un retable ?</h2>
                                    <p class="mb-0" style="color:#717275;">Découvrez l'histoire et la composition de ces œuvres d'art religieux</p>
                                </div>
                            </div>
                            <p class="mt-4" style="line-height: 1.8;">
                                L'ensemble des retables de Flandre française constitue un corpus homogène, formant à
                                l'intérieur de l'arrondissement de Dunkerque, <strong>de la mer du Nord à la Lys</strong>,
                                un ensemble de près de <strong>150 œuvres réparties dans une cinquantaine d'églises</strong>.
                                <br><br>
                                Leur cohérence vient de l'unité de leur époque de construction, les <strong>XVII° et XVIII° siècles</strong>,
                                de leur structure architecturale et de leur matériau de construction, le bois.
                            </p>
                            <a href="images/previous-image/Lexique.pdf" target="_blank"
                               class="btn custom-btn" style="font-size: 1.1rem; padding: 12px 22px;">
                                <i class="bi bi-download me-2"></i>Télécharger le lexique
                            </a>
                        </div>
                        <div class="col-lg-5 col-12">
                            <img src="images/previous-image/schemadunretable.jpg"
                                 class="img-fluid w-100 rounded-4 shadow-sm"
                                 style="height: 420px; object-fit: cover; cursor: pointer;"
                                 alt="Schéma d'un retable"
                                 @click="$emit('open-schema')">
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 📝 rf-texte-collectif
    // ==========================================
    const RFTexteCollectif = {
        template: `
            <section class="section-padding" style="background: var(--theme-site); padding-top: 80px; padding-bottom: 80px;">
                <div class="container">
                    <div class="row align-items-center g-5">
                        <div class="col-lg-5 col-12">
                            <img src="images/previous-image/blason.jpg" class="img-fluid w-100 rounded-4 shadow-sm"
                                 style="object-fit: cover;" alt="Blason Retables de Flandre">
                        </div>
                        <div class="col-lg-7 col-12">
                            <h3 class="mb-3">« Retables »</h3>
                            <h5 class="mb-3" style="color: #717275;">Texte écrit par un collectif</h5>
                            <h4 class="mb-3">Matériaux : faux marbre et polychromie</h4>
                            <p style="line-height: 1.8; color: #555;">
                                L'ensemble des retables de Flandre française constitue un corpus homogène, formant à
                                l'intérieur de l'arrondissement de Dunkerque, de la mer du Nord à la Lys, un ensemble de près de
                                <strong>150 œuvres réparties dans une cinquantaine d'églises</strong>.
                            </p>
                            <p style="line-height: 1.8; color: #555;" class="mb-4">
                                Leur cohérence vient de l'unité de leur époque de construction, les <strong>XVII° et XVIII° siècles</strong>,
                                de leur structure architecturale et de leur matériau de construction, le bois.
                                Les forêts de Nieppe et de Clairmarais pouvaient fournir...
                            </p>
                            <a href="textcollectif.html" class="btn custom-btn">
                                Lire la suite <i class="bi bi-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 📰 rf-newsletter-cta
    // ==========================================
    const RFNewsletterCta = {
        template: `
            <section class="section-padding" style="background: linear-gradient(135deg, var(--primary-color) 0%, #5a9d84 100%); padding-top: 60px; padding-bottom: 60px;">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-8">
                            <i class="bi bi-newspaper text-white" style="font-size: 4rem; opacity: 0.9;"></i>
                            <h2 class="text-white mt-4 mb-3">Restez informé</h2>
                            <p class="text-white mb-4" style="font-size: 1.1rem; opacity: 0.95;">
                                Découvrez notre dernière lettre d'information avec toutes les actualités de l'association
                            </p>
                            <a href="images/2025/retablesdeflandre/Redecouvrir-n-51.pdf"
                               target="_blank"
                               class="btn btn-light btn-lg">
                                <i class="bi bi-download me-2"></i>REDECOUVRIR N.51
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 📧 rf-contact
    // ==========================================
    const RFContact = {
        data() {
            return {
                form: {fullName: '', phone: '', email: '', message: ''},
                sending: false,
                sent: false,
                error: null
            };
        },
        mounted() {
            if (window.emailjs) {
                emailjs.init('aDQZj6KUMz6fZ2Qs3');
            }
        },
        methods: {
            async submitForm() {
                this.sending = true;
                this.sent = false;
                this.error = null;
                try {
                    await emailjs.send('service_outp9kh', 'template_dkbwnu2', {
                        fullName: this.form.fullName,
                        phone: this.form.phone,
                        email: this.form.email,
                        message: this.form.message
                    });
                    this.sent = true;
                    this.form = {fullName: '', phone: '', email: '', message: ''};
                } catch (err) {
                    this.error = "Erreur lors de l'envoi. Veuillez réessayer.";
                    console.error('Erreur EmailJS :', err);
                } finally {
                    this.sending = false;
                }
            }
        },
        template: `
            <section class="contact-section section-padding" id="section_contact">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-10 col-12">
                            <div class="row contact-split">
                                <div class="col-lg-5 col-12">
                                    <div class="p-4 rounded-4 shadow-sm" style="background:#fff;">
                                        <h2 class="mb-3">Contact</h2>
                                        <p class="mb-2">
                                            <i class="bi bi-envelope"></i>
                                            <a href="mailto:retables@orange.fr" class="ms-2">retables@orange.fr</a>
                                        </p>
                                        <p class="mb-2">
                                            <i class="bi bi-telephone"></i>
                                            <a href="tel:0627712538" class="ms-2">06 27 71 25 38</a>
                                        </p>
                                        <p class="mb-0">
                                            <i class="bi bi-geo-alt"></i>
                                            <span class="ms-2">
                                                Association RETABLES de FLANDRE<br>
                                                B.P. 70002<br>
                                                59470 Wormhout
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12">
                                    <form class="custom-form contact-form" role="form" @submit.prevent="submitForm">
                                        <h2 class="mb-4 pb-2">Écrivez-nous</h2>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-floating">
                                                    <input type="text" id="full-name" v-model="form.fullName"
                                                           class="form-control" placeholder="Nom et prénom" required>
                                                    <label for="full-name">Nom et prénom</label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-12">
                                                <div class="form-floating">
                                                    <input type="tel" id="phone" v-model="form.phone"
                                                           pattern="^\\+?[0-9\\s\\-]{7,15}$"
                                                           class="form-control" placeholder="Numéro de téléphone" required>
                                                    <label for="phone">Téléphone</label>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-md-6 col-12">
                                                <div class="form-floating">
                                                    <input type="email" id="email" v-model="form.email"
                                                           pattern="[^ @]*@[^ @]*"
                                                           class="form-control" placeholder="Adresse e-mail" required>
                                                    <label for="email">Adresse e-mail</label>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 col-12">
                                                <div class="form-floating">
                                                    <textarea id="message" v-model="form.message"
                                                              class="form-control"
                                                              placeholder="Votre message ici" required></textarea>
                                                    <label for="message">Message</label>
                                                </div>
                                                <button type="submit" class="form-control mt-3" :disabled="sending">
                                                    {{ sending ? 'Envoi en cours...' : 'Envoyer' }}
                                                </button>
                                                <div v-if="sent" class="alert alert-success mt-3" role="alert">
                                                    ✅ Message envoyé avec succès !
                                                </div>
                                                <div v-if="error" class="alert alert-danger mt-3" role="alert">
                                                    {{ error }}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 🦶 rf-footer
    // ==========================================
    const RFFooter = {
        template: `
            <footer class="site-footer">
                <div class="container">
                    <div class="row mb-5 pb-5">
                        <div class="col-lg-12 col-12 text-center">
                            <p class="mb-0" style="color:#fff;">&copy; RETABLES de FLANDRE</p>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="var(--primary-color)" fill-opacity="1"
                          d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                    </path>
                </svg>
            </footer>
        `
    };

    // ==========================================
    // 📄 rf-article-hertel — texte dans RFContent.articles.hertel
    // ==========================================
    const RFArticleHertel = {
        computed: {
            body() {
                return (window.RFContent && window.RFContent.articles && window.RFContent.articles.hertel) || '';
            }
        },
        template: `
            <div class="rf-card rf-card-article">
                <div class="rf-card-body rf-card-body-lg" v-html="body"></div>
            </div>
        `
    };

    // ==========================================
    // 📄 rf-article-oger — texte dans RFContent.articles.oger
    // ==========================================
    const RFArticleOger = {
        computed: {
            body() {
                return (window.RFContent && window.RFContent.articles && window.RFContent.articles.oger) || '';
            }
        },
        template: `
            <div class="rf-card rf-card-article">
                <div class="rf-card-body rf-card-body-lg" v-html="body"></div>
            </div>
        `
    };

    // ==========================================
    // 🖼️ rf-gallery-carousel — donnees dans RFContent.galleries.retables
    // ==========================================
    const RFGalleryCarousel = {
        data() {
            const retables = (window.RFContent && window.RFContent.galleries && window.RFContent.galleries.retables) || [];
            return {
                modalOpen: false,
                modalIndex: 0,
                images: retables
            };
        },
        computed: {
            modalImg() {
                return this.images[this.modalIndex] || null;
            },
            modalSrc() {
                return this.modalImg ? this.modalImg.src : '';
            },
            modalTitle() {
                const img = this.modalImg;
                if (!img) return '';
                if (img.badge && img.heading) return `${img.heading} - ${img.badge}`;
                if (img.heading) return img.heading;
                return img.alt || 'Retable';
            }
        },
        mounted() {
            // Initialiser le carrousel Bootstrap
            this._carousel = new bootstrap.Carousel(this.$refs.carouselEl, {
                interval: 3000,
                ride: 'carousel'
            });

            // Fermer la modale avec Échap, naviguer avec ←/→
            this._onKeydown = (e) => {
                if (!this.modalOpen) return;
                if (e.key === 'Escape') this.closeModal();
                else if (e.key === 'ArrowLeft') this.prevModal();
                else if (e.key === 'ArrowRight') this.nextModal();
            };
            document.addEventListener('keydown', this._onKeydown);
        },
        beforeUnmount() {
            document.removeEventListener('keydown', this._onKeydown);
            if (this._carousel) {
                this._carousel.dispose();
            }
        },
        methods: {
            openModalFromCarousel() {
                const activeItem = this.$refs.carouselInner.querySelector('.carousel-item.active');
                if (!activeItem) return;
                const items = Array.from(this.$refs.carouselInner.querySelectorAll('.carousel-item'));
                const idx = items.indexOf(activeItem);
                if (idx >= 0) this.modalIndex = idx;
                this.modalOpen = true;
                document.body.style.overflow = 'hidden';
            },
            closeModal() {
                this.modalOpen = false;
                document.body.style.overflow = '';
            },
            prevModal() {
                if (!this.images.length) return;
                this.modalIndex = (this.modalIndex - 1 + this.images.length) % this.images.length;
            },
            nextModal() {
                if (!this.images.length) return;
                this.modalIndex = (this.modalIndex + 1) % this.images.length;
            },
            downloadImage() {
                const src = this.modalSrc;
                const title = this.modalTitle || 'retable';
                fetch(src)
                    .then(r => r.blob())
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.jpg';
                        document.body.appendChild(a);
                        a.click();
                        URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    })
                    .catch(() => window.open(src, '_blank'));
            }
        },
        template: `
            <div>
                <section class="photo-carousel py-5" id="section_gallery">
                    <div class="container">
                        <div class="row align-items-end mb-4">
                            <div class="col-lg-8">
                                <h2 class="videos-title mb-2">Galerie des Retables</h2>
                                <p class="videos-subtitle mb-0">Découvrez les retables des églises de Flandre rénové par l'association</p>
                            </div>
                        </div>
                        <div id="photoCarousel" ref="carouselEl" class="carousel slide" data-bs-ride="carousel">
                            <div ref="carouselInner" class="carousel-inner rounded-4 shadow-sm"
                                 style="cursor: pointer;" @click="openModalFromCarousel">
                                <div v-for="(img, index) in images" :key="index"
                                     class="carousel-item" :class="{ active: index === 0 }">
                                    <img :src="img.src" class="d-block w-100 rounded-4" :alt="img.alt">
                                    <template v-if="img.badge">
                                        <div class="image-overlay">
                                            <div class="image-badge">{{ img.badge }}</div>
                                            <h3 class="image-heading">{{ img.heading }}</h3>
                                            <p class="image-meta">Cliquez pour agrandir</p>
                                        </div>
                                        <div class="image-expand-hint">Agrandir</div>
                                    </template>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button"
                                    data-bs-target="#photoCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Précédent</span>
                            </button>
                            <button class="carousel-control-next" type="button"
                                    data-bs-target="#photoCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Suivant</span>
                            </button>
                        </div>
                    </div>
                </section>

                <!-- Modale image plein écran -->
                <div class="image-modal" :class="{ 'is-open': modalOpen }"
                     :aria-hidden="String(!modalOpen)" @click.self="closeModal">
                    <button class="image-modal-close" type="button" @click="closeModal" aria-label="Fermer">✕</button>
                    <button class="image-modal-download" type="button" @click="downloadImage"
                            aria-label="Télécharger" title="Télécharger l'image">
                        <i class="bi bi-download"></i>
                    </button>
                    <button v-if="images.length > 1" class="image-modal-prev" type="button"
                            @click.stop="prevModal" aria-label="Précédent">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button v-if="images.length > 1" class="image-modal-next" type="button"
                            @click.stop="nextModal" aria-label="Suivant">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                    <div class="image-modal-content" role="dialog" aria-modal="true"
                         :aria-labelledby="modalOpen ? 'imageModalTitle' : undefined">
                        <div class="image-modal-header">
                            <h3 id="imageModalTitle" class="image-modal-title">{{ modalTitle }}</h3>
                            <span v-if="images.length > 1" class="image-modal-counter">
                                {{ modalIndex + 1 }} / {{ images.length }}
                            </span>
                        </div>
                        <div class="image-modal-body">
                            <img :src="modalSrc" class="image-modal-img" :alt="modalTitle">
                        </div>
                    </div>
                </div>
            </div>
        `
    };

    // ==========================================
    // 📅 rf-gallery-activites — Galerie événements (AG, visites, rencontres)
    // ==========================================
    const RFGalleryActivites = {
        data() {
            const a = (window.RFContent && window.RFContent.galleries && window.RFContent.galleries.activites) || {};
            return {
                events: a.events || [],
                isolatedPhotos: a.isolatedPhotos || [],
                documents: a.documents || []
            };
        },
        template: `
            <section class="section-padding" id="section_evenements" style="background: #fafafa;">
                <div class="container">
                    <h2 class="mb-3">Nos événements en images</h2>
                    <p class="text-muted mb-4">Retours en photos sur les assemblées générales, visites guidées et rencontres de l'association.</p>

                    <div v-if="documents.length" class="mb-5">
                        <a v-for="doc in documents" :key="doc.href"
                           :href="doc.href" target="_blank"
                           class="btn btn-outline-secondary me-2 mb-2">
                            <i class="bi bi-file-pdf me-2"></i>{{ doc.label }}
                        </a>
                    </div>

                    <div v-for="ev in events" :key="ev.id" :id="ev.id" class="mb-5">
                        <div class="d-flex align-items-baseline flex-wrap mb-2">
                            <h3 class="mb-0 me-3">{{ ev.title }}</h3>
                            <span class="text-muted">{{ ev.subtitle }}</span>
                        </div>
                        <div v-if="ev.docs && ev.docs.length" class="mb-3">
                            <a v-for="doc in ev.docs" :key="doc.href"
                               :href="doc.href" target="_blank"
                               class="btn btn-sm btn-outline-secondary me-2 mb-2">
                                <i class="bi bi-file-pdf me-2"></i>{{ doc.label }}
                            </a>
                        </div>
                        <div class="row g-2">
                            <div v-for="img in ev.photos" :key="img.src" class="col-lg-3 col-md-4 col-6">
                                <img :src="img.src" :alt="img.alt" loading="lazy"
                                     class="img-fluid rounded shadow-sm w-100"
                                     style="aspect-ratio: 4/3; object-fit: cover;">
                            </div>
                        </div>
                    </div>

                    <div v-if="isolatedPhotos.length">
                        <h3 class="mb-3">Autres lieux</h3>
                        <div class="row g-3">
                            <div v-for="img in isolatedPhotos" :key="img.src" class="col-lg-3 col-md-4 col-6">
                                <figure class="rf-gallery-card m-0">
                                    <img :src="img.src" :alt="img.name" loading="lazy" class="img-fluid">
                                    <figcaption class="rf-gallery-caption">{{ img.name }}</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 🏛️ rf-gallery-eglises — Galerie photos d'églises et vitraux
    // ==========================================
    const RFGalleryEglises = {
        data() {
            const e = (window.RFContent && window.RFContent.galleries && window.RFContent.galleries.eglises) || {};
            return {
                document: e.document || null,
                eglises: e.eglises || [],
                hondschoote: e.hondschoote || [],
                arneke: e.arneke || []
            };
        },
        template: `
            <section class="section-padding" id="section_visite">
                <div class="container">
                    <div class="d-flex align-items-center mb-3">
                        <img src="images/previous-image/logo.jpg" alt="Logo"
                             style="width: 70px; height: 70px; object-fit: cover; border-radius: 12px; margin-right: 15px;">
                        <div>
                            <h2 class="mb-0">Visite des églises à retables</h2>
                            <p class="mb-0" style="color:#717275;">Quelques églises de Flandre qui abritent ce patrimoine</p>
                        </div>
                    </div>

                    <a v-if="document" :href="document.href" target="_blank"
                       class="btn btn-outline-secondary mb-4">
                        <i class="bi bi-file-pdf me-2"></i>{{ document.label }}
                    </a>

                    <h3 class="mt-4 mb-3" id="section_eglises">Églises à retables</h3>
                    <div class="row g-3 mb-5">
                        <div v-for="img in eglises" :key="img.src" class="col-lg-3 col-md-4 col-6">
                            <figure class="rf-gallery-card m-0">
                                <img :src="img.src" :alt="img.name" loading="lazy"
                                     class="img-fluid rounded shadow-sm w-100">
                                <figcaption class="rf-gallery-caption">{{ img.name }}</figcaption>
                            </figure>
                        </div>
                    </div>

                    <h3 class="mt-5 mb-3" id="section_hondschoote">Hondschoote – Oudezeele</h3>
                    <div class="row g-3 mb-5">
                        <div v-for="img in hondschoote" :key="img.src" class="col-lg-3 col-md-4 col-6">
                            <figure class="rf-gallery-card m-0">
                                <img :src="img.src" :alt="img.name" loading="lazy"
                                     class="img-fluid rounded shadow-sm w-100">
                                <figcaption class="rf-gallery-caption">{{ img.name }}</figcaption>
                            </figure>
                        </div>
                    </div>

                    <h3 class="mt-5 mb-3" id="section_arneke">Vitraux de l'église d'Arnèke</h3>
                    <p class="text-muted mb-3">Ensemble remarquable de vitraux de l'église Saint-Martin d'Arnèke.</p>
                    <div class="row g-2">
                        <div v-for="img in arneke" :key="img.src" class="col-lg-2 col-md-3 col-4">
                            <img :src="img.src" :alt="img.name" loading="lazy"
                                 class="img-fluid rounded shadow-sm w-100"
                                 style="aspect-ratio: 1; object-fit: cover;">
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 🔍 rf-lightbox — Rend TOUTES les images cliquables
    // ==========================================
    const RFLightbox = {
        data() {
            return {
                open: false,
                items: [],   // [{src, title}] snapshot des images cliquables au moment de l'ouverture
                index: 0
            };
        },
        computed: {
            src() {
                return this.items[this.index] ? this.items[this.index].src : '';
            },
            title() {
                return this.items[this.index] ? this.items[this.index].title : '';
            },
            hasMultiple() {
                return this.items.length > 1;
            }
        },
        mounted() {
            this._onKeydown = (e) => {
                if (!this.open) return;
                if (e.key === 'Escape') this.close();
                else if (e.key === 'ArrowLeft') this.prev();
                else if (e.key === 'ArrowRight') this.next();
            };
            document.addEventListener('keydown', this._onKeydown);

            // Scanner les images après le rendu complet
            this.$nextTick(() => {
                this.scanImages();
            });
            // Re-scanner quand le DOM change (composants chargés dynamiquement)
            this._observer = new MutationObserver(() => {
                this.scanImages();
            });
            const target = document.querySelector('.rf-content');
            if (target) {
                this._observer.observe(target, {childList: true, subtree: true});
            }
        },
        beforeUnmount() {
            document.removeEventListener('keydown', this._onKeydown);
            if (this._observer) this._observer.disconnect();
        },
        methods: {
            scanImages() {
                const content = document.querySelector('.rf-content');
                if (!content) return;
                const imgs = content.querySelectorAll('img:not([data-lightbox-bound])');
                imgs.forEach((img) => {
                    // Ignorer les petites images (logos, icônes)
                    if (img.closest('.rf-brand') || img.closest('.rf-sidebar')) return;
                    if (img.naturalWidth > 0 && img.naturalWidth < 60) return;
                    if (img.width > 0 && img.width < 60) return;

                    img.setAttribute('data-lightbox-bound', '1');
                    img.style.cursor = 'pointer';

                    img.addEventListener('click', (e) => {
                        // Ne pas intercepter si l'image est dans un lien <a> vers un PDF ou autre page
                        const parentLink = img.closest('a');
                        if (parentLink) {
                            const href = parentLink.getAttribute('href') || '';
                            if (href && !href.startsWith('#') && !href.endsWith('.jpg') && !href.endsWith('.jpeg') && !href.endsWith('.png') && !href.endsWith('.JPG') && !href.endsWith('.JPEG') && !href.endsWith('.PNG')) {
                                return; // laisser le lien fonctionner normalement
                            }
                            e.preventDefault();
                        }
                        this.openFromImage(img);
                    });
                });
            },
            openFromImage(clickedImg) {
                // Récupérer toutes les images cliquables actuellement visibles
                // Limité à la galerie/section parente s'il y en a une, sinon toute la page
                const gallery = clickedImg.closest('section') || document.querySelector('.rf-content');
                const allImgs = Array.from(gallery.querySelectorAll('img[data-lightbox-bound]'));
                this.items = allImgs.map((img) => ({
                    src: img.src,
                    title: img.alt || 'Image'
                }));
                this.index = allImgs.indexOf(clickedImg);
                if (this.index < 0) this.index = 0;
                this.open = true;
                document.body.style.overflow = 'hidden';
            },
            close() {
                this.open = false;
                document.body.style.overflow = '';
            },
            prev() {
                if (!this.hasMultiple) return;
                this.index = (this.index - 1 + this.items.length) % this.items.length;
            },
            next() {
                if (!this.hasMultiple) return;
                this.index = (this.index + 1) % this.items.length;
            },
            download() {
                fetch(this.src)
                    .then(r => r.blob())
                    .then(blob => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = (this.title || 'image').replace(/[^a-z0-9àâäéèêëïîôùûüçœæ ]/gi, '_').substring(0, 80) + '.jpg';
                        document.body.appendChild(a);
                        a.click();
                        URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    })
                    .catch(() => window.open(this.src, '_blank'));
            }
        },
        template: `
            <div class="image-modal" :class="{ 'is-open': open }"
                 :aria-hidden="String(!open)" @click.self="close">
                <button class="image-modal-close" type="button" @click="close" aria-label="Fermer">✕</button>
                <button class="image-modal-download" type="button" @click="download"
                        aria-label="Télécharger" title="Télécharger l'image">
                    <i class="bi bi-download"></i>
                </button>
                <button v-if="hasMultiple" class="image-modal-prev" type="button"
                        @click.stop="prev" aria-label="Précédent">
                    <i class="bi bi-chevron-left"></i>
                </button>
                <button v-if="hasMultiple" class="image-modal-next" type="button"
                        @click.stop="next" aria-label="Suivant">
                    <i class="bi bi-chevron-right"></i>
                </button>
                <div class="image-modal-content" role="dialog" aria-modal="true">
                    <div class="image-modal-header">
                        <h3 class="image-modal-title">{{ title }}</h3>
                        <span v-if="hasMultiple" class="image-modal-counter">
                            {{ index + 1 }} / {{ items.length }}
                        </span>
                    </div>
                    <div class="image-modal-body">
                        <img :src="src" class="image-modal-img" :alt="title">
                    </div>
                </div>
            </div>
        `
    };

    // ==========================================
    // 🔔 rf-news-banner — bandeau de nouveautés (page d'accueil)
    // ==========================================
    const RFNewsBanner = {
        data() {
            const api = window.RFNewsAPI;
            return {
                visible: api ? api.shouldShowBanner() : false,
                items: api ? api.latest(3) : []
            };
        },
        methods: {
            dismiss() {
                if (window.RFNewsAPI) window.RFNewsAPI.dismissBanner();
                this.visible = false;
            },
            openItem(item) {
                if (window.RFNewsAPI) window.RFNewsAPI.markAsRead(item.id);
                const samePage = item.page && window.location.pathname.endsWith('/' + item.page);
                if (samePage && item.anchor) {
                    const target = document.getElementById(item.anchor);
                    if (target) {
                        target.scrollIntoView({behavior: 'smooth'});
                        return;
                    }
                }
                if (item.page) {
                    window.location.href = item.page + (item.anchor ? '#' + item.anchor : '');
                }
            }
        },
        template: `
            <div v-if="visible && items.length > 0" class="rf-news-banner" role="region" aria-label="Nouveautés">
                <div class="rf-news-banner-inner">
                    <div class="rf-news-banner-head">
                        <i class="bi bi-megaphone-fill"></i>
                        <span class="rf-news-banner-title">Nouveautés</span>
                        <button type="button" class="rf-news-banner-close" @click="dismiss" aria-label="Fermer">✕</button>
                    </div>
                    <ul class="rf-news-banner-list">
                        <li v-for="item in items" :key="item.id">
                            <a href="#" @click.prevent="openItem(item)">
                                <strong>{{ item.label }}</strong>
                                <span class="rf-news-banner-date">{{ item.date }}</span>
                                <span class="rf-news-banner-desc">{{ item.description }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        `
    };

    // ==========================================
    // 📦 Export global
    // ==========================================
    window.RFComponents = {
        'rf-sidebar': RFSidebar,
        'rf-hero-home': RFHeroHome,
        'rf-hero-retable': RFHeroRetable,
        'rf-texte-collectif': RFTexteCollectif,
        'rf-newsletter-cta': RFNewsletterCta,
        'rf-contact': RFContact,
        'rf-footer': RFFooter,
        'rf-article-hertel': RFArticleHertel,
        'rf-article-oger': RFArticleOger,
        'rf-gallery-carousel': RFGalleryCarousel,
        'rf-gallery-eglises': RFGalleryEglises,
        'rf-gallery-activites': RFGalleryActivites,
        'rf-lightbox': RFLightbox,
        'rf-news-banner': RFNewsBanner
    };

    console.log('✅ RFComponents chargés :', Object.keys(window.RFComponents).length, 'composants');

})();

