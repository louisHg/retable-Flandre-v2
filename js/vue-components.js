// ==========================================
// 🧩 COMPOSANTS VUE 3 - RETABLES DE FLANDRE
// ==========================================

(function () {
    'use strict';

    const BASE = 'images/previous-image/diaporamaActivites/';

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
                    <a class="nav-link" :class="{ active: currentPage === 'generic' }" href="generic.html" @click="handleNavClick">Association</a>
                    <a class="nav-link" :class="{ active: currentPage === 'activites' }" href="activites.html" @click="handleNavClick">Activités</a>
                    <a class="nav-link" :class="{ active: currentPage === 'retable' }" href="qu-est-ce-qu-un-retable.html" @click="handleNavClick">Qu'est-ce qu'un retable ?</a>
                    <a class="nav-link" :class="{ active: currentPage === 'depliants' }" href="depliants-eglises.html" @click="handleNavClick">Dépliants des églises à retables</a>
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
    // 📄 rf-article-hertel
    // ==========================================
    const RFArticleHertel = {
        template: `
            <div class="rf-card rf-card-article">
                <div class="rf-card-body rf-card-body-lg">
                    <h4 class="mb-3">Les retables de Flandre française des XVIIe, XVIIIe et XIXe siècles</h4>
                    <h6 class="mb-3" style="color: #717275;">Philippe HERTEL, Anita OGER-LEURENT</h6>
                    <p style="line-height: 1.8; color: #555;">
                        « Les retables de Flandre française des XVIIe, XVIIIe et XIXe siècles » :
                        contexte spirituel et historique, Réforme et Contre-Réforme ; essai de typologie.
                    </p>
                    <p class="mb-3" style="font-size: 0.95rem; color: #717275;">
                        In 11ES JOURNÉES D'ÉTUDES DE LA SECTION FRANÇAISE DE L'INSTITUT INTERNATIONAL DE CONSERVATION (S.F.I.I.C.).
                        Colloque international (2004 ; Roubaix). Retables in situ, conservation et restauration.
                    </p>
                    <p class="fst-italic mb-4" style="font-size: 0.9rem; color: #999;">
                        "Cet article est publié avec l'accord des auteurs et de l'éditeur."
                    </p>
                    <a href="images/previous-image/extrait_du_livre_de_HERTEL_et_OGER-LEURENT.pdf"
                       target="_blank" class="btn custom-btn w-100">
                        <i class="bi bi-file-pdf me-2"></i>Télécharger le PDF
                    </a>
                </div>
            </div>
        `
    };

    // ==========================================
    // 📄 rf-article-oger
    // ==========================================
    const RFArticleOger = {
        template: `
            <div class="rf-card rf-card-article">
                <div class="rf-card-body rf-card-body-lg">
                    <h4 class="mb-3">Retables de Flandre : un patrimoine partagé</h4>
                    <h6 class="mb-3" style="color: #717275;">Anita OGER-LEURENT</h6>
                    <p style="line-height: 1.8; color: #555;">
                        « Retables de Flandre : un patrimoine partagé » explore les liens culturels et
                        artistiques qui unissent les retables flamands des deux côtés de la frontière.
                    </p>
                    <p class="mb-4" style="font-size: 0.95rem; color: #717275;">
                        In Situ, n°3, printemps 2003, Territoires d'inventaire
                    </p>
                    <a href="images/previous-image/article_dAnita_Oger-Leurent.pdf"
                       target="_blank" class="btn custom-btn w-100">
                        <i class="bi bi-file-pdf me-2"></i>Télécharger le PDF
                    </a>
                </div>
            </div>
        `
    };

    // ==========================================
    // 🖼️ rf-gallery-carousel
    // ==========================================
    const RFGalleryCarousel = {
        data() {
            return {
                modalOpen: false,
                modalSrc: '',
                modalTitle: '',
                images: [
                    {
                        src: BASE + 'crbst_Bollezeele_20retable_20de_20la_20Sainte_20Famille.jpg',
                        alt: 'Retable de la Sainte Famille - Église Saint-Omer de Bollezeele',
                        badge: 'Église Saint-Omer de Bollezeele',
                        heading: 'Retable de la Sainte Famille'
                    },
                    {
                        src: BASE + 'crbst_Bollezeele_20retable_20Re_CC_81surrection.jpg',
                        alt: 'Retable de la Résurrection - Église Saint-Omer de Bollezeele',
                        badge: 'Église Saint-Omer de Bollezeele',
                        heading: 'Retable de la Résurrection'
                    },
                    {
                        src: BASE + 'crbst_Bollezeele_20Retable_20Vierge.jpg',
                        alt: 'Retable de la Vierge - Église Saint-Omer de Bollezeele',
                        badge: 'Église Saint-Omer de Bollezeele',
                        heading: 'Retable de la Vierge'
                    },
                    {
                        src: BASE + 'crbst_Borre_20retable_20du_20ma_C3_AEtre-autel.jpg',
                        alt: 'Retable du maître-autel - Église Saint-Martin de Borre',
                        badge: 'Église Saint-Martin de Borre',
                        heading: 'Retable du maître-autel'
                    },
                    {
                        src: BASE + 'crbst_Craywick_20retable_20du_20ma_C3_AEtre-autel.jpg',
                        alt: 'Retable du maître-autel - Église Saint-Gilles de Craywick',
                        badge: 'Église Saint-Gilles de Craywick',
                        heading: 'Retable du maître-autel'
                    },
                    {
                        src: BASE + 'crbst_Craywick_20retable_20nord.jpg',
                        alt: 'Retable de Saint Gilles - Église Saint-Gilles de Craywick',
                        badge: 'Église Saint-Gilles de Craywick',
                        heading: 'Retable de Saint Gilles'
                    },
                    {
                        src: BASE + 'crbst_Craywick_20retable_20sud.jpg',
                        alt: "Retable de l'Assomption - Église Saint-Gilles de Craywick",
                        badge: 'Église Saint-Gilles de Craywick',
                        heading: "Retable de l'Assomption"
                    },
                    {
                        src: BASE + 'crbst_Hazebrouck_20nord.jpg',
                        alt: "Retable de la Vierge Marie - Église Saint-Eloi d'Hazebrouck",
                        badge: "Église Saint-Eloi d'Hazebrouck",
                        heading: 'Retable de la Vierge Marie'
                    },
                    {
                        src: BASE + 'crbst_Hazebrouck_20sud.jpg',
                        alt: "Retable de la Trinité - Église Saint-Eloi d'Hazebrouck",
                        badge: "Église Saint-Eloi d'Hazebrouck",
                        heading: 'Retable de la Trinité'
                    },
                    {
                        src: BASE + 'crbst_IMG_2246_20retable_20nord_20sRVB_208_20bits_20jpg_20leger_20bavinchove.jpg',
                        alt: 'Retable nord - Église Saint-Omer de Bavinchove',
                        badge: 'Église Saint-Omer de Bavinchove',
                        heading: 'Retable nord'
                    },
                    {
                        src: BASE + 'crbst_IMG_6716_20rec_20herzeele_20sud.jpg',
                        alt: "Retable de Saint Antoine - Église Saint-Martin d'Herzeele",
                        badge: "Église Saint-Martin d'Herzeele",
                        heading: 'Retable de Saint Antoine'
                    },
                    {
                        src: BASE + 'crbst_IMG_7777_20Zegers_20nord.jpg',
                        alt: 'Retable du Rosaire - Église Saint-Folquin de Zegerscappel',
                        badge: 'Église Saint-Folquin de Zegerscappel',
                        heading: 'Retable du Rosaire'
                    },
                    {
                        src: BASE + 'crbst_IMG_7805_20rubrouck_20centre.jpg',
                        alt: 'Retable du maître-autel - Église Notre-Dame de Rubrouck',
                        badge: 'Église Notre-Dame de Rubrouck',
                        heading: 'Retable du maître-autel'
                    },
                    {
                        src: BASE + 'crbst_IMG_7836_20herzeele_20centre_20rec_20rot_203_C2_B0.jpg',
                        alt: "Retable de l'Assomption - Église Saint-Martin d'Herzeele",
                        badge: "Église Saint-Martin d'Herzeele",
                        heading: "Retable de l'Assomption"
                    },
                    {
                        src: BASE + 'crbst_IMG_7863_20killem_20nord_20rec.jpg',
                        alt: 'Retable du Rosaire - Église Saint-Pierre de Killem',
                        badge: 'Église Saint-Pierre de Killem',
                        heading: 'Retable du Rosaire'
                    },
                    {
                        src: BASE + 'crbst_IMG_7877_20hondschodt_20sud.jpg',
                        alt: "Retable du Saint Esprit - Église Saint-Vaast d'Hondschoote",
                        badge: "Église Saint-Vaast d'Hondschoote",
                        heading: 'Retable du Saint Esprit'
                    },
                    {
                        src: BASE + 'crbst_IMG_7884_20hondchodt_20St_20Sebastien_20transf_20rec.jpg',
                        alt: "Retable de Saint-Sébastien - Église Saint-Vaast d'Hondschoote",
                        badge: "Église Saint-Vaast d'Hondschoote",
                        heading: 'Retable de Saint-Sébastien'
                    },
                    {
                        src: BASE + 'crbst_IMG_8150_20rot_202_C2_B0_20rec_20wemaers_20centre.jpg',
                        alt: 'Retable du maître-autel - Église Saint-Sylvestre de Wemaers-Cappel',
                        badge: 'Église Saint-Sylvestre de Wemaers-Cappel',
                        heading: 'Retable du maître-autel'
                    },
                    {
                        src: BASE + 'crbst_IMG_8402_20steenbecque_20centre_20transf.jpg',
                        alt: 'Retable du maître-autel - Église Saint-Léger de Steenbecque',
                        badge: 'Église Saint-Léger de Steenbecque',
                        heading: 'Retable du maître-autel'
                    },
                    {
                        src: BASE + 'crbst_IMG_9694_20ret_20Herzeele_20nord.jpg',
                        alt: "Retable du Sacré-Cœur - Église Saint-Martin d'Herzeele",
                        badge: "Église Saint-Martin d'Herzeele",
                        heading: 'Retable du Sacré-Cœur'
                    },
                    {src: BASE + 'crbst_import28.png', alt: 'Retable de Flandre', badge: null, heading: null},
                    {
                        src: BASE + "crbst_Oudezeele_20retable_20nord.jpg",
                        alt: "Retable du Couronnement de la Vierge - Église Saint-Omer d'Oudezeele",
                        badge: "Église Saint-Omer d'Oudezeele",
                        heading: 'Retable du Couronnement de la Vierge'
                    },
                    {
                        src: BASE + 'crbst_Oudezeele_20retable_20sud.jpg',
                        alt: "Retable de Sainte Anne Trinitaire - Église Saint-Omer d'Oudezeele",
                        badge: "Église Saint-Omer d'Oudezeele",
                        heading: 'Retable de Sainte Anne Trinitaire'
                    },
                    {
                        src: BASE + 'crbst_Pitgam_20retable_20nord.jpg',
                        alt: 'Retable du Rosaire - Église Saint-Folquin de Pitgam',
                        badge: 'Église Saint-Folquin de Pitgam',
                        heading: 'Retable du Rosaire'
                    },
                    {
                        src: BASE + 'crbst_Saint-Pierre_20_C3_A0_20Lo.jpg',
                        alt: 'Retable de Saint-Pierre',
                        badge: null,
                        heading: null
                    },
                    {
                        src: BASE + 'crbst_Sainte_20Mildr_C3_A8de_20_C3_A0_20Izenberge.jpg',
                        alt: "Retable de Saint-Pierre - Église Sainte-Mildrède d'Izenberge",
                        badge: "Église Sainte-Mildrède d'Izenberge",
                        heading: 'Retable de Saint-Pierre'
                    },
                    {
                        src: BASE + 'crbst_Socx_20retable_20du_20ma_C3_AEtre-autel.jpg',
                        alt: 'Retable du maître-autel - Église Saint-Maxime de Socx',
                        badge: 'Église Saint-Maxime de Socx',
                        heading: 'Retable du maître-autel'
                    },
                    {
                        src: BASE + 'crbst_Socx_20retable_20nord.jpg',
                        alt: 'Retable de la Vierge - Église Saint-Maxime de Socx',
                        badge: 'Église Saint-Maxime de Socx',
                        heading: 'Retable de la Vierge'
                    },
                    {
                        src: BASE + 'crbst_Socx_20retable_20sud.jpg',
                        alt: 'Retable de Saint-Léger - Église Saint-Maxime de Socx',
                        badge: 'Église Saint-Maxime de Socx',
                        heading: 'Retable de Saint-Léger'
                    },
                    {
                        src: BASE + 'crbst_ST_20Jacques_20Hazebrouck_20A4.jpg',
                        alt: "Retable de Saint-Antoine de Padoue - Chapelle Saint-Jacques d'Hazebrouck",
                        badge: "Chapelle Saint-Jacques d'Hazebrouck",
                        heading: 'Retable de Saint-Antoine de Padoue'
                    },
                    {
                        src: BASE + 'crbst_Wahrem_20nouvelle_20version_20Jpg.jpg',
                        alt: 'Retable du Rosaire - Église Saint-Martin de Warhem',
                        badge: 'Église Saint-Martin de Warhem',
                        heading: 'Retable du Rosaire'
                    },
                    {
                        src: BASE + 'crbst_Wormhout_20sud_20_20site_20web_20-_20Copie.jpg',
                        alt: 'Retable sud - Église Saint-Martin de Wormhout',
                        badge: 'Église Saint-Martin de Wormhout',
                        heading: 'Retable sud'
                    }
                ]
            };
        },
        mounted() {
            // Initialiser le carrousel Bootstrap
            this._carousel = new bootstrap.Carousel(this.$refs.carouselEl, {
                interval: 3000,
                ride: 'carousel'
            });

            // Fermer la modale avec la touche Échap
            this._onKeydown = (e) => {
                if (e.key === 'Escape' && this.modalOpen) {
                    this.closeModal();
                }
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
                const img = activeItem.querySelector('img');
                if (!img) return;
                const badge = activeItem.querySelector('.image-badge');
                const heading = activeItem.querySelector('.image-heading');
                let title = 'Retable';
                if (badge && heading) {
                    title = `${heading.textContent} - ${badge.textContent}`;
                } else if (heading) {
                    title = heading.textContent;
                } else if (img.alt) {
                    title = img.alt;
                }
                this.modalSrc = img.src;
                this.modalTitle = title;
                this.modalOpen = true;
                document.body.style.overflow = 'hidden';
            },
            closeModal() {
                this.modalOpen = false;
                document.body.style.overflow = '';
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
                    <div class="image-modal-content" role="dialog" aria-modal="true"
                         :aria-labelledby="modalOpen ? 'imageModalTitle' : undefined">
                        <div class="image-modal-header">
                            <h3 id="imageModalTitle" class="image-modal-title">{{ modalTitle }}</h3>
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
    // 🔍 rf-lightbox — Rend TOUTES les images cliquables
    // ==========================================
    const RFLightbox = {
        data() {
            return {
                open: false,
                src: '',
                title: ''
            };
        },
        mounted() {
            this._onKeydown = (e) => {
                if (e.key === 'Escape' && this.open) this.close();
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
                        this.openModal(img.src, img.alt || 'Image');
                    });
                });
            },
            openModal(src, title) {
                this.src = src;
                this.title = title;
                this.open = true;
                document.body.style.overflow = 'hidden';
            },
            close() {
                this.open = false;
                document.body.style.overflow = '';
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
                <div class="image-modal-content" role="dialog" aria-modal="true">
                    <div class="image-modal-header">
                        <h3 class="image-modal-title">{{ title }}</h3>
                    </div>
                    <div class="image-modal-body">
                        <img :src="src" class="image-modal-img" :alt="title">
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
        'rf-lightbox': RFLightbox
    };

    console.log('✅ RFComponents chargés :', Object.keys(window.RFComponents).length, 'composants');

})();

