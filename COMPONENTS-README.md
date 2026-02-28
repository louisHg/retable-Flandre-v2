# 📦 Système de Composants Réutilisables - RETABLES DE FLANDRE

## 🎯 Concept

Un système de composants modulaires similaire à Vue.js ou React, mais en **vanilla JavaScript**, permettant de réutiliser des blocs HTML/CSS sur plusieurs pages.

## 📁 Structure des fichiers

```
retable-Flandre-v2/
├── css/
│   ├── components/                    # Styles des composants
│   │   ├── cards.css                  # Cartes réutilisables
│   │   ├── badges.css                 # Badges et étiquettes
│   │   └── notifications.css          # Notifications/alertes
│   └── main.css                       # Styles principaux
│
├── components/                        # Composants HTML
│   ├── sections/                      # Sections complètes
│   │   ├── hero-retable.html
│   │   ├── texte-collectif.html
│   │   ├── newsletter-cta.html
│   │   ├── contact.html
│   │   └── footer.html
│   │
│   ├── activites/                     # Composants activités
│   │   ├── activite-wormhout.html                (version complète)
│   │   ├── activite-wormhout-notification.html   (version réduite)
│   │   └── activite-zegers.html
│   │
│   └── articles/                      # Composants articles
│       ├── article-hertel.html
│       ├── article-hertel-notification.html
│       └── article-oger.html
│
└── js/
    └── component-loader.js            # Chargeur de composants
```

## 🚀 Utilisation

### Méthode 1️⃣ : Auto-chargement avec `data-load-component`

Le plus simple ! Les composants sont chargés automatiquement au démarrage de la page.

```html
<!-- Dans votre HTML -->
<div data-load-component="sections/hero-retable"></div>
<div data-load-component="sections/contact"></div>
```

### Méthode 2️⃣ : Chargement manuel en JavaScript

Pour plus de contrôle, chargez les composants manuellement.

```javascript
// Charger un seul composant
loadComponent('#container', 'articles/article-hertel');

// Charger plusieurs composants
loadComponents('#container', [
    { path: 'activites/activite-wormhout' },
    { path: 'activites/activite-zegers' }
]);

// Charger en grille Bootstrap
loadComponentsGrid('#articlesContainer', [
    { path: 'articles/article-hertel', colClass: 'col-lg-6 col-12' },
    { path: 'articles/article-oger', colClass: 'col-lg-6 col-12' }
]);
```

### Méthode 3️⃣ : Variantes de composants

Chaque composant peut avoir plusieurs variantes (ex: version complète vs notification).

```javascript
// Version complète
loadComponent('#main', 'activites/activite-wormhout');

// Version notification (réduite)
loadComponent('#sidebar', 'activites/activite-wormhout', 'notification');
```

## 🎨 Classes CSS réutilisables

### Cartes (`cards.css`)

```html
<!-- Carte de base -->
<div class="rf-card">
    <div class="rf-card-body">Contenu</div>
</div>

<!-- Carte article (hauteur complète) -->
<div class="rf-card rf-card-article">
    <div class="rf-card-body-lg">Contenu</div>
</div>

<!-- Carte notification -->
<div class="rf-card-notification">
    <div class="rf-card-notification-title">Titre</div>
    <div class="rf-card-notification-text">Texte</div>
</div>

<!-- Carte CTA -->
<div class="rf-card-cta">
    <h3>Call to Action</h3>
    <button class="btn">Action</button>
</div>
```

### Badges (`badges.css`)

```html
<!-- Badge simple -->
<span class="rf-badge rf-badge-primary">Badge</span>

<!-- Badge avec icône -->
<div class="rf-badge-icon">
    <i class="bi bi-calendar"></i>
</div>

<!-- Badge glassmorphism -->
<span class="rf-badge rf-badge-glass">Badge</span>
```

### Notifications (`notifications.css`)

```html
<!-- Notification complète -->
<div class="rf-notification">
    <div class="rf-notification-icon">
        <i class="bi bi-info-circle"></i>
    </div>
    <div class="rf-notification-content">
        <div class="rf-notification-title">Titre</div>
        <div class="rf-notification-text">Description</div>
        <div class="rf-notification-meta">Métadonnées</div>
    </div>
</div>

<!-- Notification compacte -->
<div class="rf-notification rf-notification-compact">
    ...
</div>
```

## 💡 Exemples d'utilisation

### Exemple 1 : Page avec sections

```html
<!doctype html>
<html lang="fr">
<head>
    <!-- CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/components/cards.css" rel="stylesheet">
    <link href="css/components/badges.css" rel="stylesheet">
    <link href="css/components/notifications.css" rel="stylesheet">
</head>
<body>
    <!-- Auto-chargement des sections -->
    <div data-load-component="sections/hero-retable"></div>
    <div data-load-component="sections/contact"></div>
    <div id="footerContainer"></div>

    <!-- JavaScript -->
    <script src="js/component-loader.js"></script>
    <script>
        // Charger le footer manuellement
        loadComponent('#footerContainer', 'sections/footer');
    </script>
</body>
</html>
```

