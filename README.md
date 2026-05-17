# Retables de Flandre — Site V2

Site associatif statique, **Vue 3 embarqué** (CDN local, aucun build step), Bootstrap 5.
Pour un nouveau dev qui reprend le projet : tout ce qu'il faut savoir tient dans ce fichier.

---

## Lancer en local

```bash
./start-server.sh
# Ouvre http://localhost:8080 dans le navigateur
```

Le script lance simplement `python3 -m http.server 8080`. Aucune dépendance, aucun `npm install`.

---

## Stack

| Brique | Choix | Pourquoi |
|---|---|---|
| Vue 3 | Chargé en CDN local (`js/vue.global.prod.js`) | Composants réactifs sans build step. Édite → recharge. |
| Bootstrap 5 | CSS + JS bundle | Grilles, carrousels, modales. |
| Bootstrap Icons | CSS local | Icônes via `<i class="bi bi-…"></i>`. |
| EmailJS | CDN | Envoi du formulaire contact côté client. |
| HTML statique | 1 fichier par page | Servable depuis n'importe quel hébergeur statique (Ionos, Netlify, etc.). |

**Pas de** Node, pas de bundler, pas de framework côté serveur. Le site fonctionne avec un simple serveur de fichiers.

---

## Pages du site

| URL | Sidebar | Rôle |
|---|---|---|
| `index.html` | Accueil | Hero + carrousel retables + newsletter + contact |
| `generic.html` | Qui sommes-nous ? | Présentation asso, 3 colonnes + frise chronologique |
| `qu-est-ce-qu-un-retable.html` | Qu'est-ce qu'un retable ? | Hero, texte collectif (composant), 2 articles scientifiques |
| `textcollectif.html` | (sous-page) | Essai en 4 thèmes (matériaux, structure, évolution, emplacement) |
| `depliants-eglises.html` | Que peut-on visiter ? | Grille 37 fiches églises + carrousel vitraux d'Arnèke |
| `actualites.html` | Actualités | Feed unifié filtrable (recherche + catégorie + pagination) |
| `boutique.html` | Boutique | 4 produits + bon de commande |

---

## Architecture en 1 schéma

```
HTML page (générique)
  ├─ <head>
  │   └─ <link> CSS (main, sidebar, responsive, components/*)
  │
  └─ <body>
      <div id="app">                 ← racine Vue
        <rf-sidebar></rf-sidebar>
        <div class="rf-content">
          <rf-news-banner></rf-news-banner>    ← strip nouveautés
          <section>...</section>               ← contenu spécifique page
          <rf-newsletter-cta></rf-newsletter-cta>
          <rf-contact></rf-contact>
          <rf-footer></rf-footer>
        </div>
        <rf-lightbox></rf-lightbox>            ← zoom global
      </div>

      <script src="vue.global.prod.js">    ← Vue
      <script src="bootstrap.bundle.min.js">
      <script src="content.js">            ← données éditoriales
      <script src="news.js">               ← API cloche/bandeau
      <script src="vue-components.js">     ← définitions composants
      <script src="vue-app.js">            ← createApp({...}).mount('#app')
```

L'ordre des `<script>` matière : les données et composants doivent être chargés **avant** `vue-app.js`.

---

## Structure des fichiers

```
retable-Flandre-v2/
├── *.html                  7 pages
├── README.md               ← ce fichier
├── start-server.sh
│
├── css/
│   ├── main.css            variables CSS, typo, layout, modales
│   ├── sidebar.css         sidebar gauche + FAB hamburger
│   ├── responsive.css      mobile-first overrides
│   ├── bootstrap.min.css
│   ├── bootstrap-icons.css
│   └── components/
│       ├── cards.css       toutes les cards (panorama, actu, produit, fiche église, timeline…)
│       ├── badges.css      badges réutilisables
│       └── notifications.css   bandeau "Nouveautés" (le nom est historique)
│
├── js/
│   ├── content.js          DONNÉES éditoriales (actualités, fiches églises, articles, carrousel retables)
│   ├── news.js             API cloche/bandeau (lecture/non-lu via localStorage)
│   ├── vue-components.js   COMPOSANTS Vue (logique + templates)
│   ├── vue-app.js          createApp + mount sur #app, init carrousels Bootstrap
│   ├── vue.global.prod.js  Vue 3 CDN
│   └── bootstrap.bundle.min.js
│
├── images/
│   ├── 2025/, 2026/        photos évènements par année
│   ├── previous-image/     assets hérités (logo, schéma retable, photos d'églises, vitraux Arnèke…)
│   │   ├── boutique/       photos produits + 28 vitraux d'Arnèke
│   │   └── diaporamaActivites/   34 photos du carrousel d'accueil
│   └── _archives/          PDFs périmés gardés en archive (calendriers passés, AG antérieures…)
│
└── fonts/                  Bootstrap Icons WOFF
```

