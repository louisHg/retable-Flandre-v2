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
          alt: 'Retable de la Sainte-Famille - Église Saint-Wandrille de Bollezeele',
          badge: 'Église Saint-Wandrille de Bollezeele',
          heading: 'Retable de la Sainte-Famille' },
        { src: DIAPO + 'crbst_Bollezeele_20retable_20Re_CC_81surrection.jpg',
          alt: 'Retable de la Résurrection - Église Saint-Wandrille de Bollezeele',
          badge: 'Église Saint-Wandrille de Bollezeele',
          heading: 'Retable de la Résurrection' },
        { src: DIAPO + 'crbst_Bollezeele_20Retable_20Vierge.jpg',
          alt: 'Retable Notre-Dame-de-la-Visitation - Église Saint-Wandrille de Bollezeele',
          badge: 'Église Saint-Wandrille de Bollezeele',
          heading: 'Retable Notre-Dame-de-la-Visitation' },
        { src: DIAPO + 'crbst_Borre_20retable_20du_20ma_C3_AEtre-autel.jpg',
          alt: 'Retable du maître-autel - Église Saint-Jean-Baptiste de Borre',
          badge: 'Église Saint-Jean-Baptiste de Borre',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_Craywick_20retable_20du_20ma_C3_AEtre-autel.jpg',
          alt: 'Retable du maître-autel - Église Saint-Gilles de Craywick',
          badge: 'Église Saint-Gilles de Craywick',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_Craywick_20retable_20nord.jpg',
          alt: 'Retable Saint-Gilles - Église Saint-Gilles de Craywick',
          badge: 'Église Saint-Gilles de Craywick',
          heading: 'Retable Saint-Gilles' },
        { src: DIAPO + 'crbst_Craywick_20retable_20sud.jpg',
          alt: "Retable de l'Assomption - Église Saint-Gilles de Craywick",
          badge: 'Église Saint-Gilles de Craywick',
          heading: "Retable de l'Assomption" },
        { src: DIAPO + 'crbst_Hazebrouck_20nord.jpg',
          alt: "Retable de la Vierge - Église Saint-Éloi d'Hazebrouck",
          badge: "Église Saint-Éloi d'Hazebrouck",
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_Hazebrouck_20sud.jpg',
          alt: "Retable sud dédié au culte des saints - Église Saint-Éloi d'Hazebrouck",
          badge: "Église Saint-Éloi d'Hazebrouck",
          heading: 'Retable sud dédié au culte des saints' },
        { src: DIAPO + 'crbst_IMG_2246_20retable_20nord_20sRVB_208_20bits_20jpg_20leger_20bavinchove.jpg',
          alt: 'Retable de la Vierge - Église Saint-Omer de Bavinchove',
          badge: 'Église Saint-Omer de Bavinchove',
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_IMG_6716_20rec_20herzeele_20sud.jpg',
          alt: "Retable Saint-Antoine - Église Notre-Dame-de-l’Assomption d'Herzeele",
          badge: "Église Notre-Dame-de-l’Assomption d'Herzeele",
          heading: 'Retable Saint-Antoine' },
        { src: DIAPO + 'crbst_IMG_7836_20herzeele_20centre_20rec_20rot_203_C2_B0.jpg',
          alt: "Retable du maître-autel - Église Notre-Dame-de-l’Assomption d'Herzeele",
          badge: "Église Notre-Dame-de-l’Assomption d'Herzeele",
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_IMG_9694_20ret_20Herzeele_20nord.jpg',
          alt: "Retable du Sacré-Cœur - Église Notre-Dame-de-l’Assomption d'Herzeele",
          badge: "Église Notre-Dame-de-l’Assomption d'Herzeele",
          heading: 'Retable du Sacré-Cœur' },
        { src: DIAPO + 'crbst_IMG_7777_20Zegers_20nord.jpg',
          alt: 'Retable de la Vierge - Église Saint-Omer de Zegerscappel',
          badge: 'Église Saint-Omer de Zegerscappel',
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_IMG_7805_20rubrouck_20centre.jpg',
          alt: 'Retable du maître-autel - Église Saint-Sylvestre de Rubrouck',
          badge: 'Église Saint-Sylvestre de Rubrouck',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_IMG_7863_20killem_20nord_20rec.jpg',
          alt: 'Retable de la Vierge - Église Saint-Michel de Killem',
          badge: 'Église Saint-Michel de Killem',
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_IMG_7877_20hondschodt_20sud.jpg',
          alt: "Retable de la Pentecôte - Église Saint-Vaast d'Hondschoote",
          badge: "Église Saint-Vaast d'Hondschoote",
          heading: 'Retable de la Pentecôte' },
        { src: DIAPO + 'crbst_IMG_7884_20hondchodt_20St_20Sebastien_20transf_20rec.jpg',
          alt: "Retable Saint-Sébastien - Église Saint-Vaast d'Hondschoote",
          badge: "Église Saint-Vaast d'Hondschoote",
          heading: 'Retable Saint-Sébastien' },
        { src: DIAPO + 'crbst_IMG_8150_20rot_202_C2_B0_20rec_20wemaers_20centre.jpg',
          alt: 'Retable du maître-autel - Église Saint-Martin de Wemaers-Cappel',
          badge: 'Église Saint-Martin de Wemaers-Cappel',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_IMG_8402_20steenbecque_20centre_20transf.jpg',
          alt: 'Retable du maître-autel - Église Saint-Pierre de Steenbecque',
          badge: 'Église Saint-Pierre de Steenbecque',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_Oudezeele_20retable_20nord.jpg',
          alt: "Retable de la Vierge - Église Saint-Jean-Baptiste d'Oudezeele",
          badge: "Église Saint-Jean-Baptiste d'Oudezeele",
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_Oudezeele_20retable_20sud.jpg',
          alt: "Retable Sainte-Anne-Trinitaire - Église Saint-Jean-Baptiste d'Oudezeele",
          badge: "Église Saint-Jean-Baptiste d'Oudezeele",
          heading: 'Retable Sainte-Anne-Trinitaire' },
        { src: DIAPO + 'crbst_Pitgam_20retable_20nord.jpg',
          alt: 'Retable du Rosaire - Église Saint-Folquin de Pitgam',
          badge: 'Église Saint-Folquin de Pitgam',
          heading: 'Retable du Rosaire' },
        { src: DIAPO + 'crbst_Socx_20retable_20du_20ma_C3_AEtre-autel.jpg',
          alt: 'Retable du maître-autel - Église Saint-Léger de Socx',
          badge: 'Église Saint-Léger de Socx',
          heading: 'Retable du maître-autel' },
        { src: DIAPO + 'crbst_Socx_20retable_20nord.jpg',
          alt: 'Retable de la Vierge - Église Saint-Léger de Socx',
          badge: 'Église Saint-Léger de Socx',
          heading: 'Retable de la Vierge' },
        { src: DIAPO + 'crbst_Socx_20retable_20sud.jpg',
          alt: 'Retable Saint-Léger - Église Saint-Léger de Socx',
          badge: 'Église Saint-Léger de Socx',
          heading: 'Retable Saint-Léger' },
        { src: DIAPO + 'crbst_ST_20Jacques_20Hazebrouck_20A4.jpg',
          alt: "Retable Saint-Antoine-de-Padoue - Chapelle Saint-Jacques d'Hazebrouck",
          badge: "Chapelle Saint-Jacques d'Hazebrouck",
          heading: 'Retable Saint-Antoine-de-Padoue' },
        { src: DIAPO + 'crbst_Wahrem_20nouvelle_20version_20Jpg.jpg',
          alt: 'Retable du Rosaire - Église Notre-Dame-de-l’Assomption de Warhem',
          badge: 'Église Notre-Dame-de-l’Assomption de Warhem',
          heading: 'Retable du Rosaire' },
        { src: DIAPO + 'crbst_Wormhout_20sud_20_20site_20web_20-_20Copie.jpg',
          alt: 'Retable de la Sainte-Famille - Église Saint-Martin de Wormhout',
          badge: 'Église Saint-Martin de Wormhout',
          heading: 'Retable de la Sainte-Famille' }
    ];

    // ===== VITRAUX DES ÉGLISES (carrousel sur la page 'Que peut-on visiter ?') =====
    // Photos issues du livre « Lumière, couleur et dévotion — Vitraux en Flandre ».
    // Malgré leur nom de fichier (arneke_egliseN), elles proviennent d'églises
    // différentes — légendes reprises du diaporama de la page livre du site v1.
    const VITRAUX = 'images/previous-image/boutique/';
    const vitrauxLivre = [
        { name: 'Arnèke — Pape Pie V remerciant la Vierge du Rosaire', src: VITRAUX + 'arneke_eglise_saint_artin_baie_pape_pie_vremerciant_la_vierge_du_rosaire.jpg' },
        { name: 'Arnèke', src: VITRAUX + 'arneke_eglise2.jpg' },
        { name: 'Bavinchove', src: VITRAUX + 'arneke_eglise3.jpg' },
        { name: 'Bergues', src: VITRAUX + 'arneke_eglise4.jpg' },
        { name: 'Bollezeele', src: VITRAUX + 'arneke_eglise5.jpg' },
        { name: 'Bollezeele', src: VITRAUX + 'arneke_eglise6.jpg' },
        { name: 'Bollezeele', src: VITRAUX + 'arneke_eglise7.jpg' },
        { name: 'Borre', src: VITRAUX + 'arneke_eglise8.jpg' },
        { name: 'Bourbourg', src: VITRAUX + 'arneke_eglise9.jpg' },
        { name: 'Cassel', src: VITRAUX + 'arneke_eglise10.jpg' },
        { name: 'Cassel', src: VITRAUX + 'arneke_eglise11.jpg' },
        { name: 'Herzeele', src: VITRAUX + 'arneke_eglise12.jpg' },
        { name: 'Steene', src: VITRAUX + 'arneke_eglise13.jpg' },
        { name: 'West-Cappel', src: VITRAUX + 'arneke_eglise14.jpg' },
        { name: 'Hazebrouck', src: VITRAUX + 'arneke_eglise15.jpg' },
        { name: 'Holque', src: VITRAUX + 'arneke_eglise17.jpg' },
        { name: 'Oudezeele', src: VITRAUX + 'arneke_eglise18.jpg' },
        { name: 'Sercus', src: VITRAUX + 'arneke_eglise19.jpg' },
        { name: 'Sercus', src: VITRAUX + 'arneke_eglise20.jpg' },
        { name: 'Socx', src: VITRAUX + 'arneke_eglise21.jpg' },
        { name: 'Steene', src: VITRAUX + 'arneke_eglise22.jpg' },
        { name: 'Steenvoorde', src: VITRAUX + 'arneke_eglise23.jpg' },
        { name: 'Volckerinckhove', src: VITRAUX + 'arneke_eglise24.jpg' },
        { name: 'Watten', src: VITRAUX + 'arneke_eglise25.jpg' },
        { name: 'West-Cappel', src: VITRAUX + 'arneke_eglise26.jpg' },
        { name: 'Zegerscappel', src: VITRAUX + 'arneke_eglise27.jpg' },
        { name: 'Zermezeele', src: VITRAUX + 'arneke_eglise28.jpg' }
    ];

    const eglises = { vitrauxLivre: vitrauxLivre };

    // ===== ARTICLES (HTML stocke comme template) =====
    const articleHertel = `
        <h4 class="mb-3">Les retables de Flandre française des XVIIe, XVIIIe et XIXe siècles</h4>
        <h6 class="mb-3" style="color: #717275;">Philippe HERTEL, Anita OGER-LEURENT</h6>
        <p style="line-height: 1.8; color: #555;">
            Pourquoi la Flandre compte-t-elle une telle concentration de retables ? La première partie
            de l'article, due à Philippe Hertel, replace ces grands meubles dans leur contexte spirituel
            et historique&nbsp;: né comme simple « cadre » derrière la table d'autel (du latin
            <em>retro tabula</em>), le retable devient après le concile de Trente le point de focalisation
            de l'église. Face à la Réforme protestante — et après la fureur iconoclaste des « Gueux »
            partie de Steenvoorde en 1566 —, la Contre-Réforme catholique en fait le support triomphal
            de ses dogmes réaffirmés&nbsp;: Eucharistie, culte de la Vierge et des saints, hiérarchie de l'Église.
        </p>
        <p style="line-height: 1.8; color: #555;">
            La seconde partie, signée Anita Oger-Leurent, propose un essai de typologie des retables
            du Westhoek&nbsp;: polyptyques peints de la reconstitution (fin XVIᵉ), retables architecturés
            de la « Renaissance flamande » (Bollezeele 1619, Steenbecque), formule du
            <strong>portique</strong> inspirée des arcs de triomphe, puis retables-lambris épousant
            l'abside entière. On y découvre le bois sous le faux marbre — chêne des forêts de Nieppe
            et de Clairmarais, résineux nordiques importés par Dunkerque —, les dynasties d'artisans
            (Vosselle, Elshoecht, Piette…) et le devenir de ces meubles « vivants » jusqu'aux
            interrogations patrimoniales d'aujourd'hui.
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
            En 1713, le traité d'Utrecht trancha « dans la chair de l'ancienne Flandre »&nbsp;: la nouvelle
            frontière sépara le Westhoek français des châtellenies restées aux Pays-Bas autrichiens,
            la future Belgique. Mais hommes, idées et œuvres continuèrent de circuler&nbsp;: sculpteurs
            et ébénistes — les Roose, Vosselle, Elshoecht — travaillèrent des deux côtés, léguant
            aux Flandres belge et française un <strong>patrimoine partagé</strong> dont les retables
            des églises rurales sont l'exemple emblématique.
        </p>
        <p style="line-height: 1.8; color: #555;">
            L'article retrace l'évolution de ces meubles après l'iconoclasme calviniste de 1566-1568&nbsp;:
            polyptyques peints, retables architecturés maniéristes (Bollezeele, 1619), parti vertical
            inspiré des arcs de triomphe, jusqu'à l'apogée du XVIIIᵉ siècle et au retable-lambris fusionnant
            avec l'architecture. Derrière l'austérité de leurs murs de briques, les églises rurales de
            Flandre abritent ainsi un mobilier d'une qualité exceptionnelle — statuaire en bois locaux,
            structure en sapin nordique importé par Dunkerque, toiles de peintres régionaux renommés
            comme Jean De Reyn ou Matthieu Elias — pleinement inscrit dans l'ordre baroque européen.
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
        { name: 'Arnèke',            image: 'images/2025/Plans_des_eglises/Arneke.jpg',               description: "Église Saint-Martin, célèbre pour son ensemble de vitraux remarquables.", tags: ['vitraux', 'Saint-Martin'], pdf: DEPLIANT_BASE + 'Arneke.pdf' },
        { name: 'Bambecque',         image: 'images/previous-image/bambecque.jpg',                    description: "", tags: [], pdf: DEPLIANT_BASE + 'Bambecque.pdf' },
        { name: 'Bavinchove',        image: 'images/2025/Plans_des_eglises/Bavinchove.jpg',           description: "Église Saint-Omer, retable de la Vierge.", tags: ['Saint-Omer'], pdf: DEPLIANT_BASE + 'Bavinchove.pdf' },
        { name: 'Blaringhem',        image: 'images/2025/Plans_des_eglises/Blaringhem.jpg',           description: "", tags: [], pdf: DEPLIANT_BASE + 'Blaringhem.pdf' },
        { name: 'Boëseghem',         image: 'images/2025/Plans_des_eglises/Boeseghem.jpg',            description: "", tags: [], pdf: DEPLIANT_BASE + 'Boeseghem.pdf' },
        { name: 'Bollezeele',        image: 'images/2025/Bollezeele.png',                             description: "Église Saint-Wandrille, monument historique au riche mobilier classé.", tags: ['Saint-Wandrille', 'monument historique'], pdf: DEPLIANT_BASE + 'Bollezeele.pdf' },
        { name: 'Borre',             image: 'images/2025/Borre.jpeg',                                 description: "Église Saint-Jean-Baptiste, tour de guet transformée en clocher.", tags: ['Saint-Jean-Baptiste', 'tour de guet'], pdf: DEPLIANT_BASE + 'Borre.pdf' },
        { name: 'Brouckerque',       image: 'images/2025/Plans_des_eglises/Brouckerque.jpg',          description: "", tags: [], pdf: DEPLIANT_BASE + 'Brouckerque.pdf' },
        { name: 'Crochte',           image: 'images/2025/Plans_des_eglises/Crochte.jpg',              description: "", tags: [], pdf: DEPLIANT_BASE + 'Crochte.pdf' },
        { name: 'Drincham',          image: 'images/2025/Plans_des_eglises/Drincham.jpg',             description: "", tags: [], pdf: DEPLIANT_BASE + 'Drincham.pdf' },
        { name: 'Eecke',             image: 'images/2025/Plans_des_eglises/Eecke.jpg',                description: "", tags: [], pdf: DEPLIANT_BASE + 'Eecke.pdf' },
        { name: 'Gravelines',        image: 'images/2026/Warhem-Gravelines/Gravelines.jpg',           description: "", tags: [], pdf: DEPLIANT_BASE + 'Gravelines.pdf' },
        { name: 'Hazebrouck',        image: 'images/2025/Plans_des_eglises/Hazebrouck.jpg',           description: "Église Saint-Éloi, retable de la Vierge et retable sud dédié au culte des saints. Chapelle Saint-Jacques : retable Saint-Antoine-de-Padoue.", tags: ['Saint-Éloi', 'Saint-Jacques'], pdf: DEPLIANT_BASE + 'Hazebrouck.pdf' },
        { name: 'Herzeele',          image: 'images/2025/Herzeele.jpeg',                              description: "Notre-Dame-de-l'Assomption, église-halle en briques du XVIᵉ siècle.", tags: ['Notre-Dame', 'église-halle', 'XVIe'], pdf: DEPLIANT_BASE + 'Herzeele.pdf' },
        { name: 'Hondschoote',       image: 'images/2025/Hondschoote-Oudezeele/Hondschoote1.png',     description: "Église Saint-Vaast, retables de la Pentecôte et Saint-Sébastien.", tags: ['Saint-Vaast'], pdf: DEPLIANT_BASE + 'Hondschoote.pdf' },
        { name: 'Houtkerque',        image: 'images/2025/Plans_des_eglises/Houtkerque.jpg',           description: "", tags: [], pdf: DEPLIANT_BASE + 'Houtkerque.pdf' },
        { name: 'Killem',            image: 'images/2025/Killem.png',                                 description: "Église Saint-Michel, retables baroques (retable de la Vierge).", tags: ['Saint-Michel', 'baroque', 'Vierge'], pdf: DEPLIANT_BASE + 'Killem.pdf' },
        { name: 'Ledringhem',        image: 'images/2025/Plans_des_eglises/Ledringhem.jpg',           description: "", tags: [], pdf: DEPLIANT_BASE + 'Ledringhem.pdf' },
        { name: 'Lynde',             image: 'images/2025/Plans_des_eglises/Lynde.jpg',                description: "", tags: [], pdf: DEPLIANT_BASE + 'Lynde.pdf' },
        { name: 'Millam',            image: 'images/2025/Plans_des_eglises/Millam.jpg',               description: "", tags: [], pdf: DEPLIANT_BASE + 'Millam.pdf' },
        { name: 'Oudezeele',         image: 'images/2025/Hondschoote-Oudezeele/Oudezeele1.png',       description: "Église Saint-Jean-Baptiste, retables de la Vierge et Sainte-Anne-Trinitaire.", tags: ['Saint-Jean-Baptiste'], pdf: DEPLIANT_BASE + 'Oudezeele.pdf' },
        { name: 'Pitgam',            image: 'images/2025/Plans_des_eglises/Pitgam.jpg',               description: "Église Saint-Folquin, retable nord du Rosaire.", tags: ['Saint-Folquin', 'Rosaire'], pdf: DEPLIANT_BASE + 'Pitgam.pdf' },
        { name: 'Rexpoëde',          image: 'images/2025/Plans_des_eglises/Rexpoede.jpg',             description: "", tags: [], pdf: DEPLIANT_BASE + 'Rexpoede.pdf' },
        { name: "Saint-Georges-sur-l'Aa", image: 'images/2025/Plans_des_eglises/Saint-Georges-sur-l-Aa.jpg',description: "", tags: [], pdf: DEPLIANT_BASE + "Saint Georges de l'Aa.pdf" },
        { name: 'Sercus',            image: 'images/2026/Sercus-Wylder/Sercus.jpg',                   description: "", tags: [], pdf: DEPLIANT_BASE + 'Sercus.pdf' },
        { name: 'Socx',              image: 'images/2025/Plans_des_eglises/Socx.jpg',                 description: "Église Saint-Léger, retables du maître-autel, de la Vierge et Saint-Léger.", tags: ['Saint-Léger'], pdf: DEPLIANT_BASE + 'Socx.pdf' },
        { name: 'Steenbecque',       image: 'images/2025/Plans_des_eglises/Steenbecque.jpg',          description: "Église Saint-Pierre, retable du maître-autel.", tags: ['Saint-Pierre'], pdf: DEPLIANT_BASE + 'Steenbecque.pdf' },
        { name: 'Steene',            image: 'images/2025/Plans_des_eglises/Steene.jpg',               description: "", tags: [], pdf: DEPLIANT_BASE + 'Steene.pdf' },
        { name: 'Steenvoorde',       image: 'images/2025/STEENVOORDE.jpeg',                           description: "Église Saint-Pierre, haute flèche de 92 mètres.", tags: ['Saint-Pierre', 'flèche'], pdf: null },
        { name: 'Volckerinckhove',   image: 'images/2025/Volckerinckove.JPG',                         description: "Église romane, poutres sculptées et fonts baptismaux remarquables.", tags: ['romane'], pdf: DEPLIANT_BASE + 'Volckerinckhove.pdf' },
        { name: 'Warhem',            image: 'images/2026/Warhem-Gravelines/Warhem.jpg',               description: "Église Notre-Dame-de-l'Assomption, retable du Rosaire.", tags: ['Notre-Dame-de-l\'Assomption', 'Rosaire'], pdf: DEPLIANT_BASE + 'Warhem.pdf' },
        { name: 'Wemaers-Cappel',    image: 'images/previous-image/WEMAERS-Cappel.jpg',               description: "Église Saint-Martin, retable du maître-autel.", tags: ['Saint-Martin'], pdf: DEPLIANT_BASE + 'Wemaers-Cappel.pdf' },
        { name: 'West-Cappel',       image: 'images/2025/Plans_des_eglises/West-Cappel.jpg',          description: "", tags: [], pdf: DEPLIANT_BASE + 'West-Cappel.pdf' },
        { name: 'Winnezeele',        image: 'images/2025/Plans_des_eglises/Winnezeele.jpg',           description: "", tags: [], pdf: DEPLIANT_BASE + 'Winnezeele.pdf' },
        { name: 'Wormhout',          image: 'images/2025/Plans_des_eglises/Wormhout.jpg',             description: "Église Saint-Martin, retable de la Sainte-Famille (XVIIᵉ siècle).", tags: ['Saint-Martin', 'Sainte-Famille', 'XVIIe'], pdf: DEPLIANT_BASE + 'Wormhout.pdf' },
        { name: 'Wulverdinghe',      image: 'images/2025/Wulverdinghe.jpeg',                          description: "Église Saint-Martin, façade romane rare en Flandre maritime.", tags: ['Saint-Martin', 'romane'], pdf: DEPLIANT_BASE + 'Wulverdinghe.pdf' },
        { name: 'Zegerscappel',      image: 'images/2025/Plans_des_eglises/Zegerscappel.jpg',         description: "Église Saint-Omer, retable de la Vierge.", tags: ['Saint-Omer', 'Vierge'], pdf: DEPLIANT_BASE + 'Zegerscappel.pdf' }
    ];

    // ===== ACTUALITES (feed unifié — alimente aussi la cloche) =====
    //
    // Categories : AG, Visite, Formation, Sortie, Hommage, Cérémonie, Programme, Rapport
    // featured: true → mise en avant dans la cloche / bandeau accueil
    //
    const actualites = [
        {
            id: 'anniversaire-35-ans-2026',
            date: '2026-10-03',
            category: 'Anniversaire',
            title: "Les 35 ans de l'association",
            summary: "Samedi 3 octobre 2026, l'association a fêté ses 35 ans en l'église Saint-Éloi d'Hazebrouck : retour sur 35 ans d'action (42 retables restaurés), remise des 12 nouveaux dépliants aux communes, hommage à Mme Aïda Tellier et récital d'orgue d'Emmanuel Hocde.",
            body: "<p>L'association <strong>Retables de Flandre</strong> a fêté ses <strong>35 ans</strong> le <strong>samedi 3 octobre 2026</strong> en l'<strong>église Saint-Éloi d'Hazebrouck</strong>, devant les élus, les guides et de nombreux adhérents.</p>"
                + "<h4>35 ans au service des retables</h4>"
                + "<p>Redécouvrir les retables des églises de Flandre, éléments importants du patrimoine culturel de notre région : c'est le but que s'est fixé l'association. Le coup d'envoi a été donné le <strong>24 mai 1991</strong> à l'église Saint-Éloi de Dunkerque, avec le lancement de l'opération « Mon patrimoine » initiée par le ministère de la Culture, avec le concours de Bernard Prévost, sous-préfet de Dunkerque, et de la ville de Dunkerque.</p>"
                + "<p>L'association s'est assigné quatre buts : poursuivre la recherche sur l'histoire et l'environnement des retables, diffuser l'information concernant ce patrimoine, mobiliser les moyens financiers complémentaires aux opérations de sauvegarde, de restauration et de mise en valeur, et participer au développement touristique.</p>"
                + "<p>Quelques grandes étapes rappelées par la présidente, <strong>Régine Beaucamp</strong> :</p>"
                + "<ul>"
                + "<li><strong>1993</strong> — José De Broucker devient président, accompagné de Francis Thulie, secrétaire général. Création d'un fonds de ressources pour la restauration, circuits « Chemins et Mémoires », « Retables en musique », signalétique des Chemins des Retables.</li>"
                + "<li><strong>1996</strong> — 18 guides certifiés ; le livre « Architecture et Trésors des églises de Flandre » est offert par Mme Geneviève Duprez au profit du fonds de ressources. Échanges culturels en Haute-Saône, Haute-Savoie et en Bucovine (Roumanie).</li>"
                + "<li><strong>2002</strong> — 18 nouveaux guides certifiés ; rallye des retables.</li>"
                + "<li><strong>2008</strong> — Régine Beaucamp succède à José De Broucker ; album « VIVAT » et son DVD consacrés aux 24 retables restaurés.</li>"
                + "<li><strong>2010</strong> — livre d'art « Lumière, couleur et dévotion — Vitraux en Flandre », offert au pape François par l'abbé Lescroart en 2015.</li>"
                + "<li><strong>2016</strong> — nouvelle formation de guides ; Francis Thulie décoré par le préfet de région ; exposition « Forme et Sens » (40 panneaux).</li>"
                + "<li><strong>2021-2022</strong> — Crochte restaure 3 retables de l'église Saint-Georges et en découvre un 4ᵉ.</li>"
                + "<li><strong>2025-2026</strong> — formation de 9 nouveaux guides.</li>"
                + "</ul>"
                + "<p>À ce jour, <strong>42 retables ont été restaurés</strong> — et l'association attend de nouvelles demandes !</p>"
                + "<h4>Remise des 12 nouveaux dépliants</h4>"
                + "<p>Rédigés par nos guides, relus et corrigés par Aïda Tellier, Nicole Lalleman et Hélène Bossart, les dépliants ont été remis aux élus des 12 communes concernées :</p>"
                + "<ul>"
                + "<li>Boeschèpe — église Saint-Martin, par Réginald Pasquier</li>"
                + "<li>Craywick — église Saint-Gilles, par Nicole Lalleman</li>"
                + "<li>Eringhem — église Saint-Matthias, par Jean-Pierre Vanryssel</li>"
                + "<li>Ochtezeele — église Saint-Omer, par René Charlet</li>"
                + "<li>Oost-Cappel — église Saint-Nicolas, par Françoise Faes</li>"
                + "<li>Quaëdypre — église Saint-Omer, par Françoise Faes</li>"
                + "<li>Renescure — église Notre-Dame-de-l'Assomption, par Aïda Tellier</li>"
                + "<li>Saint-Pierre-Brouck — église Saint-Pierre, par Françoise Faes</li>"
                + "<li>Steenvoorde — église Saint-Pierre, par Daniel Francke</li>"
                + "<li>Terdeghem — église Saint-Martin, par Marie-Claude Wiel</li>"
                + "<li>Wylder — église Saint-Martin, par Françoise Faes</li>"
                + "<li>Zermezeele — église Saint-Omer, par René Charlet</li>"
                + "</ul>"
                + "<h4>Hommage à Aïda Tellier</h4>"
                + "<p>« Quelle chance, quel bonheur de vous avoir connue parmi les membres efficaces de notre association ! » Pendant de longues années, <strong>Aïda Tellier</strong> a inlassablement parcouru nos villages, de la côte maritime à la Flandre intérieure, pour étudier, photographier et faire connaître ce patrimoine. Elle a accompagné et orienté les nombreuses personnes devenues guides, construit les programmes des visites d'été en veillant à ce que les 62 églises du territoire soient étudiées, coordonné la rédaction de l'ouvrage sur les vitraux et aidé de façon extraordinaire à la rédaction des dépliants. L'association lui a offert un souvenir en remerciement de tout ce qu'elle lui a donné.</p>"
                + "<p>La journée s'est poursuivie avec le <strong>récital d'Emmanuel Hocde</strong> aux orgues de l'église Saint-Éloi, organisé par Damien Top du Centre International Albert-Roussel (CIAR).</p>",
            tags: ['anniversaire', '35 ans', 'Hazebrouck', 'Saint-Éloi', 'dépliants', 'Aïda Tellier', 'hommage', 'concert', 'orgue', 'CIAR', '2026'],
            photos: [
                { src: 'images/2026/35-ans/assemblee.jpg', alt: "L'assemblée réunie dans l'église Saint-Éloi d'Hazebrouck pour les 35 ans", caption: "L'assemblée à Saint-Éloi" },
                { src: 'images/2026/35-ans/discours.jpg', alt: "Discours des 35 ans de l'association dans l'église Saint-Éloi d'Hazebrouck", caption: 'Le discours des 35 ans' },
                { src: 'images/2026/35-ans/hommage-aida-tellier.jpg', alt: 'Remise du souvenir à Mme Aïda Tellier', caption: 'Hommage à Aïda Tellier' },
                { src: 'images/2026/35-ans/aida-tellier.jpg', alt: 'Mme Aïda Tellier', caption: 'Aïda Tellier' },
                { src: 'images/2026/35-ans/depliants.jpg', alt: 'Les 12 nouveaux dépliants des églises de Flandre', caption: 'Les 12 nouveaux dépliants' },
                { src: 'images/2026/35-ans/article-de-presse.jpg', alt: "Article de presse — Quarante-deux retables restaurés grâce à l'association des Retables de Flandre", caption: "L'article de presse" },
                { src: 'images/2026/35-ans/affiche-35-ans.jpg', alt: "Affiche des 35 ans de l'association — samedi 3 octobre 2026, église Saint-Éloi d'Hazebrouck", caption: "L'affiche des 35 ans" }
            ],
            docs: [
                { label: "Lire l'article de presse", href: 'images/2026/35-ans/article-de-presse.jpg' },
                { label: "Voir l'affiche en grand", href: 'images/2026/35-ans/affiche-35-ans.jpg' }
            ],
            featured: true
        },
        {
            id: 'visite-warhem-gravelines-2026',
            date: '2026-07-05',
            category: 'Visite',
            title: 'Visite — Warhem et Gravelines',
            summary: "Les visites estivales se poursuivent le dimanche 5 juillet 2026 avec deux nouvelles églises : Warhem et Gravelines.",
            body: "<p>Les visites guidées de l'été 2026 se poursuivent le <strong>dimanche 5 juillet</strong> avec deux nouvelles églises : l'église <strong>Notre-Dame-de-l'Assomption de Warhem</strong>, qui abrite un retable du Rosaire, et l'église de <strong>Gravelines</strong>.</p>",
            tags: ['visite', 'Warhem', 'Gravelines', 'estivale', 'été', '2026'],
            photos: [
                { src: 'images/2026/Warhem-Gravelines/Warhem.jpg', alt: "Église Notre-Dame-de-l'Assomption de Warhem", caption: "Warhem — église Notre-Dame-de-l'Assomption" },
                { src: 'images/2026/Warhem-Gravelines/Warhem-2.jpg', alt: "Façade de l'église Notre-Dame-de-l'Assomption de Warhem", caption: 'Warhem — la façade' },
                { src: 'images/2026/Warhem-Gravelines/Gravelines.jpg', alt: 'Église de Gravelines', caption: 'Gravelines' }
            ],
            featured: true
        },
        {
            id: 'visite-sercus-wylder-2026',
            date: '2026-06-28',
            category: 'Visite',
            title: 'Visite — Sercus et Wylder',
            summary: "Ouverture de la saison des visites estivales le dimanche 28 juin 2026, avec deux églises de la Flandre intérieure : Sercus et Wylder.",
            body: "<p>La saison des visites guidées de l'été 2026 s'ouvre le <strong>dimanche 28 juin</strong> avec deux églises de la Flandre intérieure : l'église de <strong>Sercus</strong> et celle de <strong>Wylder</strong>.</p>"
                + "<p>Cette première visite a réuni 15 visiteurs à Wylder.</p>",
            tags: ['visite', 'Sercus', 'Wylder', 'estivale', 'été', '2026'],
            photos: [
                { src: 'images/2026/Sercus-Wylder/Sercus.jpg', alt: 'Église de Sercus', caption: 'Sercus' },
                { src: 'images/2026/Sercus-Wylder/Sercus-clocher.jpg', alt: "Clocher de l'église de Sercus", caption: 'Sercus — le clocher' },
                { src: 'images/2026/Sercus-Wylder/Wylder.jpg', alt: 'Église de Wylder', caption: 'Wylder' }
            ],
            featured: false
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
            summary: "Notre-Dame-de-l'Assomption d'Herzeele (église-halle en briques XVIᵉ) et Saint-Martin de Wulverdinghe (façade romane).",
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
    // - n     : numéro du point sur le plan (visible sur la pastille) — reprendre la
    //           numérotation du « Plan de découverte » du dépliant paroissial
    // - x, y  : position en % sur l'image (0,0 = top-left, 100,100 = bottom-right)
    // - label : optionnel, libellé affiché à la place de n pour les sous-éléments
    //           numérotés du dépliant (ex. '10-1', '11a') — plusieurs points peuvent
    //           alors partager le même n
    // - spots : optionnel, positions supplémentaires [{x, y}, ...] quand le même
    //           numéro figure à plusieurs endroits du plan (ex. portails, confessionnaux)
    // - title : courte étiquette
    // - body  : description (peut contenir du HTML)
    //
    // La clé de premier niveau est le nom de la commune en minuscules sans accents
    // (utiliser la même normalisation que pour les fichiers PDF).
    //
    const eglisesPlans = {
        wormhout: {
            plan: 'images/eglises-plans/wormhout.jpg',
            // Numérotation et emplacements alignés sur le « Plan de découverte »
            // du dépliant paroissial de Wormhout.
            points: [
                {
                    n: 1, x: 27, y: 16.2,
                    title: "Retable nord — Vierge Marie",
                    body: "Installé en 1785. Plan demi-circulaire concave, 3 travées séparées par des colonnes corinthiennes. Style baroque, bois peint faux marbre brun veiné de vert. Transformé au XIXᵉ. Niche centrale : Notre-Dame des Larmes (1876)."
                },
                {
                    n: 2, x: 50.3, y: 8.7,
                    title: "Retable du maître-autel",
                    body: "Retable lambris de la deuxième partie du XVIIIᵉ siècle, épouse les murs de l'abside jusqu'au berceau lambrissé. Thème : « Gloire à la Trinité et au Christ présent dans l'eucharistie ». Bois peint faux marbre brun et or veiné de blanc et rouge. Voûte en cul-de-four séparée en cinq compartiments représentant saint Placide, saint Vincent de Paul, saint François-Xavier et saint Maurus. Au centre, ostensoir rayonnant, anges et Jésus."
                },
                {
                    n: 3, x: 71.3, y: 15.9,
                    title: "Retable sud — Sainte-Famille (M.H.)",
                    body: "Restauré en 2013, caractéristique du XVIIᵉ siècle. Une seule travée + ailerons. Structure en chêne, faux marbre veiné ocre et vert, rehauts d'or. Chapiteaux corinthiens. Tableau d'autel : Sainte Famille. Niche supérieure : saint Nicolas (XIXᵉ)."
                },
                {
                    n: 4, x: 49.4, y: 21.6,
                    title: "Table de communion (M.H.)",
                    body: "Style Louis XV en chêne sculpté, offerte en 1731 par Alexandre Van De Walle, curé. L'abbé Blanckaert la fait exécuter en 1763. Dix panneaux figuratifs représentent le mystère de l'Eucharistie (Ancien et Nouveau Testament). En 1881, agrandissement du chœur avec recul de la partie centrale."
                },
                {
                    n: 5, x: 43.7, y: 16.8,
                    title: "Les stalles",
                    body: "Style néogothique, réalisées par les ateliers Collesson à Wormhout (nombreuses œuvres dans les églises de Flandre). Mises en place en 1863 après agrandissement du chœur."
                },
                {
                    n: 6, x: 75.3, y: 40.7, spots: [{ x: 22.7, y: 56.3 }, { x: 75.3, y: 56.3 }],
                    title: "Les six confessionnaux (M.H.)",
                    body: "Trois confessionnaux rectangulaires de 1731, décor rocaille, donnés par le curé Alexandre Van De Walle. Trois autres galbés, style baroque, plutôt de la fin du XVIIIᵉ siècle."
                },
                {
                    n: 7, x: 22.4, y: 27.6, spots: [{ x: 77.9, y: 27.6 }, { x: 21.8, y: 40.7 }],
                    title: "Les six confessionnaux (M.H.) — suite",
                    body: "Trois confessionnaux rectangulaires de 1731, décor rocaille, donnés par le curé Alexandre Van De Walle. Trois autres galbés, style baroque, plutôt de la fin du XVIIIᵉ siècle."
                },
                {
                    n: 8, x: 67.8, y: 23.1,
                    title: "Chaire à prêcher",
                    body: "Style Empire, chêne coloré acajou. Donnée en 1841 par Ignace Coudeville, marguillier. Démontée en 1966 : la cuve est conservée dans l'abside sud, avec la statue de saint Pierre qui lui servait de support."
                },
                {
                    n: 9, x: 22.1, y: 69.1, spots: [{ x: 74.4, y: 69.1 }],
                    title: "Les portails",
                    body: "Vers 1723, Alexandre Van De Walle élève deux nouveaux portails en chêne se faisant face à l'entrée de l'église, de style Renaissance."
                },
                {
                    n: 10, x: 52, y: 74.2,
                    title: "Tribune, buffet d'orgue et orgue",
                    body: "Seul subsiste le positif d'un instrument antérieur, mis en place en 1823. Le grand orgue actuel a été racheté à l'église Saint-Éloi de Dunkerque et installé en 1856. Restauration complète en 1912 par Frédéric Loncke, facteur d'orgues."
                }
            ]
        },
        arneke: {
            plan: 'images/eglises-plans/arneke.jpg',
            points: [
                {
                    n: 1, x: 54.5, y: 14.5,
                    title: "Le retable-lambris du maître-autel (M.H.)",
                    body: "Il date de 1730, le tabernacle et l'exposition tournante à trois niches de 1772, l'autel est du XIXᵉ siècle. Le retable est dédié à saint Charles Borromée (1538-1584) représenté vêtu de son habit rouge de cardinal. Neveu et secrétaire du pape Pie IV, il s'est fortement investi dans l'application des décisions du Concile de Trente (1545-1563). Il a écrit un ouvrage donnant toutes les indications pour la reconstruction des églises et la façon de les meubler. Au sommet de la voûte, saint Martin en apothéose est entouré de ses attributs de militaire et d'évêque. Saint Pierre et saint Paul, piliers de l'Église, figurent en bas-reliefs dans des médaillons. Deux autres grands tableaux : celui de saint Vincent de Paul, fondateur d'ordres et celui de saint Jean Népomucène, apôtre de la confession, correspondent bien à l'esprit de la Contre-Réforme. Les petits tableaux sont ceux des saints protecteurs de la famille donatrice : les Stove. Pour les parents, on reconnaît sainte Sylvie et saint François d'Assise (sur votre droite), sainte Sophie et saint Charles Borromée pour les enfants (sur votre gauche).<br><br>Les vitraux réalisés en 1884 par les ateliers Latteux-Bazin de Mesnil-Saint-Firmin dans l'Oise, représentent le prophète Élie en fuite vers le mont Horeb et nourri par un ange, sur votre droite. Les compagnons d'Emmaüs reconnaissant le Christ lors du repas qu'ils partagent avec Lui, sur votre gauche. Les stalles sont de 1750 et leurs miséricordes de 1850. La table de communion de 1780, en fer forgé, provient de l'atelier Looten et Duhoo d'Arnèke. Le nouvel autel a été créé par les ateliers bénédictins de Wisques."
                },
                {
                    n: 2, x: 33.5, y: 21.5,
                    title: "Le retable nord (M.H.)",
                    body: "Réalisé en 1715 par Jacques Wailsch de Saint-Omer, il est dédié à la Vierge Marie. En 1874, l'autel a été transformé en autel-tombeau où figure le Cœur Sacré de la Vierge entouré d'une couronne de roses. Le tableau d'autel, encadré de colonnes torses, a pour thème la remise du Rosaire à saint Dominique, œuvre d'Alexis Bafcoop, peintre résidant à Cassel, réalisée en 1876. Au couronnement se trouve une statue de la Vierge à l'Enfant du XVIIᵉ ou XVIIIᵉ siècle. Le vitrail (Latteux-Bazin, 1884) nous montre le pape Pie V remerciant la Vierge du Rosaire pour la victoire des catholiques sur les musulmans turcs lors de la célèbre bataille navale de Lépante en 1571."
                },
                {
                    n: 3, x: 78, y: 22,
                    title: "Le retable sud (M.H.)",
                    body: "Également réalisé en 1715 par Jacques Wailsch, il est pratiquement identique au retable nord. Dédié à saint Nicolas à l'origine, il subit quelques transformations en 1874 pour le dédier au Sacré-Cœur de Jésus. Le tableau d'autel, réalisé en 1874 par Alexis Bafcoop, nous montre l'apparition en 1673 du Christ à Marguerite-Marie Alacoque, religieuse au couvent de la Visitation à Paray-le-Monial. Sur le vitrail, Henri de Belsunce, évêque de Marseille, consacre son diocèse au Sacré-Cœur après la fin de la peste qui y sévit de 1720 à 1722."
                },
                {
                    n: 4, x: 66.5, y: 48.5,
                    title: "Le retable de saint Gohard (M.H.)",
                    body: "XVIIIᵉ siècle. Ce moine bénédictin, né en Bavière en 960, fut ordonné prêtre en 993. Refusant la charge d'abbé par souci d'humilité, il se sauva de nuit de son abbaye. Moine-pèlerin sur les routes d'Europe, il vint se mettre sous la protection de l'évêque de Thérouanne qui le chargea de prêcher dans les paroisses de Morinie (nom de notre région, à l'époque). En 999, les moines bénédictins de Bergues lui demandèrent de prendre en charge la cure d'Arnèke alors vacante. Puis en 1002, sous la contrainte, il regagna son abbaye dont il devint l'abbé. En 1022, Henri II le nomma évêque d'Hildesheim. Il mourut à l'âge de 75 ans. Il réalisa des miracles de son vivant et après sa mort. Il fut canonisé en 1131. On vient le « servir » à Arnèke depuis le XIIIᵉ siècle afin d'obtenir la guérison des maladies des os, du sang et des maladies incurables. Une neuvaine, qui déplaçait autrefois d'immenses foules, a lieu chaque année du 1er au 9 mai.<br><br>L'autel, en marbre de Belgique, porte les attributs de l'évêque sur un médaillon. Le tableau d'autel représente un prêtre réfractaire qui, pendant la Révolution, donne la communion à des fidèles en piteux état de santé. Un buste du saint est placé sur l'autel. Le vitrail (Latteux-Bazin, 1885) sur votre droite nous montre la translation à Arnèke d'une deuxième relique du saint en 1863, offert par Marie Van Kempen."
                },
                {
                    n: 5, x: 42.5, y: 48.5,
                    title: "Le retable de Jésus flagellé (M.H.)",
                    body: "XVIIIᵉ siècle, de même composition que le retable de saint Gohard, il a été offert par la chambre de rhétorique."
                },
                {
                    n: 6, x: 61.5, y: 55.5,
                    title: "La chaire (I.M.H.)",
                    body: "De 1780, elle est l'œuvre de François Spillemaker, maître-ébéniste à Arnèke. Sur la rampe d'escalier est sculpté un épisode de la vie du petit prophète Jonas. Les quatre évangélistes accompagnés de leur attribut sont représentés sur les panneaux de la cuve : saint Jean et l'aigle, saint Luc et le taureau, saint Marc et le lion, saint Matthieu et l'ange. Sous l'abat-voix figure la colombe du Saint-Esprit et au sommet, saint Jean-Baptiste."
                },
                {
                    n: 7, x: 28, y: 36.5, spots: [{ x: 81.5, y: 37.5 }, { x: 28, y: 52 }, { x: 81.5, y: 53 }],
                    title: "Les confessionnaux (I.M.H.)",
                    body: "Ceux plus proches du chœur sont de Spillemaker (1780), les deux autres de Louis Binet, maître-ébéniste à Arnèke (1865)."
                },
                {
                    n: 8, x: 54.5, y: 76.5,
                    title: "Le buffet d'orgue (I.M.H.)",
                    body: "Œuvre de Spillemaker, il porte un chronogramme qui nous indique la date de 1771 et la donation par le curé Charles Van Kempen. En 1899, on y a installé un orgue Neuville de Rexpoëde."
                },
                {
                    n: 9, x: 68.5, y: 73.5,
                    title: "Les lambris (I.M.H.)",
                    body: "En chêne et de style Louis XV, ils ornent les murs ; avec la soixantaine de statuettes, ils proviennent de l'atelier Couterie de Lille. Ils ont été posés en 1850 et 1898."
                },
                {
                    n: 10, x: 29, y: 48.5, spots: [{ x: 81.5, y: 73 }],
                    title: "Les vitraux",
                    body: "Les vitraux du Christ au mont des Oliviers et des Âmes du Purgatoire ont été refaits en 1960."
                },
                {
                    n: 11, x: 28, y: 55, spots: [{ x: 37.5, y: 74 }, { x: 75, y: 73.5 }],
                    title: "Les tableaux (I.M.H.)",
                    body: "Le triptyque de l'Assomption de la Vierge Marie de 1594 est une peinture de l'école flamande. L'Annonciation date de la fin du XVIIᵉ ou du début du XVIIIᵉ siècle. Une deuxième Assomption date probablement du XVIIIᵉ siècle."
                },
                {
                    n: 12, x: 81.5, y: 61,
                    title: "Le chemin de croix",
                    body: "Le chemin de croix date de 1839."
                },
                {
                    n: 13, x: 93, y: 64.5,
                    title: "La Mise au tombeau (I.M.H.)",
                    body: "Construite en 1867 et dont les personnages ont été sculptés par Louis Binet, elle se situe dans une petite grotte gardée par un soldat romain et un juif."
                },
                {
                    n: 14, x: 29, y: 74,
                    title: "La grotte de Lourdes",
                    body: "Elle a pris sa place au fond de l'église en 1898."
                },
                {
                    n: 15, x: 17, y: 64.5,
                    title: "Les fonts baptismaux",
                    body: "Ils étaient situés dans une chapelle rajoutée au XIXᵉ siècle, dédiée maintenant au monument aux morts. La cuve se trouve sur votre droite quand vous entrez dans l'église. La cérémonie de baptême se déroule maintenant près de la table de communion."
                }
            ]
        },
        bambecque: {
            plan: 'images/eglises-plans/bambecque.jpg',
            points: [
                {
                    n: 1, x: 48.1, y: 12.5,
                    title: "Retable du maître-autel (M.H.)",
                    body: "Retable-lambris polychrome du milieu du XVIIIᵉ siècle, il intègre cinq baies, la baie centrale occultée et transformée en niche abrite une statue de saint Omer ; de part et d'autre des statues de saint François-Xavier et de saint François de Sales. Dans le cul-de-four, une exaltation du Saint Sacrement et en médaillons, saint Dominique et saint François d'Assise. L'iconographie du retable évoque le thème de la conversion.<br><br>L'autel du XIXᵉ siècle est surmonté d'un tabernacle avec exposition tournante.<br><br>Les vitraux remarquables, représentant la Nativité, la Résurrection, la Pentecôte et la Toussaint, datés de 1878, sont dus à l'atelier Jules Boulanger de Rouen."
                },
                {
                    n: 2, x: 26.3, y: 17.5,
                    title: "Retable nord (M.H.)",
                    body: "Édifié en 1703, ce retable polychrome dédié à la Vierge a été profondément remanié au XIXᵉ siècle, avec la réalisation d'une grotte de Lourdes actuellement dissimulée par un rideau et un tableau représentant le couronnement de Marie ; ainsi évoluent les dévotions. Le thème originel évoquait Marie et les chrétiens devant la mort. De part et d'autre, sont présentées sainte Catherine d'Alexandrie et sainte Barbe, patronnes de la confrérie de la bonne mort."
                },
                {
                    n: 3, x: 68.9, y: 17.5,
                    title: "Retable sud (M.H.)",
                    body: "Dédié à saint Blaise, il est du XVIIIᵉ siècle ; sa composition est identique à celle du retable nord. Il comprend trois travées étagées sur trois niveaux. Au centre, la statue de saint Blaise, évêque et martyr, déchiré par des peignes à carder avant d'être décapité : il est invoqué comme protecteur par les cardeurs, les teilleurs de lin et les meuniers et aussi contre les maux de gorge. Les travées latérales abritent les statues de saint Éloi et saint Nicolas. Dans le fronton, est représentée la Foi terrassant l'hérésie figurée par une hydre à trois têtes. Ce thème est complété par le lambris d'accompagnement où sont représentées en médaillons les autres vertus théologales (la première étant la Foi) : l'Espérance avec une ancre et la Charité avec un cœur.<br><br>L'autel, du XIXᵉ siècle, est surmonté d'un remarquable tabernacle à colonnes torses du début du XVIIIᵉ siècle provenant de l'autel de la Vierge, sommé d'une exposition tournante."
                },
                {
                    n: 4, x: 40.9, y: 56,
                    title: "La chaire de vérité (M.H.)",
                    body: "En chêne, datée de 1732, sur la cuve sont représentés le Christ et des scènes de la vie de saint Jean-Baptiste : sa prédication, sa méditation dans le désert et sa décollation (décapitation).<br><br>Entre les panneaux, les vertus cardinales sont figurées par des « putti » : la Justice, la Prudence, la Tempérance et la Force.<br><br>Sous la cuve, sont sculptés les symboles des quatre évangélistes : lion (Marc), bœuf (Luc), aigle (Jean) et homme (Matthieu)."
                },
                {
                    n: 5, x: 41.4, y: 20.5, spots: [{ x: 55.4, y: 20.5 }, { x: 35.2, y: 38.5 }, { x: 59.5, y: 38.5 }],
                    title: "Les stalles (M.H.)",
                    body: "Les stalles dans le chœur, les bancs d'œuvre* devant les gros piliers du vaisseau central et le banc du suisse au fond de l'église côté sud, de même facture, sont de 1633.<br><br>*Banc réservé aux notables du village, qui géraient les biens de l'église, appelés marguilliers."
                },
                {
                    n: 6, x: 22.2, y: 32,
                    title: "Les confessionnaux (M.H.)",
                    body: "Celui proche du retable de la Vierge, en chêne, daté de 1699, est d'un style maniériste remarquable. Composé de trois niches séparées par des colonnes torses, il est accompagné d'un lambris de la même époque. Côté sud, un confessionnal plus classique, date de 1720."
                },
                {
                    n: 7, x: 21.1, y: 49,
                    title: "Mise au tombeau",
                    body: "Thème fréquent dans les églises flamandes, mais généralement en bois. Ici, cet ensemble daté de 1697 a été réalisé en terre cuite polychrome, avec une très grande maîtrise dans l'expression des sentiments et restauré en 1865.<br><br>Autour du Christ mort : la Vierge, les saintes femmes, saint Jean, Nicodème, Joseph d'Arimathie."
                },
                {
                    n: 8, x: 47.6, y: 77,
                    title: "Le buffet d'orgue",
                    body: "Fin XVIIIᵉ siècle. La tribune et le positif de 1879 ont été réalisés par Collesson. L'instrument 1889-1890 est dû aux facteurs d'orgue Neuville frères de Rexpoëde."
                },
                {
                    n: 9, x: 35.7, y: 72.5, spots: [{ x: 59.5, y: 72.5 }],
                    title: "Les statues au fond de l'église",
                    body: "De facture récente, elles représentent deux missionnaires du XIXᵉ siècle : saint Rémi Isoré de Bambecque et le bienheureux Frédéric Janssoone de Ghyvelde."
                },
                {
                    n: 10, x: 22.7, y: 76, spots: [{ x: 69.9, y: 76 }],
                    title: "Trois tableaux",
                    body: "Au revers de la façade sud-ouest : panneau de bois peint représentant la Crucifixion (1624).<br><br>Mur sud : Dormition de la Vierge de Beeckmans (1703) provenant du retable nord.<br><br>Le culte rendu à saint Blaise, toile du XVIIIᵉ."
                },
                {
                    n: 11, x: 31.5, y: 76,
                    title: "Les fonts baptismaux",
                    body: "Du XVIIIᵉ siècle. Clôture en chêne de style rocaille. Représentation du Baptême du Christ.<br><br>Vasque de marbre rose au pied de pierre, le couvercle teint imitant le marbre rose.<br><br>Une potence fixée au mur permet de maintenir le couvercle levé."
                }
            ]
        },
        bavinchove: {
            plan: 'images/eglises-plans/bavinchove.jpg',
            points: [
                {
                    n: 1, x: 50.3, y: 11.6,
                    title: "Le maître-autel",
                    body: "Sa structure du XVIIIᵉ possède des éléments du XIXᵉ siècle. Un petit retable se situe à l'emplacement de la baie aveugle du fond de la chapelle axiale. Dans la niche, se trouve la statue en bois de saint Omer, habillé en évêque avec sa mitre et sa crosse, portant dans la main droite la maquette de l'abbaye Saint-Bertin de Saint-Omer. Le tabernacle, à exposition tournante à trois faces (M.H.), date d'environ 1795. L'ensemble est éclairé par des vitraux représentant les Pères de l'Église d'Orient et d'Occident."
                },
                {
                    n: 2, x: 21.4, y: 28.9,
                    title: "Le retable nord (M.H.)",
                    body: "Le retable, en bois sculpté polychrome et doré, est daté du XVIIIᵉ siècle. Il est dédié à la Vierge Marie ; le tableau de Marc Augustin Coucke, peintre casselois, représente la Vierge remettant le Rosaire à saint Dominique. L'autel, probablement d'origine, possède un antependium en tissu. De chaque côté du tableau, sont placées les statues de saint Pierre et saint Paul et dans la niche supérieure, une Vierge à l'enfant, en bois polychrome du XVIIIᵉ siècle. À ses pieds, des animaux marins.<br><br>Sur le mur nord, près du retable, un tableau représente la Vierge à l'enfant entourée d'anges, portant les armoiries des familles de la paroisse. Date portée : 1622."
                },
                {
                    n: 3, x: 78.5, y: 29.7,
                    title: "Le retable sud (M.H.)",
                    body: "Traditionnellement consacré au culte des saints, le retable sud est en bois sculpté polychrome et doré, il date du XVIIIᵉ siècle. Il est dédié à saint Nicolas qui est représenté dans la niche supérieure avec le baquet-saloir et les trois enfants. Le tableau d'autel est une toile du XVIIIᵉ siècle représentant le martyre de sainte Catherine d'Alexandrie. Les statues en bois, de la même époque, représentent saint Antoine l'ermite et saint Jacques le Majeur.<br><br>Les retables nord et sud ont une structure identique de manière à présenter une symétrie d'ensemble."
                },
                {
                    n: 4, x: 15.0, y: 92.3,
                    title: "La chaire",
                    body: "La chaire, qui a été déplacée dans l'ancien baptistère, date du XVIIIᵉ siècle. Les emblèmes des quatre évangélistes figurent sur les quatre panneaux de la cuve et sur la rampe, les trois vertus théologales."
                },
                {
                    n: 5, x: 67.8, y: 29.7,
                    title: "La mise au tombeau",
                    body: "Thème fréquent dans les églises flamandes, la mise au tombeau est en bois polychrome datant du XVIIIᵉ siècle. La Vierge, sainte Marie-Madeleine, saint Joseph d'Arimathie et un ange, y sont représentés en buste, avec le Christ."
                },
                {
                    n: 6, x: 49.8, y: 88.0,
                    title: "L'orgue",
                    body: "Le buffet d'orgue en chêne sculpté, style Louis XV, date du XVIIIᵉ siècle, la balustrade de 1780.<br><br>De nombreux tableaux sont inscrits à l'inventaire depuis 1967, dont le <em>Jugement dernier</em> datant de 1757, <em>Sainte Anne et la Vierge Marie</em>, <em>Jésus au mont des Oliviers</em>."
                }
            ]
        },
        blaringhem: {
            plan: 'images/eglises-plans/blaringhem.jpg',
            points: [
                {
                    n: 1, x: 51.6, y: 5.1,
                    title: "Le nouveau maître-autel",
                    body: "De 1895, il est dédié à saint Martin et comprend également les statues de saint Dominique et sainte Catherine de Sienne.<br><br>Le devant de l'autel représente les symboles eucharistiques : l'Agneau aux sept sceaux, le calice, le blé, le raisin et le pélican. Le tabernacle est surmonté d'une exposition."
                },
                {
                    n: 2, x: 18.3, y: 21.8,
                    title: "Retable de la Vierge au nord",
                    body: "On y retrouve les statues de Notre-Dame de Grâce, sainte Philomène et sainte Barbe."
                },
                {
                    n: 3, x: 82.9, y: 21.8,
                    title: "Le retable sud",
                    body: "Il est dédié à saint Joseph, de la lignée de David. Figurent également saint Benoît Labre et saint François-Xavier."
                },
                {
                    n: 4, x: 51.6, y: 17.9,
                    title: "Les vitraux",
                    body: "Les six anciens vitraux du chœur de 1885 ont été préservés, deux d'entre eux représentent :<br><br>À droite, l'apparition de la Vierge à Lourdes à sainte Bernadette en 1858.<br><br>À gauche, l'apparition du Sacré-Cœur de Jésus à sainte Marguerite-Marie Alacoque, entre 1673 et 1675.<br><br>Les autres vitraux détruits par les bombardements ont été remplacés après 1944."
                },
                {
                    n: 5, x: 13.8, y: 54.7,
                    title: "L'autel de Notre-Dame du Rosaire",
                    body: "Il s'agit d'un ensemble composé de quatre personnages. Au centre la Vierge Marie dominant et protégeant le monde figuré par une mappemonde. À sa droite, saint Dominique recevant de sa main le rosaire, à sa gauche, sainte Catherine de Sienne, docteur de l'Église. Enfin un chien porte dans sa gueule une torche allumée.<br><br>En 1901 l'autel est enrichi d'une peinture murale où quinze médaillons énumèrent les mystères du rosaire."
                },
                {
                    n: 6, x: 14.2, y: 32.5, spots: [{ x: 88.5, y: 32.9 }, { x: 14.0, y: 66.4 }, { x: 88.0, y: 67.5 }],
                    title: "Les confessionnaux",
                    body: "Au nombre de quatre. Deux ont été ajoutés au XVIIIᵉ siècle à ceux provenant de l'abbaye de Woestine. Ils se distinguent par leur fronton avec sainte Marie-Madeleine pour l'un et saint Pierre tenant les clés du royaume et le coq, symbole de son reniement, pour l'autre."
                },
                {
                    n: 7, x: 19.8, y: 74.4,
                    title: "La chaire du XIXᵉ siècle",
                    body: "Les quatre évangélistes y figurent sur les panneaux de la cuve avec leurs attributs. D'autres statuettes posées sur les socles aux angles de chaque panneau présentent une image de l'Église : <em>catholique</em> avec le pape, <em>apostolique et diocésaine</em> avec l'évêque, enseignante et priante avec deux religieux, un dominicain et un moine et locale avec saint Martin."
                },
                {
                    n: 8, x: 50.5, y: 75.6,
                    title: "L'orgue classé en 1982",
                    body: "Le mécanisme, plusieurs fois remanié, daterait de 1710-1725 et serait attribué au facteur d'orgue d'Ypres, Jacobus Van Den Eyde.<br><br>En 1877, le facteur d'orgue A. Heidenreich construit un orgue entièrement neuf.<br><br>La tribune chantournée, portée par des colonnes torses en chêne et le buffet d'orgue, datent du XVIIᵉ siècle. Le buffet est flanqué d'ailerons à volutes, orné d'une grande figure d'ange à mi-corps jouant du serpent. La tourelle centrale porte une représentation du pape Grégoire le Grand."
                },
                {
                    n: 9, x: 87.9, y: 53.4,
                    title: "L'autel de saint François",
                    body: "Sur l'autel, la statue dite « vision de saint François » représente le saint étreignant la croix et communiant à la Passion du Christ, dont il reçut les stigmates. En 1901, il est enrichi d'une peinture murale qui représente les trois vœux d'un religieux : chasteté, pauvreté et obéissance."
                },
                {
                    n: 10, label: '10-1', x: 15.8, y: 28.3,
                    title: "Les tableaux — Le martyre des sept frères Maccabées (M.H.)",
                    body: "Une mère voit six de ses fils suppliciés et encourage le septième à subir le même sort que ses frères."
                },
                {
                    n: 10, label: '10-2', x: 15.5, y: 41.0,
                    title: "Les tableaux — L'adoration des bergers",
                    body: "Peinture sur toile attribuée au Barsan mais qui proviendrait de l'abbaye de Woestine. Les armoiries qui couronnent le cadre sont celles de la dernière abbesse Marie-Barbe Briois."
                },
                {
                    n: 10, label: '10-3', x: 15.3, y: 63.0,
                    title: "Les tableaux — La Vierge remettant le rosaire à saint Dominique",
                    body: "Peinture sur toile qui aurait fait partie d'un retable."
                },
                {
                    n: 10, label: '10-4', x: 61.8, y: 74.2,
                    title: "Les tableaux — La mise au tombeau (M.H.)",
                    body: "Peinture sur bois, datée du XVIIᵉ siècle, elle représente la 14ᵉ station du chemin de croix."
                },
                {
                    n: 10, label: '10-5', x: 87.6, y: 63.2,
                    title: "Les tableaux — Saint Nicolas apparaît en rêve à Constantin",
                    body: "Saint Nicolas apparaît en rêve à Constantin pour sauver les trois soldats. Signé TJ Boulogne, daté de 1823 (S.M.H.)."
                },
                {
                    n: 10, label: '10-6', x: 88.0, y: 41.8,
                    title: "Les tableaux — La mort du bienheureux Joscio (M.H.)",
                    body: "Peinture sur toile de J. F. Lemaire du XVIIIᵉ siècle, dernier abbé de l'abbaye Saint-Bertin."
                },
                {
                    n: 10, label: '10-7', x: 87.7, y: 28.4,
                    title: "Les tableaux — L'adoration des bergers",
                    body: "Sur le cadre est marqué « Donné par le roi en 1821 ». Il s'agit d'une copie d'un tableau du XVIIIᵉ."
                }
            ]
        },
        boeseghem: {
            plan: 'images/eglises-plans/boeseghem.jpg',
            points: [
                {
                    n: 1, x: 19.5, y: 15.8,
                    title: "Retable de la Vierge",
                    body: "Certains sont tentés d'y voir l'ancien maître-autel. Il s'agit d'un bel ensemble avec tabernacle et exposition tournante à trois niches. Il s'agit probablement d'une recomposition avec des éléments des XVIIIᵉ et XIXᵉ siècles, réalisée lors des travaux de 1904-1906 au cours desquels on a pu introduire la statue de la Vierge."
                },
                {
                    n: 2, x: 81.9, y: 16.0,
                    title: "Retable du Sacré-Cœur",
                    body: "Il est possible, comme le retable de la Vierge, qu'il soit le produit d'un assemblage de plusieurs époques ; mais il pourrait s'agir aussi d'un retable du XIXᵉ siècle."
                },
                {
                    n: 3, x: 90.9, y: 94.3,
                    title: "Chapelle Sainte-Barbe",
                    body: "Un authentique retable plat occupe le revers de la façade. Composé de trois travées séparées par deux colonnes cannelées, il se prolonge jusqu'à la voûte par un décor peint, simulant une tenture drapée. Ce décor met en valeur une niche qui abrite la statue de saint Benoît-Joseph Labre (1748-1783). Des éléments plus anciens, probablement du XVIIIᵉ siècle, ont été remployés, grâce à la générosité des membres de la famille Justice-Dequerne en 1855. Leurs noms sont inscrits sur une plaque insérée dans le carrelage noir de la chapelle."
                },
                {
                    n: 4, x: 10.0, y: 93.9,
                    title: "Chapelle Saint-Nicolas",
                    body: "C'est la partie la plus ancienne de l'église. L'extérieur présente une frise décorative avec des animaux fantastiques, une niche au-dessus d'une petite porte et des moulures de fenêtres du XVᵉ siècle.<br><br>L'intérieur offre un beau retable sans éléments rapportés. Le tableau d'autel représentant saint Nicolas est l'œuvre du chanoine Paul Pruvost, réalisée dans les années 1930-1950. Dans la partie supérieure se trouvent les armoiries de Flandre et de Lorraine.<br><br>Une statue du même saint, placée sur un socle à gauche, est une œuvre du XVIIIᵉ siècle."
                },
                {
                    n: 5, x: 14.0, y: 32.0, spots: [{ x: 87.4, y: 31.8 }],
                    title: "Les boiseries",
                    body: "Sur la partie inférieure des murs, elles constituent un bel exemple rocaille certainement d'origine."
                },
                {
                    n: 6, x: 38.8, y: 66.4,
                    title: "La chaire",
                    body: "Datée de 1748, elle comporte des éléments peut-être plus anciens. La date pourrait être celle d'une restauration."
                },
                {
                    n: 7, x: 90.4, y: 82.4,
                    title: "Les fonts baptismaux",
                    body: "Taillés dans une pierre carbonifère, ils présentent le profil du XVIᵉ siècle dans la mouluration de la cuve octogonale."
                },
                {
                    n: 8, x: 49.5, y: 94.8,
                    title: "L'orgue",
                    body: "Sa construction date de 1834. Il a été déplacé en 1907 en raison du « retournement » de l'église, transformé en 1933, remis en état en 1958 et restauré en 2007. Le buffet, très simple, est composé de trois tourelles."
                },
                {
                    n: 9, x: 51.3, y: 5.9, spots: [{ x: 91.4, y: 89.8 }],
                    title: "Les vitraux",
                    body: "Dans le chœur se trouvent trois vitraux qui relatent la vie et la mort de saint Léger. Ils ont été réalisés en 1904, œuvre du maître verrier Louis Kock de Beauvais. Dans la chapelle de sainte Barbe, un vitrail commandé après la Seconde Guerre mondiale représente l'apparition de Notre-Dame de Lourdes."
                }
            ]
        },
        bollezeele: {
            plan: 'images/eglises-plans/bollezeele.jpg',
            points: [
                {
                    n: 1, x: 49.4, y: 10.0,
                    title: "Le retable de l'abside centrale",
                    body: "Il date de la seconde moitié du XVIIIᵉ siècle. C'est un retable-lambris. Sa structure est en bois résineux, les décors et la statuaire sont en peuplier et en tilleul. Le maître-autel est surmonté d'un tabernacle et d'une exposition tournante, datés de 1829."
                },
                {
                    n: 2, x: 28.2, y: 17.1,
                    title: "Le retable de l'abside nord",
                    body: "Dédié à Notre-Dame de la Visitation, il date du début du XVIIIᵉ siècle, de style baroque, probablement réalisé à Saint-Omer. Il est formé d'une travée, en bois polychrome encadré de deux paires de colonnes torses, dites habitées, car on peut y distinguer un écureuil et des oiseaux. Les vies de Jésus et de sa Mère sont représentées dans les six bas-reliefs de la prédelle et dans les petits médaillons des gradins d'autel."
                },
                {
                    n: 3, x: 68.7, y: 15.4,
                    title: "Le retable de l'abside sud",
                    body: "Dédié à saint Nicolas, il date de 1779 (date portée). Le tableau d'autel encadré par deux colonnes torses en retrait, représente l'élection de saint Nicolas à l'évêché de Myre. Dans les gradins d'autel, la passion du Christ est représentée dans des petits médaillons."
                },
                {
                    n: 4, x: 10.3, y: 41.5,
                    title: "Le retable du transept nord",
                    body: "Il fut à l'origine dédié à sainte Anne puis à la Sainte Famille. Daté de 1619, il est le plus ancien retable structuré de la Flandre française. C'est un retable d'une seule travée avec un étirement vertical caractéristique du XVIIᵉ siècle. Le tableau d'autel représente un groupe sculpté de la Sainte Famille ; au-dessus, sainte Anne et la Vierge et au sommet une statue de sainte Catherine d'Alexandrie. À la prédelle, des textes en langue flamande relatent l'édification et l'entretien du retable."
                },
                {
                    n: 5, x: 87.3, y: 41.5,
                    title: "Le retable du transept sud ou retable de la Résurrection",
                    body: "Il date du XVIIIᵉ siècle. La peinture faux marbre blanc et noir rappelle la grande tradition anversoise. Sous l'autel, une mise au tombeau. Au niveau de la prédelle, les instruments de la passion. Au couronnement, au centre un ange tient la croix glorieuse, à droite un autre tient les tables de la Loi, à gauche un troisième ange porte le calice, signe de la Nouvelle Alliance."
                },
                {
                    n: 6, x: 49.8, y: 28.1,
                    title: "La table de communion",
                    body: "En fer forgé, elle a été probablement offerte par la famille Vitse."
                },
                {
                    n: 7, x: 26.8, y: 55.9, spots: [{ x: 71.1, y: 55.9 }, { x: 26.8, y: 71.5 }, { x: 71.1, y: 71.5 }],
                    title: "Les confessionnaux",
                    body: "Les quatre confessionnaux, identiques, datent de la fin du XIXᵉ siècle."
                },
                {
                    n: 8, x: 45.3, y: 49.1,
                    title: "La chaire de vérité",
                    body: "La cuve date de la fin du XVIIᵉ siècle. Les symboles des évangélistes alternent avec les panneaux sur lesquels on peut distinguer les visages du Christ, de la Vierge autour de saint Wandrille."
                },
                {
                    n: 9, x: 48.8, y: 88.3,
                    title: "L'orgue",
                    body: "L'orgue a été construit en 1679-1680 par Jan Van Belle, facteur d'orgues à Ypres. En 1857, le facteur Van Peteghem renouvelle la partie instrumentale en conservant une partie des tuyaux d'origine (XVIIᵉ siècle), buffet XVIIᵉ siècle.<br><br>Le chemin de croix est l'œuvre de Joseph Alexis Bafcop, peintre originaire de Cassel (1804-1895)."
                },
                {
                    n: 10, x: 71.1, y: 50.3,
                    title: "Les tableaux",
                    body: "Lors de sa restauration au XVIIIᵉ siècle, le chœur a été orné de boiseries et peintures figurant les épisodes de la vie de la Vierge Marie et du Christ. Ces toiles marouflées ont été exécutées par François Decanter entre 1753 et 1773."
                },
                {
                    n: 11, x: 43.5, y: 19.5, spots: [{ x: 55.1, y: 19.5 }],
                    title: "Les vitraux",
                    body: "Les vitraux du chœur, des absides ainsi que de la façade ouest sont l'œuvre du peintre-verrier brugeois Jules Dobbelaere (1856-1916). Ceux des bas-côtés et des transepts ont été réalisés par l'atelier brugeois de Camiel Annys D'hont. Dans le bas-côté nord, ils représentent les interventions et miracles de Notre-Dame de Bollezeele.<br><br>Ceux du bas-côté sud évoquent les différentes apparitions de la Vierge au XIXᵉ siècle et l'hommage rendu aux morts de la Première Guerre mondiale."
                }
            ]
        },
        borre: {
            plan: 'images/eglises-plans/borre.jpg',
            points: [
                {
                    n: 1, x: 48.2, y: 6.3,
                    title: "Le retable du maître-autel du XVIIIᵉ siècle",
                    body: "Il présente une architecture en baldaquin s'adaptant au cul-de-four de l'abside et englobant les vitraux. Dans la travée centrale, un tableau « ex-voto », don de la famille de Montmorency, seigneurs de Borre au XVIIᵉ siècle, représente le Christ en croix entouré de la Vierge Marie, de saint Jean et de Marie-Madeleine. Au bas du tableau, se trouvent, à gauche, les armoiries de Jean de Montmorency et, à droite, celles de son épouse Madeleine de Lens ; au centre, la devise de la famille « Sans faute » et la date 1621."
                },
                {
                    n: 2, x: 48.2, y: 9.9,
                    title: "Séparé du retable par un étroit passage",
                    body: "L'autel est du XIXᵉ siècle. Sur les gradins deux bustes-reliquaires avec leurs socles du XVIIIᵉ siècle représentent saint Nicolas et saint Antoine le Grand avec leurs attributs."
                },
                {
                    n: 3, x: 17.4, y: 25.2,
                    title: "Le retable nord",
                    body: "Toujours consacré à la Vierge Marie en Flandre, il est ici dédié à la Sainte Famille présentée dans une très vaste composition. De chaque côté de la travée centrale sont placées deux statues du XVIIIᵉ siècle de saint Dominique et de sainte Catherine de Sienne. Sur des consoles, deux statues en plâtre représentent sainte Catherine d'Alexandrie et sainte Apolline."
                },
                {
                    n: 4, x: 81.4, y: 25.6,
                    title: "Le retable sud",
                    body: "Il est traditionnellement consacré au culte des saints. De chaque côté de la travée centrale, deux statues représentent d'un côté l'ange gardien et de l'autre saint François d'Assise. Sur le tabernacle, une statue de la Vierge couronnée."
                },
                {
                    n: 5, x: 36.3, y: 25.2, spots: [{ x: 59.7, y: 25.2 }],
                    title: "Les stalles",
                    body: "Au nombre de six, elles sont du XVIIIᵉ siècle. Les sculptures représentent des têtes d'anges et, sur le devant des panneaux, des motifs sacerdotaux et musicaux."
                },
                {
                    n: 6, x: 49.4, y: 28.2,
                    title: "La table de communion",
                    body: "Réalisée à la manière du XVIIIᵉ siècle par A. Pollet et Ambroise Bafcop, respectivement menuisier et sculpteur à Cassel, elle porte la date de 1847."
                },
                {
                    n: 7, x: 59.7, y: 54.0,
                    title: "La chaire",
                    body: "Cette modeste église possède dans sa chaire de vérité un mobilier de qualité. Datant probablement de la fin du XVIIᵉ siècle, elle aurait été offerte, selon la tradition, par la famille de Montmorency. La cuve est soutenue par une figure féminine (la Foi ?), le genou gauche posé sur le livre de la Parole divine ; elle porte un calice dans sa main droite et sa main gauche semble porter la cuve."
                },
                {
                    n: 8, x: 34.9, y: 77.9,
                    title: "Le tableau",
                    body: "Il représente la consécration de saint Maclou, très vénéré dans la paroisse. Le texte flamand inscrit dans la partie inférieure signifie « Saint Maclou, priez pour nous et pour les petits enfants qui sont dans le besoin »."
                }
            ]
        },
        brouckerque: {
            plan: 'images/eglises-plans/brouckerque.jpg',
            points: [
                {
                    n: 1, x: 43.2, y: 9.2,
                    title: "Le retable du maître-autel",
                    body: "Le mobilier, en chêne, est essentiellement postérieur à la reconstruction. Il est dû, pour les retables et les stalles de style néo-gothique, au sculpteur hazebrouckois Gustave Pattein.<br><br>Inauguré en 1903, le retable du maître-autel est orné de deux statues en plâtre peint : saint Omer, patron de la paroisse et saint Winoc. L'iconographie de la prédelle évoque des scènes qui renvoient au sacrifice du Christ, le sacrifice d'Isaac dans l'Ancien Testament, l'agonie du Christ dans le Nouveau. Sur la cuve d'autel, séparée maintenant du retable, figure l'agneau aux sept sceaux."
                },
                {
                    n: 2, x: 19.0, y: 24.1,
                    title: "Le retable nord",
                    body: "Il est dédié à Notre-Dame du Rosaire. Les sculptures de la prédelle représentent l'Annonciation et la Présentation de la Vierge au temple."
                },
                {
                    n: 3, x: 67.3, y: 24.7,
                    title: "Le retable sud",
                    body: "Il est dédié à saint Joseph. Sur la prédelle, figurent le mariage de la Vierge et de Joseph et une scène de la vie de la Sainte Famille à Nazareth."
                },
                {
                    n: 4, x: 43.2, y: 23.4,
                    title: "La table de communion (fin XIXᵉ)",
                    body: "En chêne sculpté, elle est ornée sur les côtés de symboles eucharistiques : serpent d'airain enroulé autour de la croix, pains de propositions, manne, raisins de la Terre promise et au centre les symboles christiques : le pélican, l'agneau aux sept sceaux."
                },
                {
                    n: 5, x: 16.7, y: 29.0, spots: [{ x: 68.7, y: 29.0 }],
                    title: "Les stalles (XIXᵉ)",
                    body: "Elles portent des armoiries : au nord, celles de la donatrice, Marie-Louise Doncquer, au sud celles du pape Léon XIII."
                },
                {
                    n: 6, x: 50.7, y: 35.7,
                    title: "La chaire (XVIIIᵉ) (M.H.)",
                    body: "La chaire, antérieure à la reconstruction, est accolée à un pilier près du chœur ; elle ne possède plus d'abat-voix ni de dosseret, ce qui subsiste est de très belle facture. Les panneaux de la cuve représentent les quatre Pères de l'Église d'Occident (Jérôme, Ambroise, Augustin et Grégoire le Grand) ; la rampe sculptée de feuilles d'acanthe enroulées se termine par une tête d'oiseau."
                },
                {
                    n: 7, x: 16.7, y: 51.0, spots: [{ x: 68.7, y: 51.0 }],
                    title: "Les confessionnaux (M.H.)",
                    body: "En chêne, ils sont datés du XVIIIᵉ siècle et décorés de fleurs, fruits, guirlandes et pots à feu."
                },
                {
                    n: 8, x: 16.7, y: 78.8,
                    title: "Les fonts baptismaux",
                    body: "Leur cuve en marbre est d'origine (XVIᵉ siècle). Le couvercle semble postérieur, la potence pourrait être du XVIIIᵉ siècle."
                },
                {
                    n: 9, x: 41.8, y: 78.3,
                    title: "L'orgue (M.H.)",
                    body: "Son buffet en chêne (XVIIᵉ et XVIIIᵉ siècles) est d'une qualité de sculpture exceptionnelle, il provient de l'ancienne abbaye de Watten.<br><br>La tribune ajourée ornée d'instruments de musique repose sur des colonnes torses."
                },
                {
                    n: 10, x: 68.7, y: 78.3,
                    title: "Une mise au tombeau",
                    body: "Début XXᵉ, en bois polychrome, elle est incluse dans une architecture sculptée en forme d'autel surmontée d'un tabernacle."
                },
                {
                    n: 11, x: 61.4, y: 76.0,
                    title: "Les vitraux",
                    body: "Contemporains de la reconstruction de 1891, dans l'abside, au fond : la nativité, la crucifixion et la cène et l'ascension, sur les côtés, plus modernes : les saints anges gardiens, Gabriel, Michel et Raphaël.<br><br>Sur les vaisseaux latéraux, d'autres vitraux évoquent l'enseignement du Christ à travers les Béatitudes, les sacrements, la vie de sainte Thérèse de Lisieux et celle de saint Omer."
                },
                {
                    n: 12, x: 16.7, y: 71.4,
                    title: "L'autel de sainte Thérèse de l'Enfant-Jésus",
                    body: "Situé au mur nord, placé en 1948, il porte le nom des victimes de Brouckerque au cours des deux dernières guerres mondiales."
                },
                {
                    n: 13, x: 68.7, y: 71.4,
                    title: "L'autel de saint Omer",
                    body: "Il fait face à l'autel de sainte Thérèse, sur le mur sud."
                },
                {
                    n: 14, x: 22.1, y: 76.0, spots: [{ x: 35.8, y: 14.7 }],
                    title: "Les tableaux",
                    body: "Deux peintures sur toile sont placées au revers du mur ouest : Crucifixion et Baptême du Christ.<br><br>Une peinture sur bois, « Christ aux outrages », se trouve sur le mur nord du chœur."
                }
            ]
        },
        crochte: {
            plan: 'images/eglises-plans/crochte.jpg',
            points: [
                {
                    n: 1, x: 42.7, y: 22.4,
                    title: "Le retable du maître-autel (M.H.)",
                    body: "Ce retable plat, datable de la première moitié du XVIIIᵉ siècle, est en bois résineux peint en faux chêne. Il comprend trois travées individualisées par des colonnes à chapiteaux composites.<br><br>L'autel, en forme de sarcophage a été restauré au XIXᵉ siècle. Le médaillon représente les symboles eucharistiques. Il est surmonté d'un tabernacle et d'une exposition tournante qui datent de 1750 (date portée). Le tableau d'autel est une toile qui représente l'adoration de l'Eucharistie. Il est encadré par les statues de saint Jean-Baptiste et saint François d'Assise qui évoquent le thème de la conversion.<br><br>Sous le baldaquin, un groupe sculpté figure la Trinité. Au sommet on distinguera le pélican."
                },
                {
                    n: 2, x: 77.2, y: 22.2,
                    title: "Le retable sud (M.H.)",
                    body: "Ce retable, du début du XVIIIᵉ siècle, est de même structure que le retable du maître-autel et est dédié à saint Nicolas.<br><br>L'autel date du XIXᵉ siècle, au médaillon le Sacré-Cœur de Jésus. Il est surmonté d'un tabernacle. À la prédelle, deux bas-reliefs représentant, côté sud la Vierge Marie et côté nord le Christ. Pour le tableau d'autel, une toile contemporaine du retable représente le sacre épiscopal de saint Nicolas. La restauration en 2021 a révélé une inscription située sur le châssis du tableau : <em>« Ce tableau a été donné par Catherine De Slipper, épouse de Jean Brixce qui est décédée le 19 février 1705 »</em>. De part et d'autre de ce tableau, deux statues, qui ont conservé leur polychromie initiale, représentaient à l'origine saint Ambroise à gauche et saint Augustin à droite, deux Pères de l'Église latine. Mais en 1932, la statue de saint Augustin a été transformée en saint Éloi par l'adjonction d'une enclume, pour satisfaire le désir des cultivateurs de voir leur saint patron représenté dans l'église.<br><br>Sous le baldaquin, une statue polychrome de saint Georges, patron de la paroisse, terrassant le dragon."
                },
                {
                    n: 3, x: 17.1, y: 22.1,
                    title: "Le retable nord (M.H.)",
                    body: "Ce petit retable, de la fin du XVIIᵉ siècle, est à une seule travée. L'autel date du XIXᵉ siècle, au médaillon le cœur sacré de Marie. Il est surmonté d'un tabernacle qui date du XVIIIᵉ siècle. Son tableau d'autel encadré de colonnes torses, taillées dans la masse, représente l'adoration des mages. En 2020, lors de la restauration du tableau, est apparu le nom du donateur <em>« Dono dedit Sr Carolus Vermeersch 1711 »</em>."
                },
                {
                    n: 4, x: 86.1, y: 37.9,
                    title: "Le retable de 1642",
                    body: "En 2020, à la dépose du retable nord, l'entreprise Giordani a trouvé derrière celui-ci un autre retable plat.<br><br>Le décor polychrome d'origine, bien conservé, en trompe-l'œil faux marbre et pierre, représente une architecture en portique, animé de quelques têtes d'anges. Sur la base on trouve des armoiries et une inscription dans un cartouche avec la date et le nom du donateur : <em>« Ceci a été donné par Sieur Ghislain Lottin, maître des requêtes de sa majesté, conseiller du grand conseil à Malines et Dame Marie Blomme, son épouse. En l'année 1642 »</em>. Au-dessus de l'entablement le couronnement laisse voir « le miroir de la justice », invocation des Litanies de la Vierge, mais aussi délicat rappel de la profession du donateur."
                },
                {
                    n: 5, x: 17.4, y: 29.6, spots: [{ x: 42.7, y: 29.4 }, { x: 78.0, y: 29.4 }],
                    title: "La table de communion (M.H.)",
                    body: "En chêne, elle est composée de deux parties d'époques différentes. Le centre, sur un plan chantourné, est du XVIIIᵉ siècle. Les parties latérales sont du XIXᵉ siècle.<br><br>Des médaillons représentant des thèmes eucharistiques sont répartis sur ce mobilier."
                },
                {
                    n: 6, x: 12.3, y: 41.5, spots: [{ x: 88.0, y: 51.5 }],
                    title: "Les confessionnaux (M.H.)",
                    body: "Celui du côté sud est en chêne, à décor rocaille asymétrique avec dans le tympan le repentir de saint Pierre. On lui attribue la date de 1787. La partie supérieure des portes est du XIXᵉ.<br><br>Le confessionnal du côté nord est sans décor et est inséré dans les lambris. Le décor de la corniche en pointes de diamants nous laisse supposer qu'il pourrait dater de la deuxième partie du XVIIᵉ siècle."
                },
                {
                    n: 7, x: 29.4, y: 50.7,
                    title: "La chaire de vérité (M.H.)",
                    body: "En chêne, elle porte la date de 1748. Sur la cuve, reposant sur un cul-de-lampe massif, sont représentés les quatre évangélistes entourant le Christ (<em>salvator mundi</em>)."
                },
                {
                    n: 8, x: 53.9, y: 51.0,
                    title: "Le calvaire",
                    body: "Groupe sculpté en noyer, il date de 1843. Il a été créé en mémoire de Mme Rosalie Bailly."
                },
                {
                    n: 9, x: 17.5, y: 78.1,
                    title: "La cuve baptismale",
                    body: "En pierre, elle date de 1771 et est surmontée d'un couvercle en bois très ouvragé."
                },
                {
                    n: 10, x: 41.7, y: 75.2,
                    title: "La tribune",
                    body: "Elle comporte un petit bas-relief qui représente un « serpent », ancien instrument qui accompagnait les chants chorals."
                },
                {
                    n: 11, x: 18.5, y: 41.5,
                    title: "Le buste reliquaire de saint Hubert (M.H.)",
                    body: "Polychrome, placé au-dessus du confessionnal nord, il date du XVIIIᵉ siècle."
                },
                {
                    n: 12, x: 14.1, y: 33.5,
                    title: "La statue de saint Georges (M.H.)",
                    body: "Elle est en bois polychrome du XIXᵉ siècle, posée sur un kranz de procession."
                },
                {
                    n: 13, x: 81.5, y: 51.5,
                    title: "Les tableaux",
                    body: "Près du confessionnal sud, le tableau, peint par Joseph Dezitter en 1910, représente l'exécution de Maître Martin, curé réfractaire de Crochte, martyrisé et fusillé à Bergues le 8 septembre 1793.<br><br>L'autre tableau, représentant la Trinité, date de la fin du XVIIᵉ début XVIIIᵉ siècle. Il pourrait s'agir d'une copie d'un tableau de Gérard Seghers."
                },
                {
                    n: 14, x: 83.8, y: 76.8,
                    title: "Les vitraux",
                    body: "Les vitraux paraissent relever d'une même campagne d'installation dans les années 1890. La baie centrale de la façade ouest est en grisaille, avec la représentation de chaque figure de la Trinité dans les trois jours du réseau. C'est un don de Mme Achte-Tibouw (phylactère au centre dans la lancette centrale). Cette verrière date de 1902 et est signée Louis Koch, maître verrier beauvaisien."
                }
            ]
        },
        drincham: {
            plan: 'images/eglises-plans/drincham.jpg',
            points: [
                {
                    n: 1, x: 37.0, y: 5.1,
                    title: "Retable du maître-autel",
                    body: "Il s’agit d’un meuble de style néo-gothique caractéristique des œuvres de la fin du XIXᵉ siècle et début XXᵉ. L’autel droit présente une série d’arcatures de style gothique, une guirlande de fleurs orne la prédelle. Les deux niches latérales sont surmontées de pinacles et tourelles et abritent sainte Godelieve au sud et saint Wandrille au nord qui tient dans la main une maquette de l’abbaye dont il sera le fondateur. L’importante niche de la partie centrale pourrait correspondre à une exposition non tournante. Au-dessus de celle-ci, a été placée la statue du Sacré-Cœur dans une vaste niche couverte d’un dôme.<br><br>De part et d’autre des vitraux, représentant saint François d’Assise descendant le Christ de la Croix et Le Christ au jardin des Oliviers."
                },
                {
                    n: 2, x: 15.5, y: 13.0,
                    title: "Retable nord",
                    body: "Ce petit retable, entre le mur nord et le chœur est dédié à la Vierge Marie. Il est constitué d’éléments du XVIIᵉ et du XVIIIᵉ siècles. L’autel droit est constitué de trois panneaux peints faux-marbre. Au-dessus un décor de feuilles d’acanthe et d’angelots entourent un cartouche. La prédelle est décorée faux-marbre. La porte du tabernacle est ornée d’un calice surmonté d’une hostie. Le tableau d’autel représente Marie tenant l’enfant Jésus dans les bras et remettant le Rosaire à saint Dominique. Cette toile est signée P. Vanderveene, datée 1827 ou 1897. Au-dessus du fronton une Vierge à l’enfant. Le vitrail représente l’apparition de la Vierge à Bernadette Soubirous."
                },
                {
                    n: 3, x: 58.5, y: 13.0,
                    title: "Retable sud",
                    body: "En pendant du retable nord, ce retable date probablement du XVIIIᵉ siècle. Il est dédié à saint Corneille. Une mise au tombeau se trouve dans un autel ouvert, avec un Christ seul couché dans une grotte ornée d’un décor urbain. La prédelle présente deux décors floraux entourant le tabernacle. Le tableau d’autel représente l’église de la commune sur un panneau de bois, dans un décor paysager. L’ajout dans la partie supérieur du tableau indique qu’il a été modifié. Il est encadré de deux colonnes peintes en trompe-l’œil. Devant cette peinture, se trouve une statue en bois de saint Corneille. Dans le couronnement, surmonté d’une croix, se trouve un triangle rayonnant avec un œil en son centre. Le vitrail rappelle l’apparition du Sacré-Cœur à Marguerite-Marie Alacoque."
                },
                {
                    n: 4, x: 37.7, y: 19.5,
                    title: "Table de communion",
                    body: "En bois et fer forgé, il présente trois médaillons en laiton doré XVIIIᵉ siècle."
                },
                {
                    n: 5, x: 14.4, y: 58.8,
                    title: "Le confessionnal (M.H.)",
                    body: "Il est en chêne, daté 1684. Chacune des trois niches sont séparées par des pilastres ornés de guirlandes de fleurs, fruits, têtes d’angelots et petites statues de saints, difficiles à identifier. L’entablement et la corniche présentent également des décors floraux."
                },
                {
                    n: 6, x: 58.1, y: 44.5,
                    title: "La chaire (M.H.)",
                    body: "Meuble du XVIIIᵉ siècle, la cuve est composée de trois panneaux représentant le Christ, saint Matthieu et saint Jean, entourés d’un décor à volutes. La rampe ajourée est ornée de feuilles d’acanthe, l’abat-voix est plus récent."
                },
                {
                    n: 7, x: 19.2, y: 89.7,
                    title: "Les fonts baptismaux",
                    body: "Les fonts baptismaux sont en marbre blanc avec un couvercle ouvragé sur les bords.<br><br>Un tableau placé contre le mur sud représente l’abbé Julien Philippe Flahaut, curé de Drincham, décédé en 1866. L’église possède une statue en bois polychrome du XVIIᵉ siècle représentant saint Roch. Une statue en plâtre polychrome de saint Expedit rappelle la prière pour le retour d’un captif.<br><br>Les verrières ornementales présentent le même décor et portent souvent le nom des donateurs.<br><br>Le chemin de croix, probablement du XIXᵉ siècle est peint sur toile (auteur inconnu)."
                }
            ]
        },
        eecke: {
            plan: 'images/eglises-plans/eecke.jpg',
            points: [
                {
                    n: 1, x: 51.1, y: 9.0,
                    title: "Le maître-autel",
                    body: "Le maître-autel du XVIIIᵉ siècle, encadré par deux anges, est peint en blanc et doré. La porte du tabernacle à exposition fixe est ornée de la représentation des pains de propositions. Sur la cuve figure l’Agneau Mystique. Dans le tympan est représenté le symbole de la Trinité. Le cul-de-four est décoré des initiales S.V. entrelacées (saint Vulmar) ainsi que des symboles des vertus théologales. Une niche à arc outrepassé, en fond d’abside, abrite la statue de saint Wulmar."
                },
                {
                    n: 2, x: 37.8, y: 14.1, spots: [{ x: 62.7, y: 14.4 }],
                    title: "Les stalles",
                    body: "Les stalles du XVIIIᵉ siècle comportent des personnages de l’Ancien Testament ; deux grandes fresques peintes par l’Hazebrouckois Maurice Deschodt en 1925 les dominent : côté nord le martyr de sainte Dorothée, côté sud l’évangélisation du village par saint Wulmar."
                },
                {
                    n: 3, x: 50.5, y: 20.3,
                    title: "La table de communion",
                    body: "La table de communion, restaurée en 1892 par Fidèle Deblonde, comporte de belles sculptures de motifs eucharistiques, grappes de raisins et épis de blé."
                },
                {
                    n: 4, x: 17.7, y: 20.5,
                    title: "Le retable nord",
                    body: "Le retable nord est toujours, en Flandre, consacré à la Vierge Marie ; celui-ci, à une travée, est du XVIIIᵉ siècle. Le tableau d’autel, entouré de deux colonnes à chapiteaux composites, présente une statue de la Vierge offrant le Rosaire à saint Dominique en 1213 et à sainte Catherine de Sienne en 1375. L’autel de style tombeau est décoré de guirlandes fleuries et est orné de l’Agneau Mystique. La corniche est surmontée de deux pots à feux et d’une croix. Une plaque de pierre bleue, sur le mur latéral nord, commémore les bombardements de 1918 et la reconstruction de l’église en 1923/24."
                },
                {
                    n: 5, x: 84.1, y: 20.0,
                    title: "Le retable sud",
                    body: "Le retable sud est presque identique au retable nord. D’abord dédié à saint Nicolas, puis à la sainte Croix dont la confrérie rappelle la Chambre de Rhétorique active à Eecke jusqu’en 1939, il est aujourd’hui dédié au Sacré-Cœur. L’autel conserve une mise au tombeau où le Christ figure seul. Une plaque de cuivre, sur le mur latéral sud, rappelle, en flamand, le souvenir de la famille Moreel."
                },
                {
                    n: 6, x: 30.6, y: 61.5,
                    title: "L’autel à sainte Dorothée",
                    body: "L’autel à sainte Dorothée, de style néo-gothique, de 1882, est l’œuvre de Gustave Pattein, sculpteur Hazebrouckois né à Steenvoorde. Sainte Dorothée fait l’objet d’un culte très suivi et d’une neuvaine annuelle en février. Patronne des fleuristes et jardiniers, elle est invoquée contre les maladies de peau."
                },
                {
                    n: 7, x: 76.4, y: 62.5,
                    title: "La chaire",
                    body: "La chaire, vétuste, est du XVIIIᵉ siècle ; une plaque en marbre située à proximité rappelle le pavement de l’église en 1892."
                },
                {
                    n: 8, x: 14.1, y: 27.6, spots: [{ x: 86.3, y: 27.6 }, { x: 14.1, y: 40.1 }, { x: 86.4, y: 40.1 }, { x: 14.5, y: 54.9 }, { x: 87.0, y: 54.9 }],
                    title: "Six statues murales",
                    body: "Six statues murales en bois, sculptées en ronde bosse par le sculpteur casselois Théophile Liébart au XIXᵉ siècle, sont entourées de cadres moulurés ; elles représentent sainte Cécile, sainte Barbe, la Sainte Vierge de douleurs côté nord et saint Laurent, l’Ange gardien et saint Michel côté sud."
                },
                {
                    n: 9, x: 46.0, y: 78.0,
                    title: "Le buffet d’orgue",
                    body: "Le buffet d’orgue sculpté en 1884 par Séraphin Deblonde abritait un instrument créé par Auguste Renard. Suite au bombardement de 1918 il fut électrifié en 1928. Il est aujourd’hui hors d’usage."
                },
                {
                    n: 10, x: 17.0, y: 80.9,
                    title: "Les fonts baptismaux",
                    body: "Les fonts baptismaux du XVIᵉ siècle, en pierre de Tournai, sont de très belle facture ainsi que la statue de saint Jean-Baptiste sur le couvercle."
                },
                {
                    n: 11, x: 15.8, y: 74.6,
                    title: "Un dais de procession",
                    body: "Un dais de procession du XVIIIᵉ siècle était utilisé lors des processions avec la statue de sainte Dorothée."
                }
            ]
        },
        gravelines: {
            plan: 'images/eglises-plans/gravelines.jpg',
            points: [
                {
                    n: 1, x: 30.2, y: 27.9,
                    title: "Le retable nord",
                    body: "Il est dédié à saint Joseph, père nourricier de Jésus. Il a été réalisé au début du XXᵉ siècle en style néogothique en bois résineux, peint faux chêne et adossé au mur oriental."
                },
                {
                    n: 2, x: 79.6, y: 27.9,
                    title: "Le retable sud",
                    body: "Il est dédié au Sacré-Cœur de Jésus. Il date du début du XXᵉ siècle. De même composition et même style que le retable nord, il est adossé au mur oriental."
                },
                {
                    n: 3, x: 66.8, y: 43.7,
                    title: "Le reliquaire de saint Willibrord",
                    body: "En bois résineux, ajouré, peint et doré, il date probablement du XVIIIᵉ siècle. Il contient un morceau du tibia du saint, relique donnée en 1714 par le chapitre saint Wulfran d’Abbeville."
                },
                {
                    n: 4, x: 54.0, y: 14.0,
                    title: "Le retable du Maître-autel",
                    body: "Il occupe tout l’espace de l’abside. L’autel (M.H.), en forme de tombeau, est réalisé en bois résineux et date du XVIIIᵉ siècle ; il a subi une restauration au XIXᵉ siècle. Il est finement décoré et sculpté dans la masse, peint et doré, avec godrons, coquilles et guirlandes de fleurs. Sur la cuve, est représenté, en médaillon, l’Agneau sur le livre des sept sceaux. Le tabernacle et les gradins datent du XIXᵉ siècle. Le tableau d’autel, un bas-relief en plâtre du XIXᵉ siècle, représente la Vierge en gloire.<br><br>Autour du chœur, nous trouvons les statues de saint Etienne, saint Vincent de Paul, Saint Louis et saint Blaise."
                },
                {
                    n: 5, x: 54.0, y: 28.0,
                    title: "La crédence (M.H.)",
                    body: "Il s’agit d’une table d’applique en bois peint et doré, avec un plateau de marbre blanc. Le décor composé de rinceaux, guirlandes et mascarons, pourrait situer la réalisation de ce petit meuble vers 1720."
                },
                {
                    n: 6, x: 54.0, y: 20.5,
                    title: "Le dais de procession",
                    body: "Il est mis en valeur dans le chœur de l’église devant le retable central. Le décor, identique aux quatre extrémités du dais, se compose d’un angelot et d’une gerbe de sept épis de blé. Au sommet, une couronne royale, surmontée du globe terrestre et d’une croix, annonce le Christ sauveur du monde."
                },
                {
                    n: 7, x: 54.0, y: 35.0,
                    title: "La table de communion",
                    body: "Elle est l’œuvre de Séraphin Deblonde vers 1865, inspirée des formes de celle de Notre-Dame de Poperinge."
                },
                {
                    n: 8, x: 27.2, y: 48.7,
                    title: "Le monument sépulcral de la famille Du Hamel (M.H.)",
                    body: "Érigé en 1642, en marbre gris et blanc, il est dominé par le buste de Louis Du Hamel décédé à Lérida, au XVIIᵉ siècle."
                },
                {
                    n: 9, x: 27.2, y: 68.0,
                    title: "Le cénotaphe de Claude Berbier du Metz (M.H.)",
                    body: "Il fut réalisé en 1690 par François Girardon, sculpteur du roi Louis XIV. Il a été élevé à la gloire de Claude Berbier du Metz, gouverneur de la place de Gravelines, blessé à la bataille de Saint-Venant en 1657 et mort à la bataille de Fleurus en 1690."
                },
                {
                    n: 10, x: 81.6, y: 68.0,
                    title: "Le monument sépulcral de Claude Berbier du Metz (M.H.)",
                    body: "Face au cénotaphe sur le mur sud de l’église, ce monument a été dressé en 1690, à la mort du gouverneur de la ville, par ses deux frères Gédéon et Louis. La dalle funéraire est encadrée de deux colonnes qui supportent un entablement et un fronton."
                },
                {
                    n: 11, x: 60.2, y: 61.8,
                    title: "La chaire de vérité (M.H.)",
                    body: "Elle a été réalisée en 1646 (date portée) pour l’église Notre-Dame de Calais. Elle a été acquise par la paroisse au début du XIXᵉ siècle et a été restaurée en 1859 par Séraphin Deblonde. Au-dessus de l’abat-voix, des statues de bois représentent les quatre Pères de l’Église d’Occident, accompagnés de saint Pierre et saint Paul. Sur les panneaux de la cuve, sont représentés les quatre évangélistes et le Christ sauveur du monde. Ils alternent avec des montants devant lesquels sont placées des putti représentant les vertus cardinales."
                },
                {
                    n: 12, x: 81.4, y: 45.5,
                    title: "Le lambris (M.H.)",
                    body: "Les éléments réalisés par Jean Piette, de Saint-Omer, au XVIIIᵉ siècle, ont totalement disparu. En 1862, sur ordre du doyen Lansheere, Séraphin Deblonde, ébéniste à Eecke, réalisa de nouveaux éléments de lambris en chêne de Russie. Leurs ornements, ainsi que celui des confessionnaux qui s’y intègrent, s’inspirent du cadre ornemental des panneaux de la chaire de vérité. Ils ont été posés entre 1862 et 1869."
                },
                {
                    n: 13, x: 81.7, y: 75.5,
                    title: "Les confessionnaux",
                    body: "Ils sont tous identiques, intégrés dans le lambris."
                },
                {
                    n: 14, x: 27.3, y: 92.7,
                    title: "Les fonts baptismaux",
                    body: "Datés de 1634, ils sont en marbre noir, tachetés d’ocre et de rose, affectant la forme d’un ciboire. Ils ont été offerts par Waleran le Vray, Seigneur de Wierre, lieutenant au gouvernement de Gravelines."
                },
                {
                    n: 15, x: 54.2, y: 92.7,
                    title: "L’orgue, la tribune, le buffet (M.H.)",
                    body: "Le buffet du XVIIᵉ siècle vient de l’abbaye des Récollets et a été restauré par l’atelier Collesson, de Wormhout, entre 1873 et 1875. L’instrument romantique a été posé en 1873 par le facteur d’orgue Arnold Heidenreich de Saint-Omer."
                },
                {
                    n: 16, x: 12.8, y: 81.8,
                    title: "La chapelle de Notre-Dame de Foy",
                    body: "Elle est située au fond de l’église côté nord. Le retable en bois et la statue de la Vierge dateraient du XIXᵉ siècle."
                }
            ]
        },
        hazebrouck: {
            plan: 'images/eglises-plans/hazebrouck.jpg',
            points: [
                {
                    n: 1, x: 90.9, y: 37.1,
                    title: "La chapelle Saint-Georges",
                    body: "La chapelle Saint-Georges (appelée aujourd’hui Saint-Sébastien), au sud et dont la construction date de 1551, fut érigée par la ghilde des arbalétriers, en l’honneur de leur saint patron. Dans un style gothique flamboyant, sur sa voûte en pierre ont été gravés divers motifs : armoiries des Van Haesebroeck, étoile de Salomon, l’aigle bicéphale de Charles Quint, arbalète, croix.<br><br>Un retable du XIXᵉ siècle, surmonté d’une statue probablement de saint Eloi, constitue le décor le plus important de cette chapelle. De chaque côté de l’autel se trouvent deux niches avec les bustes reliquaires en bois polychrome, de saint Corneille à gauche, invoqué contre les convulsions et à droite saint Roch contre la peste. À gauche, au-dessus du confessionnal est placée une statue de saint Sébastien percé de flèches. La porte du petit tabernacle, à gauche, représente l’adoration des Rois Mages. On a placé dans cette chapelle une Mise au tombeau, ensemble sculpté en bois peint que l’on trouve fréquemment dans les églises de Flandre."
                },
                {
                    n: 2, x: 9.2, y: 36.9,
                    title: "La chapelle Sainte-Anne",
                    body: "La chapelle Sainte-Anne, au nord, fut offerte par la Chambre de Rhétorique, une institution littéraire fondée dès 1526, et très présente dans des nombreuses villes flamandes ; son but était d’encourager les compositions poétiques et les représentations théâtrales ; sa patronne était sainte Anne. De son premier décor il ne reste que la belle statue de sainte Anne apprenant à lire à Marie, en marbre blanc du XVIIIᵉ siècle. À droite de l’autel on reconnaît le buste de saint Pierre avec les clés et, à gauche, il ne reste que le socle de saint Blaise."
                },
                {
                    n: 3, x: 50.1, y: 6.7,
                    title: "Le retable lambris du chœur",
                    body: "Dans le chœur, le retable lambris est dédié à saint Eloi (voûte en cul-de-four et vitraux). Le maître-autel est recouvert d’un antependium à fils doré. Il est surmonté d’un tabernacle et d’une exposition tournante à trois faces.<br><br>Au centre le tableau « La crucifixion » est une copie d’une toile d’Anton Van Dyck pour les capucins de Termonde."
                },
                {
                    n: 4, x: 45.5, y: 16.0, spots: [{ x: 54.2, y: 16.0 }],
                    title: "Les stalles",
                    body: "Les stalles, à colonnes torses, datent du XVIIᵉ siècle."
                },
                {
                    n: 5, x: 49.9, y: 14.5,
                    title: "L’autel",
                    body: "L’autel où l’on célèbre la messe a été exécuté dans les ateliers de l’abbaye Saint-Paul de Wisques entre 1965 et 1970."
                },
                {
                    n: 6, x: 33.5, y: 19.0,
                    title: "Le retable du vaisseau nord",
                    body: "Dans le vaisseau nord, le retable est consacré à la Vierge Marie. Sur le bas-relief de l’autel se trouve une représentation de la Dormition de la Vierge soutenue par les anges. Le tableau est une réplique de la <em>« Mise au tombeau »</em> de Dirck van Baburen (Utrecht 1595-1624) exécuté par le peintre hazebrouckois Nicolas-Joseph Ruyssen (Hazebrouck 1787- Mont des Cats 1826). Les statues de saint Dominique et de sainte Catherine de Sienne complètent l’ensemble."
                },
                {
                    n: 7, x: 66.5, y: 18.9,
                    title: "Le retable du vaisseau sud",
                    body: "Dans le vaisseau sud, le retable est dédié au culte des saints, représenté par les statues de saint Nicolas et sainte Barbe. Le tableau, <em>« Descente de croix »</em> est l’œuvre du peintre Mathieu Elias (Zuytpeene 1658-Dunkerque 1741). Le couronnement propose le mystère de la Sainte-Trinité. Le bas-relief de la table d’autel représente les noces de Cana. Le tabernacle, du XVIIᵉ siècle est d’origine anversoise."
                },
                {
                    n: 8, x: 32.1, y: 55.5, spots: [{ x: 68.4, y: 56.2 }],
                    title: "Les boiseries",
                    body: "Les boiseries, qui se développent de façon continue, habillent la partie basse des murs. Les quatre confessionnaux du XIXᵉ siècle y sont incorporés. Dans les panneaux sont insérées des plaques rappelant le souvenir des personnalités ayant œuvré pour la paroisse."
                },
                {
                    n: 9, x: 59.8, y: 39.1,
                    title: "La chaire de vérité",
                    body: "La chaire de vérité, du XVIIIᵉ siècle, présente sur les panneaux de la cuve, les quatre évangélistes. Au sommet de l’abat-voix : groupe sculpté avec le Christ du Jugement dernier et les anges sonnant la trompette."
                },
                {
                    n: 10, x: 34.7, y: 79.4,
                    title: "La chapelle des fonts baptismaux",
                    body: "Dans la chapelle des fonts baptismaux, la grille en fer forgé (M.H.) date du XVIIIᵉ siècle. La cuve baptismale du XVIIIᵉ siècle en marbre rose possède un grand couvercle en bois sculpté et doré, figurant d’un côté le baptême du Christ, de l’autre Adam et Ève au pied de l’arbre du Bien et du Mal."
                },
                {
                    n: 11, x: 50.5, y: 82.5,
                    title: "Le buffet d’orgue",
                    body: "La date de la construction de l’orgue actuel reste inconnue, si l’on écarte l’hypothèse que le buffet pourrait être de 1847. L’aspect général du meuble s’apparente au style rocaille, mais la composition de cette époque n’a pu être retrouvée."
                }
            ]
        },
        herzeele: {
            plan: 'images/eglises-plans/herzeele.jpg',
            points: [
                {
                    n: 1, x: 48.3, y: 15.5,
                    title: "Retable du maître-autel (M.H.)",
                    body: "Derrière le monumental maître-autel du XIXᵉ siècle s’élève un retable de 1741, qui réutilise quelques éléments plus anciens, en particulier la prédelle du XVIIᵉ siècle. Cet ensemble est dédié à Notre-Dame de l’Assomption, patronne de l’édifice. Sous le baldaquin, la Trinité (Dieu le Père, Jésus et le Saint-Esprit sous la forme d’une colombe) s’apprête à accueillir la Vierge."
                },
                {
                    n: 2, x: 23.7, y: 22.5,
                    title: "Retable nord (M.H.)",
                    body: "Construit en 1738, il est constitué d’une seule travée dont la partie centrale est creusée par une niche délimitée par un cadre. Celle-ci abrite depuis la fin du XIXᵉ siècle une statue du Sacré-Cœur. De part et d’autre, sainte Catherine d’Alexandrie (à gauche) et sainte Barbe (à droite), souvent associées car toutes deux sont invoquées pour l’assistance spirituelle qu’elles apportent au chrétien au moment de la mort. La partie supérieure du retable est formée d’un tympan entouré par des ailerons à volutes supportant un petit baldaquin, sous lequel se trouve la colombe du Saint-Esprit."
                },
                {
                    n: 3, x: 72.9, y: 22.5,
                    title: "Retable sud (M.H.)",
                    body: "D’une année postérieure au retable nord, 1739, il joue sur les correspondances visuelles. Sa composition générale est identique, c’est l’iconographie qui les différencie : au centre, saint Antoine ermite, accompagné de saint Nicolas (à gauche) et de saint Eloi (à droite). Ces trois saints sont appréciés pour la protection physique qu’ils accordent aux hommes et au bétail. Saint Antoine préserve du mal des ardents, redoutable affection neurologique transmise par l’ergot de seigle (champignon) ; saint Nicolas, protecteur traditionnel des enfants ; saint Eloi, patron des travailleurs des métaux et des paysans. Mais la partie supérieure du retable abrite une scène d’un caractère différent, issue du courant de la Contre-Réforme ; il s’agit d’une allégorie de l’Église catholique, représentée par une femme habillée de blanc, coiffée de la tiare, portant l’étole et la croix papale, terrassant l’hérésie (dragon à trois têtes)."
                },
                {
                    n: 4, x: 47.7, y: 27.2,
                    title: "Table de communion (M.H.)",
                    body: "En fer forgé et cuivre, d’une grande élégance, elle date de 1828. Elle a remplacé la précédente, en bois, du XVIIᵉ siècle."
                },
                {
                    n: 5, x: 42.4, y: 53.0,
                    title: "Chaire à prêcher (M.H.)",
                    body: "Inaugurée le 15 août 1763, fête de l’Assomption, elle porte sur les panneaux de la cuve des reliefs sculptés, dont l’un représente le Christ et les quatre autres évoquent des épisodes de la vie de Jean-Baptiste : l’annonce à Zacharie, la Visitation, Zacharie nommant son fils Jean, le baptême de Jésus.<br><br>Jean-Baptiste est considéré comme le modèle de tout prédicateur. Entre ces panneaux s’intercalaient des putti volés en 1977, figurant les vertus cardinales (Force, Justice, Tempérance et Prudence)."
                },
                {
                    n: 6, x: 24.3, y: 34.2, spots: [{ x: 72.9, y: 34.2 }, { x: 24.3, y: 53.2 }, { x: 72.9, y: 53.2 }],
                    title: "Confessionnaux et lambris (M.H.)",
                    body: "Les quatre confessionnaux (deux peuvent être datés de 1734 et 1736) sont insérés dans le lambris de chêne de 1761."
                },
                {
                    n: 7, x: 47.7, y: 81.6,
                    title: "Tribune, buffet d’orgue et orgue (M.H.)",
                    body: "Réalisés en 1755, la balustrade de la tribune se distingue par un décor de style rocaille particulièrement ajouré. L’orgue a été renouvelé au XIXᵉ siècle par Louis Neuville, facteur d’orgue à Rexpoëde."
                },
                {
                    n: 8, x: 19.3, y: 81.8,
                    title: "Fonts baptismaux (M.H.)",
                    body: "En marbre, fournis en 1765 par un maître-marbrier de Barbançon, en Hainaut belge, isolés du reste de l’église par une clôture en fer forgé."
                },
                {
                    n: 9, x: 19.3, y: 28.7,
                    title: "Dais de procession (M.H.)",
                    body: "Le dais de procession, porté par quatre personnes, servait à protéger et à honorer le Saint-Sacrement que présentait le prêtre lors des processions. Celui-ci est daté de 1774."
                }
            ]
        },
        hondschoote: {
            plan: 'images/eglises-plans/hondschoote.jpg',
            points: [
                {
                    n: 1, x: 80.6, y: 39.3,
                    title: "Retable de Saint-Sébastien (M.H.)",
                    body: "Il fut érigé dans la seconde partie du XVIIᵉ siècle par la confrérie des archers en l’honneur de leur saint patron. Le tableau d’autel représentait saint Sébastien ; dégradé à la fin du XIXᵉ siècle, il a été remplacé par une icône de Notre-Dame du Perpétuel Secours. Les sculptures et l’antependium (devant d’autel) sont en tilleul avec polychromie relevée de dorures. En 1992, l’état de dégradation de ce retable a nécessité sa restauration et a permis une sensibilisation à l’intérêt de ce patrimoine religieux en péril. (Création de l’association « Retables de Flandre »)"
                },
                {
                    n: 2, x: 18.5, y: 32.5,
                    title: "Retable de la Sainte-Croix ou de Notre-Dame des Sept Douleurs (1716) (M.H.)",
                    body: "Il a été élevé pour abriter une relique de la croix du Christ offerte à l’église en 1635. Le tableau d’autel est un groupe sculpté : une Pietà à caractère maniériste (outrance des attitudes) entourée des instruments de la passion. Derrière la Vierge, une croix entourée de la lune et du soleil tandis que sous le baldaquin, la Croix glorieuse rayonne dans une nuée peuplée d’angelots. Une peinture faux-bois a recouvert au XIXᵉ siècle la polychromie originelle. De part et d’autre de ce retable, deux statues ajoutées au XIXᵉ : à gauche, sainte Apolline, à droite sainte Isbergue (sœur de Charlemagne) invoquée pour les maladies de la peau et des yeux."
                },
                {
                    n: 3, x: 34.5, y: 13.3,
                    title: "Retable du Rosaire (1724) (M.H.)",
                    body: "Le retable est en lien avec l’existence d’une confrérie du saint Rosaire. Encastrée près de l’entrée sud de l’église, on peut voir la dalle funéraire de Marie Bossaert, morte en 1762, « qui quêta avec un zèle infatigable » pour ce retable. La Vierge remet le rosaire à saint Dominique, accompagné de son chien portant un flambeau éclairant le monde (symbolique de son nom et de son ordre). Sous le baldaquin, des angelots jouent avec une tour, un soleil, une lune, références aux litanies de la Vierge. Chef-d’œuvre d’architecture et de sculpture, ce retable à trois travées est recouvert d’une peinture monochrome donnant l’illusion du marbre. De part et d’autre, saint Eloi (enclume) et saint Vaast, patron de la paroisse."
                },
                {
                    n: 4, x: 77.0, y: 13.8,
                    title: "Retable de la Pentecôte ou de Saint-Nicolas (1730-1740) (M.H.)",
                    body: "Le tableau d’autel de 1612, « La Pentecôte » par Ghislain Vroilynck, est l’ancien panneau central d’un triptyque dont les parties latérales sont conservées au musée de la ville. Un buste reliquaire installé ultérieurement évoque une dévotion locale à saint Nicolas. Sous le baldaquin, est représenté Dieu le Père portant le monde, sous la colombe de l’Esprit Saint. L’antependium (1673), en broderie de fils d’or et d’argent sur velours, représente la Sainte Famille. De part et d’autre du retable, deux statues de saints évêques : saint Sever de Ravenne (patron des tisserands, avec une navette) et saint Nicolas."
                },
                {
                    n: 5, x: 51.3, y: 54.6,
                    title: "Chaire de vérité (1755) (M.H.)",
                    body: "Sculpture luxuriante en chêne, la chaire est l’œuvre de Jean Elshoecht de Bergues. Sur le dorsal, saint Vaast, patron de la paroisse ; sur la cuve, buste des Évangélistes et tétramorphe en alternance avec les vertus cardinales (Force, Justice, Prudence et Tempérance). Au pied de la chaire, statue de saint Jean-Baptiste (XIXᵉ siècle)."
                },
                {
                    n: 6, x: 57.8, y: 17.4,
                    title: "Table de communion (1746) (M.H.)",
                    body: "Très riche sculpture en chêne, au décor employant des motifs végétaux (fruits et fleurs) et animaux (oiseaux, écureuil). Les médaillons évoquent scènes bibliques et symboles eucharistiques."
                },
                {
                    n: 7, x: 56.4, y: 9.3,
                    title: "Dais de procession (1805 ?) (M.H.)",
                    body: "En bois doré et polychromie, il est surmonté du pélican (représentation christique) et des symboles déjà évoqués pour la table de communion (épis de blé, grappes de raisin...)."
                },
                {
                    n: 8, x: 32.5, y: 48.3, spots: [{ x: 80.6, y: 47.7 }],
                    title: "Lambris et confessionnaux (XVIIIᵉ siècle) (M.H.)",
                    body: "Par Pierre van Brouckorst et Joseph Roose (tous deux de Bergues)."
                },
                {
                    n: 9, x: 52.7, y: 12.3,
                    title: "Les stalles (1607) (M.H.)",
                    body: "Quoiqu’imitant les lambris de l’abside centrale, les dorsaux sont du XIXᵉ siècle."
                },
                {
                    n: 10, x: 56.8, y: 78.0,
                    title: "Le buffet d’orgue (M.H.)",
                    body: "Le positif (boiserie posée en avant de la tribune) est de style Renaissance (1611), c’est l’élément le plus ancien d’un buffet d’orgue en Flandre occidentale.<br><br>Grand orgue et balustrade (1737) par Pierre van Brouckorst.<br><br>Instrument de Louis Neuville (Rexpoëde, 1859), 28 jeux."
                }
            ]
        },
        houtkerque: {
            plan: 'images/eglises-plans/houtkerque.jpg',
            points: [
                {
                    n: 1, x: 52.1, y: 9.8,
                    title: "Ensemble néo-gothique de l’abside centrale",
                    body: "Installé à la suite des travaux d’agrandissement par Louis Croin (1891), il comprend un maître-autel, des stalles et des lambris."
                },
                {
                    n: 2, x: 24.1, y: 17.4, spots: [{ x: 80.1, y: 17.4 }],
                    title: "Les retables latéraux",
                    body: "Le retable sud est dédié à saint Antoine, présenté dans la niche centrale. Le meuble du XVIIIᵉ siècle, comporte une seule travée encadrée par des colonnes et surmontée par un fronton cintré à ailerons. Au XIXᵉ siècle, il a été profondément remanié : les travées latérales ont été ajoutées, accueillant les statues de saint Éloi et de saint Nicolas (sculpteur casselois Liébart, 1833) ; le groupe sculpté représentant saint Antoine et saint Paul ermites miraculeusement nourris par un corbeau a été ajouté ; l’autel et le tabernacle avec exposition tournante ont été remplacés.<br><br>Le retable nord est dédié comme souvent à la Vierge. Il est du XVIIIᵉ siècle, à l’exception de l’autel, des statues de sainte Catherine d’Alexandrie et de sainte Barbe, exécutées par le sculpteur Liébart et du tableau représentant la remise du Rosaire à saint Dominique, par Alexis Bafcop (1862)."
                },
                {
                    n: 3, x: 39.8, y: 41.7, spots: [{ x: 64.2, y: 41.7 }],
                    title: "Les retables des piliers",
                    body: "Ils datent essentiellement de la deuxième moitié du XVIIIᵉ siècle et sont composés de façon identique, évoquant la Passion. Au pilier sud : statue du Christ aux outrages, le corps meurtri (sculpteur : J. Velysse, 1863). Au pilier nord : statue de la Vierge aux Sept Douleurs (J. Velysse, 1869)."
                },
                {
                    n: 4, x: 24.1, y: 77.4,
                    title: "Le retable ouest",
                    body: "Le retable du Saint-Sépulcre, occupant la largeur du mur, est comme les précédents, dédié à la passion du Christ : le Christ au Jardin des Oliviers, le Saint Suaire et une spectaculaire Mise au Tombeau. Autour du corps du Christ se trouvent Joseph d’Arimathie, Nicodème, la Vierge, Marie-Madeleine et Marie, mère de Jacques. Cet ensemble, datable des XVIIIᵉ et XIXᵉ siècles, comprend peut-être des éléments du maître-autel en place avant les agrandissements de 1857-1858."
                },
                {
                    n: 5, x: 80.1, y: 77.4,
                    title: "Les fonts baptismaux",
                    body: "La cuve de marbre fut offerte en 1845 par M. Dejonghe, curé de Houtkerque. Le groupe sculpté la couronnant représente Jean-Baptiste baptisant le Christ dans le Jourdain."
                },
                {
                    n: 6, x: 45.3, y: 50.2,
                    title: "La chaire (1736)",
                    body: "La cuve à quatre pans présente des compartiments ornés du Christ-Roi et des quatre évangélistes ; les putti (petits enfants) symbolisent la Prudence, la Justice, la Force, la Tempérance."
                },
                {
                    n: 7, x: 18.5, y: 27.9, spots: [{ x: 85.5, y: 27.9 }],
                    title: "Les confessionnaux (XVIIIᵉ siècle)",
                    body: "Le confessionnal sud présente en médaillon Jésus remettant les clefs à saint Pierre et sur un cartouche sainte Marie-Madeleine."
                },
                {
                    n: 8, x: 52.1, y: 77.4,
                    title: "Orgues et buffet d’orgues (1757) (M.H.)",
                    body: "L’orgue est probablement de Jean-Joseph Van der Haeghen. Il est modifié en 1848-1849 par Charles-Louis Neuville, facteur d’orgue à Rexpoëde. Il a été restauré en 2017 par les établissements Bernard Cogez (Tourcoing)."
                }
            ]
        },
        killem: {
            plan: 'images/eglises-plans/killem.jpg',
            points: [
                {
                    n: 1, x: 49.6, y: 31.9,
                    title: "Le retable du maître-autel (M.H.*)",
                    body: "Construit vers 1750, ce retable en bois peint et doré mesure 12 mètres de haut. Il est dédié à l’archange saint Michel qui, en terrassant le dragon, symbole de l’hérésie, permet le triomphe de l’Église catholique, représentée au-dessus de lui par un personnage féminin coiffé de la mitre papale.<br><br>La colombe, représentant l’Esprit-Saint, est entourée des quatre Pères de l’Église dans des médaillons en bois sculpté peint : saint Grégoire le Grand et saint Augustin à gauche, saint Ambroise et saint Jérôme à droite. Ils sont accompagnés de statues de saint Pierre et saint Paul.<br><br>Dans le cul-de-four, est placée dans une gloire la colombe, entourée d’angelots et de chérubins.<br><br>L’autel tombeau, daté de 1820 environ, est surmonté d’un tabernacle et d’une exposition tournante."
                },
                {
                    n: 2, x: 80.0, y: 32.2,
                    title: "Le retable sud (M.H.*)",
                    body: "Le retable sud est daté de 1740 environ. Il mesure 7 mètres de haut. Il est dédié à saint Nicolas évêque, dont la mitre est portée par deux anges. Ceci signifie l’origine divine de la hiérarchie de l’Église catholique.<br><br>Dans les médaillons figurent saint Antoine l’ermite et saint Eloi (à gauche), saint Albert le Grand et saint Hubert (à droite).<br><br>Dans le couronnement, grande gloire de la Sainte Croix avec phylactère (banderole) et nuées d’angelots et de chérubins.<br><br>Sur la cuve de l’autel est sculpté un baquet contenant trois petits enfants rappelant l’une des légendes de saint Nicolas."
                },
                {
                    n: 3, x: 20.2, y: 32.3,
                    title: "Le retable nord (M.H.*)",
                    body: "Le retable nord, dédié à la Vierge, date de 1734 environ et a été restauré en 1995. Il mesure 11 mètres de haut, 7 mètres de large et 4.5 mètres de profondeur.<br><br>Son thème est la remise du Rosaire à saint Dominique. La scène centrale est entourée de deux dominicains : Thomas d’Aquin et Jacques de Mevania. Au centre, la glorification de la Vierge est symbolisée par le monogramme «A.M.R.» (Ave Maria Regina, Salut Marie ô Reine) et l’inscription : «S. Maria O.P.N.» (Sancta Maria Ora pro nobis, sainte Marie priez pour nous).<br><br>De chaque côté du tabernacle, deux petites statues : saint François-Xavier à droite et saint François d’Assise à gauche.<br><br>Dans le cul-de-four, se trouve une gloire avec phylactère et angelots."
                },
                {
                    n: 4, x: 32.3, y: 68.3, spots: [{ x: 63.7, y: 68.3 }],
                    title: "Les petits retables (M.H.*)",
                    body: "Deux retables jumeaux à une seule travée sont adossés à deux piliers de la tour, celui de droite date de 1763. Ils sont en bois, peint faux marbre. Les socles sont d’époque, mais les statues du Sacré-Cœur et de la Vierge ont été mises en place fin XIXᵉ début XXᵉ siècle."
                },
                {
                    n: 5, x: 49.9, y: 37.5,
                    title: "Table de communion",
                    body: "En chêne avec panneaux de fer forgé du XVIIIᵉ siècle, elle est ornée de dix médaillons représentant des scènes de la vie de Moïse, de la Vierge et de saint Nicolas."
                },
                {
                    n: 6, x: 34.0, y: 32.3, spots: [{ x: 64.9, y: 32.3 }],
                    title: "Les stalles (M.H.*)",
                    body: "Les stalles du chœur sont en chêne, elles datent du XIXᵉ siècle, dotées de miséricordes et agrémentées de huit médaillons sculptés. Au-dessus, deux représentations évoquant la musique : le roi David et sainte Cécile."
                },
                {
                    n: 7, x: 41.4, y: 74.8,
                    title: "La chaire de vérité (M.H.*)",
                    body: "La chaire du XVIIIᵉ siècle est en chêne. Sur la cuve, on retrouve l’iconographie habituelle des quatre évangélistes ; le grand abat-voix plat présente un décor rayonnant et la colombe."
                },
                {
                    n: 8, x: 12.6, y: 42.1, spots: [{ x: 13.4, y: 79.5 }, { x: 86.6, y: 79.5 }, { x: 87.9, y: 42.1 }],
                    title: "Les confessionnaux (M.H.*)",
                    body: "Insérés dans les lambris (M.H.*) en chêne du XVIIIᵉ siècle, deux confessionnaux portent sur des médaillons, l’un saint Pierre, l’autre Marie-Madeleine."
                },
                {
                    n: 9, x: 47.1, y: 91.5,
                    title: "L’orgue",
                    body: "Le buffet d’orgue est en chêne du XVIIIᵉ siècle. Sur la face visible, deux motifs représentent le roi David et sainte Cécile et dans la partie supérieure, des anges musiciens."
                },
                {
                    n: 10, x: 14.0, y: 56.0,
                    title: "La Pietà (M.H.*)",
                    body: "En bois polychrome du XVIIIᵉ siècle."
                },
                {
                    n: 11, x: 16.2, y: 91.2,
                    title: "Les fonts baptismaux (M.H.*)",
                    body: "La cuve en marbre mouluré avec couvercle en bois sur console forgée mobile, date du XVIIIᵉ siècle."
                },
                {
                    n: 12, x: 84.0, y: 87.8,
                    title: "Le dais et la lanterne de procession (M.H.*)",
                    body: "À l’origine, le dais était recouvert de feuilles d’or. Un tissu broché du XVIIIᵉ siècle en tapisse l’intérieur."
                },
                {
                    n: 13, x: 74.4, y: 93.3,
                    title: "L’autel de la Mise au tombeau (M.H.*)",
                    body: "Il s’agit d’un ensemble incomplet de trois statues polychromes des saintes femmes en pleurs, autour d’un Christ étendu (deuxième moitié du XVIIᵉ siècle)."
                },
                {
                    n: 14, x: 82.1, y: 93.3,
                    title: "L’autel de la Mise au tombeau (M.H.*)",
                    body: "Il s’agit d’un ensemble incomplet de trois statues polychromes des saintes femmes en pleurs, autour d’un Christ étendu (deuxième moitié du XVIIᵉ siècle)."
                },
                {
                    n: 15, x: 79.6, y: 37.6,
                    title: "Les Kranz (M.H.*)",
                    body: "L’un, en bois polychrome et doré, abrite une statue de sainte Anne (XVIIIᵉ siècle), l’autre, abritait une Vierge à l’enfant volée en 1983."
                }
            ]
        },
        ledringhem: {
            plan: 'images/eglises-plans/ledringhem.jpg',
            points: [
                {
                    n: 1, x: 48.1, y: 10.3,
                    title: "Retable du maître-autel",
                    body: "Initialement consacré à saint Omer, il est depuis 1881 (date de sa reconstruction) dédié au Sacré-Cœur. De style néogothique, il porte sur le tabernacle la statue de sainte Apolline (patronne des dentistes), sculpture datant du XIXᵉ siècle. De beaux vitraux historiés prennent place dans l’abside centrale. Celui de Marguerite-Marie Alacoque devant le Sacré-Cœur et celui de sa béatification par le pape Pie IX. Ils datent de 1882 et sont signés de l’atelier Lateux-Bazin."
                },
                {
                    n: 2, x: 21.7, y: 20.0,
                    title: "Retable nord",
                    body: "Ce retable en bois polychrome, dédié à la Vierge, date de la fin du XVIIᵉ, mais il a été profondément remanié au XIXᵉ siècle. Le tableau représentant la Vierge remettant le rosaire à saint Dominique a été remplacé par une statue qui évoque Notre-Dame de Lourdes. Ainsi évoluent les dévotions. La niche plus petite du couronnement abrite la statue d’un ange. Le devant d’autel est orné d’un médaillon central, où est représenté le cœur enflammé de Marie. À gauche de l’autel de la Vierge une « adoration des bergers »."
                },
                {
                    n: 3, x: 76.0, y: 14.0,
                    title: "Retable sud",
                    body: "Dédié à saint Omer, il date du XVIIᵉ-début XVIIIᵉ siècles, sa composition est identique à celle du retable nord. Sa structure est en bois résineux, recouverte d’une peinture polychrome imitant le marbre. Il a été restauré en 2013-2014. Dans la travée principale pourvue d’ailerons, avec des torses d’anges, figure la statue de saint Omer, évêque nommé par le roi Dagobert. Elle est placée dans une niche en plein cintre encadrée par quatre colonnes torses. Au niveau du couronnement une petite niche abrite la statue de saint Nicolas, entourée de saint Hubert et saint Eloi. L’autel, imitation chêne, a la forme d’un sarcophage. Il est surmonté d’un tabernacle et d’une exposition tournante. Le pélican mystique ainsi qu’une croix dominent le tout. De part et d’autre des colonnes, deux statues de style baroque des apôtres saint Pierre et saint Paul."
                },
                {
                    n: 4, x: 68.6, y: 59.9,
                    title: "La chaire de vérité",
                    body: "Adossée à la deuxième colonne méridionale, elle a été classée monument historique en 1980. En chêne, elle est datée du XVIIIᵉ siècle. La rampe de l’escalier, enroulée autour du pilier, est ornée de rinceaux très élégants. La cuve est constituée de cinq panneaux sculptés représentant le Christ sauveur du monde et les quatre évangélistes avec leurs attributs. Entre les panneaux, les vertus théologales figurées par des « putti » portant les attributs de la foi, l’espérance et la charité et ceux de l’Église et de la papauté."
                },
                {
                    n: 5, x: 56.9, y: 16.7,
                    title: "Le banc des marguilliers et les stalles",
                    body: "Le banc des marguilliers était réservé aux notables du village, qui géraient les biens de l’église. Les stalles comportant des miséricordes (petite console permettant de prendre appui en étant debout), réservées au clergé, sont placées en vis-à-vis dans le chœur central."
                },
                {
                    n: 6, x: 42.8, y: 22.8,
                    title: "La table de communion",
                    body: "Elle sépare le chœur de la nef depuis le XVᵉ siècle. Elle est en chêne sculpté, réalisée en partie par les ateliers Collesson-Campel de Wormhout. La partie centrale chantournée paraît plus ancienne. Elle fut donnée par le curé de la paroisse, l’abbé Lameyse. Les montants encadrent dix-sept panneaux rectangulaires où sont sculptés dans un médaillon central les symboles de l’Ancien et du Nouveau Testament ainsi que des saints."
                },
                {
                    n: 7, x: 17.9, y: 55.1, spots: [{ x: 17.9, y: 71.3 }],
                    title: "Les confessionnaux",
                    body: "En bois d’orme sculptés et peints imitation chêne, ils datent du début du XVIIIᵉ siècle. Ils sont incorporés aux boiseries et rompent ainsi la succession de panneaux de lambris présents côté nord, absents côté sud (dégâts de la guerre en mai 1940). Celui placé sur le bras nord du transept est constitué de trois loges et orné sur son tympan d’une sculpture du Bon Pasteur (symbole de pardon)."
                },
                {
                    n: 8, x: 48.4, y: 39.2,
                    title: "Les petits retables",
                    body: "Celui de la pile NO est dédié à sainte Apolline (1863). Cet autel devant les piliers de la tour sert aux célébrations depuis le concile Vatican II. Une sculpture de sainte Apolline et ses attributs (tenaille et dent) sont représentés dans le médaillon central. Le retable du pilier SO était consacré à saint Joseph (1870). La statue de saint Joseph est adossée sur le pilier sud du chœur central."
                },
                {
                    n: 9, x: 49.1, y: 88.6,
                    title: "Le buffet d’orgue",
                    body: "Installé en 1886, l’orgue a fortement souffert en 1940. Il est composé de sept jeux répartis sur un clavier manuel et un pédalier. Le buffet du XIXᵉ siècle porte trois statuettes (celle d’un pape, d’un évêque et de sainte Cécile)."
                },
                {
                    n: 10, x: 27.3, y: 36.1, spots: [{ x: 82.1, y: 79.3 }],
                    title: "Les statues",
                    body: "Saint Omer du XVIIIᵉ siècle en bois peint blanc et or, Ecce homo du XVIIIᵉ siècle, Christ en Croix du XVIIIᵉ siècle du sculpteur Liébart de Cassel."
                },
                {
                    n: 11, x: 18.0, y: 29.5, spots: [{ x: 21.9, y: 89.2 }],
                    title: "Les fonts baptismaux",
                    body: "En marbre gris. Au-dessus des fonts baptismaux un tableau de la remise du Rosaire acquis en 1692, initialement placé dans le retable nord."
                }
            ]
        },
        lynde: {
            plan: 'images/eglises-plans/lynde.jpg',
            points: [
                {
                    n: 1, x: 55.5, y: 93.4,
                    title: "Le jubé (M.H.)",
                    body: "Il était situé auparavant en clôture devant le chœur, pour délimiter l’espace des fidèles et celui des clercs. En 1695 il a été remonté au fond de l’église pour servir de tribune d’orgue.<br><br>Datent du XVᵉ siècle : l’ancienne clôture, la galerie apostolique en bois polychrome avec les deux frises sculptées d’entrelacs de vigne et de houblon, incluant les symboles de la Passion du Christ.<br><br>Les colonnes fasciculées du début du XVIIIᵉ siècle sont à l’aplomb de la galerie et permettent de soutenir le poids de l’orgue.<br><br>Enfin, au XIXᵉ siècle, on a ajouté les trois arcs en plein cintre, reliant les quatre colonnes avec écoinçons et polylobes de style néo-gothique. Le buffet d’orgue et le buffet actuels ont été quant à eux inaugurés en 1879."
                },
                {
                    n: 2, x: 55.0, y: 16.8,
                    title: "Le retable du maître-autel (1781, M.H.)",
                    body: "L’église comprend trois retables-lambris progressivement mis en place à la fin du XVIIIᵉ siècle ; tous trois sont dus à Charles Lefebvre, menuisier à Lynde, et prennent la suite des lambris installés en 1724-25 (M.H.).<br><br>Le retable du maître-autel propose le rôle des évangélisateurs de cette région : saint Vaast, évêque d’Arras, au centre, saint Omer et saint Folquin de part et d’autre. La tradition de l’Église est évoquée par saint Ambroise, saint Augustin, saint Grégoire le Grand et saint Jérôme, Pères de l’Église d’Occident.<br><br>Le maître-autel du XVIIIᵉ siècle a été complété au XIXᵉ siècle par une parclose, panneau ajouré qui dissimule partiellement la niche.<br><br>Deux vitraux historiés proposent des scènes de la vie de saint Vaast."
                },
                {
                    n: 3, x: 31.8, y: 24.2,
                    title: "Le retable nord (1788, M.H.)",
                    body: "Le retable nord est dédié à Notre-Dame du Mont Carmel avec une statue de plâtre du XIXᵉ siècle."
                },
                {
                    n: 4, x: 82.3, y: 24.5,
                    title: "Le retable sud (1791, M.H.)",
                    body: "Le retable sud est dédié à saint Nicolas accompagné des trois petits enfants dans un baquet ; groupe sculpté polychrome de style baroque du XVIIIᵉ siècle.<br><br>En médaillon sur le fronton, saint Éloi."
                },
                {
                    n: 5, x: 69.2, y: 29.2,
                    title: "Relief commémoratif de François de Mammez (1634, M.H.)",
                    body: "En pierre de Tournai, il représente le chanoine sous la protection de saint François d’Assise, son patron, en prière devant la Vierge. Le blason à trois maillets de François de Mammez, dans la partie supérieure à droite, est aujourd’hui celui de la commune de Lynde."
                },
                {
                    n: 6, x: 69.6, y: 61.5,
                    title: "La chaire (1784, M.H.)",
                    body: "Éléments sans doute du XVIIᵉ siècle assemblés en 1784. Sur la cuve carrée est représenté Dieu Sauveur des hommes, encadré par les représentations de saint Paul et saint Jean-Baptiste. Entre les panneaux, les symboles des quatre évangélistes."
                },
                {
                    n: 7, x: 27.7, y: 89.8,
                    title: "La table de communion (XVIIIᵉ siècle, M.H.)",
                    body: "De style rocaille ; habituellement placée devant le maître-autel, elle a été déplacée dans le fond de l’église."
                },
                {
                    n: 8, x: 20.8, y: 64.5, spots: [{ x: 87.8, y: 64.5 }],
                    title: "Les confessionnaux (1792, M.H.)",
                    body: "Réalisés en pleine tourmente révolutionnaire, ils illustrent au nord les thèmes de la Foi (figure allégorique portant une croix), de l’Espérance (une ancre) et de la Charité (le Bon Pasteur).<br><br>Au sud, l’illustration, moins convenue, présente les figures allégoriques de la Pénitence (?), de la Vigilance et de l’inspiration divine."
                },
                {
                    n: 9, x: 88.2, y: 92.8,
                    title: "Les fonts baptismaux romans (M.H.)",
                    body: "Les fonts baptismaux de l’époque romane, en pierre calcaire, qui avaient été rejetés à l’extérieur de l’édifice, ont retrouvé leur place à l’intérieur en 1999."
                },
                {
                    n: 10, x: 21.9, y: 92.8,
                    title: "Les fonts baptismaux modernes",
                    body: "Ils datent de 1860 et ont été taillés dans un marbre gris. La vasque godronnée est coiffée d’un couvercle en bois polychrome qui se trouve actuellement sur la corniche des lambris, derrière la cuve baptismale. Il représente le Baptême du Christ par Jean-Baptiste dans les eaux du Jourdain.<br><br>Cette sculpture est l’une des réalisations les plus expressives et les plus touchantes de l’église."
                }
            ]
        },
        millam: {
            plan: 'images/eglises-plans/millam.jpg',
            points: [
                {
                    n: 1, x: 52.5, y: 7.1,
                    title: "Le retable du maître-autel (M.H.)",
                    body: "Ce grand retable-lambris du XVIIIᵉ siècle est dédié à saint Omer, patron de la paroisse.<br><br>Il intègre quatre baies, rythmées par des pilastres aux chapiteaux composites dorés, une exposition fixe ouvrant sur une niche à miroir ; on y accède par un escalier situé derrière l’autel. Placées au niveau de l’autel, sur les pilastres du lambris, les deux statues représentent sainte Jeanne de Valois, fondatrice des Annonciades, et saint Jean l’Évangéliste.<br><br>Le maître-autel est composé d’éléments hétérogènes du XVIIIᵉ siècle. Des anges adorateurs de grande dimension, posés sur des volutes, encadrent le tabernacle. Sur la cuve en bois peint, trois bas-reliefs historiés représentent saint Laurent, saint Étienne et saint Ignace, évêque d’Antioche.<br><br>Cet ensemble provient du couvent des Annonciades de Bergues et fut donné après la Révolution à l’église par Laurent Coolos. Dans le cul-de-four, la Vierge et l’ange Gabriel entourant la représentation de saint Omer rappellent la vocation de ce couvent.<br><br>À l’entrée du chœur, les lambris en chêne possèdent des sculptures soignées. Deux médaillons sculptés figurent saint Antoine de Padoue et saint François d’Assise. Les stalles du XVIIᵉ siècle (M.H.), intégrées dans ce lambris, sont en chêne verni."
                },
                {
                    n: 2, x: 23.2, y: 21.3,
                    title: "Le retable nord (M.H.)",
                    body: "Contemporains l’un de l’autre, datables de la fin du XVIIᵉ siècle, les retables nord et sud ont une seule travée, encadrée par des colonnes torses jumelées en bois plein et à chapiteaux composites. L’entablement supporte un édicule à niche dont les amortissements à volutes portent des anges.<br><br>Le retable nord, dédié à la Vierge, a perdu sa polychromie originelle de faux marbre. Au-dessus d’un tableau de la Vierge à l’Enfant, dans une niche, une statue de Marie. Sur la porte du tabernacle, une représentation du Saint-Sacrement."
                },
                {
                    n: 3, x: 77.5, y: 21.3,
                    title: "Le retable sud (M.H.)",
                    body: "Contemporains l’un de l’autre, datables de la fin du XVIIᵉ siècle, les retables nord et sud ont une seule travée, encadrée par des colonnes torses jumelées en bois plein et à chapiteaux composites. L’entablement supporte un édicule à niche dont les amortissements à volutes portent des anges.<br><br>Au retable sud, la niche supérieure accueille une statue de saint Pierre ; un tableau représente saint Omer évêque, dans un édifice religieux où se trouverait le tombeau de saint Erkembode, mort en 742. Représentation anachronique car saint Omer est décédé en 670, plusieurs décennies avant Erkembode. Sur la prédelle figurent le mariage de la Vierge et de Joseph, ainsi qu’une scène de la vie de la Sainte Famille à Nazareth."
                },
                {
                    n: 4, x: 12.7, y: 40.6,
                    title: "Le retable de la Passion",
                    body: "Situé en dehors du chœur liturgique, sur le mur oriental du transept nord, il est composé d’éléments hétéroclites.<br><br>L’autel, en bois aux pieds carrés, porte sur la table une plaque de marbre avec les signes de la consécration de l’autel. Sous celle-ci figure une belle mise au tombeau du XVIIIᵉ siècle (M.H.), en bois polychromé. La table est encadrée de colonnes dont il ne subsiste que les bases occupées par des pots à feu.<br><br>Le tableau d’autel, une Crucifixion, a été probablement coupé ; des éléments d’autres tableaux figurent sur la toile : une main située en bas et l’inscription INRI en haut de la croix."
                },
                {
                    n: 5, x: 36.7, y: 21.3,
                    title: "La chaire de vérité",
                    body: "La chaire de vérité est démantelée. L’escalier est déposé dans le transept nord, la cuve (M.H.) placée à droite du retable nord. D’inspiration Renaissance, en chêne verni, elle est du XVIIᵉ siècle. En 1842, des bas-reliefs en bois doré, le Christ Sauveur et les quatre Évangélistes, furent ajoutés sur les panneaux."
                },
                {
                    n: 6, x: 53.0, y: 31.6,
                    title: "La table de communion (M.H.)",
                    body: "En fer forgé, elle comporte des représentations en fonte des évangélistes et divers autres bas-reliefs."
                },
                {
                    n: 7, x: 19.8, y: 84.6,
                    title: "Les lambris (M.H.)",
                    body: "Un très bel ensemble de lambris suit le contour de l’église. Il est en chêne et pichepin, à pilastres et mouluration, en ton bois naturel rehaussé d’or."
                },
                {
                    n: 8, x: 20.3, y: 62.2, spots: [{ x: 80.2, y: 61.7 }],
                    title: "Les confessionnaux",
                    body: "Les confessionnaux du XVIIIᵉ siècle présentent dans leur fronton galbé des scènes liées au repentir. Deux d’entre eux sont protégés au titre des monuments historiques."
                },
                {
                    n: 9, x: 52.5, y: 93.9,
                    title: "Tribune et buffet d’orgue",
                    body: "L’instrument (M.H.) a été construit en 1846 pour cette église par Pierre Van Peteghem, facteur d’orgues d’une lignée célèbre. Il a été restauré en 1977."
                },
                {
                    n: 10, x: 19.7, y: 92.7,
                    title: "Les fonts baptismaux",
                    body: "La cuve de pierre est surmontée de la figuration du baptême du Christ. La grille est en fer forgé."
                },
                {
                    n: 11, label: '11a', x: 13.6, y: 47.7,
                    title: "Tableau — Le Triomphe de la Vierge (M.H.)",
                    body: "Le Triomphe de la Vierge, l’un des tableaux de l’église protégés au titre des monuments historiques."
                },
                {
                    n: 11, label: '11b', x: 20.8, y: 25.4,
                    title: "Tableau — L’Annonciation (M.H.)",
                    body: "L’Annonciation, l’un des tableaux de l’église protégés au titre des monuments historiques."
                },
                {
                    n: 11, label: '11c', x: 79.5, y: 27.3,
                    title: "Tableau — La Cène (M.H.)",
                    body: "La Cène, l’un des tableaux de l’église protégés au titre des monuments historiques."
                },
                {
                    n: 11, label: '11d', x: 84.2, y: 41.3,
                    title: "Tableau — Le Calvaire (M.H.)",
                    body: "Le Calvaire, ex-voto de 1682."
                },
                {
                    n: 11, label: '11e', x: 84.2, y: 48.1,
                    title: "Tableau — L’Adoration des bergers (M.H.)",
                    body: "L’Adoration des bergers, ex-voto de 1704."
                },
                {
                    n: 12, label: '12a', x: 34.8, y: 40.5,
                    title: "Statue — Saint Antoine ermite",
                    body: "Statue de saint Antoine ermite."
                },
                {
                    n: 12, label: '12b', x: 69.1, y: 40.1,
                    title: "Statue — Buste reliquaire de saint Omer (M.H.)",
                    body: "Buste reliquaire de saint Omer."
                },
                {
                    n: 12, label: '12c', x: 70.0, y: 53.0,
                    title: "Statue — Vierge à l’Enfant (M.H.)",
                    body: "Vierge à l’Enfant."
                },
                {
                    n: 12, label: '12d', x: 20.2, y: 29.5,
                    title: "Statue — L’Éducation de la Vierge (M.H.)",
                    body: "L’Éducation de la Vierge, statue de procession (ou « Kranz »).<br><br>Le dépliant mentionne aussi une seconde Éducation de la Vierge (12f), protégée elle aussi."
                },
                {
                    n: 12, label: '12e', x: 20.8, y: 52.9,
                    title: "Statue — Sainte Catherine d’Alexandrie (M.H.)",
                    body: "Sainte Catherine d’Alexandrie."
                }
            ]
        },
        oudezeele: {
            plan: 'images/eglises-plans/oudezeele.jpg',
            points: [
                {
                    n: 1, x: 30.8, y: 19.2,
                    title: "Le retable nord (M.H. 1980)",
                    body: "Dédié à la Vierge et remanié au XIXᵉ siècle, il intègre des éléments anciens : le devant d’autel et la frise décorative du gradin d’autel (fin XVIIᵉ, début XVIIIᵉ). Il est en bois peint faux-bois. Le tableau d’autel représente le couronnement de la Vierge."
                },
                {
                    n: 2, x: 82.7, y: 19.2,
                    title: "Le retable sud (M.H.)",
                    body: "Dédié à sainte Anne, ce retable plat en bois, à une seule travée, forme un ensemble cohérent, probablement du XVIIᵉ siècle avec des remaniements au XVIIIᵉ. Il a été restauré en 2001. Le tableau d’autel représente la Sainte Famille élargie : Anne (mère de Marie) tenant l’enfant Jésus dans ses bras, Joachim (père de Marie), Jean-Baptiste avec l’agneau crucifère et, derrière, Marie et Joseph. Ces personnages apparaissent comme le lien entre la famille terrestre et la famille spirituelle de Jésus, représentée par Dieu le Père et la colombe du Saint-Esprit. Au couronnement, une statue de sainte Anne ternaire (Anne, Marie et Jésus), en bois peint en blanc."
                },
                {
                    n: 3, x: 55.5, y: 19.2,
                    title: "Le maître-autel (M.H.)",
                    body: "De style néogothique, sculpté par Collesson de Wormhout en 1876. L’ensemble est très ouvragé, avec dans sa partie inférieure des bas-reliefs représentant le Christ, saint Pierre et saint Paul et, dans la partie supérieure, des statues du Sacré-Cœur, de la Vierge à l’Enfant et de saint Joseph."
                },
                {
                    n: 4, x: 13.1, y: 22.2, spots: [{ x: 13.1, y: 35.8 }, { x: 13.1, y: 49.5 }, { x: 13.1, y: 61.7 }, { x: 13.1, y: 73.9 }, { x: 96.4, y: 22.5 }, { x: 96.4, y: 36.0 }, { x: 96.4, y: 49.7 }, { x: 96.4, y: 61.8 }, { x: 96.4, y: 74.0 }],
                    title: "Les vitraux",
                    body: "Ceux du chœur, signés Charles Gaudelet (1817-1870), représentent au registre supérieur : Dominique recevant le rosaire des mains de la Vierge et, au registre inférieur, la Samaritaine et Jésus près du puits. À droite, saint Thomas touchant Jésus, le Christ qui remet les clés à saint Pierre.<br><br>Dans le vaisseau nord, l’Immaculée Conception (Gaudelet), Notre-Dame de Lourdes (Coucke) ; côté sud, Jean-Baptiste prêchant dans le désert (Gaudelet), un prêtre célébrant la messe pour le rachat des âmes du purgatoire (Gaudelet).<br><br>Sont de l’atelier des frères Coucke (peintres-verriers à Bruges) : côté nord, sainte Thérèse de l’Enfant-Jésus, Notre-Dame de Pontmain ; côté sud, saint Roch, sainte Jeanne d’Arc, sainte Marguerite-Marie Alacoque."
                },
                {
                    n: 5, x: 55.5, y: 31.9,
                    title: "La table de communion (M.H. 1973)",
                    body: "Exécutée par Gustave Pattein en 1889, elle s’inspire de celle qui avait été installée en 1789. Elle est en chêne et se compose, dans la partie centrale, de six panneaux sculptés, séparés par des pilastres ornés d’épis de blé et de raisins. Sur les autres panneaux : deux anges prosternés devant le saint ciboire, Notre-Dame de Boulogne, les armoiries de la famille Frohard de Lamette (famille commanditaire de cette table et de la précédente). Les deux panneaux qui constituaient les portes servent de décor à l’autel actuel ; ils représentent le pélican nourrissant ses petits de son sang et l’Agneau couché sur le livre aux sept sceaux."
                },
                {
                    n: 6, x: 42.5, y: 47.1,
                    title: "Le retable du Christ aux liens (M.H.)",
                    body: "Ces deux petits retables se répondent visuellement : leur partie supérieure est en bois polychrome, probablement du XVIIᵉ siècle, alors que l’ensemble autel, tabernacle, prédelle, peint en faux-bois, est du XIXᵉ siècle. Dans les niches centrales se trouvent des statues en bois polychrome et des statues en plâtre : à droite, Bernadette et Catherine Labouré, à gauche, Jean-Marie Vianney, curé d’Ars, et Gérard Majella, frère rédemptoriste."
                },
                {
                    n: 7, x: 68.2, y: 47.1,
                    title: "Le retable de saint Joseph (M.H.)",
                    body: "Ces deux petits retables se répondent visuellement : leur partie supérieure est en bois polychrome, probablement du XVIIᵉ siècle, alors que l’ensemble autel, tabernacle, prédelle, peint en faux-bois, est du XIXᵉ siècle. Dans les niches centrales se trouvent des statues en bois polychrome et des statues en plâtre : à droite, Bernadette et Catherine Labouré, à gauche, Jean-Marie Vianney, curé d’Ars, et Gérard Majella, frère rédemptoriste."
                },
                {
                    n: 8, x: 48.0, y: 55.1,
                    title: "La chaire (M.H.)",
                    body: "Elle est en chêne et date de 1735. La cuve est divisée en cinq panneaux sculptés représentant le Christ en gloire et les quatre évangélistes avec leurs attributs : l’homme pour Matthieu, le lion pour Marc, l’aigle pour Jean, le taureau pour Luc. Entre les panneaux, des putti évoquent les vertus théologales : l’Espérance avec l’ancre, la Charité avec le cœur, la Foi avec la croix, qui a disparu ; on y a ajouté un enfant avec une tiare papale symbolisant l’Église."
                }
            ]
        },
        pitgam: {
            plan: 'images/eglises-plans/pitgam.jpg',
            points: [
                {
                    n: 1, x: 45.6, y: 6.0,
                    title: "Le retable-lambris de l’abside centrale",
                    body: "Le maître-autel a été exécuté par Jean-Louis Elshoecht en 1789. Au cul-de-four, Dieu le Père sur une nuée ; en tableau d’autel, entre deux pilastres décorés, sous la colombe figurant le Saint-Esprit, la statue de saint Folquin sur une nuée, avec la crosse et la mitre, ses attributs d’évêque.<br><br>De part et d’autre, les vitraux figurent les quatre évangélistes, identifiés par leurs attributs : Matthieu et l’enfant, Luc et le bœuf, Marc et le lion, Jean et l’aigle, représenté âgé et barbu à la façon byzantine, ce qui est unique dans les églises flamandes.<br><br>Les trois stalles ont été réalisées par les frères Vosselle, les lambris et les parcloses par la maison Buisine de Lille, au XIXᵉ siècle."
                },
                {
                    n: 2, x: 19.1, y: 15.7,
                    title: "Le retable nord",
                    body: "Il s’agit d’un retable-lambris en chêne, exécuté en 1739 par les frères Vosselle, dédié à Notre-Dame du Rosaire. La Vierge, représentée dans le groupe sculpté du tableau d’autel, remet le rosaire à saint Dominique. Trois panneaux sculptés et dorés représentent une Nativité au-dessus du tabernacle et, sur les panneaux latéraux situés sous les vitraux, l’Annonciation et l’Adoration des mages. L’autel de 1863 est en chêne verni, avec dorures. Dans la baie de droite sont évoquées trois des apparitions de la Vierge aux bergers de la Salette, Maximin et Mélanie ; dans la baie de gauche, une des apparitions de la Vierge à Bernadette, à Lourdes."
                },
                {
                    n: 3, x: 71.4, y: 15.9,
                    title: "Le retable sud",
                    body: "Il est dédié à saint Nicolas ; daté du XVIIᵉ siècle, il n’a pas été modifié dans sa structure. Une statue du saint est placée dans la niche supérieure. Au centre, entre deux colonnes torses décorées de laurier, une statue du Sacré-Cœur a remplacé un tableau devenu vétuste représentant saint Nicolas, dont il reste l’encadrement. Sur le devant de l’autel, l’antependium, du XVIIᵉ siècle, est en bois sculpté et doré.<br><br>Saint Pierre et saint Paul sont représentés sur les vitraux de chaque côté du retable."
                },
                {
                    n: 4, x: 64.0, y: 18.9,
                    title: "Le monument funéraire (M.H.)",
                    body: "Dans l’abside sud, à gauche du retable, ce monument en bois sculpté fait mémoire de Maître Valentin Merlin, curé de Pitgam, décédé en 1702. Dans la partie supérieure figure une allégorie du temps qui passe : un sablier aux ailes de chauve-souris ; sous l’épitaphe, un crâne et une faux."
                },
                {
                    n: 5, x: 45.0, y: 29.7,
                    title: "La table de communion (M.H.)",
                    body: "Placée entre les piliers est de la tour, elle est en chêne et date du XVIIIᵉ siècle. Elle est ornée de médaillons sculptés représentant, de gauche à droite : Moïse et les Tables de la Loi, Abraham et Melchisédech échangeant le pain et le vin, l’Arche d’alliance surmontée de deux anges, la table des pains de proposition, le sacrifice d’Isaac et le grand prêtre avec son pectoral.<br><br>Les clôtures de chœur des vaisseaux latéraux sont en fer forgé, ornées de médaillons en fonte de fer figurant, avec leurs symboles, les quatre évangélistes : Luc et Jean au sud, Marc et Matthieu au nord."
                },
                {
                    n: 6, x: 54.2, y: 48.5,
                    title: "La chaire de vérité",
                    body: "Elle date du XVIIᵉ siècle ; les panneaux sculptés de sa cuve polygonale représentent au centre le Christ tenant le globe terrestre ; sur les côtés, les évangélistes avec leurs symboles, séparés par des putti figurant les vertus théologales : la Foi avec les Tables de la Loi, l’Espérance avec l’ancre et la Charité avec le calice. Elle a été déplacée devant le pilier sud-ouest de la tour."
                },
                {
                    n: 7, x: 11.0, y: 36.8, spots: [{ x: 79.8, y: 41.1 }, { x: 15.4, y: 56.7 }, { x: 75.4, y: 56.7 }],
                    title: "Les confessionnaux",
                    body: "Les deux confessionnaux du transept, exécutés en 1724 par Antoine Piette, de Saint-Omer, sont vernis. Sur celui du côté sud, le fronton est orné d’une représentation végétale : la palme de la victoire et un rameau d’olivier, symbole de paix. Dans le bras nord du transept, le fronton d’origine a été remplacé par les frères Vosselle ; le médaillon évoque le reniement de saint Pierre. Dans le vaisseau sud, le confessionnal est l’œuvre de Gustave Pattein, au XIXᵉ siècle."
                },
                {
                    n: 8, x: 90.4, y: 29.1,
                    title: "La sacristie",
                    body: "Construite en 1879 dans un style gothique tardif ; il est probable que les clés de voûte représentant les armoiries de la famille de la Haye constituent un hommage à cette seigneurie vivant au XVIIᵉ siècle."
                },
                {
                    n: 9, x: 75.4, y: 48.3,
                    title: "Buste reliquaire",
                    body: "Le reliquaire de saint Folquin (réalisé entre 1819 et 1838) est en bois doré ; il s’adapte parfaitement au socle plus ancien, probablement du XVIIIᵉ siècle."
                },
                {
                    n: 10, x: 10.6, y: 32.3, spots: [{ x: 29.5, y: 32.4 }, { x: 54.1, y: 32.2 }, { x: 80.1, y: 32.6 }, { x: 10.6, y: 40.2 }, { x: 10.6, y: 43.2 }, { x: 75.6, y: 52.0 }, { x: 15.1, y: 74.7 }],
                    title: "Les statues et les tableaux",
                    body: "Dans le transept : sur le mur ouest, sainte Cécile, statue en bois. Sur le pilier sud-est de la tour : saint Joachim, saint Roch et saint Joseph.<br><br>Sur le pilier nord-est de la tour, de gauche à droite : saint Gilles, sainte Apolline, sainte Anne ternaire (portant la Vierge à l’Enfant). Au sol, un saint évêque.<br><br>Sur le mur nord, trois tableaux : <em>Le martyre de sainte Barbe</em> (1733), <em>Saint Hubert</em> (bois peint et sculpté du XVIIᵉ), <em>Le Couronnement de la Vierge</em> (1739).<br><br>Dans la nef : dans le vaisseau nord se trouvent les statues de sainte Thérèse et saint Érasme ; trois autres statues sur un socle de procession : sainte Anne et la Vierge, sainte Catherine, une Vierge à l’Enfant.<br><br>À l’ouest, le petit Jésus de Prague. Dans le vaisseau sud de la nef : saint Éloi, placé sur un socle au mur."
                },
                {
                    n: 11, x: 44.7, y: 95.7,
                    title: "L’orgue (M.H.)",
                    body: "Le buffet d’orgue, en chêne sculpté, provient du couvent des Récollets de Dunkerque, la commune de Pitgam l’ayant acquis à la Révolution, lors des ventes des biens nationaux."
                },
                {
                    n: 12, x: 58.7, y: 91.1,
                    title: "Les fonts baptismaux",
                    body: "Le groupe en bois doré représentant le baptême de Jésus couvrait la cuve des fonts baptismaux ; il a été déplacé car le socle, en mauvais état de conservation, n’était plus adapté."
                },
                {
                    n: 13, x: 23.1, y: 93.0, spots: [{ x: 66.4, y: 92.5 }],
                    title: "Les plaques commémoratives de la guerre 1914-1918 et autel du saint Sépulcre",
                    body: "Occupant tout le mur intérieur de la façade ouest : côté sud, les noms des soldats revenus vivants ; côté nord, les noms de ceux tués lors de la Grande Guerre.<br><br>Devant la liste des soldats morts a été placé un autel surmonté d’une Pietà en terre polychrome ; sous l’autel gît un Christ au tombeau.<br><br>La baie proche de l’autel du saint Sépulcre évoque un sujet patriotique montrant le Christ bénissant un soldat à demi couché sur un champ de bataille.<br><br>Les verrières ferment les 23 baies de cet édifice ; 7 sont ornementales, les autres, historiées, mettent en valeur le Christ et les saints.<br><br>Sur les murs nord et sud de la nef, elles montrent, dans un décor ornemental, le Christ-Roi et des saints identifiés par leur nom."
                }
            ]
        },
        rexpoede: {
            plan: 'images/eglises-plans/rexpoede.jpg',
            points: [
                {
                    n: 1, x: 49.9, y: 8.3,
                    title: "Le chœur",
                    body: "Quelques statues dans le chœur proviennent de l’ancien aménagement, ainsi que les deux médaillons rocaille représentant saint Grégoire le Grand et probablement saint Augustin.<br><br>À la croisée du transept, l’autel en marbre noir (1983), dessiné par Dom Houssain, moine de Wisques, est orné de trois médaillons du début du XVIIIᵉ siècle. Les deux rangées de stalles (M.H.) sont une copie de celles de l’église Saint-Jean-Baptiste de Poperinge, par Séraphin Deblonde d’Eecke, qui a également exécuté la rampe rocaille de la chaire à proximité. Le chœur est éclairé par cinq vitraux de l’atelier Lorin, de Chartres, réalisés entre 1909 et 1910.<br><br>Des inclusions représentent l’abbé Yden, Jean-Louis Debuyser, à l’origine du drainage des Moëres, et son épouse Marie-Thérèse De Baecque."
                },
                {
                    n: 2, x: 25.7, y: 9.1,
                    title: "Le retable de la Vierge (XVIIIᵉ) (M.H.)",
                    body: "De plan concave, à une seule travée ; deux angelots remplacent l’ancien couronnement perdu lors du démontage des années 1900. De part et d’autre, deux statues : saint Joseph à gauche, le roi David en centurion à droite.<br><br>Trois vitraux sont dédiés à la Vierge Marie (1924-1926) : apparition de la Vierge à Bernadette Soubirous à Lourdes, la Vierge aux sept douleurs, déploration du Christ mort et la remise du scapulaire à saint Simon Stock."
                },
                {
                    n: 3, x: 74.6, y: 9.1,
                    title: "Retable de saint Vincent",
                    body: "De style néo-gothique, il est dédié à saint Vincent de Saragosse, patron des vignerons. Sur l’autel, un buste reliquaire du XVIIIᵉ siècle pouvant être porté en procession. Éclairant l’abside, cinq vitraux, dont trois illustrent le martyre de saint Vincent : saint Vincent comparaît devant l’empereur Dioclétien ; apothéose de saint Vincent ; martyre de saint Vincent sur un gril.<br><br>Le retable du XVIIIᵉ siècle qui lui était dédié a été démantelé lors des travaux du début du XXᵉ siècle ; seul reste un tableau placé au revers du mur ouest."
                },
                {
                    n: 4, x: 91.0, y: 34.5,
                    title: "Le retable de sainte Anne (M.H.)",
                    body: "Le retable le plus ancien de l’église et le seul qui a été sauvé en intégralité lors de la reconstruction de l’église. Il est dédié à sainte Anne et date du XVIIᵉ siècle. Il comporte une seule travée, encadrée par des colonnes surmontées de pots à feu. Il se caractérise par sa verticalité.<br><br>Le tableau d’autel représente la sainte parenté ; il s’agit d’une copie d’une œuvre de Pierre-Paul Rubens, de 1620-1630, aujourd’hui présente au musée du Prado à Madrid. Dans la niche supérieure, deux anges entourent le groupe sculpté de sainte Anne « ternaire ». L’autel est du XVIIIᵉ siècle.<br><br>Dans le croisillon sud, un vitrail patriotique rend hommage aux paroissiens de Rexpoëde morts à la guerre 1914-1918 (réalisation de Charles Lorin, de Chartres)."
                },
                {
                    n: 5, x: 9.1, y: 34.5,
                    title: "Statue de saint Donat",
                    body: "Quatre vitraux de même époque autour du retable nord représentent le couronnement de la Vierge, l’Ascension de Jésus, la mort de saint Joseph, la Sainte Famille à Nazareth."
                },
                {
                    n: 6, x: 19.2, y: 58.8,
                    title: "Tableau XVIIᵉ (M.H.)",
                    body: "Il représente l’adoration des bergers, d’après Pierre-Paul Rubens (l’esquisse se trouve actuellement à la Rubenshuis d’Anvers)."
                },
                {
                    n: 7, x: 26.5, y: 85.7,
                    title: "Retable de la Crucifixion",
                    body: "Accroché en hauteur au revers du mur nord-ouest. Peut-être avant 1900 se trouvait-il au croisillon nord. Il ne reste aujourd’hui que le tableau représentant le Christ en croix, à ses pieds Marie-Madeleine, la prédelle avec deux angelots et des vestiges du couronnement. Il date probablement du XVIIIᵉ siècle, avec remplois de la fin du XVIIᵉ."
                },
                {
                    n: 8, x: 71.8, y: 85.7,
                    title: "Tableau de saint Vincent",
                    body: "Cette huile sur toile représente saint Vincent. Il s’agit du tableau d’autel et de sa prédelle, portant une inscription en flamand : « tableau d’autel offert par Pierre-Jacques Debil en 1766 et restauré en 1876 »…"
                },
                {
                    n: 9, x: 49.2, y: 87.0,
                    title: "L’orgue",
                    body: "L’orgue a été reconstruit en 1878 par les frères Neuville, facteurs d’orgues à Rexpoëde, en réemployant des éléments de l’orgue antérieur. Le buffet du XVIIIᵉ siècle provient de l’abbaye bénédictine de Bergues Saint-Winoc. Le tambour d’entrée a été dessiné par Louis Croin, de Tourcoing. Tribune et buffet sont classés M.H.<br><br>Les vitraux des vaisseaux latéraux, de l’atelier Lorin de Chartres, au nombre de six, présentent un décor d’entrelacs de couleur sur un fond de grisaille. Leur pose date de 1910-1920."
                }
            ]
        },
        'saint-georges-sur-l-aa': {
            plan: 'images/eglises-plans/saint-georges-sur-l-aa.jpg',
            points: [
                {
                    n: 1, x: 52.7, y: 9.5,
                    title: "Le retable (chœur)",
                    body: "Le retable d’origine a été démonté en 1865 car il menaçait « ruine ». Il fut remplacé par un retable de style néo-gothique, comme les stalles (donation Beauvalot-Leys). La cuve d’autel (M.H.) date du XVIIIᵉ siècle. À la même date, on dota le chœur d’un nouveau carrelage et d’un nouveau couvrement en berceau en lattis."
                },
                {
                    n: 2, x: 52.7, y: 23.3,
                    title: "La table de communion",
                    body: "Elle est en fonte et a été achetée et placée en 1865."
                },
                {
                    n: 3, x: 35.7, y: 51.3,
                    title: "La chaire",
                    body: "De style néo-gothique, elle date du XIXᵉ siècle. Elle a été réalisée par les ateliers Augustin Collesson de Wormhout. Les quatre panneaux de la cuve représentent les quatre évangélistes avec leurs attributs. Elle était auparavant accolée au deuxième pilier de la croisée du transept. En l’an 2000, elle a été déplacée et transformée en ambon et en autel « Vatican II »."
                },
                {
                    n: 4, x: 52.7, y: 80.7,
                    title: "La tribune (M.H.)",
                    body: "La tribune en chêne date du XVIIᵉ siècle ; elle repose sur des colonnes torses, de bonne facture, à chapiteaux corinthiens."
                },
                {
                    n: 5, x: 70.2, y: 77.8,
                    title: "Les fonts baptismaux (M.H.)",
                    body: "La cuve en marbre veiné, de forme octogonale, porte l’inscription « Ce font appartient à Saint Georges 1673 ». Elle était coiffée d’un couvercle en bois surmonté du dragon de saint Georges."
                },
                {
                    n: 6, x: 35.6, y: 60.6,
                    title: "Le confessionnal",
                    body: "De style néo-gothique, il date du XIXᵉ siècle."
                }
            ]
        },
        sercus: {
            plan: 'images/eglises-plans/sercus.jpg',
            points: [
                {
                    n: 1, x: 55.0, y: 8.9,
                    title: "Le maître-autel",
                    body: "Le maître-autel en marbre est une réalisation de Gustave Pattein, d’Hazebrouck, datée de 1897.<br><br>Les autels-retables latéraux, en chêne, ont été aussi réalisés dans les ateliers Pattein, à la fin du XIXᵉ siècle."
                },
                {
                    n: 2, x: 28.1, y: 22.6,
                    title: "Au nord, le retable dédié à la Vierge Marie",
                    body: "Il encadre un tableau du XVIIIᵉ siècle représentant l’Assomption."
                },
                {
                    n: 3, x: 81.9, y: 22.6,
                    title: "Au sud, le retable dédié à saint Érasme",
                    body: "Il accueille aussi les statues de saint Nicolas et de saint Expédit."
                },
                {
                    n: 4, x: 48.3, y: 29.4, spots: [{ x: 61.3, y: 29.4 }],
                    title: "Les stalles",
                    body: "Les stalles sont une réalisation des ateliers Coutterie de Lille, de la deuxième partie du XIXᵉ siècle."
                },
                {
                    n: 5, x: 54.8, y: 33.4,
                    title: "La table de communion",
                    body: "La table de communion provient de l’atelier Paul-Fidèle Durie de Bailleul."
                },
                {
                    n: 6, x: 62.9, y: 47.4,
                    title: "La chaire",
                    body: "La chaire est un beau meuble en chêne portant sur l’abat-voix la date de 1750.<br><br>La cuve, de plan circulaire, porte sur les panneaux la représentation des quatre évangélistes, séparés, sur les montants, par leurs représentations symboliques ; au centre, le Christ Bon Pasteur. Sur les panneaux ajourés de la rampe d’escalier, des rinceaux et des motifs de style rocaille ; sur l’abat-voix, des coquilles rocaille symétriques et asymétriques."
                },
                {
                    n: 7, x: 71.5, y: 41.0,
                    title: "Saint Roch (1699)",
                    body: "L’église conserve trois statues de procession : saint Roch, sainte Anne et la Vierge, sainte Barbe.<br><br>Statue de saint Roch (1699), invoqué pour les maladies graves, telle la peste."
                },
                {
                    n: 8, x: 19.9, y: 48.2,
                    title: "Sainte Anne et la Vierge",
                    body: "L’église conserve trois statues de procession : saint Roch, sainte Anne et la Vierge, sainte Barbe.<br><br>Statue de sainte Anne et la Vierge, fin XVIIᵉ siècle."
                },
                {
                    n: 9, x: 37.7, y: 47.4,
                    title: "Sainte Barbe",
                    body: "L’église conserve trois statues de procession : saint Roch, sainte Anne et la Vierge, sainte Barbe.<br><br>Statue de sainte Barbe, fin XVIIIᵉ siècle."
                },
                {
                    n: 10, x: 55.0, y: 91.4,
                    title: "L’orgue",
                    body: "L’orgue a été réalisé par le facteur d’orgues Charles-Louis Neuville, de Rexpoëde, en 1848. La tribune, la balustrade, le buffet et le positif muet sont contemporains de l’instrument. Il a été restauré et inauguré le 16 mai 2010."
                }
            ]
        },
        socx: {
            plan: 'images/eglises-plans/socx.jpg',
            points: [
                {
                    n: 1, x: 44.1, y: 5.3,
                    title: "Maître-autel (M.H.)",
                    body: "Au fond du chœur, le maître-autel du XVIIIᵉ siècle, en forme de tombeau, est en bois peint faux marbre. Le devant d’autel est orné d’une guirlande dorée soutenant un médaillon avec l’agneau mystique sur le livre aux sept sceaux. Encadrés par des gradins à chandeliers, se superposent au centre de la table d’autel le tabernacle et une exposition tournante à trois décors : une porte bombée pour les jours ordinaires, une niche Louis XV pour fêter un saint, une niche couverte de miroirs pour mettre l’ostensoir en valeur. Deux anges adorateurs sculptés encadrent cet ensemble, qu’une croix incrustée de miroirs et de rayons dorés vient surmonter. De chaque côté de l’autel, une niche abrite un reliquaire de procession : saint Gilles d’un côté et saint Liévin de l’autre."
                },
                {
                    n: 2, x: 35.1, y: 15.5, spots: [{ x: 52.8, y: 15.5 }],
                    title: "Les stalles",
                    body: "L’entrée du chœur est encadrée par des stalles biplaces du XVIIIᵉ siècle, dont le dosseret est orné d’angelots. Ceux du centre soutiennent un médaillon évoquant la musique sacrée : David et sa harpe d’un côté, le pape Grégoire de l’autre. Les quatre angelots portent chacun le symbole d’une vertu cardinale : un livre (la prudence), un objet ovoïde (sans doute la force), une coupe (la tempérance) ; le geste du quatrième permet de penser qu’il portait la balance de la justice."
                },
                {
                    n: 3, x: 18.3, y: 22.4,
                    title: "Le retable nord (M.H.)",
                    body: "Les vaisseaux latéraux se terminent par un mur plat sur lequel est fixé un retable, copie de ceux construits en 1701 pour les nefs latérales de l’abbaye bénédictine de Bergues : tableau avec statue encadré par deux pilastres se chevauchant pour donner un effet de profondeur. Les pilastres soutiennent une corniche avec quatre socles pour des pots à feu qui n’ont pas été installés faute de hauteur libre.<br><br>Il est consacré, selon la tradition, à la Vierge Marie. Le tableau est orné de nuées, de rayons dorés et d’angelots, signifiant que la Vierge, dont la statue occupe le centre, est dans la gloire du ciel. Cette statue en bois de tilleul fut exécutée après la Révolution. Marie porte l’enfant Jésus qui ouvre les bras. En dessous du socle de la statue, un médaillon bombé porte le monogramme AMR (Ave Maria Regina). Au-dessus de la statue, une nuée entoure la colombe de l’Esprit-Saint. En bas et en haut du tableau, une paire d’angelots invite le fidèle à lever son regard.<br><br>Ce retable a été restauré en 1999 : la peinture marron est devenue une teinte acajou, la peinture blanche de la statue est devenue un blanc satiné faux marbre, le jaune a été repris à la feuille d’or."
                },
                {
                    n: 4, x: 67.2, y: 22.4,
                    title: "Le retable sud (M.H.)",
                    body: "Les vaisseaux latéraux se terminent par un mur plat sur lequel est fixé un retable, copie de ceux construits en 1701 pour les nefs latérales de l’abbaye bénédictine de Bergues : tableau avec statue encadré par deux pilastres se chevauchant pour donner un effet de profondeur. Les pilastres soutiennent une corniche avec quatre socles pour des pots à feu qui n’ont pas été installés faute de hauteur libre.<br><br>Le plus souvent consacré au saint patron de l’église, il est ici dédié à saint Léger, évêque d’Autun à l’époque mérovingienne. Sa structure est identique à celle du retable de la Vierge. Il a été restauré en 2002. Le restaurateur a pris le parti de reprendre la couleur de la couche la plus profonde : blanc et bleu avec quelques décors dorés à la feuille ; statue et angelots blanc cassé de bleu, bleu foncé pour la nuée de l’Esprit de Dieu, avec une colombe blanche à pattes rouges."
                },
                {
                    n: 5, x: 65.3, y: 73.2,
                    title: "La cloche Saint-Maur de l’abbaye Saint-Winoc",
                    body: "Coulée à Lille en 1700, elle est remarquable par son décor : blasons en relief aux armes de l’abbaye et de l’abbé, danse macabre et dédicace inscrite dans une portée musicale à trois lignes."
                },
                {
                    n: 6, x: 73.9, y: 73.2,
                    title: "Le triptyque",
                    body: "De dévotion familiale, il fut peint en Flandre au début du XVIIᵉ siècle. Le panneau central (inspiré d’une gravure d’un traité de la charité chrétienne de 1578) représente Dieu le Père dans les cieux, qui regarde la scène centrale où, dans une fontaine de jardin, le Christ détaché de la croix mêle son sang au lait maternel de Marie. La fontaine s’écoule sur le sol d’où émergent à mi-corps deux jeunes hommes et une jeune femme entourés de flammes : représentation des âmes du purgatoire (pouvant bénéficier du sang versé par le Christ pour la rémission des péchés et de l’intercession de la Vierge Marie). Sur les volets sont peints les orants (leurs parents ?) et, derrière eux, leur saint patron, ce qui nous donne leurs prénoms : Pierre et Anne. Sur les revers des volets est peinte une Annonciation."
                },
                {
                    n: 7, x: 44.9, y: 71.9,
                    title: "L’orgue",
                    body: "L’orgue en service actuellement n’a pas de buffet décoratif. Il a été commandé en 1958 aux ateliers Gonzalez à Châtillon (Hauts-de-Seine)."
                },
                {
                    n: 8, x: 44.9, y: 26.1,
                    title: "La table de communion",
                    body: "Elle a été réalisée en chêne par les ateliers Collesson, sculpteurs à Wormhout, et fut mise en place en 1895.<br><br>Entre les piliers sculptés, le décor des panneaux ajourés évoque l’Eucharistie (épis de blé, grappes de raisin, calices, pélican, l’agneau et l’ostensoir). Elle a retrouvé sa place initiale, après remise en état, le 30 mars 2023. Un des panneaux a été placé sur le devant de l’autel."
                }
            ]
        },
        steenbecque: {
            plan: 'images/eglises-plans/steenbecque.jpg',
            points: [
                {
                    n: 1, x: 51.5, y: 15.5,
                    title: "Retable du maître-autel (M.H.)",
                    body: "La Réforme protestante rejetait la primauté du pape. La Contre-Réforme a voulu ici illustrer le contraire : au centre, à la place d’honneur, l’apothéose de saint Pierre, patron de la paroisse, recevant d’un ange les clés de l’Église ; à ses pieds, deux anges, l’un porte la tiare papale, l’autre l’Évangile ouvert. La présence des anges, messagers de Dieu, souligne le caractère divin de la hiérarchie catholique. Pour appuyer cette glorification, les murs ont été habillés de lambris remarquables animés par 18 médaillons, représentant des personnages de l’Ancien Testament, les Pères de l’Église latine et des fondateurs d’ordres religieux. Deux anges thuriféraires encensent l’Église triomphante.<br><br>Le tabernacle à exposition tournante date de la première moitié du XVIIIᵉ siècle."
                },
                {
                    n: 2, x: 22.4, y: 29.5,
                    title: "Retable de la Vierge",
                    body: "Il est constitué principalement d’une niche maçonnée accueillant une statue en chêne, grandeur nature, de la Vierge Marie. Cette œuvre a été réalisée en 1854 par Fidèle Durie, sculpteur à Bailleul. De chaque côté du retable se trouvent deux petites niches abritant deux statuettes en tilleul du XVIIIᵉ siècle : une Vierge à la polychromie dorée tenant le sceptre, Notre-Dame des Victoires, et une Vierge aux couleurs dominantes bleu et rouge, Notre-Dame des Ardents."
                },
                {
                    n: 3, x: 80.0, y: 29.5,
                    title: "Retable de saint Joseph",
                    body: "Élevé en 1635, ce retable en chêne a été modifié au XIXᵉ siècle. Dans la niche centrale se trouve une statue en plâtre de saint Joseph et, de chaque côté, une niche plus petite abritant les statuettes en chêne de saint Paul (à gauche) et de saint André. Une quatrième niche sous le couronnement abrite une statue en plâtre de saint Benoît Labre, saint local, né en 1748 à Amettes, à une vingtaine de kilomètres."
                },
                {
                    n: 4, x: 83.3, y: 50.9,
                    title: "Retable de saint Roch (M.H.)",
                    body: "Il est parmi les plus anciens conservés en Flandre (1635). Il a été fortement remanié en 1859. Un groupe sculpté représente saint Roch. Deux tableaux sur bois du XVIIᵉ siècle ornent le mobilier, avec en niche supérieure Dieu le Père et, au centre, l’Adoration des bergers. Sur le mur, de chaque côté, sont accrochés deux volets provenant d’un triptyque démantelé, représentant des donateurs. Près du retable se trouve une statue de sainte Pharaïlde, témoin d’un culte fervent à Steenbecque durant plusieurs siècles.<br><br>Sur le mur, un panneau représentant <em>La prière du Christ au mont des Oliviers</em>."
                },
                {
                    n: 5, x: 20.1, y: 50.9,
                    title: "Retable de la sainte parenté (M.H.)",
                    body: "Ce retable en chêne de 1655 a été restauré et rehaussé en 1859. Il est constitué dans sa partie centrale d’une peinture sur bois, copie d’un tableau de Rubens se trouvant au musée de Madrid, qui montre sainte Anne apprenant à lire à sa fille, la Vierge Marie. Ce thème est également évoqué dans le groupe sculpté. Sur ce retable apparaissent également les statues de deux personnages de l’Ancien Testament, ancêtres de Joseph : Abraham, père de tous les croyants, et David, roi du peuple d’Israël. De chaque côté du retable se trouvent deux volets provenant d’un triptyque démantelé, représentant des donateurs.<br><br>Sur le mur, un panneau représentant <em>« La résurrection du Christ »</em>."
                },
                {
                    n: 6, x: 61.1, y: 78.4,
                    title: "Chaire de vérité",
                    body: "Élevée en 1736 (date portée sur le dorsal avec le nom du donateur, Nicolas-Joseph De Broere), selon la tradition orale pour la collégiale Saint-Pierre d’Aire-sur-la-Lys. L’artiste y a représenté le Christ sur le panneau central de la cuve et les quatre évangélistes sur les deux panneaux latéraux et les deux portillons.<br><br>Entre les deux volets de l’escalier, une statue de saint Augustin en bronze a été offerte au XIXᵉ siècle."
                },
                {
                    n: 7, x: 83.2, y: 90.8,
                    title: "Fonts baptismaux",
                    body: "Ils datent du XVIIᵉ ou du XVIIIᵉ siècle. La cuve octogonale est en pierre calcaire noire de Tournai. Le couvercle en bois, très lourd, peut être glissé sur le côté au moyen d’une potence à crémaillère située au-dessus. Il est surmonté d’un groupe sculpté représentant le baptême du Christ."
                },
                {
                    n: 8, x: 50.6, y: 90.8,
                    title: "Orgue (M.H.)",
                    body: "Le buffet de 1858 est dû au menuisier-sculpteur Fidèle-Paul-Louis Durie (1819-1874), de Bailleul. L’instrument a été construit en 1859 par les établissements Michiels père & fils, facteurs d’orgues à Lille.<br><br>Le « positif », partie de l’orgue posée en avant de la tribune, est ici chantant, à la différence des orgues en Flandre ; il comporte trois tourelles. Le grand buffet, en arrière, en comporte cinq. Au-dessus se trouvent des anges musiciens et, au centre, une représentation de sainte Cécile. L’ensemble a été restauré en 2024."
                },
                {
                    n: 9, x: 18.4, y: 90.8,
                    title: "Mise au tombeau",
                    body: "Cette œuvre du XVIIIᵉ siècle, en bois de tilleul, est attribuée à l’un des membres de la famille Elshoecht, sculpteurs à Bergues. Rassemblés dans le sépulcre, les personnages pleurent le Christ mort. Les deux femmes entourant la Vierge Marie portent les aromates préparés pour l’ensevelissement. À l’extérieur, deux anges de chaque côté complètent l’ensemble.<br><br>La grotte en ciment date de la fin du XIXᵉ siècle."
                }
            ]
        },
        steene: {
            plan: 'images/eglises-plans/steene.jpg',
            points: [
                {
                    n: 1, x: 50.0, y: 9.1,
                    title: "Le retable du maître-autel (M.H.)",
                    body: "Dédié à saint Martin, ce retable lambris est du XVIIIᵉ siècle. Il intègre deux vitraux (1873) représentant la Charité de saint Martin et saint Antoine ermite.<br><br>Le tableau central, évoquant la Cène, est une œuvre de Beeckmans, datée de 1708 (il a été restauré et inauguré le 3 juillet 2022).<br><br>Le Maître-autel, détaché du lambris, repose sur une estrade entièrement en marbre noir veiné de blanc. Le dais qui surmonte le tabernacle est un dais de procession."
                },
                {
                    n: 2, x: 21.0, y: 16.9,
                    title: "Le retable nord (M.H.)",
                    body: "Dédié à la Vierge Marie, il est constitué d’une seule travée, en sapin et bois local, daté du premier tiers du XVIIIᵉ siècle.<br><br>Sur les angles du tabernacle, figurations allégoriques de l’ancien Testament (la synagogue avec les Tables de la loi) et du nouveau Testament (l’Eglise avec le calice).<br><br>A proximité du retable : « Le reniement de Pierre » (tableau anonyme, copie de Gérard Seghers, fin XVIIᵉ - début XVIIIᵉ siècles)."
                },
                {
                    n: 3, x: 74.9, y: 20.6,
                    title: "Le retable sud (M.H.)",
                    body: "Dédié à saint Antoine ermite, il est de même époque et de mêmes matériaux que le retable nord. Saint Antoine est considéré comme le « titulaire secondaire » de l’église. On l’invoquait pour la protection des bestiaux. La statue de saint Nicolas, dans la niche, est de la fin du XIXᵉ siècle, ainsi que l’accompagnement naturaliste de rochers et de végétaux, en plâtre et bois, réalisé par Alfred Dezitter.<br><br>Les deux petits bustes reliquaires figurent saint Ambroise et saint Vincent.<br><br>A proximité sur le mur sud, une « sorte de retable » l’Ecce Homo (Christ souffrant), remontage de statues et de reliefs sculptés des XVIIIᵉ et XIXᵉ siècles au-dessus d’un faux autel."
                },
                {
                    n: 4, x: 35.7, y: 22.7, spots: [{ x: 62.7, y: 22.7 }],
                    title: "Les stalles (M.H.)",
                    body: "Elles sont dues à l’atelier Collesson de Wormhout (1895). Les médaillons évoquent le thème de la musique, avec le roi David et saint Grégoire le Grand."
                },
                {
                    n: 5, x: 49.2, y: 29.7,
                    title: "La table de communion (M.H.)",
                    body: "Du XVIIIᵉ siècle, elle comporte des compléments ou réfections du XIXᵉ siècle. Y figurent : au nord, le prophète Elie, miraculeusement nourri dans le désert et le sacrifice d’Isaac ; au centre, le Christ au jardin des oliviers, l’Agneau pascal et la Passion ; au sud, le sacrifice d’un bélier par Abel, l’Agneau mystique et le grand prêtre Aaron."
                },
                {
                    n: 6, x: 53.5, y: 56.2,
                    title: "La chaire de vérité (M.H.)",
                    body: "La chaire est datée de 1728. En 1903, on ajouta un couronnement monumental en forme de dais surmonté d’une statue, probablement réalisé par Augustin Collesson, sculpteur, la cuve fut munie d’un pied, probablement à la même époque.<br><br>La balustrade représente, en trois médaillons, la vision de saint Hubert. Les panneaux de la cuve offrent la représentation classique du Christ et des quatre évangélistes, alternés avec les vertus cardinales."
                },
                {
                    n: 7, x: 80.1, y: 56.4, spots: [{ x: 80.1, y: 67.8 }],
                    title: "Les confessionnaux (M.H.)",
                    body: "Les confessionnaux de la nef sud sont du milieu du XVIIIᵉ siècle. Y figurent le repentir de saint Pierre et le Bon Pasteur. Le confessionnal du vaisseau nord, façon XVIIIᵉ siècle, est sans doute de 1899, comme le lambris qui l’accompagne, il est dû aux ateliers Collesson."
                },
                {
                    n: 8, x: 87.0, y: 83.8,
                    title: "Les fonts baptismaux (M.H.)",
                    body: "Ils sont constitués d’une cuve en pierre de Tournai (pierre calcaire marbrière bleu-noir) du XVIIᵉ-XVIIIᵉ siècle, couverte par un groupe sculpté en bois représentant le baptême du Christ par saint Jean-Baptiste. Le Christ en ivoire pourrait être du XVIIIᵉ siècle."
                }
            ]
        },
        volckerinckhove: {
            plan: 'images/eglises-plans/volckerinckhove.jpg',
            points: [
                {
                    n: 1, x: 50.7, y: 6.7,
                    title: "Retable du maître-autel (M.H.)",
                    body: "L’autel et le tabernacle sont en chêne, peints et dorés, faux marbre. Les parois sont couvertes de lambris en chêne, ensemble de 1855, œuvre de Séraphin Deblonde, auteur aussi de la statue centrale de saint Folquin. Les quatre statues de saints en tilleul sont antérieures, elles sont posées sur des pilastres dont les chapiteaux sont ornés de sculptures."
                },
                {
                    n: 2, x: 20.4, y: 14.5,
                    title: "Le retable nord (M.H.)",
                    body: "Il date du XIXᵉ siècle. Dans la partie centrale, sur un socle important, une statue de la Vierge couronnée, portant l’enfant Jésus et le rosaire, est située sous une gloire ornée de motifs floraux entourant un triangle avec l’œil de Dieu.<br><br>Les statues de sainte Anne avec la Vierge et de saint Joachim sont placées entre deux colonnes, sommées de chapiteaux composites. Sur le fronton de celles-ci des pots à feu.<br><br>Dans le médaillon devant l’autel, un bas-relief de l’Annonciation, du XVIIIᵉ siècle, est contemporain des anges du sommet du retable."
                },
                {
                    n: 3, x: 83.7, y: 14.7,
                    title: "Le retable sud (M.H.)",
                    body: "Du XVIIᵉ siècle, il est dédié à saint Blaise ; le tableau d’autel de 1698, œuvre d’Henri Bischop, évoque le martyre du saint. Il est encadré par deux colonnes, placées en retrait l’une par rapport à l’autre, afin d’obtenir un effet de profondeur."
                },
                {
                    n: 4, x: 10.7, y: 32.4, spots: [{ x: 89.5, y: 33.0 }, { x: 10.7, y: 75.5 }],
                    title: "Les confessionnaux",
                    body: "Les confessionnaux sont répartis entre la nef et les chapelles ; celui de la chapelle nord porte sur son fronton les armes papales."
                },
                {
                    n: 5, x: 59.0, y: 62.7,
                    title: "La chaire (M.H.)",
                    body: "En bois, elle date du XVIIIᵉ siècle. Les saints évangélistes et leurs attributs sont représentés sur la cuve et des motifs de feuilles d’acanthe enroulées décorent la rampe."
                },
                {
                    n: 6, x: 54.0, y: 92.9,
                    title: "L’orgue",
                    body: "Installé dans la tribune, il a été démonté en 1992, par la maison Pascal, de Lille, en raison des travaux de réfection de la façade. Le buffet et la tribune sont inscrits à l’inventaire supplémentaire des monuments historiques."
                },
                {
                    n: 7, x: 11.0, y: 92.8,
                    title: "Les fonts baptismaux (M.H.)",
                    body: "Clos par une grille en fer forgé, ornée de diverses sculptures dont une figure féminine, ils sont l’œuvre de Pierre Willaeys de Cassel (XIXᵉ), placés sous un dais gothique. Un couvercle en bois du XXᵉ siècle recouvre la cuve en marbre noir."
                },
                {
                    n: 8, x: 49.2, y: 45.8,
                    title: "La table de communion",
                    body: "Don de la veuve du notaire Lippens, tous deux évoqués par des plaques commémoratives, la table de communion est datée de 1819. En fer battu, elle est ornée de divers moulages dont ceux des quatre évangélistes."
                },
                {
                    n: 9, x: 83.1, y: 26.9,
                    title: "Le dais",
                    body: "Placé dans la chapelle sud, il est daté 1819. Sur le baldaquin sont représentés : les pains de propositions, l’arche d’alliance, l’œil de Dieu dans un triangle et l’Eucharistie symbolisée par un calice. Des épis de blé, des grappes de raisin et une couronne royale fermée, en complètent le décor. Le ciel de dais est en tissu de grande qualité.<br><br>Deux panneaux en bois sculptés, placés dans le chœur aux extrémités des lambris de l’abside centrale, représentent l’un le reniement de saint Pierre (1722) l’autre saint Corneille en prière (1725)."
                }
            ]
        },
        warhem: {
            plan: 'images/eglises-plans/warhem.jpg',
            points: [
                {
                    n: 1, x: 58.3, y: 11.2,
                    title: "Retable du maître-autel",
                    body: "Grand retable-lambris du XVIIIᵉ siècle à trois travées, séparées par des pilastres qui encadrent les baies. Le groupe sculpté central représente Notre-Dame de l’Assomption, patronne de l’église. Dans le couronnement, la Sainte Trinité. Le maître-autel est surmonté d’un tabernacle à exposition tournante. Deux médaillons insérés dans les lambris de l’abside représentent l’Adoration des Bergers et l’Adoration des Mages."
                },
                {
                    n: 2, x: 36.8, y: 19.8,
                    title: "Retable du Rosaire",
                    body: "Daté du XVIIIᵉ siècle, c’est un retable-lambris dont les travées et le cul-de-four suivent les parois de l’abside polygonale nord. Une statue de la Vierge à l’Enfant tenant le sceptre est adossée au panneau central. Au centre de la prédelle, dans un médaillon, la Vierge remet le rosaire à saint Dominique. Quinze médaillons ovales suivent l’arc du lambris représentant les épisodes de la vie de Marie et du Christ à travers les quinze Mystères du Rosaire (cinq mystères joyeux, cinq mystères douloureux et cinq mystères glorieux)."
                },
                {
                    n: 3, x: 81.4, y: 21.5,
                    title: "Retable du Sacré-Cœur",
                    body: "Retable en chêne (1620-1630), dédié antérieurement à saint Sébastien. La travée est flanquée de deux colonnes en faible relief. L’autel est modifié au XIXᵉ siècle lorsque la dévotion au Sacré-Cœur s’intensifie. Sa statue remplace alors celle de saint Sébastien."
                },
                {
                    n: 4, x: 17.2, y: 50.3,
                    title: "Retable du Saint-Sépulcre",
                    body: "Situé dans le bras nord du transept, son unique travée est encadrée par deux colonnes cannelées et sculptées. Dans le couronnement, une niche abrite la statue d’un Christ au roseau. Il surmonte une mise au tombeau en pierre calcaire de 1647 qui fait office de quatorzième station du chemin de croix."
                },
                {
                    n: 5, x: 91.2, y: 29.8,
                    title: "Le chemin de croix",
                    body: "Chef-d’œuvre de la sculpture baroque flamande, il a été réalisé en chêne, par Jean Elshoecht d’Ypres (1770-1780). C’est sans doute le plus ancien et le plus remarquable au nord de Paris."
                },
                {
                    n: 6, x: 49.6, y: 71.5,
                    title: "La chaire de vérité",
                    body: "Sculptée par Jean Elshoecht (1742). Sa cuve galbée présente cinq panneaux séparés par des montants à ressaut où sont placés des angelots figurant des vertus (Force, Foi, Espérance et Charité). Les thèmes des panneaux sculptés se rapportent au Nouveau Testament, la porte de la cuve représente Moïse et les Tables de la Loi."
                },
                {
                    n: 7, x: 27.0, y: 38.8, spots: [{ x: 89.9, y: 37.7 }],
                    title: "Les confessionnaux",
                    body: "Quatre confessionnaux s’insèrent dans les lambris. Celui de « Monsieur le Curé », vaisseau nord, date du début du XVIIIᵉ siècle, il est orné de deux statues de pécheurs pardonnés : saint Pierre, le visage ravagé de douleur et sainte Marie-Madeleine portant un crâne (symbole de la vanité). Celui de la nef sud (1698) possède des cariatides représentant la Charité et l’Espérance, entourées de deux colonnes torses."
                },
                {
                    n: 8, x: 59.4, y: 91.8,
                    title: "L’orgue",
                    body: "Sa tribune est composée d’éléments de l’ancien jubé de l’église du couvent des Dominicains de Bergues, d’où provient également le buffet d’orgue (XVIIᵉ-XVIIIᵉ siècle) ; tous deux furent acquis en 1792 par l’abbé Hilst, curé constitutionnel, lors des ventes révolutionnaires."
                },
                {
                    n: 9, x: 90.0, y: 93.8,
                    title: "Les fonts baptismaux",
                    body: "La cuve du XVIIᵉ siècle est en pierre de Tournai. Une potence en fer forgé supporte le couvercle. À l’arrière, une sculpture monumentale datée de 1899 nous montre le Christ en croix entouré des symboles de la chrétienté."
                }
            ]
        },
        'wemaers-cappel': {
            plan: 'images/eglises-plans/wemaers-cappel.jpg',
            points: [
                {
                    n: 1, x: 56.4, y: 4.6,
                    title: "Le retable du maître-autel (M.H.)",
                    body: "Daté 1701, en chêne, restauré en 2003, ce retable a gardé sa polychromie d’origine. Au centre, six colonnettes torses en enfilade forment une niche pour le Christ en croix, encadrée par deux paires de colonnes torses et surmontée en couronnement par la statue de saint Martin, patron de la paroisse. Pierre et Paul, placés en ailerons latéraux, sont couronnés par des anges."
                },
                {
                    n: 2, x: 24.0, y: 20.4,
                    title: "Le retable de la Vierge (M.H.)",
                    body: "Réalisé vers 1740, en bois résineux polychromé, il est formé de trois travées individualisées. Une Vierge à l’enfant est entourée de sainte Barbe et sainte Catherine, vierges et martyres, auxiliatrices implorées pour l’obtention d’une « bonne mort » ; au fronton, Dieu le Père ; en médaillons, saint Bavon et saint Joseph encadrent le tabernacle."
                },
                {
                    n: 3, x: 83.0, y: 43.1,
                    title: "Le retable sud (M.H.)",
                    body: "Retable à une seule travée, de 1748, dédié à saint Blaise (maux de gorge), entouré de saint Nicolas, protecteur des enfants et de saint Éloi, patron des agriculteurs. Au fronton, saint Antoine ermite accompagné de son cochon. Sous l’autel, une Mise au tombeau en bois sculpté (restaurée en 2025)."
                },
                {
                    n: 4, x: 46.7, y: 14.4,
                    title: "La croix de procession",
                    body: "(1ère moitié XXᵉ) En vermeil, porte en signature un cœur percé de deux flèches, encadré des initiales « A et T », poinçon d’Alexandre Théry, orfèvre parisien."
                },
                {
                    n: 5, x: 56.3, y: 19.5,
                    title: "La table de communion",
                    body: "(XIXᵉ) Les panneaux de bois sont séparés par des pilastres, des chutes de feuilles et de fruits en assurent l’ornementation ; buste de la Vierge, du Bon Pasteur, angelots aux visages accolés, calice, pélican."
                },
                {
                    n: 6, x: 66.7, y: 43.1,
                    title: "Le bas-relief d’Adrien Stinte",
                    body: "(1517) Plaque votive en pierre bleue provenant de l’abbaye Saint-Winoc de Bergues. Elle aurait été ramenée par le général Vandamme."
                },
                {
                    n: 7, x: 47.2, y: 53.5,
                    title: "La chaire de vérité",
                    body: "XVIIIᵉ. Sur la cuve, sont représentés les Pères de l’Église : Ambroise, Augustin, Jérôme et Grégoire le grand."
                },
                {
                    n: 8, x: 16.4, y: 34.2, spots: [{ x: 28.8, y: 83.4 }],
                    title: "Les confessionnaux",
                    body: "Sur le fronton d’un confessionnal, saint Pierre en larmes avec le coq, les clefs, un livre symbole de repentance. Sur l’autre confessionnal, une colombe dans un cercle de feu d’où part une nuée céleste."
                },
                {
                    n: 9, x: 15.5, y: 28.6,
                    title: "Tableau de saint Dominique",
                    body: "Dominique de Guzman reçoit le Rosaire des mains de la Vierge. Au bas du tableau, le chien symbolique des Dominicains (Domini canis – le chien du Seigneur), porte dans la gueule le flambeau qui va éclairer le monde."
                },
                {
                    n: 10, x: 40.9, y: 20.7,
                    title: "L’éducation de Marie (M.H.)",
                    body: "(1707 ?) En bois peint, imitation marbre blanc, rehaussé d’or ; cette statue évoque l’éducation de la Vierge par sa mère, sainte Anne (Protoévangile de Jacques)."
                },
                {
                    n: 11, x: 85.9, y: 51.5,
                    title: "Le chemin de croix",
                    body: "Copie d’œuvres de Rubens et de Van Dyck, ces toiles datant du XIXᵉ siècle, portent l’inscription en flamand du nom des donateurs."
                },
                {
                    n: 12, x: 85.6, y: 93.1,
                    title: "Les fonts baptismaux",
                    body: "XVIᵉ siècle. En pierre noire du Boulonnais, à huit pans peints en gris."
                },
                {
                    n: 13, x: 57.1, y: 93.4,
                    title: "L’orgue",
                    body: "Daté 1837, il a pour facteur Auguste Renard. Le buffet est l’œuvre de Léonard Croes. Les statues du roi David et de sainte Cécile ont été réalisées par L. Liébart, sculpteur de Wormhout."
                }
            ]
        },
        'west-cappel': {
            plan: 'images/eglises-plans/west-cappel.jpg',
            points: [
                {
                    n: 1, x: 83.3, y: 18.3,
                    title: "Le retable sud (M.H.)",
                    body: "Dédié à sainte Anne. Le tableau d’autel représente l’éducation de la Vierge. Il domine l’autel et le tabernacle. Dans la niche supérieure, une statue de sainte Anne ternaire (Anne, Marie, Jésus)."
                },
                {
                    n: 2, x: 30.7, y: 18.3,
                    title: "Le vitrail de l’Annonciation (M.H.)",
                    body: "Daté de 1530, il fait partie des vestiges d’un ensemble début Renaissance (1532, 1533, 1534). Gothique dans sa composition, il est Renaissance dans son décor. Dans son tympan, un chien lape du lait renversé. Ce vitrail a été offert par Denys de Morbecque, seigneur de West-Cappel."
                },
                {
                    n: 3, x: 40.1, y: 18.3,
                    title: "Le retable nord (M.H.)",
                    body: "Dédié à la Vierge, remanié au XIXᵉ siècle, il intègre des éléments anciens : le devant d’autel et la frise décorative du gradin d’autel (fin XVIIᵉ, début XVIIIᵉ). Il est en bois peint faux-bois. Le tableau d’autel représente l’Assomption de la Vierge : il est surmonté d’une niche dans laquelle se trouve une statue de la Vierge à l’Enfant.<br><br>L’ancien tabernacle transformé en niche contient une statuette de l’enfant Jésus. Il est flanqué des bustes de sainte Catherine et de sainte Barbe."
                },
                {
                    n: 4, x: 26.9, y: 23.8,
                    title: "Le gisant de Ludwine van Cappel (M.H.)",
                    body: "En pierre marbrière de Tournai et marbre blanc, il recouvre la tombe de Ludwine van Cappel décédée le 5 mai 1420. La défunte est représentée couchée, dans une attitude de veille, les yeux ouverts, enveloppée dans un grand manteau, les mains jointes (disparues) sur la poitrine, les pieds posés sur un petit chien en signe de fidélité."
                },
                {
                    n: 5, x: 45.9, y: 23.1,
                    title: "Les statues (M.H.)",
                    body: "Deux belles statues du XVIIIᵉ siècle, le Christ à la colonne et la Vierge de douleur, ornent le chœur."
                },
                {
                    n: 6, x: 71.2, y: 23.1,
                    title: "Les statues (M.H.)",
                    body: "Deux belles statues du XVIIIᵉ siècle, le Christ à la colonne et la Vierge de douleur, ornent le chœur."
                },
                {
                    n: 7, x: 58.1, y: 28.5,
                    title: "La table de communion (M.H.)",
                    body: "Sur plan chantourné, les panneaux sont séparés par la représentation allégorique des vertus cardinales et théologales, de gauche à droite : Force, Prudence, Charité, Foi, Espérance, Justice, Tempérance. Dans les panneaux, traités en bas-reliefs et en demi-reliefs : la rencontre d’Abraham et du grand-prêtre Melchisédech, le serpent d’airain, le reniement de saint Pierre, saint Jean-Baptiste, Moïse et la manne, le sacrifice d’Isaac."
                },
                {
                    n: 8, x: 83.8, y: 44.8,
                    title: "Le buste reliquaire de procession de saint Sylvestre (M.H.)",
                    body: "Ce buste reliquaire du patron de l’église serait attribuable à Van Brouckorst ou à Jean Elshoecht et aurait été réalisé avant 1759, date à laquelle il a été doré par Joseph Combos."
                },
                {
                    n: 9, x: 62.7, y: 55.6,
                    title: "La chaire (M.H.)",
                    body: "De style baroque sage d’inspiration Renaissance, en chêne, elle date de 1641 (date portée sur le dorsal). Son décor compartimenté est comparable à celui des confessionnaux. La cuve est divisée en cinq panneaux non historiés et séparés par des chutes de fruits, où figurent anges, cuirs découpés et ornements géométriques. Le culot est supporté par un pied flanqué de la représentation de quatre lions tenant chacun un écu."
                },
                {
                    n: 10, x: 58.6, y: 74.8,
                    title: "L’orgue (M.H.)",
                    body: "L’instrument de 1683 est dû en partie au facteur d’orgue Jan van Belle, d’Ypres. L’abrégé porte la mention « I.J. Belle me fecit 1683 ». Il est considéré comme l’un des plus anciens d’Europe. Il n’a pas de pédale et ne possède qu’un seul clavier. Il proviendrait de l’église de Wormhout ; son transfert eut lieu en 1855. Il a été restauré en 1984 par la manufacture Aubertin de Courtefontaine dans le Jura, avec le concours de subventions publiques (M.H.) et de l’association des « Amis de l’orgue de West-Cappel »."
                },
                {
                    n: 11, x: 79.7, y: 76.7,
                    title: "Pierre tombale de 1565",
                    body: "Près du porche dans le vaisseau sud, une pierre tombale représente le cadavre décharné d’un prêtre (calice). Ce type de figuration est appelé transi. Le corps cruellement nu et dérisoire rappelle au passant la vanité des choses terrestres et la fragilité de la vie."
                }
            ]
        },
        winnezeele: {
            plan: 'images/eglises-plans/winnezeele.jpg',
            points: [
                {
                    n: 1, x: 54.4, y: 8.2,
                    title: "Retable du maître-autel",
                    body: "(XVIIIᵉ ou XIXᵉ siècle) Dédié à saint Martin dont la statue se retrouve au-dessus du maître-autel, il est conçu comme un lambris qui épouse la forme de l’abside. Dans les quatre niches de l’autel, les évangélistes Marc, Matthieu, Luc et Jean."
                },
                {
                    n: 2, x: 23.7, y: 6.5,
                    title: "Retable nord",
                    body: "(XVIIIᵉ siècle). Il se situe dans la partie la plus ancienne de l’édifice, à l’emplacement de l’ancienne chapelle des seigneurs d’Averoult et Rubempré. Il est dédié à la Vierge. Le tableau représente l’apparition de la Vierge à saint Dominique. Dans la partie supérieure, une statue de la Vierge en Assomption."
                },
                {
                    n: 3, x: 80.9, y: 7.4,
                    title: "Retable sud",
                    body: "(XVIIIᵉ et XIXᵉ siècles). Dédié au Saint-Cœur de Jésus. Le tableau d’autel représente saint Nicolas, encadré de colonnes. Ce meuble a été complété au XIXᵉ siècle par un lambris latéral, un habillage du cul-de-four et une statue du Sacré-Cœur."
                },
                {
                    n: 4, x: 53.5, y: 26.8,
                    title: "Table de communion",
                    body: "Séparant l’espace du chœur de celui de la nef, elle a été réalisée à la fin du XIXᵉ siècle en chêne ; elle est ornée de thèmes de l’ancien et du nouveau testament en rapport avec l’Eucharistie et est décorée d’élégants motifs néogothiques. Certains éléments XVIᵉ/XVIIᵉ siècles proviennent de la balustrade du banc seigneurial.<br><br>À sa suite, côté sud, une table de communion à balustres du XVIIᵉ siècle porte des figures d’angelots."
                },
                {
                    n: 5, x: 44.9, y: 50.2,
                    title: "Chaire à prêcher",
                    body: "La chaire date de la première moitié du XVIᵉ siècle et appartient encore à la tradition gothique. Il n’est pas impossible que Jansénius (1585-1638), évêque d’Ypres, l’ait utilisée ! Elle provient en effet de la cathédrale de cette ville à laquelle elle fut achetée au début du XIXᵉ siècle. Les panneaux sculptés illustrent le thème de l’enseignement : présentation par Moïse des tables de la Loi aux Hébreux, prédication de saint Jean-Baptiste, enseignement de Jésus : sermon sur la Montagne, prédication de saint Paul, enseignement de saint Thomas d’Aquin.<br><br>Volés en 1977 puis enfin retrouvés, les panneaux sont remis en place en 2005."
                },
                {
                    n: 6, x: 81.3, y: 74.4,
                    title: "Le calvaire",
                    body: "Le calvaire se situant à l’entrée de la nef sud, ainsi que les fonts baptismaux se trouvant à l’entrée de la nef nord, datent de la fin du XIXᵉ siècle."
                },
                {
                    n: 7, x: 22.0, y: 74.2,
                    title: "Les fonts baptismaux",
                    body: "Le calvaire se situant à l’entrée de la nef sud, ainsi que les fonts baptismaux se trouvant à l’entrée de la nef nord, datent de la fin du XIXᵉ siècle."
                },
                {
                    n: 8, x: 53.5, y: 75.6,
                    title: "L’orgue",
                    body: "L’orgue a été mis en place en 1837-38 par le facteur d’orgue Auguste Renard, de Vieux-Berquin et transformé en 1911 par Frédéric Loncke."
                }
            ]
        },
        wulverdinghe: {
            plan: 'images/eglises-plans/wulverdinghe.jpg',
            points: [
                {
                    n: 1, x: 55.6, y: 21.4,
                    title: "Le retable du maître-autel",
                    body: "Le retable du maître-autel, en bois, du début du XVIIIᵉ siècle, est peint « faux-bois ». Sa corniche interrompue, aux volumineuses volutes, coiffe le fronton. Deux colonnes lisses aux chapiteaux composites dorés entourent <em>La Nativité</em>, tableau d’autel de Joseph-Nicolas Jouy, élève d’Ingres. L’autel, la prédelle, les gradins et le tabernacle, peints en blanc avec des décors « dorés » appliqués, d’un style autre que le retable, peuvent être datés du XIXᵉ siècle.<br><br>Les petits retables latéraux, en bois de structure et dimensions identiques, ont conservé autels et gradins du XVIIIᵉ siècle ; au-dessus de ces éléments d’origine, ils sont peints en blanc et décorés d’appliques dorées, ajouts du XIXᵉ siècle."
                },
                {
                    n: 2, x: 35.5, y: 57.4,
                    title: "Le retable nord",
                    body: "Il est dédié à la Vierge, le devant d’autel est décoré de feuillages, avec au centre dans un médaillon, une représentation sculptée de saint Pierre repentant. Dans la niche supérieure, une statue de la Vierge de Lourdes en plâtre placée entre 1906 et 1930 en remplacement d’une statue en bois polychrome nommée Marie, reine de la paix."
                },
                {
                    n: 3, x: 73.6, y: 57.4,
                    title: "Le retable sud",
                    body: "Le retable sud est dédié à saint Martin. Lors d’un incendie, le retable a perdu son devant d’autel. Les marques du feu ont été dissimulées en 1955 par une plaque d’isolin, sur laquelle ont été replacés le médaillon initial représentant saint Martin et le chérubin qui le surmontait.<br><br>En 1916, une statue en plâtre de saint Martin évêque a été placée dans la niche et a remplacé la statue ancienne en bois polychrome de sainte Anne apprenant à lire à la Vierge."
                },
                {
                    n: 4, x: 54.8, y: 42.4,
                    title: "La table de communion",
                    body: "La table de communion du XVIIIᵉ siècle est d’une facture exceptionnelle. En chêne verni entièrement sculpté, elle présente dans des médaillons saint Antoine ermite et saint Martin à cheval en soldat romain partageant son manteau. Autour le décor est fait de motifs végétaux et de grappes de raisin."
                },
                {
                    n: 5, x: 72.8, y: 71.6,
                    title: "La chaire",
                    body: "La chaire, dans le parcours des lambris des murs de la nef, est comme eux en sapin. L’ensemble, inauguré en 1896, est dû à Théophile Fenaert menuisier à Broxeele. Leur décor du XVIIIᵉ siècle en chêne verni est plus simple que ceux du lambris du chœur. Les montants sculptés dans la masse, sont ornés de palmettes, coquilles et rocailles."
                },
                {
                    n: 6, x: 35.5, y: 71.9,
                    title: "Le confessionnal",
                    body: "Le confessionnal, en chêne verni portant la date de 1716, a été inséré par Fenaert dans les lambris qu’il a confectionnés à la fin du XIXᵉ siècle. Saint Pierre, en buste, est sculpté dans le tympan du XVIIᵉ siècle."
                },
                {
                    n: 7, x: 33.9, y: 90.0,
                    title: "Les fonts baptismaux",
                    body: "Les fonts baptismaux sont formés d’éléments disparates d’origine du XVIᵉ au XVIIIᵉ siècle, avec une cuve en marbre et un couvercle en cuivre."
                },
                {
                    n: 8, x: 49.6, y: 90.2,
                    title: "L’orgue",
                    body: "L’orgue de 1844, du facteur Germain de Saint-Omer, est un instrument inutilisable depuis un siècle."
                },
                {
                    n: 9, x: 68.1, y: 26.6,
                    title: "Deux bannières",
                    body: "Deux bannières sont suspendues dans l’abside : l’une représente saint Martin en soldat romain partageant son manteau, l’autre porte les armes de la commune, don en 1909, du chanoine Leuridan dernier descendant de Louis-Auguste de la Viefville, marquis de Steenvoorde, seigneur de Watten et Wulverdinghe."
                },
                {
                    n: 10, label: '10-1', x: 40.5, y: 39.5,
                    title: "Les tableaux — La Résurrection de Lazare",
                    body: "Les tableaux, autres que celui du maître-autel, sont tous du XVIIᵉ siècle."
                },
                {
                    n: 10, label: '10-2', x: 72.0, y: 39.8,
                    title: "Les tableaux — Le Retour d’Égypte de la Sainte Famille",
                    body: "Les tableaux, autres que celui du maître-autel, sont tous du XVIIᵉ siècle."
                },
                {
                    n: 10, label: '10-3', x: 40.8, y: 67.1,
                    title: "Les tableaux — Un Christ aux outrages",
                    body: "Les tableaux, autres que celui du maître-autel, sont tous du XVIIᵉ siècle.<br><br>Situé au-dessus du confessionnal du mur nord de la nef, il a été restauré en 2018 ainsi que le tableau d’autel."
                }
            ]
        },
        zegerscappel: {
            plan: 'images/eglises-plans/zegerscappel.jpg',
            points: [
                {
                    n: 1, x: 19.2, y: 20.9,
                    title: "Le retable nord (restauré en 2000-2001)",
                    body: "Dédié à Notre Dame du Rosaire, il date probablement de la fin du XVIIᵉ siècle et a été modifié aux XVIIIᵉ et XIXᵉ siècles. Il est en bois résineux polychrome. Au niveau de la prédelle, les bas-reliefs représentent l’Annonciation et la Visitation. A travée unique, flanquée de colonnes jumelées, la statue de la Vierge, en bois doré au centre, la représente debout sur le globe terrestre, autour duquel s’enroule un serpent qu’elle foule aux pieds. Au couronnement, dans une niche, une autre statue de la Vierge portant le Rosaire."
                },
                {
                    n: 2, x: 73.8, y: 20.9,
                    title: "Le retable sud",
                    body: "Dédié au Sacré-Cœur de Jésus, il date de la fin XVIIᵉ siècle. Il comporte une travée, en bois résineux, peint faux marbre. Au niveau de la prédelle, les deux bas-reliefs représentent la Nativité et l’Adoration des mages. Au centre, la statue du Sacré-Cœur de Jésus est encadrée d’une série de trois colonnes en retraits, donnant ainsi plus de profondeur. Au couronnement une niche avec la statue de saint Nicolas, sans doute la première dédicace de ce retable."
                },
                {
                    n: 3, x: 46.5, y: 5.0,
                    title: "Le maître-autel",
                    body: "Daté de la fin du XIXᵉ siècle, il est en chêne de style néo-gothique. Sur l’antependium, on observe une représentation sculptée de la Cène. De chaque côté de l’autel, les statues de Melchisédech et du roi David."
                },
                {
                    n: 4, x: 46.2, y: 12.2,
                    title: "Le dais (M.H.)",
                    body: "Il date de 1766. C’est un chef d’œuvre de finesse avec ses quatre colonnettes ajourées qui supportent le dôme."
                },
                {
                    n: 5, x: 46.6, y: 23.8,
                    title: "Table de communion (M.H.)",
                    body: "Elle date de la fin du XVIIᵉ siècle, en chêne et mesure vingt-sept mètres. Elle est formée d’une suite de colonnettes torses et de balustres avec personnages aux bras croisés."
                },
                {
                    n: 6, x: 77.2, y: 49.6, spots: [{ x: 78.2, y: 74.4 }],
                    title: "Les confessionnaux (M.H.)",
                    body: "Les deux confessionnaux de la nef sud portent la date de 1685. Ils sont remarquables par la beauté de leurs sculptures et des statuettes qui y sont intégrées. Les portes ont été ajoutées en 1867."
                },
                {
                    n: 7, x: 39.6, y: 61.3,
                    title: "La chaire de vérité (M.H.)",
                    body: "En chêne, elle date de 1723. Sur les panneaux de la cuve sont représentés les quatre évangélistes et le Christ salvator mundi. Sur la rampe, l’enfant Jésus tenant la croix domine le monde. Au-dessus de l’abat voix une statue du bon Pasteur."
                },
                {
                    n: 8, x: 47.4, y: 95.5,
                    title: "L’orgue",
                    body: "La tribune (M.H.), constituée de huit panneaux, est formée d’anciennes boiseries Renaissance flamande qui datent du XVIIᵉ siècle. L’instrument date du XVIIIᵉ. Le buffet, homogène, est constitué d’un grand corps à trois tourelles et d’un positif factice. Au sommet des tourelles on distingue les statues de sainte Cécile et d’anges musiciens."
                },
                {
                    n: 9, x: 25.1, y: 46.5,
                    title: "Le triptyque (M.H.)",
                    body: "Cette peinture sur bois datant de 1618 est l’œuvre d’un peintre flamand inconnu. Le tableau central représente la pré-annonciation (appelée aussi tableau de l’Emmanuel). Au recto des volets, figurent les donateurs, au verso, une Vierge à l’enfant et un abbé."
                },
                {
                    n: 10, x: 78.6, y: 38.2,
                    title: "La décollation de saint Jacques le Majeur (M.H.)",
                    body: "Ce tableau est l’œuvre de Dominique Doncre (1743-1820), peintre né à Zegerscappel."
                },
                {
                    n: 11, x: 70.3, y: 94.8,
                    title: "Le vitrail de saint Gilles",
                    body: "Cette verrière date de 1905, l’originalité de son décor et l’intensité des couleurs en font une œuvre remarquable due au maître verrier L. Koch de Beauvais. La majorité des vitraux de cette église ont d’ailleurs été réalisés par le même atelier."
                },
                {
                    n: 12, x: 42.3, y: 89.0,
                    title: "Le meuble de la confrérie du Saint-Sacrement",
                    body: "Ce meuble daté de 1770, comporte six cents tiroirs dans lesquels on inscrivait les noms des membres de la confrérie. Dans les médaillons centraux, reliés par des rubans, étaient inscrits les noms des dignitaires."
                },
                {
                    n: 13, x: 42.0, y: 78.6,
                    title: "Les fresques",
                    body: "Réalisées au début du XXᵉ siècle par un vicaire de la paroisse, elles représentent « la hantise de la mort » et sont des copies colorisées de gravures extraites du catéchisme en images de 1908.<br><br>La première : la mort du juste ; la deuxième : la communion des saints ; la troisième : la mort du pécheur."
                }
            ]
        }
        // Quaedypre : pas de plan interactif (volontairement).
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
            label: "Retour en photos sur les 35 ans de l'association — 42 retables restaurés, 12 nouveaux dépliants, hommage à Aïda Tellier",
            actuId: 'anniversaire-35-ans-2026'
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
        eglisesPlans: eglisesPlans    // plans interactifs (36 églises, données issues des dépliants)
    };
})();