### Exemple 2 : Grille d'articles

```html
<div class="container">
    <div class="row g-4" id="articlesGrid"></div>
</div>

<script>
    loadComponentsGrid('#articlesGrid', [
        { path: 'articles/article-hertel', colClass: 'col-lg-4' },
        { path: 'articles/article-oger', colClass: 'col-lg-4' },
        { path: 'articles/article-autre', colClass: 'col-lg-4' }
    ]);
</script>
```

### Exemple 3 : Sidebar avec notifications

```html
<div class="sidebar">
    <h5>📋 Activités à venir</h5>
    <div id="notificationsList"></div>
</div>

<script>
    // Charger les versions "notification" compactes
    loadComponents('#notificationsList', [
        { path: 'activites/activite-wormhout', variant: 'notification' },
        { path: 'activites/activite-zegers', variant: 'notification' }
    ]);
</script>
```

## ✨ Avantages

- ✅ **Réutilisabilité** : Écrivez une fois, utilisez partout
- ✅ **Maintenabilité** : Modifiez un composant → mis à jour sur toutes les pages
- ✅ **Variantes** : Plusieurs affichages d'un même contenu (carte/notification)
- ✅ **Performance** : Système de cache intégré
- ✅ **Simple** : Pas de build, pas de compilation, juste du HTML/CSS/JS
- ✅ **Flexible** : Chargement automatique ou manuel selon vos besoins

## 📝 Créer un nouveau composant

### 1. Créer le fichier HTML

Créez `components/mon-composant/mon-element.html` :

```html
<div class="rf-card">
    <div class="rf-card-body">
        <h4>Mon Composant</h4>
        <p>Description de mon composant</p>
        <button class="btn custom-btn">Action</button>
    </div>
</div>
```

### 2. Créer une variante (optionnel)

Créez `components/mon-composant/mon-element-notification.html` :

```html
<div class="rf-notification">
    <div class="rf-notification-icon">
        <i class="bi bi-star"></i>
    </div>
    <div class="rf-notification-content">
        <div class="rf-notification-title">Mon Composant</div>
        <div class="rf-notification-text">Version réduite</div>
    </div>
</div>
```

### 3. Utiliser le composant

```html
<!-- Version complète -->
<div data-load-component="mon-composant/mon-element"></div>

<!-- Version notification -->
<div id="sidebar"></div>
<script>
    loadComponent('#sidebar', 'mon-composant/mon-element', 'notification');
</script>
```

## 🔧 API du Component Loader

### `loadComponent(selector, path, variant)`
Charge un composant unique dans un conteneur.

**Paramètres :**
- `selector` : Sélecteur CSS du conteneur (ex: '#myContainer')
- `path` : Chemin du composant (ex: 'articles/article-hertel')
- `variant` : (Optionnel) Variante du composant (ex: 'notification')

**Retour :** Promise

### `loadComponents(selector, components)`
Charge plusieurs composants dans un conteneur.

**Paramètres :**
- `selector` : Sélecteur CSS du conteneur
- `components` : Array de `{ path, variant }`

**Retour :** Promise

### `loadComponentsGrid(selector, components)`
Charge plusieurs composants en grille Bootstrap.

**Paramètres :**
- `selector` : Sélecteur CSS du conteneur
- `components` : Array de `{ path, variant, colClass }`

**Retour :** Promise

## 📄 Pages utilisant le système

- ✅ `qu-est-ce-qu-un-retable.html` - Page complète avec composants
- ✅ `components-demo.html` - Page de démonstration et tests
- 🔄 `index.html` - Peut être migré vers le système
- 🔄 Autres pages à venir...

## 🎓 Bonnes pratiques

1. **Un composant = une responsabilité** : Chaque composant doit avoir un objectif clair
2. **Nommer clairement** : Utilisez des noms descriptifs (ex: `article-hertel`, pas `comp1`)
3. **Créer des variantes** : Pour différents contextes d'affichage
4. **Réutiliser les classes CSS** : Utilisez `rf-card`, `rf-badge`, etc.
5. **Tester** : Utilisez `components-demo.html` pour tester vos composants

## 🐛 Debugging

Les logs dans la console vous aident à suivre le chargement :
```
🔄 Chargement des composants dynamiques...
✅ Component Loader initialisé
✅ Articles scientifiques chargés
✅ Footer chargé
✅ 2 composant(s) préchargé(s)
```

En cas d'erreur :
```
❌ Erreur lors du chargement du composant: components/xyz.html
```

## 🚀 Prochaines étapes

1. Migrer `index.html` vers le système de composants
2. Créer plus de composants réutilisables (galeries, cartes d'églises, etc.)
3. Ajouter un système de templating pour les données dynamiques
4. Créer un générateur de composants en ligne de commande