### Règle d'or pour la séparation données / code

| Tu modifies… | Tu vas dans… |
|---|---|
| Le texte d'une actualité, d'un retable, d'une église | `js/content.js` |
| Les helpers de la cloche (état lu/non-lu) | `js/news.js` |
| La logique d'un composant Vue | `js/vue-components.js` |
| Le style visuel | `css/` |
| Le squelette d'une page (hero, ordre des sections) | la page `.html` correspondante |

---

## Composants Vue disponibles

Tous définis dans `js/vue-components.js`, enregistrés via `window.RFComponents` puis montés par `js/vue-app.js`. Une table des matières détaillée est en tête de `vue-components.js`.

| Composant | Rôle | Source des données |
|---|---|---|
| `rf-sidebar` | Sidebar de gauche (brand + nav + Facebook). Prop : `current-page` | — |
| `rf-news-banner` | Strip "Nouveautés" 1 ligne avec auto-rotation | `window.RFNewsAPI` (basé sur `content.js`) |
| `rf-hero-home` | Hero de la page d'accueil | inline |
| `rf-hero-retable` | Hero de "Qu'est-ce qu'un retable" + schéma cliquable | inline |
| `rf-texte-collectif` | Bloc d'intro du texte collectif | inline |
| `rf-article-hertel` / `rf-article-oger` | Cards des 2 articles scientifiques | `RFContent.articles.{hertel,oger}` (HTML) |
| `rf-gallery-carousel` | Carrousel retables (accueil) | `RFContent.galleries.retables` |
| `rf-eglises-grid` | Grille 37 fiches églises avec recherche | `RFContent.eglisesVisite` |
| `rf-gallery-arneke` | Carrousel des 28 vitraux d'Arnèke | `RFContent.galleries.eglises.arneke` |
| `rf-actu-feed` | Feed actualités (recherche + filtres + pagination) | `RFContent.actualites` |
| `rf-newsletter-cta` | CTA "Lettre d'infos" | inline |
| `rf-contact` | Formulaire contact (EmailJS) | inline |
| `rf-footer` | Pied de page | inline |
| `rf-lightbox` | Modale plein écran auto-bindée à toutes les images | scan DOM |

---

## Opérations courantes

### Ajouter une actualité

Dans `js/content.js`, ajouter une entrée à `actualites` :

```js
{
  id: 'mon-event-2026',           // unique, sert d'ancre URL
  date: '2026-06-15',              // YYYY-MM-DD
  category: 'Sortie',              // AG / Visite / Formation / Sortie / Hommage / Cérémonie / Programme / Rapport
  title: 'Mon titre',
  summary: 'Court résumé qui apparaît dans la card.',
  body: '<p>Paragraphe HTML optionnel ajouté sous le summary.</p>',
  tags: ['mots', 'clés', 'pour', 'recherche'],
  docs: [{ label: 'Compte-rendu', href: 'images/2026/cr.pdf' }],
  photos: [{ src: 'images/2026/photo.jpg', alt: 'desc', caption: 'optionnel' }],
  carousel: [{ src: 'images/2026/img1.jpg', alt: '1/3' }, /* ... */],
  featured: true                   // optionnel : mise en avant dans le bandeau
}
```

Une seule entrée alimente automatiquement :
- Le feed `actualites.html` (recherche/filtres/pagination)
- Le bandeau "Nouveautés" en tête de chaque page
- L'état lu/non-lu via localStorage

### Ajouter un retable au carrousel d'accueil

`js/content.js` → `retables` array :

```js
{
  src: DIAPO + 'crbst_XXXX.jpg',
  alt: 'Description',
  badge: 'Église Saint-X de Ville',
  heading: 'Retable de…'
}
```

Photo à déposer dans `images/previous-image/diaporamaActivites/`.

