// ==========================================
// COMPOSANTS VUE 3 — RETABLES DE FLANDRE
// ==========================================
//
// Organisation du fichier (composants exportés sur window.RFComponents).
// Numéros de ligne approximatifs, à mettre à jour à la main si besoin.
//
//   Layout / navigation
//     rf-sidebar              sidebar gauche (nav + brand + footer social)
//     rf-footer               pied de page du site
//
//   Hero / présentation
//     rf-hero-home            hero accueil
//     rf-hero-retable         hero "Qu'est-ce qu'un retable" + schéma
//     rf-texte-collectif      texte collectif (préambule)
//
//   Galeries / feeds
//     rf-gallery-carousel     carrousel retables d'accueil      (data: RFContent.galleries.retables)
//     rf-eglises-grid         grille des 37 fiches églises      (data: RFContent.eglisesVisite)
//     rf-gallery-arneke       carrousel vitraux du livre         (data: RFContent.galleries.eglises.vitrauxLivre)
//     rf-actu-feed            feed actualités filtrable          (data: RFContent.actualites)
//
//   Articles
//     rf-article-hertel       article Hertel  (HTML: RFContent.articles.hertel)
//     rf-article-oger         article Oger    (HTML: RFContent.articles.oger)
//
//   Transversal
//     rf-newsletter-cta       CTA newsletter
//     rf-contact              formulaire contact (EmailJS)
//     rf-lightbox             modale d'agrandissement automatique (toutes images)
//     rf-news-banner          strip "Nouveautés" en haut de chaque page (data: window.RFNewsAPI)
//
// Données  →  js/content.js
// Cloche / état lu-non-lu  →  js/news.js
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

                <nav class="rf-sidebar-nav">
                    <a class="nav-link" :class="{ active: currentPage === 'index' }" href="index.html" @click="handleNavClick">Accueil</a>
                    <a class="nav-link" :class="{ active: currentPage === 'generic' }" href="generic.html" @click="handleNavClick">Qui sommes-nous ?</a>
                    <a class="nav-link" :class="{ active: currentPage === 'retable' }" href="qu-est-ce-qu-un-retable.html" @click="handleNavClick">Qu'est-ce qu'un retable ?</a>
                    <a class="nav-link" :class="{ active: currentPage === 'visite' }" href="depliants-eglises.html" @click="handleNavClick">Que peut-on visiter ?</a>
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
            <section class="section-padding" style="background: linear-gradient(135deg, var(--primary-color) 0%, #6B85AE 100%); padding-top: 60px; padding-bottom: 60px;">
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
    // ⛪ rf-eglises-grid — Grille de fiches églises avec recherche
    // ==========================================
    const RFEglisesGrid = {
        data() {
            const list = (window.RFContent && window.RFContent.eglisesVisite) || [];
            const plans = (window.RFContent && window.RFContent.eglisesPlans) || {};
            return {
                items: list.slice().sort(function (a, b) {
                    return a.name.localeCompare(b.name, 'fr');
                }),
                plansAvailable: plans,
                search: ''
            };
        },
        computed: {
            filtered() {
                const q = this.normalize(this.search);
                if (!q) return this.items;
                const self = this;
                return this.items.filter(function (it) {
                    const hay = self.normalize(
                        [it.name, it.description, (it.tags || []).join(' ')].join(' ')
                    );
                    return hay.indexOf(q) !== -1;
                });
            },
            total() { return this.items.length; },
            count() { return this.filtered.length; }
        },
        methods: {
            normalize(s) {
                return (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
            },
            slug(name) {
                return this.normalize(name).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
            },
            hasPlan(eglise) {
                return !!this.plansAvailable[this.slug(eglise.name)];
            },
            openPlan(eglise) {
                document.dispatchEvent(new CustomEvent('rf-open-plan', {
                    detail: { slug: this.slug(eglise.name), name: eglise.name }
                }));
            },
            // Hash déterministe du nom → teinte HSL pour les placeholders
            hueForName(name) {
                let hash = 0;
                const s = (name || '').toString();
                for (let i = 0; i < s.length; i++) {
                    hash = ((hash << 5) - hash) + s.charCodeAt(i);
                    hash |= 0;
                }
                return ((hash % 360) + 360) % 360;
            },
            placeholderStyle(name) {
                const h = this.hueForName(name);
                return 'background: linear-gradient(135deg, hsl(' + h + ', 45%, 58%) 0%, hsl(' + ((h + 35) % 360) + ', 50%, 48%) 100%);';
            }
        },
        template: `
            <section class="section-padding" id="section_eglises_grid" style="padding-top:30px;padding-bottom:60px;">
                <div class="container">

                    <div class="rf-actu-search mb-3" style="max-width:520px;">
                        <i class="bi bi-search"></i>
                        <input type="search" v-model="search"
                               placeholder="Rechercher une église (Wormhout, vitraux, romane...)"
                               aria-label="Rechercher une église">
                    </div>

                    <p class="text-muted small mb-4">
                        <span v-if="count === total">{{ total }} églises à découvrir</span>
                        <span v-else>{{ count }} résultat<span v-if="count > 1">s</span> sur {{ total }}</span>
                    </p>

                    <div v-if="count === 0" class="rf-actu-empty">
                        <i class="bi bi-inbox"></i>
                        <p class="mt-3 mb-0">Aucune église ne correspond à votre recherche.</p>
                    </div>

                    <div class="row g-3">
                        <div v-for="eglise in filtered" :key="eglise.name"
                             class="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div class="rf-eglise-card">
                                <div class="rf-eglise-card-media">
                                    <img v-if="eglise.image" :src="eglise.image" :alt="eglise.name" loading="lazy">
                                    <div v-else class="rf-eglise-card-placeholder"
                                         :style="placeholderStyle(eglise.name)">
                                        <i class="bi bi-bank"></i>
                                    </div>
                                </div>
                                <div class="rf-eglise-card-body">
                                    <h4>{{ eglise.name }}</h4>
                                    <p v-if="eglise.description">{{ eglise.description }}</p>
                                    <p v-else class="fst-italic" style="opacity:.6;">Église à retables (XVIIᵉ–XVIIIᵉ).</p>
                                    <div class="rf-eglise-card-actions">
                                        <button v-if="hasPlan(eglise)" type="button"
                                                class="rf-eglise-btn rf-eglise-btn-primary"
                                                @click="openPlan(eglise)">
                                            <i class="bi bi-geo-alt"></i>Plan interactif
                                        </button>
                                        <a v-if="eglise.pdf" :href="eglise.pdf" target="_blank"
                                           class="rf-eglise-btn rf-eglise-btn-outline">
                                            <i class="bi bi-file-pdf"></i>Dépliant
                                        </a>
                                        <span v-else class="rf-eglise-btn rf-eglise-btn-outline"
                                              style="opacity:.55;cursor:default;">
                                            <i class="bi bi-hourglass-split"></i>Dépliant à venir
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        `
    };

    // ==========================================
    // 🗺️ rf-eglise-plan-modal — Plan interactif de l'église (modale)
    // ==========================================
    const RFEglisePlanModal = {
        data() {
            return {
                open: false,
                slug: null,
                churchName: '',
                activeIdx: null,
                mapBox: null
            };
        },
        computed: {
            plan() {
                const plans = window.RFContent && window.RFContent.eglisesPlans;
                return plans && this.slug ? plans[this.slug] : null;
            },
            points() { return this.plan ? this.plan.points : []; },
            activePoint() {
                return this.activeIdx !== null ? this.points[this.activeIdx] : null;
            },
            // Une pastille par position : le point principal (x, y) + ses éventuels
            // `spots` supplémentaires (même numéro affiché à plusieurs endroits)
            markers() {
                const out = [];
                this.points.forEach((p, idx) => {
                    out.push({ key: p.n + '-0', n: p.n, x: p.x, y: p.y, title: p.title, idx: idx });
                    (p.spots || []).forEach((s, j) => {
                        out.push({ key: p.n + '-' + (j + 1), n: p.n, x: s.x, y: s.y, title: p.title, idx: idx });
                    });
                });
                return out;
            },
            // Calque des pastilles calé sur la zone réellement occupée par l'image
            // (l'image est "contain" dans son conteneur : les % des points sont
            // relatifs à l'image, pas au conteneur)
            mapAreaStyle() {
                if (!this.mapBox) return { display: 'none' };
                return {
                    left: this.mapBox.left + 'px',
                    top: this.mapBox.top + 'px',
                    width: this.mapBox.width + 'px',
                    height: this.mapBox.height + 'px'
                };
            }
        },
        mounted() {
            this._onOpen = (e) => {
                if (!e || !e.detail) return;
                const slug = e.detail.slug;
                const plans = window.RFContent && window.RFContent.eglisesPlans;
                if (!plans || !plans[slug]) return;
                this.slug = slug;
                this.churchName = e.detail.name || slug;
                this.activeIdx = null;
                this.mapBox = null;
                this.open = true;
                document.body.style.overflow = 'hidden';
                this.$nextTick(() => this.measureMap());
            };
            this._onKey = (e) => {
                if (!this.open) return;
                if (e.key === 'Escape') this.close();
            };
            this._onResize = () => { if (this.open) this.measureMap(); };
            document.addEventListener('rf-open-plan', this._onOpen);
            document.addEventListener('keydown', this._onKey);
            window.addEventListener('resize', this._onResize);
        },
        beforeUnmount() {
            if (this._onOpen) document.removeEventListener('rf-open-plan', this._onOpen);
            if (this._onKey) document.removeEventListener('keydown', this._onKey);
            if (this._onResize) window.removeEventListener('resize', this._onResize);
        },
        methods: {
            close() {
                this.open = false;
                document.body.style.overflow = '';
            },
            selectPoint(idx) {
                this.activeIdx = this.activeIdx === idx ? null : idx;
            },
            measureMap() {
                const wrap = this.$refs.mapwrap;
                const img = this.$refs.mapimg;
                if (!wrap || !img || !img.complete || !img.naturalWidth) return;
                const w = wrap.getBoundingClientRect();
                const i = img.getBoundingClientRect();
                this.mapBox = {
                    left: i.left - w.left,
                    top: i.top - w.top,
                    width: i.width,
                    height: i.height
                };
            }
        },
        template: `
            <div v-if="open && plan" class="rf-plan-modal" role="dialog" aria-modal="true"
                 @click.self="close">
                <button type="button" class="rf-plan-modal-close" @click="close" aria-label="Fermer">✕</button>

                <div class="rf-plan-modal-content">
                    <header class="rf-plan-modal-header">
                        <h3>{{ churchName }} — Plan interactif</h3>
                        <p class="text-muted mb-0">
                            Cliquez sur un numéro du plan ou de la liste pour découvrir l'élément correspondant.
                        </p>
                    </header>

                    <div class="rf-plan-modal-body">
                        <div class="rf-plan-modal-mapwrap" ref="mapwrap">
                            <img :src="plan.plan" :alt="'Plan de ' + churchName" class="rf-plan-modal-map"
                                 ref="mapimg" @load="measureMap">
                            <div class="rf-plan-modal-maparea" :style="mapAreaStyle">
                                <button v-for="m in markers" :key="m.key"
                                        type="button"
                                        class="rf-plan-modal-marker"
                                        :class="{ active: m.idx === activeIdx }"
                                        :style="'left:' + m.x + '%; top:' + m.y + '%;'"
                                        :title="m.title"
                                        :aria-label="m.n + '. ' + m.title"
                                        @click="selectPoint(m.idx)">
                                    {{ m.n }}
                                </button>
                            </div>
                        </div>

                        <aside class="rf-plan-modal-side" :class="{ 'is-active': activePoint }">
                            <button type="button" class="rf-plan-popup-close"
                                    @click="selectPoint(activeIdx)" aria-label="Fermer la description">✕</button>

                            <div v-if="activePoint" class="rf-plan-modal-detail">
                                <div class="rf-plan-modal-detail-num">{{ activePoint.n }}</div>
                                <h4>{{ activePoint.title }}</h4>
                                <p v-html="activePoint.body"></p>
                            </div>
                            <div v-else class="rf-plan-modal-detail rf-plan-modal-detail-empty">
                                <i class="bi bi-info-circle"></i>
                                <p>Sélectionnez un numéro pour afficher sa description.</p>
                            </div>

                            <h5 class="rf-plan-modal-list-title">Tous les éléments</h5>
                            <ol class="rf-plan-modal-list">
                                <li v-for="(p, idx) in points" :key="p.n"
                                    :class="{ active: idx === activeIdx }"
                                    @click="selectPoint(idx)">
                                    <span class="rf-plan-modal-list-num">{{ p.n }}</span>
                                    {{ p.title }}
                                </li>
                            </ol>
                        </aside>
                    </div>
                </div>
            </div>
        `
    };

    // ==========================================
    // 🪟 rf-gallery-arneke — Carrousel des vitraux des églises (photos du livre)
    // ==========================================
    const RFGalleryArneke = {
        data() {
            const e = (window.RFContent && window.RFContent.galleries && window.RFContent.galleries.eglises) || {};
            return {
                arneke: e.vitrauxLivre || []
            };
        },
        mounted() {
            this.$nextTick(() => {
                if (typeof bootstrap === 'undefined') return;
                const el = this.$refs.carouselEl;
                if (el && !bootstrap.Carousel.getInstance(el)) {
                    new bootstrap.Carousel(el, { interval: 4000, ride: 'carousel' });
                }
            });
        },
        template: `
            <section class="section-padding" id="section_arneke" style="background:#fafafa;padding-top:40px;padding-bottom:60px;">
                <div class="container">
                    <div class="rf-section-heading">
                        <div class="rf-section-heading-icon"><i class="bi bi-image"></i></div>
                        <h3>Vitraux des églises de Flandre</h3>
                    </div>
                    <p class="text-muted mb-4" style="max-width:780px;">
                        Sélection de vitraux photographiés pour le livre
                        « Lumière, couleur et dévotion — Vitraux en Flandre »,
                        avec le nom de l'église d'origine.
                        Faites défiler avec les flèches, cliquez pour agrandir.
                    </p>

                    <div v-if="arneke.length"
                         id="carouselArneke" ref="carouselEl"
                         class="carousel slide rounded-4 shadow-sm mx-auto"
                         data-bs-ride="carousel"
                         style="max-width:500px;background:#fff;">
                        <div class="carousel-inner rounded-4">
                            <div v-for="(img, idx) in arneke" :key="img.src"
                                 :class="['carousel-item', { active: idx === 0 }]">
                                <img :src="img.src" :alt="img.name" class="d-block w-100 rounded-4"
                                     style="height:480px;object-fit:contain;background:#fff;">
                                <div class="carousel-caption d-block"
                                     style="background:rgba(0,0,0,.55);border-radius:.5rem;padding:.4rem .9rem;bottom:1rem;left:auto;right:auto;display:inline-block;width:auto;">
                                    <span style="font-size:.85rem;">{{ img.name }}</span>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselArneke" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon"></span>
                            <span class="visually-hidden">Précédent</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselArneke" data-bs-slide="next">
                            <span class="carousel-control-next-icon"></span>
                            <span class="visually-hidden">Suivant</span>
                        </button>
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
                // Scope la navigation à la plus petite galerie pertinente :
                // 1) un conteneur explicite (data-lightbox-group ou .rf-actu-media)
                // 2) l'article courant (.rf-actu-card) si on est dans le feed actu
                // 3) sinon la <section> parente, puis .rf-content en dernier recours
                const gallery =
                    clickedImg.closest('[data-lightbox-group]') ||
                    clickedImg.closest('.rf-actu-media') ||
                    clickedImg.closest('.rf-actu-card') ||
                    clickedImg.closest('article') ||
                    clickedImg.closest('section') ||
                    document.querySelector('.rf-content');
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
    // 📰 rf-actu-feed — feed unifié des actualités (filtres + recherche + pagination)
    // ==========================================
    const RFActuFeed = {
        props: {
            perPage: { type: Number, default: 6 }
        },
        data() {
            const all = (window.RFContent && window.RFContent.actualites) || [];
            return {
                allItems: all.slice().sort(function (a, b) {
                    return (b.date || '').localeCompare(a.date || '');
                }),
                search: '',
                activeCategory: 'all',
                currentPage: 1
            };
        },
        computed: {
            categories() {
                const set = new Set();
                this.allItems.forEach(function (it) { if (it.category) set.add(it.category); });
                return ['all'].concat(Array.from(set).sort());
            },
            filtered() {
                const q = this.normalize(this.search);
                const cat = this.activeCategory;
                const self = this;
                return this.allItems.filter(function (it) {
                    if (cat !== 'all' && it.category !== cat) return false;
                    if (!q) return true;
                    const hay = self.normalize(
                        [it.title, it.summary, it.category, (it.tags || []).join(' ')].join(' ')
                    );
                    return hay.indexOf(q) !== -1;
                });
            },
            paginated() {
                const start = (this.currentPage - 1) * this.perPage;
                return this.filtered.slice(start, start + this.perPage);
            },
            totalPages() {
                return Math.max(1, Math.ceil(this.filtered.length / this.perPage));
            },
            pageNumbers() {
                const pages = [];
                for (let i = 1; i <= this.totalPages; i++) pages.push(i);
                return pages;
            }
        },
        watch: {
            search() { this.currentPage = 1; },
            activeCategory() { this.currentPage = 1; }
        },
        mounted() {
            this.initCarousels();
            // Si une ancre est dans l'URL, essayer de scroller vers l'item correspondant
            if (window.location.hash) {
                const id = window.location.hash.slice(1);
                const item = this.allItems.find(function (it) { return it.id === id; });
                if (item) {
                    // Détecter sur quelle page se trouve l'item
                    const idx = this.filtered.findIndex(function (it) { return it.id === id; });
                    if (idx >= 0) {
                        this.currentPage = Math.floor(idx / this.perPage) + 1;
                    }
                }
            }
        },
        updated() {
            this.initCarousels();
        },
        methods: {
            normalize(s) {
                return (s || '').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
            },
            setCategory(cat) {
                this.activeCategory = cat;
            },
            goToPage(p) {
                this.currentPage = Math.max(1, Math.min(this.totalPages, p));
                this.$nextTick(() => {
                    const el = document.getElementById('section_actu_feed');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
            },
            formatDate(date) {
                if (!date) return '';
                const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                                'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
                const m = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
                if (m) {
                    const y = m[1];
                    const mo = parseInt(m[2], 10) - 1;
                    const d = parseInt(m[3], 10);
                    return d + ' ' + months[mo] + ' ' + y;
                }
                return date;
            },
            carouselId(item) {
                return 'carouselActu_' + (item.id || '').replace(/[^a-z0-9]/gi, '_');
            },
            initCarousels() {
                this.$nextTick(() => {
                    if (typeof bootstrap === 'undefined') return;
                    document.querySelectorAll('#section_actu_feed .carousel').forEach((el) => {
                        if (!bootstrap.Carousel.getInstance(el)) {
                            new bootstrap.Carousel(el, { interval: 4000, ride: 'carousel' });
                        }
                    });
                });
            }
        },
        template: `
            <section class="section-padding" id="section_actu_feed" style="padding-top:30px;padding-bottom:60px;">
                <div class="container">

                    <!-- Contrôles : recherche + filtres -->
                    <div class="rf-actu-controls mb-3">
                        <div class="rf-actu-search">
                            <i class="bi bi-search"></i>
                            <input type="search" v-model="search"
                                   placeholder="Rechercher (AG, visite, Boeschèpe, formation...)"
                                   aria-label="Rechercher dans les actualités">
                        </div>
                        <div class="rf-actu-filters">
                            <button v-for="cat in categories" :key="cat"
                                    type="button"
                                    :class="['rf-actu-filter', { active: activeCategory === cat }]"
                                    @click="setCategory(cat)">
                                {{ cat === 'all' ? 'Toutes' : cat }}
                            </button>
                        </div>
                    </div>

                    <!-- Compteur résultats -->
                    <p class="text-muted small mb-4" v-if="filtered.length > 0">
                        {{ filtered.length }} actualité<span v-if="filtered.length > 1">s</span>
                        <span v-if="totalPages > 1"> — page {{ currentPage }} / {{ totalPages }}</span>
                    </p>

                    <!-- Empty state -->
                    <div v-if="filtered.length === 0" class="rf-actu-empty">
                        <i class="bi bi-inbox"></i>
                        <p class="mt-3 mb-0">Aucune actualité ne correspond à votre recherche.</p>
                    </div>

                    <!-- Liste des actualités -->
                    <article v-for="item in paginated" :key="item.id" :id="item.id" class="rf-actu-card">
                        <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                            <span class="rf-actu-date">
                                <i class="bi bi-calendar-event me-1"></i>{{ formatDate(item.date) }}
                            </span>
                            <span class="rf-actu-category">{{ item.category }}</span>
                        </div>
                        <h3>{{ item.title }}</h3>
                        <p class="rf-actu-summary">{{ item.summary }}</p>
                        <div v-if="item.body" v-html="item.body"></div>

                        <!-- Documents PDF -->
                        <div v-if="item.docs && item.docs.length" class="rf-actu-buttons">
                            <a v-for="doc in item.docs" :key="doc.href"
                               :href="doc.href" target="_blank"
                               class="btn custom-btn btn-sm">
                                <i class="bi bi-file-pdf me-2"></i>{{ doc.label }}
                            </a>
                        </div>

                        <!-- Photos (grille) -->
                        <div v-if="item.photos && item.photos.length" class="rf-actu-media">
                            <div class="row g-3" style="max-width:600px;">
                                <div v-for="(photo, idx) in item.photos" :key="idx"
                                     :class="item.photos.length <= 2 ? 'col-6' : 'col-6 col-md-3'">
                                    <img :src="photo.src" :alt="photo.alt" loading="lazy"
                                         class="img-fluid rounded-4 shadow-sm"
                                         style="width:100%;height:180px;object-fit:cover;">
                                    <p v-if="photo.caption" class="text-center mt-1 mb-0"
                                       style="font-size:.8rem;color:#717275;">{{ photo.caption }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Carrousel -->
                        <div v-if="item.carousel && item.carousel.length" class="rf-actu-media">
                            <div :id="carouselId(item)" class="carousel slide rounded-4 shadow-sm"
                                 data-bs-ride="carousel" style="max-width:500px;">
                                <div class="carousel-inner rounded-4">
                                    <div v-for="(img, idx) in item.carousel" :key="idx"
                                         :class="['carousel-item', { active: idx === 0 }]">
                                        <img :src="img.src" :alt="img.alt" class="d-block w-100 rounded-4"
                                             style="height:320px;object-fit:cover;">
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                        :data-bs-target="'#' + carouselId(item)" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                        :data-bs-target="'#' + carouselId(item)" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </article>

                    <!-- Pagination -->
                    <nav v-if="totalPages > 1" class="rf-pagination" aria-label="Pagination">
                        <button class="rf-page-btn" :disabled="currentPage === 1"
                                @click="goToPage(currentPage - 1)" aria-label="Précédent">
                            <i class="bi bi-chevron-left"></i>
                        </button>
                        <button v-for="p in pageNumbers" :key="p"
                                :class="['rf-page-btn', { active: p === currentPage }]"
                                @click="goToPage(p)">
                            {{ p }}
                        </button>
                        <button class="rf-page-btn" :disabled="currentPage === totalPages"
                                @click="goToPage(currentPage + 1)" aria-label="Suivant">
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </nav>

                </div>
            </section>
        `
    };

    // ==========================================
    // 🆕 rf-latest-news — bloc "Dernières actualités" (page d'accueil)
    // ==========================================
    //
    // Affiche les N actualités les plus récentes (RFContent.actualites) sous
    // forme de cartes cliquables vers actualites.html#<id>. Aucune curation :
    // se met à jour automatiquement quand on ajoute une actu dans content.js.
    //
    const RFLatestNews = {
        props: {
            limit: { type: Number, default: 3 }
        },
        data() {
            const all = (window.RFContent && window.RFContent.actualites) || [];
            return {
                items: all.slice()
                    .sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); })
                    .slice(0, this.limit)
            };
        },
        methods: {
            formatDate(date) {
                if (!date) return '';
                const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
                                'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
                const m = date.match(/^(\d{4})-(\d{2})-(\d{2})$/);
                if (m) return parseInt(m[3], 10) + ' ' + months[parseInt(m[2], 10) - 1] + ' ' + m[1];
                return date;
            },
            thumb(item) {
                if (item.photos && item.photos.length) return item.photos[0].src;
                if (item.carousel && item.carousel.length) return item.carousel[0].src;
                return null;
            }
        },
        template: `
            <section class="section-padding" id="section_latest_news" style="padding-top:40px;padding-bottom:20px;">
                <div class="container">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                        <h2 class="mb-0">Dernières actualités</h2>
                        <a href="actualites.html" class="btn custom-btn btn-sm">
                            Toutes les actualités<i class="bi bi-arrow-right ms-2"></i>
                        </a>
                    </div>
                    <div class="row g-4">
                        <div v-for="item in items" :key="item.id" class="col-12 col-md-4">
                            <a :href="'actualites.html#' + item.id" class="rf-latest-card">
                                <img v-if="thumb(item)" :src="thumb(item)" :alt="item.title"
                                     loading="lazy" class="rf-latest-card-img">
                                <div v-else class="rf-latest-card-img rf-latest-card-placeholder">
                                    <i class="bi bi-card-image"></i>
                                </div>
                                <div class="rf-latest-card-body">
                                    <div class="d-flex align-items-center flex-wrap gap-2 mb-2">
                                        <span class="rf-actu-date">
                                            <i class="bi bi-calendar-event me-1"></i>{{ formatDate(item.date) }}
                                        </span>
                                        <span class="rf-actu-category">{{ item.category }}</span>
                                    </div>
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.summary }}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        `
    };

    // ==========================================
    // 🔔 rf-news-banner — bandeau permanent "Nouveautés"
    // ==========================================
    //
    // Source de vérité : RFContent.bannerItems (curé manuellement dans content.js).
    // Permanent : pas de bouton fermer, pas d'état lu/non-lu, pas de persistance.
    // S'il y a plusieurs entrées, défilement automatique toutes les 5 s.
    //
    const RFNewsBanner = {
        data() {
            const content = window.RFContent || {};
            return {
                items: Array.isArray(content.bannerItems) ? content.bannerItems.slice() : [],
                currentIndex: 0,
                _interval: null
            };
        },
        computed: {
            currentItem() { return this.items[this.currentIndex] || null; },
            multiple() { return this.items.length > 1; }
        },
        mounted() {
            this.startRotation();
        },
        beforeUnmount() {
            this.stopRotation();
        },
        methods: {
            startRotation() {
                if (this.multiple && !this._interval) {
                    this._interval = setInterval(() => {
                        this.currentIndex = (this.currentIndex + 1) % this.items.length;
                    }, 5000);
                }
            },
            stopRotation() {
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
            },
            goTo(idx) {
                this.currentIndex = idx;
                this.stopRotation();
                this.startRotation();
            },
            openCurrent() {
                const item = this.currentItem;
                if (!item) return;
                // href direct (URL externe ou interne complète) — prioritaire
                if (item.href) {
                    window.location.href = item.href;
                    return;
                }
                // Lien vers une actualité (id de la fiche)
                if (item.actuId) {
                    const page = item.page || 'actualites.html';
                    const samePage = window.location.pathname.endsWith('/' + page);
                    if (samePage) {
                        const target = document.getElementById(item.actuId);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                            return;
                        }
                    }
                    window.location.href = page + '#' + item.actuId;
                }
            }
        },
        template: `
            <div v-if="currentItem" class="rf-news-banner" role="region" aria-label="Nouveautés"
                 @mouseenter="stopRotation" @mouseleave="startRotation">
                <div class="rf-news-banner-inner">
                    <i class="bi bi-megaphone-fill rf-news-banner-icon"></i>
                    <div class="rf-news-banner-content">
                        <span class="rf-news-banner-label">Nouveau</span>
                        <transition name="rf-news-fade" mode="out-in">
                            <a href="#" class="rf-news-banner-link" :key="currentIndex" @click.prevent="openCurrent">
                                {{ currentItem.label }}
                            </a>
                        </transition>
                        <span v-if="multiple" class="rf-news-banner-dots" :aria-label="(currentIndex + 1) + ' sur ' + items.length">
                            <button v-for="(_, idx) in items" :key="idx" type="button"
                                    :class="['rf-news-banner-dot', { active: idx === currentIndex }]"
                                    :aria-label="'Voir nouveauté ' + (idx + 1)"
                                    @click="goTo(idx)"></button>
                        </span>
                    </div>
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
        'rf-eglises-grid': RFEglisesGrid,
        'rf-eglise-plan-modal': RFEglisePlanModal,
        'rf-gallery-arneke': RFGalleryArneke,
        'rf-lightbox': RFLightbox,
        'rf-news-banner': RFNewsBanner,
        'rf-actu-feed': RFActuFeed,
        'rf-latest-news': RFLatestNews
    };

    console.log('✅ RFComponents chargés :', Object.keys(window.RFComponents).length, 'composants');

})();

