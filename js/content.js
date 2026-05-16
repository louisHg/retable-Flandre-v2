// ==========================================
// CONTENT — donnees editoriales (textes, photos, articles)
// ==========================================
//
// Tout ce qui est susceptible d'etre modifie regulierement par un non-developpeur
// est concentre ici (galeries, textes d'articles). Le code des composants Vue
// reste dans js/vue-components.js et lit ces donnees via window.RFContent.
//
// Pour ajouter / modifier :
//   - Une photo d'evenement : editer RFContent.galleries.activites.events
//   - Une eglise : editer RFContent.galleries.eglises.eglises
//   - Un retable du carrousel : editer RFContent.galleries.retables
//   - Le texte d'un article : editer RFContent.articles.hertel ou .oger
//
// ==========================================

(function () {
    'use strict';

    const DIAPO = 'images/previous-image/diaporamaActivites/';

    // ===== GALERIE CARROUSEL — Retables de Flandre =====
    const retables = [
        { src: DIAPO + 'crbst_Bollezeele_20retable_20de_20la_20Sainte_20Famille.jpg',
          alt: 'Retable de la Sainte Famille - Église Saint-Omer de Bollezeele',
          badge: 'Église Saint-Omer de Bollezeele',
          heading: 'Retable de la Sainte Famille' },
        { src: DIAPO + 'crbst_Bollezeele_20retable_20Re_CC_81surrection.jpg',
          alt: 'Retable de la Résurrection - Église Saint-Omer de Bollezeele',
          badge: 'Église Saint-Omer de Bollezeele',
          heading: 'Retable de la Résurrection' },
        { src: DIAPO + 'crbst_Bollezeele_20Retable_20Vierge.jpg',
          alt: 'Retable de la Vierge - Église Saint-Omer de Bollezeele',
          badge: 'Église Saint-Omer de Bollezeele',
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_Borre_20retable_20du_20ma_C3_AEtre-autel.jpg',
          alt: 'Retable du maître-autel - Église Saint-Martin de Borre',
          badge: 'Église Saint-Martin de Borre',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_Craywick_20retable_20du_20ma_C3_AEtre-autel.jpg',
          alt: 'Retable du maître-autel - Église Saint-Gilles de Craywick',
          badge: 'Église Saint-Gilles de Craywick',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_Craywick_20retable_20nord.jpg',
          alt: 'Retable de Saint Gilles - Église Saint-Gilles de Craywick',
          badge: 'Église Saint-Gilles de Craywick',
          heading: 'Retable de Saint Gilles' },
        { src: DIAPO + 'crbst_Craywick_20retable_20sud.jpg',
          alt: "Retable de l'Assomption - Église Saint-Gilles de Craywick",
          badge: 'Église Saint-Gilles de Craywick',
          heading: "Retable de l'Assomption" },
        { src: DIAPO + 'crbst_Hazebrouck_20nord.jpg',
          alt: "Retable de la Vierge Marie - Église Saint-Eloi d'Hazebrouck",
          badge: "Église Saint-Eloi d'Hazebrouck",
          heading: 'Retable de la Vierge Marie' },
        { src: DIAPO + 'crbst_Hazebrouck_20sud.jpg',
          alt: "Retable de la Trinité - Église Saint-Eloi d'Hazebrouck",
          badge: "Église Saint-Eloi d'Hazebrouck",
          heading: 'Retable de la Trinité' },
        { src: DIAPO + 'crbst_IMG_2246_20retable_20nord_20sRVB_208_20bits_20jpg_20leger_20bavinchove.jpg',
          alt: 'Retable nord - Église Saint-Omer de Bavinchove',
          badge: 'Église Saint-Omer de Bavinchove',
          heading: 'Retable nord' },
        { src: DIAPO + 'crbst_IMG_6716_20rec_20herzeele_20sud.jpg',
          alt: "Retable de Saint Antoine - Église Saint-Martin d'Herzeele",
          badge: "Église Saint-Martin d'Herzeele",
          heading: 'Retable de Saint Antoine' },
        { src: DIAPO + 'crbst_IMG_7777_20Zegers_20nord.jpg',
          alt: 'Retable du Rosaire - Église Saint-Folquin de Zegerscappel',
          badge: 'Église Saint-Folquin de Zegerscappel',
          heading: 'Retable du Rosaire' },
        { src: DIAPO + 'crbst_IMG_7805_20rubrouck_20centre.jpg',
          alt: 'Retable du maître-autel - Église Notre-Dame de Rubrouck',
          badge: 'Église Notre-Dame de Rubrouck',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_IMG_7836_20herzeele_20centre_20rec_20rot_203_C2_B0.jpg',
          alt: "Retable de l'Assomption - Église Saint-Martin d'Herzeele",
          badge: "Église Saint-Martin d'Herzeele",
          heading: "Retable de l'Assomption" },
        { src: DIAPO + 'crbst_IMG_7863_20killem_20nord_20rec.jpg',
          alt: 'Retable du Rosaire - Église Saint-Pierre de Killem',
          badge: 'Église Saint-Pierre de Killem',
          heading: 'Retable du Rosaire' },
        { src: DIAPO + 'crbst_IMG_7877_20hondschodt_20sud.jpg',
          alt: "Retable du Saint Esprit - Église Saint-Vaast d'Hondschoote",
          badge: "Église Saint-Vaast d'Hondschoote",
          heading: 'Retable du Saint Esprit' },
        { src: DIAPO + 'crbst_IMG_7884_20hondchodt_20St_20Sebastien_20transf_20rec.jpg',
          alt: "Retable de Saint-Sébastien - Église Saint-Vaast d'Hondschoote",
          badge: "Église Saint-Vaast d'Hondschoote",
          heading: 'Retable de Saint-Sébastien' },
        { src: DIAPO + 'crbst_IMG_8150_20rot_202_C2_B0_20rec_20wemaers_20centre.jpg',
          alt: 'Retable du maître-autel - Église Saint-Sylvestre de Wemaers-Cappel',
          badge: 'Église Saint-Sylvestre de Wemaers-Cappel',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_IMG_8402_20steenbecque_20centre_20transf.jpg',
          alt: 'Retable du maître-autel - Église Saint-Léger de Steenbecque',
          badge: 'Église Saint-Léger de Steenbecque',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_IMG_9694_20ret_20Herzeele_20nord.jpg',
          alt: "Retable du Sacré-Cœur - Église Saint-Martin d'Herzeele",
          badge: "Église Saint-Martin d'Herzeele",
          heading: 'Retable du Sacré-Cœur' },
        { src: DIAPO + 'crbst_import28.png', alt: 'Retable de Flandre', badge: null, heading: null },
        { src: DIAPO + 'crbst_Oudezeele_20retable_20nord.jpg',
          alt: "Retable du Couronnement de la Vierge - Église Saint-Omer d'Oudezeele",
          badge: "Église Saint-Omer d'Oudezeele",
          heading: 'Retable du Couronnement de la Vierge' },
        { src: DIAPO + 'crbst_Oudezeele_20retable_20sud.jpg',
          alt: "Retable de Sainte Anne Trinitaire - Église Saint-Omer d'Oudezeele",
          badge: "Église Saint-Omer d'Oudezeele",
          heading: 'Retable de Sainte Anne Trinitaire' },
        { src: DIAPO + 'crbst_Pitgam_20retable_20nord.jpg',
          alt: 'Retable du Rosaire - Église Saint-Folquin de Pitgam',
          badge: 'Église Saint-Folquin de Pitgam',
          heading: 'Retable du Rosaire' },
        { src: DIAPO + 'crbst_Saint-Pierre_20_C3_A0_20Lo.jpg',
          alt: 'Retable de Saint-Pierre',
          badge: null,
          heading: null },
        { src: DIAPO + 'crbst_Sainte_20Mildr_C3_A8de_20_C3_A0_20Izenberge.jpg',
          alt: "Retable de Saint-Pierre - Église Sainte-Mildrède d'Izenberge",
          badge: "Église Sainte-Mildrède d'Izenberge",
          heading: 'Retable de Saint-Pierre' },
        { src: DIAPO + 'crbst_Socx_20retable_20du_20ma_C3_AEtre-autel.jpg',
          alt: 'Retable du maître-autel - Église Saint-Maxime de Socx',
          badge: 'Église Saint-Maxime de Socx',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_Socx_20retable_20nord.jpg',
          alt: 'Retable de la Vierge - Église Saint-Maxime de Socx',
          badge: 'Église Saint-Maxime de Socx',
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_Socx_20retable_20sud.jpg',
          alt: 'Retable de Saint-Léger - Église Saint-Maxime de Socx',
          badge: 'Église Saint-Maxime de Socx',
          heading: 'Retable de Saint-Léger' },
        { src: DIAPO + 'crbst_ST_20Jacques_20Hazebrouck_20A4.jpg',
          alt: "Retable de Saint-Antoine de Padoue - Chapelle Saint-Jacques d'Hazebrouck",
          badge: "Chapelle Saint-Jacques d'Hazebrouck",
          heading: 'Retable de Saint-Antoine de Padoue' },
        { src: DIAPO + 'crbst_Wahrem_20nouvelle_20version_20Jpg.jpg',
          alt: 'Retable du Rosaire - Église Saint-Martin de Warhem',
          badge: 'Église Saint-Martin de Warhem',
          heading: 'Retable du Rosaire' },
        { src: DIAPO + 'crbst_Wormhout_20sud_20_20site_20web_20-_20Copie.jpg',
          alt: 'Retable sud - Église Saint-Martin de Wormhout',
          badge: 'Église Saint-Martin de Wormhout',
          heading: 'Retable sud' }
    ];

    // ===== GALERIE VISITE DES EGLISES =====
    const arnekePhotos = [];
    for (let i = 2; i <= 28; i++) {
        arnekePhotos.push({
            name: 'Vitrail ' + i,
            src: 'images/previous-image/boutique/arneke_eglise' + i + '.jpg'
        });
    }
    arnekePhotos.push({
        name: 'Saint Martin — Pape Pie V remerciant la Vierge du Rosaire',
        src: 'images/previous-image/boutique/arneke_eglise_saint_artin_baie_pape_pie_vremerciant_la_vierge_du_rosaire.jpg'
    });

    const eglises = {
        document: {
            label: 'Programme de visites des églises 2025',
            href: 'images/2025/visite-des-eglises-corrige2025.pdf'
        },
        eglises: [
            { name: 'Bollezeele', src: 'images/2025/Bollezeele.png' },
            { name: 'Borre', src: 'images/2025/Borre.jpeg' },
            { name: 'Cassel', src: 'images/2025/Cassel.jpeg' },
            { name: 'Herzeele', src: 'images/2025/Herzeele.jpeg' },
            { name: 'Killem', src: 'images/2025/Killem.png' },
            { name: 'Steenvoorde', src: 'images/2025/STEENVOORDE.jpeg' },
            { name: 'Wulverdinghe', src: 'images/2025/Wulverdinghe.jpeg' }
        ],
        hondschoote: [
            { name: 'Hondschoote (1)', src: 'images/2025/Hondschoote-Oudezeele/Hondschoote1.png' },
            { name: 'Hondschoote (2)', src: 'images/2025/Hondschoote-Oudezeele/Hondschoote2.png' },
            { name: 'Oudezeele (1)', src: 'images/2025/Hondschoote-Oudezeele/Oudezeele1.png' },
            { name: 'Oudezeele (2)', src: 'images/2025/Hondschoote-Oudezeele/Oudezeele2.png' }
        ],
        arneke: arnekePhotos
    };

    // ===== GALERIE EVENEMENTS =====
    const activites = {
        documents: [
            { label: 'Invitation AG 2026', href: 'images/2026/INVITATION-AG-2026.pdf' },
            { label: "Rapport Moral et d'activité 2024", href: "images/2025/Rapport Moral et d'activité  2024 pour AG.pdf" }
        ],
        events: [
            {
                id: 'ag-looberghe-2026',
                title: 'AG Looberghe',
                subtitle: '2026',
                docs: [
                    { label: 'Compte-rendu AG Looberghe', href: 'images/2026/Looberghe/CR-AG2026Loob.pdf' }
                ],
                photos: [
                    { src: 'images/2026/Looberghe/loob1.JPG', alt: 'Looberghe — vue 1' },
                    { src: 'images/2026/Looberghe/loob2.JPG', alt: 'Looberghe — vue 2' },
                    { src: 'images/2026/Looberghe/loob3.JPG', alt: 'Looberghe — vue 3' },
                    { src: 'images/2026/Looberghe/loob4.JPG', alt: 'Looberghe — vue 4' }
                ]
            },
            {
                id: 'reunion-guides-2026',
                title: 'Réunion des guides',
                subtitle: '2026',
                docs: [],
                photos: [
                    { src: 'images/2026/photos-reunion-des-guides.jpeg', alt: 'Réunion des guides' }
                ]
            },
            {
                id: 'travaux-retables-2025',
                title: 'Travaux retables de Flandre',
                subtitle: '5 novembre 2025',
                docs: [],
                photos: [
                    { src: 'images/2025/retablesdeflandre/PXL_20251105_120941092.jpeg', alt: 'Travaux retables — vue 1' },
                    { src: 'images/2025/retablesdeflandre/PXL_20251105_134914154.jpeg', alt: 'Travaux retables — vue 2' }
                ]
            },
            {
                id: 'visite-douai-2025',
                title: 'Visite de Douai',
                subtitle: '2025',
                docs: [
                    { label: 'Article visite Douai', href: 'images/2025/Douai/2025 article Douai.pdf' }
                ],
                photos: [
                    { src: 'images/2025/Douai/DSC_0178.JPG', alt: 'Douai' },
                    { src: 'images/2025/Douai/DSC_0186.JPG', alt: 'Douai' },
                    { src: 'images/2025/Douai/DSC_0203.JPG', alt: 'Douai' },
                    { src: 'images/2025/Douai/DSC_0207.JPG', alt: 'Douai' },
                    { src: 'images/2025/Douai/DSC_0257.JPG', alt: 'Douai' },
                    { src: 'images/2025/Douai/DSC_0269.JPG', alt: 'Douai' }
                ]
            },
            {
                id: 'ag-boeschepe-2025',
                title: 'AG Boeschèpe',
                subtitle: '29 mars 2025',
                docs: [
                    { label: 'Compte-rendu AG 2025', href: 'images/2025/Boeschepe/CR.AG 2025 - Boeschepe.pdf' }
                ],
                photos: [
                    { src: 'images/2025/Boeschepe/AG Boeschèpe.JPG', alt: 'AG Boeschèpe' },
                    { src: 'images/2025/Boeschepe/photo de groupe à Boeschèpe.JPG', alt: 'Photo de groupe' },
                    { src: 'images/2025/Boeschepe/visite guidée par Réginald Pasquier.JPG', alt: 'Visite guidée par Réginald Pasquier' },
                    { src: "images/2025/Boeschepe/visite de l'église.JPG", alt: "Visite de l'église" },
                    { src: 'images/2025/Boeschepe/église de Boeschèpe 1.JPG', alt: 'Église de Boeschèpe' },
                    { src: 'images/2025/Boeschepe/église de Boeschèpe 2.JPG', alt: 'Église de Boeschèpe' },
                    { src: 'images/2025/Boeschepe/église de Boeschèpe 3.JPG', alt: 'Église de Boeschèpe' },
                    { src: 'images/2025/Boeschepe/église de Boeschèpe 4.JPG', alt: 'Église de Boeschèpe' },
                    { src: 'images/2025/Boeschepe/vitrail église de Boeschèpe.JPG', alt: 'Vitrail' }
                ]
            }
        ],
        isolatedPhotos: [
            { src: 'images/2025/Volckerinckove.JPG', name: 'Volckerinckhove' },
            { src: 'images/2026/eglise-Oudezeele.JPG', name: "Église d'Oudezeele" }
        ]
    };

    // ===== ARTICLES (HTML stocke comme template) =====
    const articleHertel = `
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
    `;

    const articleOger = `
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
    `;

    // ===== EXPORT =====
    window.RFContent = {
        galleries: {
            retables: retables,
            eglises: eglises,
            activites: activites
        },
        articles: {
            hertel: articleHertel,
            oger: articleOger
        }
    };
})();
