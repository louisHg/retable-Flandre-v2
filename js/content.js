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

    // ===== ACTUALITES (feed unifié — alimente aussi la cloche) =====
    //
    // Categories : AG, Visite, Formation, Sortie, Hommage, Cérémonie, Programme, Rapport
    // featured: true → mise en avant dans la cloche / bandeau accueil
    //
    const actualites = [
        {
            id: 'calendrier-ete-2026',
            date: '2026-04-15',
            category: 'Programme',
            title: 'Calendrier des visites — été 2026',
            summary: "Le programme des visites d'églises à retables pour l'été 2026 est disponible au téléchargement.",
            tags: ['calendrier', 'visites', 'été', '2026', 'programme'],
            docs: [
                { label: 'Télécharger le calendrier 2026', href: 'images/2026/2026_visite_eglise.pdf' }
            ],
            featured: true
        },
        {
            id: 'ag-looberghe-2026',
            date: '2026-03-07',
            category: 'AG',
            title: 'Assemblée Générale à Looberghe',
            summary: "L'Assemblée Générale s'est tenue le 7 mars 2026 à Looberghe, suivie de l'élection d'un nouveau Conseil d'Administration le 17 mars.",
            body: "<p>Après une visite de l'église et la tenue de l'assemblée générale ordinaire, un nouveau <strong>Conseil d'Administration</strong> a été élu le 17 mars 2026.</p>",
            tags: ['AG', 'assemblée générale', 'Looberghe', '2026', 'CA'],
            docs: [
                { label: 'Compte-rendu AG 2026', href: 'images/2026/Looberghe/CR-AG2026Loob.pdf' },
                { label: 'Rapport moral 2025', href: 'images/2026/AG-2025.pdf' },
                { label: 'Nouveau CA', href: 'images/2026/Conseil-17-mars.pdf' }
            ],
            carousel: [
                { src: 'images/2026/Looberghe/loob1.JPG', alt: 'AG Looberghe 2026 - 1/4' },
                { src: 'images/2026/Looberghe/loob2.JPG', alt: 'AG Looberghe 2026 - 2/4' },
                { src: 'images/2026/Looberghe/loob3.JPG', alt: 'AG Looberghe 2026 - 3/4' },
                { src: 'images/2026/Looberghe/loob4.JPG', alt: 'AG Looberghe 2026 - 4/4' }
            ],
            featured: true
        },
        {
            id: 'messe-oudezeele-2026',
            date: '2026-02-02',
            category: 'Cérémonie',
            title: 'Messe & dégustation à Oudezeele',
            summary: "Messe célébrée par le Père Thomas Vercoutre, accompagnée de chants grégoriens de la chorale Cum Jubilo, suivie d'une dégustation de crêpes de la Chandeleur.",
            body: "<p>À 18h, une messe a été célébrée par le Père Thomas Vercoutre en l'église Saint-Jean-Baptiste d'Oudezeele. La célébration a été accompagnée de chants grégoriens interprétés par la chorale <strong>Cum Jubilo</strong> de Watou, suivie d'une dégustation de crêpes de la Chandeleur.</p>",
            tags: ['messe', 'Oudezeele', 'Chandeleur', 'Cum Jubilo', 'chants grégoriens'],
            photos: [
                { src: 'images/2026/Jubilo-Watou.jpg', alt: 'Chorale Cum Jubilo de Watou', caption: 'Chorale Cum Jubilo — Watou' },
                { src: 'images/2026/eglise-Oudezeele.JPG', alt: "Église Saint-Jean-Baptiste d'Oudezeele", caption: "Église d'Oudezeele" }
            ]
        },
        {
            id: 'formation-guides-2025-2026',
            date: '2025-10-01',
            category: 'Formation',
            title: 'Formation des guides 2025–2026',
            summary: "9 futurs guides et 12 guides expérimentés ont approfondi leurs connaissances sur le territoire de Dunkerque et Hazebrouck (octobre 2025 – février 2026).",
            tags: ['formation', 'guides', 'Dunkerque', 'Hazebrouck'],
            docs: [
                { label: 'Voir le programme', href: 'images/2025/retablesdeflandre/2025 2026 programme Formation Retables de FlandreScan.jpg' }
            ],
            photos: [
                { src: 'images/2025/retablesdeflandre/complmentdinfosretablesdeflandre/Guides-Bambecque-2025-01-08.jpg', alt: 'Formation guides Bambecque' },
                { src: 'images/2025/retablesdeflandre/complmentdinfosretablesdeflandre/PXL_20260108_150236010.jpg', alt: 'Formation guides 2026' },
                { src: 'images/2025/retablesdeflandre/PXL_20251105_090519186.jpeg', alt: 'Formation des guides 3' },
                { src: 'images/2025/retablesdeflandre/PXL_20251105_105130837.jpeg', alt: 'Formation des guides 4' }
            ]
        },
        {
            id: 'temoignage-paulette-vanpoulle',
            date: '2025-09-15',
            category: 'Hommage',
            title: 'Témoignage — Obsèques de Paulette VANPOULLE',
            summary: "L'Association des Retables de Flandre rend hommage à Paulette VANPOULLE, par la voix de sa présidente Régine Beaucamp, au nom de l'asso et du Comité Flamand de France.",
            tags: ['hommage', 'témoignage', 'Vanpoulle', 'Beaucamp'],
            docs: [
                { label: 'Lire le témoignage complet', href: "images/2025/retablesdeflandre/Temoignage_de_R.Beaucamp_pour_les obseques_de_Paulette_Vanpoulle.pdf" }
            ]
        },
        {
            id: 'visite-steenvoorde-volckerinckhove-2025',
            date: '2025-09-07',
            category: 'Visite',
            title: 'Visite — Steenvoorde et Volckerinckhove',
            summary: "L'église Saint-Pierre de Steenvoorde (flèche de 92 m) et l'église romane de Volckerinckhove avec ses poutres sculptées.",
            tags: ['visite', 'Steenvoorde', 'Volckerinckhove', 'estivale', '2025'],
            photos: [
                { src: 'images/2025/STEENVOORDE.jpeg', alt: 'Steenvoorde' },
                { src: 'images/2025/Volckerinckove.JPG', alt: 'Volckerinckhove' }
            ]
        },
        {
            id: 'visite-borre-cassel-2025',
            date: '2025-08-31',
            category: 'Visite',
            title: 'Visite — Borre et Cassel',
            summary: "Saint-Jean-Baptiste de Borre (tour de guet) et collégiale Notre-Dame de la Crypte de Cassel, classée monument historique.",
            tags: ['visite', 'Borre', 'Cassel', 'estivale', '2025'],
            photos: [
                { src: 'images/2025/Borre.jpeg', alt: 'Borre' },
                { src: 'images/2025/Cassel.jpeg', alt: 'Cassel' }
            ]
        },
        {
            id: 'visite-bollezeele-killem-2025',
            date: '2025-08-24',
            category: 'Visite',
            title: 'Visite — Bollezeele et Killem',
            summary: "Saint-Wandrille de Bollezeele (mobilier classé) et Saint-Michel de Killem avec ses retables baroques.",
            tags: ['visite', 'Bollezeele', 'Killem', 'estivale', '2025'],
            photos: [
                { src: 'images/2025/Bollezeele.png', alt: 'Bollezeele' },
                { src: 'images/2025/Killem.png', alt: 'Killem' }
            ]
        },
        {
            id: 'visite-herzeele-wulverdinghe-2025',
            date: '2025-08-17',
            category: 'Visite',
            title: 'Visite — Herzeele et Wulverdinghe',
            summary: "Notre-Dame de l'Assomption d'Herzeele (église-halle en briques XVIᵉ) et Saint-Martin de Wulverdinghe (façade romane).",
            tags: ['visite', 'Herzeele', 'Wulverdinghe', 'estivale', '2025'],
            photos: [
                { src: 'images/2025/Herzeele.jpeg', alt: 'Herzeele' },
                { src: 'images/2025/Wulverdinghe.jpeg', alt: 'Wulverdinghe' }
            ]
        },
        {
            id: 'sortie-douai-2025',
            date: '2025-05-15',
            category: 'Sortie',
            title: 'Sortie culturelle à Douai',
            summary: "40 participants ont découvert la collégiale Saint-Pierre, les vitraux de Paul Bony, et l'exposition Nicolas-Guy Brenet au musée de la Chartreuse.",
            body: "<p>Accueillis à la collégiale Saint-Pierre par Françoise Baligand, les participants ont admiré son architecture classique du XVIIIᵉ siècle, ses œuvres religieuses majeures et les vitraux de Paul Bony. La visite s'est poursuivie au musée de la Chartreuse avec une exposition consacrée au peintre Nicolas-Guy Brenet.</p>",
            tags: ['sortie', 'Douai', 'culture', 'Brenet', 'Bony'],
            docs: [
                { label: 'Lire le compte-rendu', href: 'images/2025/Douai/2025 article Douai.pdf' }
            ],
            carousel: [
                { src: 'images/2025/Douai/DSC_0178.JPG', alt: 'Douai 1/6' },
                { src: 'images/2025/Douai/DSC_0186.JPG', alt: 'Douai 2/6' },
                { src: 'images/2025/Douai/DSC_0203.JPG', alt: 'Douai 3/6' },
                { src: 'images/2025/Douai/DSC_0207.JPG', alt: 'Douai 4/6' },
                { src: 'images/2025/Douai/DSC_0257.JPG', alt: 'Douai 5/6' },
                { src: 'images/2025/Douai/DSC_0269.JPG', alt: 'Douai 6/6' }
            ]
        },
        {
            id: 'ag-boeschepe-2025',
            date: '2025-03-29',
            category: 'AG',
            title: 'Assemblée Générale à Boeschèpe',
            summary: "AG sous la présidence de Régine Beaucamp, visite guidée par Réginald Pasquier, rapports approuvés à l'unanimité.",
            body: "<p>Après une visite guidée de l'église Saint-Martin par Réginald Pasquier, le rapport d'activités 2024 et le rapport financier ont été approuvés à l'unanimité. Le renouvellement partiel du conseil a reconduit tous les membres sortants.</p>",
            tags: ['AG', 'assemblée générale', 'Boeschèpe', 'Beaucamp', 'Pasquier', '2025'],
            docs: [
                { label: 'Lire le compte-rendu', href: 'images/2025/Boeschepe/CR.AG 2025 - Boeschepe.pdf' }
            ],
            carousel: [
                { src: 'images/2025/Boeschepe/AG Boeschepe 29 mars 2025.jpg', alt: 'AG Boeschèpe 1/9' },
                { src: 'images/2025/Boeschepe/AG Boeschèpe.JPG', alt: 'AG Boeschèpe 2/9' },
                { src: 'images/2025/Boeschepe/église de Boeschèpe 1.JPG', alt: 'Église Boeschèpe 3/9' },
                { src: 'images/2025/Boeschepe/église de Boeschèpe 2.JPG', alt: 'Église Boeschèpe 4/9' },
                { src: 'images/2025/Boeschepe/église de Boeschèpe 3.JPG', alt: 'Église Boeschèpe 5/9' },
                { src: 'images/2025/Boeschepe/église de Boeschèpe 4.JPG', alt: 'Église Boeschèpe 6/9' },
                { src: 'images/2025/Boeschepe/photo de groupe à Boeschèpe.JPG', alt: 'Groupe Boeschèpe 7/9' },
                { src: "images/2025/Boeschepe/visite de l'église.JPG", alt: 'Visite 8/9' },
                { src: 'images/2025/Boeschepe/vitrail église de Boeschèpe.JPG', alt: 'Vitrail 9/9' }
            ]
        },
        {
            id: 'rapport-2024',
            date: '2024-12-31',
            category: 'Rapport',
            title: "Rapport d'activités 2024",
            summary: "Depuis l'AG du 6 avril 2024 à Gravelines : réunions du conseil, salon de généalogie, sortie à Abbeville, forum à Hazebrouck. 470 visiteurs en été.",
            tags: ['rapport', 'activités', '2024', 'Gravelines', 'Abbeville'],
            docs: [
                { label: 'Lire le rapport', href: "images/2025/Rapport Moral et d'activité  2024 pour AG.pdf" }
            ]
        },
        {
            id: 'deces-de-broucker',
            date: '2021-10-04',
            category: 'Hommage',
            title: 'Le décès de José De Broucker',
            summary: "Journaliste, catholique engagé, président de l'association pendant 15 années. Décédé le 4 octobre 2021, en la fête de saint François d'Assise.",
            tags: ['hommage', 'De Broucker', 'président', '2021'],
            docs: [
                { label: "Plus d'info", href: 'https://www.facebook.com/groups/810126146577985/permalink/887238255533440/' }
            ]
        },
        {
            id: 'journee-guides-hazebrouck-2021',
            date: '2021-10-20',
            category: 'Formation',
            title: 'Journée des guides à Hazebrouck',
            summary: "Sur proposition d'Aïda Tellier, les guides se sont retrouvés à Hazebrouck pour partager un moment de convivialité.",
            tags: ['guides', 'Hazebrouck', 'Tellier', '2021'],
            docs: [
                { label: 'Lire le compte-rendu', href: 'images/previous-image/Retables_2021_CR_Journee_des_guides_Hazebouck_20oct_2021(1).pdf' }
            ],
            carousel: [
                { src: 'images/previous-image/DSC_0572(1).JPG', alt: 'Hazebrouck 1/12' },
                { src: 'images/previous-image/DSC_0580(2).JPG', alt: 'Hazebrouck 2/12' },
                { src: 'images/previous-image/DSC_0583(1).JPG', alt: 'Hazebrouck 3/12' },
                { src: 'images/previous-image/209.JPG', alt: 'Hazebrouck 4/12' },
                { src: 'images/previous-image/210.JPG', alt: 'Hazebrouck 5/12' },
                { src: 'images/previous-image/211.JPG', alt: 'Hazebrouck 6/12' },
                { src: 'images/previous-image/212.JPG', alt: 'Hazebrouck 7/12' },
                { src: 'images/previous-image/213.JPG', alt: 'Hazebrouck 8/12' },
                { src: 'images/previous-image/214.JPG', alt: 'Hazebrouck 9/12' },
                { src: 'images/previous-image/215.JPG', alt: 'Hazebrouck 10/12' },
                { src: 'images/previous-image/216.JPG', alt: 'Hazebrouck 11/12' },
                { src: 'images/previous-image/217.JPG', alt: 'Hazebrouck 12/12' }
            ]
        }
    ];

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
        },
        actualites: actualites
    };
})();
