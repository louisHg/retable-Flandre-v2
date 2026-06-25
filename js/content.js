// ==========================================
// CONTENT — donnees editoriales (textes, photos, articles, actualites)
// ==========================================
//
// Source unique des donnees affichees sur le site. Modifier ici, pas dans
// vue-components.js. Tous les composants Vue lisent depuis window.RFContent.
//
// Pour ajouter / modifier :
//   - Une actualite (feed + cloche)   : editer RFContent.actualites
//   - Une eglise a visiter             : editer RFContent.eglisesVisite
//   - Un retable du carrousel d'accueil: editer RFContent.galleries.retables
//   - Un vitrail d'Arneke              : editer RFContent.galleries.eglises.arneke
//   - Le texte d'un article            : editer RFContent.articles.hertel/.oger
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

    // ===== VITRAUX D'ARNEKE (carrousel sur la page 'Que peut-on visiter ?') =====
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

    const eglises = { arneke: arnekePhotos };

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

    // ===== FICHES D'EGLISES A VISITER (grille unifiée) =====
    //
    // Une fiche par dépliant disponible.
    // - name        : nom à afficher
    // - image       : chemin photo (null si pas encore disponible → placeholder coloré)
    // - description : courte phrase de présentation (optionnelle)
    // - tags        : pour la recherche (en plus du nom et de la description)
    // - pdf         : lien vers le dépliant paroissial
    //
    const DEPLIANT_BASE = 'images/2025/Depliants_des_eglises_a_retables/';
    const eglisesVisite = [
        { name: 'Arnèke',            image: null,                                                     description: "Église Saint-Martin, célèbre pour son ensemble de vitraux remarquables.", tags: ['vitraux', 'Saint-Martin'], pdf: DEPLIANT_BASE + 'Arneke.pdf' },
        { name: 'Bambecque',         image: 'images/previous-image/bambecque.jpg',                    description: "", tags: [], pdf: DEPLIANT_BASE + 'Bambecque.pdf' },
        { name: 'Bavinchove',        image: null,                                                     description: "Église Saint-Omer, retable nord remarquable.", tags: ['Saint-Omer'], pdf: DEPLIANT_BASE + 'Bavinchove.pdf' },
        { name: 'Blaringhem',        image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Blaringhem.pdf' },
        { name: 'Boëseghem',         image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Boeseghem.pdf' },
        { name: 'Bollezeele',        image: 'images/2025/Bollezeele.png',                             description: "Église Saint-Wandrille, monument historique au riche mobilier classé.", tags: ['Saint-Wandrille', 'monument historique'], pdf: DEPLIANT_BASE + 'Bollezeele.pdf' },
        { name: 'Borre',             image: 'images/2025/Borre.jpeg',                                 description: "Église Saint-Jean-Baptiste, tour de guet transformée en clocher.", tags: ['Saint-Jean-Baptiste', 'tour de guet'], pdf: DEPLIANT_BASE + 'Borre.pdf' },
        { name: 'Brouckerque',       image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Brouckerque.pdf' },
        { name: 'Crochte',           image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Crochte.pdf' },
        { name: 'Drincham',          image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Drincham.pdf' },
        { name: 'Eecke',             image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Eecke.pdf' },
        { name: 'Gravelines',        image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Gravelines.pdf' },
        { name: 'Hazebrouck',        image: null,                                                     description: "Église Saint-Éloi, retables nord et sud (Vierge Marie, Trinité). Chapelle Saint-Jacques également.", tags: ['Saint-Éloi', 'Saint-Jacques'], pdf: DEPLIANT_BASE + 'Hazebrouck.pdf' },
        { name: 'Herzeele',          image: 'images/2025/Herzeele.jpeg',                              description: "Notre-Dame de l'Assomption, église-halle en briques du XVIᵉ siècle.", tags: ['Notre-Dame', 'église-halle', 'XVIe'], pdf: DEPLIANT_BASE + 'Herzeele.pdf' },
        { name: 'Hondschoote',       image: 'images/2025/Hondschoote-Oudezeele/Hondschoote1.png',     description: "Église Saint-Vaast, retables du Saint Esprit et de Saint-Sébastien.", tags: ['Saint-Vaast'], pdf: DEPLIANT_BASE + 'Hondschoote.pdf' },
        { name: 'Houtkerque',        image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Houtkerque.pdf' },
        { name: 'Killem',            image: 'images/2025/Killem.png',                                 description: "Église Saint-Michel, retables baroques (Rosaire au nord).", tags: ['Saint-Michel', 'baroque', 'Rosaire'], pdf: DEPLIANT_BASE + 'Killem.pdf' },
        { name: 'Ledringhem',        image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Ledringhem.pdf' },
        { name: 'Lynde',             image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Lynde.pdf' },
        { name: 'Millam',            image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Millam.pdf' },
        { name: 'Oudezeele',         image: 'images/2025/Hondschoote-Oudezeele/Oudezeele1.png',       description: "Église Saint-Omer, retables nord (Couronnement de la Vierge) et sud (Sainte Anne Trinitaire).", tags: ['Saint-Omer'], pdf: DEPLIANT_BASE + 'Oudezeele.pdf' },
        { name: 'Pitgam',            image: null,                                                     description: "Église Saint-Folquin, retable nord du Rosaire.", tags: ['Saint-Folquin', 'Rosaire'], pdf: DEPLIANT_BASE + 'Pitgam.pdf' },
        { name: 'Rexpoëde',          image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Rexpoede.pdf' },
        { name: "Saint Georges de l'Aa", image: null,                                                  description: "", tags: [], pdf: DEPLIANT_BASE + "Saint Georges de l'Aa.pdf" },
        { name: 'Sercus',            image: 'images/2026/Sercus-Wylder/Sercus.jpg',                   description: "", tags: [], pdf: DEPLIANT_BASE + 'Sercus.pdf' },
        { name: 'Socx',              image: null,                                                     description: "Église Saint-Maxime, retables du maître-autel, de la Vierge et de Saint-Léger.", tags: ['Saint-Maxime', 'Saint-Léger'], pdf: DEPLIANT_BASE + 'Socx.pdf' },
        { name: 'Steenbecque',       image: null,                                                     description: "Église Saint-Léger, retable du maître-autel.", tags: ['Saint-Léger'], pdf: DEPLIANT_BASE + 'Steenbecque.pdf' },
        { name: 'Steene',            image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Steene.pdf' },
        { name: 'Steenvoorde',       image: 'images/2025/STEENVOORDE.jpeg',                           description: "Église Saint-Pierre, haute flèche de 92 mètres.", tags: ['Saint-Pierre', 'flèche'], pdf: DEPLIANT_BASE + 'Steenvoorde.pdf' },
        { name: 'Volckerinckhove',   image: 'images/2025/Volckerinckove.JPG',                         description: "Église romane, poutres sculptées et fonts baptismaux remarquables.", tags: ['romane'], pdf: DEPLIANT_BASE + 'Volckerinckhove.pdf' },
        { name: 'Warhem',            image: null,                                                     description: "Église Saint-Martin, retable du Rosaire.", tags: ['Saint-Martin', 'Rosaire'], pdf: DEPLIANT_BASE + 'Warhem.pdf' },
        { name: 'Wemaers-Cappel',    image: 'images/previous-image/WEMAERS-Cappel.jpg',               description: "Église Saint-Sylvestre, retable du maître-autel.", tags: ['Saint-Sylvestre'], pdf: DEPLIANT_BASE + 'Wemaers-Cappel.pdf' },
        { name: 'West-Cappel',       image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'West-Cappel.pdf' },
        { name: 'Winnezeele',        image: null,                                                     description: "", tags: [], pdf: DEPLIANT_BASE + 'Winnezeele.pdf' },
        { name: 'Wormhout',          image: null,                                                     description: "Église Saint-Martin, retable sud du XVIIIᵉ siècle.", tags: ['Saint-Martin', 'XVIIIe'], pdf: DEPLIANT_BASE + 'Wormhout.pdf' },
        { name: 'Wulverdinghe',      image: 'images/2025/Wulverdinghe.jpeg',                          description: "Église Saint-Martin, façade romane rare en Flandre maritime.", tags: ['Saint-Martin', 'romane'], pdf: DEPLIANT_BASE + 'Wulverdinghe.pdf' },
        { name: 'Zegerscappel',      image: null,                                                     description: "Église Saint-Folquin, retable nord du Rosaire.", tags: ['Saint-Folquin', 'Rosaire'], pdf: DEPLIANT_BASE + 'Zegerscappel.pdf' }
    ];

    // ===== ACTUALITES (feed unifié — alimente aussi la cloche) =====
    //
    // Categories : AG, Visite, Formation, Sortie, Hommage, Cérémonie, Programme, Rapport
    // featured: true → mise en avant dans la cloche / bandeau accueil
    //
    const actualites = [
        {
            id: 'visite-sercus-wylder-2026',
            date: '2026-06-28',
            category: 'Visite',
            title: 'Visite — Sercus et Wylder',
            summary: "Ouverture de la saison des visites estivales le dimanche 28 juin 2026, avec deux églises de la Flandre intérieure : Sercus et Wylder.",
            body: "<p>La saison des visites guidées de l'été 2026 s'ouvre le <strong>dimanche 28 juin</strong> avec deux églises de la Flandre intérieure : l'église de <strong>Sercus</strong> et celle de <strong>Wylder</strong>.</p>",
            tags: ['visite', 'Sercus', 'Wylder', 'estivale', 'été', '2026'],
            photos: [
                { src: 'images/2026/Sercus-Wylder/Sercus.jpg', alt: 'Église de Sercus', caption: 'Sercus' },
                { src: 'images/2026/Sercus-Wylder/Sercus-clocher.jpg', alt: "Clocher de l'église de Sercus", caption: 'Sercus — le clocher' },
                { src: 'images/2026/Sercus-Wylder/Wylder.jpg', alt: 'Église de Wylder', caption: 'Wylder' }
            ],
            featured: true
        },
        {
            id: 'voyage-lille-2026',
            date: '2026-05-07',
            category: 'Sortie',
            title: 'Voyage annuel — Journée du 7 mai 2026 à Lille',
            summary: "Voyage annuel consacré à la découverte de l'architecture religieuse moderne dans le quartier Saint-Maurice Pellevoisin à Lille : Maison Paul VI, couvent des Dominicains et cathédrale Notre-Dame de la Treille.",
            body: "<p>Notre matinée fut dominée par la découverte de l'architecture religieuse moderne dans le quartier <strong>Saint-Maurice Pellevoisin</strong> — « un quartier où l'on se déplace à pied et où les gens se saluent dans la rue… là-haut, il y a de l'air, de la verdure, des arbres… »</p>"
                + "<h4>I — La maison Paul VI</h4>"
                + "<p>Ancien grand séminaire de théologie du diocèse de Lille, voulu par le cardinal Achille Liénard (1884-1973) et construit en 1930-1931 sur le site d'une ancienne briqueterie. Les travaux furent dirigés par le chanoine Ernest Lotthé et menés par l'architecte Paul Vilain, alors chargé du chantier de la cathédrale Notre-Dame de la Treille, assisté de Charles Serex. Le bâtiment monumental en béton armé recouvert de briques adopte un plan en Z et incarne l'art déco, en rupture avec le néo-gothique. Véritable manifeste de la Commission diocésaine d'Art sacré (1930) et de la Société Saint-Marc (1928), il associe sculpteurs (Masselot, Weert), peintre fresquiste (Eugène Nys), maître-verrier (Pierre Turpin) et l'abbé Paul Pruvost pour les cartons des vitraux.</p>"
                + "<h4>II — Le couvent des Dominicains</h4>"
                + "<p>Présents à Lille depuis 1224, les frères dominicains s'établissent intra-muros après la Libération. Le couvent Saint-Thomas-d'Aquin, inauguré en 1957, est le premier bâtiment religieux classé patrimoine du XXᵉ siècle. Œuvre des architectes Pierre Pinsard (assisté de Hutchinson et Vollmar), du maître-verrier Gérard Lardeur et de l'ingénieur Bernard Lafaille, il est un modèle de simplicité et d'harmonie avec la nature. L'église est recouverte d'une voûte d'un seul tenant évoquant un voile de béton, soutenue par deux fois sept piliers. 150 carreaux de verre colorés sont disposés dans chaque mur latéral, correspondant au nombre de psaumes chantés toute la semaine. La tribune accueille une tapisserie de Mannessier (1947) représentant un Christ à la colonne.</p>"
                + "<h4>III — La cathédrale Notre-Dame de la Treille</h4>"
                + "<p>Édifiée à partir du milieu du XIXᵉ siècle pour accueillir le pèlerinage à Notre-Dame-de-la-Treille (établi à Lille depuis le XIIIᵉ siècle), élevée au rang de cathédrale en 1913 et inaugurée en 1999. L'édifice conjugue les styles : façade en marbre de Peter Rice et Pierre-Louis Carlier, portail de la Vierge de Georges Jeanclos, rosace de la Résurrection de Ladislas Kijno. Sept chapelles, dont celle de Notre-Dame de la Treille (1856-1897) inspirée de la Sainte-Chapelle de Paris. Deux orgues : un Cavaillé-Coll romantique au transept nord et un Danion-Gonzalez néo-classique (7600 tuyaux, acquis en 2007 du studio de la Maison de la Radio). La crypte néo-gothique abrite les tombeaux des évêques et le « Centre d'Art Sacré de Lille ».</p>"
                + "<p>Une journée riche en découvertes : nous avons laissé pour un temps les retables et le baroque pour découvrir que l'art-déco de ces bâtiments était plein de belles surprises.</p>",
            tags: ['sortie', 'voyage', 'Lille', 'Pellevoisin', 'art déco', 'Paul VI', 'Dominicains', 'Notre-Dame de la Treille', '2026'],
            docs: [
                { label: 'Lire le compte-rendu complet', href: 'images/2026/mai/Compte-rendu.pdf' }
            ],
            carousel: [
                { src: 'images/2026/mai/DSC_0351.JPG', alt: 'Voyage 7 mai 2026 — 1/11' },
                { src: 'images/2026/mai/DSC_0359.JPG', alt: 'Voyage 7 mai 2026 — 2/11' },
                { src: 'images/2026/mai/DSC_0367.JPG', alt: 'Voyage 7 mai 2026 — 3/11' },
                { src: 'images/2026/mai/DSC_0370.JPG', alt: 'Voyage 7 mai 2026 — 4/11' },
                { src: 'images/2026/mai/DSC_0382.JPG', alt: 'Voyage 7 mai 2026 — 5/11' },
                { src: 'images/2026/mai/DSC_0391.JPG', alt: 'Voyage 7 mai 2026 — 6/11' },
                { src: 'images/2026/mai/DSC_0392.JPG', alt: 'Voyage 7 mai 2026 — 7/11' },
                { src: 'images/2026/mai/DSC_0396.JPG', alt: 'Voyage 7 mai 2026 — 8/11' },
                { src: 'images/2026/mai/DSC_0402.JPG', alt: 'Voyage 7 mai 2026 — 9/11' },
                { src: 'images/2026/mai/DSC_0422.JPG', alt: 'Voyage 7 mai 2026 — 10/11' },
                { src: 'images/2026/mai/DSC_0425.JPG', alt: 'Voyage 7 mai 2026 — 11/11' }
            ],
            featured: true
        },
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

    // ===== PLANS INTERACTIFS DES ÉGLISES =====
    //
    // Pour chaque église, structure :
    //   { plan: 'images/eglises-plans/xxx.jpg',
    //     points: [
    //       { n: 1, x: 50, y: 12, title: '...', body: 'description...' },
    //       ...
    //     ] }
    //
    // - n     : numéro du point sur le plan (visible sur la pastille)
    // - x, y  : position en % sur l'image (0,0 = top-left, 100,100 = bottom-right)
    // - title : courte étiquette
    // - body  : description (peut contenir du HTML)
    //
    // La clé de premier niveau est le nom de la commune en minuscules sans accents
    // (utiliser la même normalisation que pour les fichiers PDF).
    //
    const eglisesPlans = {
        wormhout: {
            plan: 'images/eglises-plans/wormhout.jpg',
            points: [
                {
                    n: 1, x: 50, y: 14,
                    title: "Retable du maître-autel",
                    body: "Retable lambris de la deuxième partie du XVIIIᵉ siècle, épouse les murs de l'abside jusqu'au berceau lambrissé. Thème : « Gloire à la Trinité et au Christ présent dans l'eucharistie ». Bois peint faux marbre brun et or veiné de blanc et rouge. Voûte en cul-de-four séparée en cinq compartiments représentant saint Placide, saint Vincent de Paul, saint François-Xavier et saint Maurus. Au centre, ostensoir rayonnant, anges et Jésus."
                },
                {
                    n: 2, x: 26, y: 13,
                    title: "Retable nord — Vierge Marie",
                    body: "Installé en 1785. Plan demi-circulaire concave, 3 travées séparées par des colonnes corinthiennes. Style baroque, bois peint faux marbre brun veiné de vert. Transformé au XIXᵉ. Niche centrale : Notre-Dame des Larmes (1876)."
                },
                {
                    n: 3, x: 74, y: 13,
                    title: "Retable sud — Sainte Famille (M.H.)",
                    body: "Restauré en 2013, caractéristique du XVIIᵉ siècle. Une seule travée + ailerons. Structure en chêne, faux marbre veiné ocre et vert, rehauts d'or. Chapiteaux corinthiens. Tableau d'autel : Sainte Famille. Niche supérieure : saint Nicolas (XIXᵉ)."
                },
                {
                    n: 4, x: 50, y: 26,
                    title: "Table de communion (M.H.)",
                    body: "Style Louis XV en chêne sculpté, offerte en 1731 par Alexandre Van De Walle, curé. L'abbé Blanckaert la fait exécuter en 1763. Dix panneaux figuratifs représentent le mystère de l'Eucharistie (Ancien et Nouveau Testament). En 1881, agrandissement du chœur avec recul de la partie centrale."
                },
                {
                    n: 5, x: 32, y: 50,
                    title: "Chaire à prêcher",
                    body: "Style Empire, chêne coloré acajou. Donnée en 1841 par Ignace Coudeville, marguillier. Démontée en 1966 : la cuve est conservée dans l'abside sud, avec la statue de saint Pierre qui lui servait de support."
                },
                {
                    n: 6, x: 26, y: 65,
                    title: "Les six confessionnaux (M.H.)",
                    body: "Trois confessionnaux rectangulaires de 1731, décor rocaille, donnés par le curé Alexandre Van De Walle. Trois autres galbés, style baroque, plutôt de la fin du XVIIIᵉ siècle."
                },
                {
                    n: 7, x: 50, y: 78,
                    title: "Les portails",
                    body: "Vers 1723, Alexandre Van De Walle élève deux nouveaux portails en chêne se faisant face à l'entrée de l'église, de style Renaissance."
                },
                {
                    n: 8, x: 50, y: 92,
                    title: "Tribune, buffet d'orgue et orgue",
                    body: "Seul subsiste le positif d'un instrument antérieur, mis en place en 1823. Le grand orgue actuel a été racheté à l'église Saint-Éloi de Dunkerque et installé en 1856. Restauration complète en 1912 par Frédéric Loncke, facteur d'orgues."
                },
                {
                    n: 9, x: 50, y: 38,
                    title: "Les stalles",
                    body: "Style néogothique, réalisées par les ateliers Collesson à Wormhout (nombreuses œuvres dans les églises de Flandre). Mises en place en 1863 après agrandissement du chœur."
                },
                {
                    n: 10, x: 74, y: 65,
                    title: "Fonts baptismaux",
                    body: "Cuve à droite quand on entre dans l'église. La cérémonie de baptême se déroule maintenant près de la table de communion. La chapelle dédiée originellement aux fonts est maintenant consacrée au monument aux morts."
                }
            ]
        }
        // À enrichir progressivement : autres églises sur le même modèle.
    };

    // ===== BANDEAU NOUVEAUTÉS (haut de toutes les pages) =====
    //
    // Liste curée manuellement, du plus récent au plus ancien.
    // Chaque entrée s'affiche dans le bandeau jaune en haut du site.
    // S'il y en a plusieurs, elles défilent automatiquement (5 s).
    //
    // Pour publier une nouvelle modif :
    //   1. ajouter l'entrée en TÊTE du tableau
    //   2. supprimer une (ou plusieurs) ancienne(s) entrée(s) en bas si on
    //      souhaite garder uniquement les N plus récentes
    //
    // Champs :
    //   - label  : texte affiché dans le bandeau
    //   - actuId : id d'une actualité (ouvre actualites.html#<id>)
    //   - href   : URL directe (alternative à actuId, prioritaire)
    //
    const bannerItems = [
        {
            label: "Visite du dimanche 28 juin 2026 — les églises de Sercus et de Wylder",
            actuId: 'visite-sercus-wylder-2026'
        }
    ];

    // ===== EXPORT =====
    window.RFContent = {
        galleries: {
            retables: retables,   // carrousel d'accueil
            eglises: eglises      // contient juste { arneke: [...] }
        },
        articles: {
            hertel: articleHertel,
            oger: articleOger
        },
        actualites: actualites,    // feed unifié + source de la cloche
        bannerItems: bannerItems,  // bandeau "Nouveau" en haut des pages
        eglisesVisite: eglisesVisite, // 37 fiches églises (page 'Que peut-on visiter ?')
        eglisesPlans: eglisesPlans    // plans interactifs (mvp : Wormhout — à enrichir)
    };
})();