### Ajouter une fiche église (page "Que peut-on visiter ?")

`js/content.js` → `eglisesVisite` array. Une entrée :

```js
{
  name: 'Wormhout',
  image: 'images/2025/Wormhout.jpg',    // null = placeholder coloré auto
  description: "Église Saint-Martin, retable sud du XVIIIᵉ siècle.",
  tags: ['Saint-Martin', 'XVIIIe'],     // boostent la recherche
  pdf: DEPLIANT_BASE + 'Wormhout.pdf'
}
```

### Modifier le texte d'un article scientifique

`js/content.js` → `articleHertel` ou `articleOger` (template HTML). Édite directement le bloc.

### Modifier la timeline / les missions de l'association

Édite directement `generic.html` — c'est du HTML inline, pas piloté par data.

---

## Système "Nouveautés" (bandeau + cloche supprimée)

```
content.js (RFContent.actualites)
        │
        ▼
news.js (window.RFNewsAPI)
        │  - bellItems()        ← featured + N plus récentes (max 5)
        │  - unreadItems()      ← bellItems filtrées par localStorage
        │  - markAsRead(id)     ← dispatch event 'rf-news-changed'
        │  - dismissBanner()    ← bandeau fermé jusqu'à nouvelle actu
        ▼
rf-news-banner (en haut de chaque page)
   - Strip 1 ligne, auto-rotation 5s, dots cliquables
   - Click sur titre → marque lu + navigue
```

L'état lu/non-lu vit dans `localStorage` côté visiteur. Pas de backend.

---

## Palette de couleurs

Définie dans `css/main.css` :

| Variable | Hex | Usage |
|---|---|---|
| `--primary-color` | `#9AB0D1` | Bleu doux asso — boutons, badges, bordures, gradients |
| `--primary-dark` | `#6B85AE` | Variant foncé — hover, gradients, `custom-btn-bg-color` |
| `--primary-rgb` | `154, 176, 209` | Pour les `rgba(var(--primary-rgb), 0.X)` (transparences) |
| `--secondary-color` | `#3D405B` | Texte sombre / accents |
| `--custom-btn-bg-hover-color` | `#E07A5F` | Accent terracotta (hover bouton primary) |
| `--link-hover-color` | `#F2CC8F` | Accent sable (hover liens sidebar) |

Pour changer la couleur principale, modifie les 3 lignes `--primary-color`, `--primary-dark`, `--primary-rgb` dans `main.css` et le `<meta name="theme-color">` dans chaque page.

---

## Conventions

- **Nommage CSS** : préfixe `rf-` pour tout ce qui est custom de l'asso (`rf-card`, `rf-actu-card`, etc.). Évite de surcharger les classes Bootstrap.
- **Composants Vue** : `<rf-xxx>` (kebab-case), `RFXxx` en JS (PascalCase).
- **Mobile-first** dans `responsive.css` : règles de base = mobile, `min-width:` = ajouts pour plus grand. Les rares `max-width:` sont des overrides ciblés.
- **Pas d'inline scripts** dans le HTML — toute la logique Vue est dans `js/`.
- **Images** : `loading="lazy"` sur tout ce qui n'est pas above-the-fold.
- **Accessibilité** : `alt` sur toutes les images, `aria-label` sur les boutons icône-only.

---

## Git workflow

Branche principale `feat/POC-homemade-vue-embeded` (à renommer `main` quand stable).
Pas de CI configurée. Commits descriptifs en français, format `type:description`.

Pas de `node_modules`, pas de `dist/`, pas de `.cache/` — le repo contient exactement ce qui est déployé.

---

## Déploiement

Tout le contenu du dossier est déployable tel quel sur n'importe quel hébergeur statique (Ionos, GitHub Pages, Netlify, OVH mutualisé…). Pas d'étape de build.

Inclure : tous les `.html`, `.css`, `.js`, `images/`, `fonts/`.
Exclure : `.git/`, `.idea/`, `.DS_Store`, `README.md`, `LICENSE`, `start-server.sh`.

---

## Contact

Email asso : `retables@orange.fr` — Tél : `06 27 71 25 38` — Adresse : B.P. 70002, 59470 Wormhout.

Pour les questions techniques sur la codebase : laisser un commentaire en tête de fichier ou ouvrir une issue Git.
