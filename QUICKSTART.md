# 🚀 GUIDE RAPIDE - Système de Composants

## ⚡ Utilisation en 3 étapes

### 1. Importer les CSS dans votre page

```html
<link href="css/components/cards.css" rel="stylesheet">
<link href="css/components/badges.css" rel="stylesheet">
<link href="css/components/notifications.css" rel="stylesheet">
```

### 2. Importer le JavaScript

```html
<script src="js/component-loader.js"></script>
```

### 3. Utiliser les composants

#### Option A : Auto-chargement (le plus simple)

```html
<div data-load-component="sections/hero-retable"></div>
<div data-load-component="sections/contact"></div>
```

#### Option B : Chargement manuel

```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Un seul composant
    loadComponent('#myDiv', 'articles/article-hertel');
    
    // Plusieurs en grille
    loadComponentsGrid('#grid', [
        { path: 'articles/article-hertel', colClass: 'col-lg-6' },
        { path: 'articles/article-oger', colClass: 'col-lg-6' }
    ]);
    
    // Version notification
    loadComponent('#sidebar', 'activites/activite-wormhout', 'notification');
});
```

## 📦 Composants disponibles

### Sections complètes
- `sections/hero-retable` - Hero avec logo et image
- `sections/texte-collectif` - Section texte avec blason
- `sections/newsletter-cta` - Call-to-action newsletter
- `sections/contact` - Formulaire de contact
- `sections/footer` - Footer avec SVG wave

### Articles
- `articles/article-hertel` - Article Philippe HERTEL
- `articles/article-oger` - Article Anita OGER-LEURENT
- Versions `-notification` disponibles

### Activités
- `activites/activite-wormhout` - Visite Wormhout
- `activites/activite-zegers` - Visite Zegerscappel
- Versions `-notification` disponibles

### Églises
- `eglises/eglise-wormhout` - Carte église complète
- Versions `-notification` disponibles

## 🎨 Classes CSS utiles

```html
<!-- Cartes -->
<div class="rf-card">...</div>
<div class="rf-card rf-card-article">...</div>
<div class="rf-card-notification">...</div>

<!-- Badges -->
<span class="rf-badge rf-badge-primary">Badge</span>
<div class="rf-badge-icon"><i class="bi bi-star"></i></div>

<!-- Notifications -->
<div class="rf-notification">...</div>
<div class="rf-notification rf-notification-compact">...</div>
```

## 💡 Tips

- ✅ Un composant = un fichier HTML
- ✅ Créez des variantes avec `-notification`, `-compact`, etc.
- ✅ Utilisez les classes `rf-*` pour la cohérence
- ✅ Testez avec `components-demo.html`
- ✅ Les composants sont mis en cache automatiquement

## 🔍 Debug

Ouvrez la console pour voir les logs :
```
✅ Component Loader initialisé
✅ Articles scientifiques chargés
✅ Footer chargé
```

