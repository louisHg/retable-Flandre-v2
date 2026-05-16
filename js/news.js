// ==========================================
// NEWS — couche fine sur RFContent.actualites
// ==========================================
//
// Cette API alimente la cloche de la sidebar et le bandeau d'accueil.
// La source de vérité unique = RFContent.actualites (dans js/content.js).
//
// Pour qu'une actu apparaisse dans la cloche, deux options :
//   - automatique : c'est l'une des MAX_BELL plus récentes
//   - manuelle    : ajouter "featured: true" à l'item dans content.js
//
// Etat lu/non-lu : localStorage, persisté par id.
// Etat dismiss du bandeau : localStorage, mémorise l'id le plus récent vu.
//
// ==========================================

(function () {
    'use strict';

    const STORAGE_KEY = 'rf-news-read';
    const BANNER_KEY = 'rf-news-banner-dismissed';
    const MAX_BELL = 5;    // nb max d'items dans la cloche
    const MAX_BANNER = 3;  // nb max d'items dans le bandeau d'accueil

    // ----- ACCES AUX DONNEES (depuis content.js) -----
    function rawActualites() {
        return (window.RFContent && window.RFContent.actualites) || [];
    }

    // Convertit une actualité en item de news (forme attendue par la cloche + bandeau)
    function toNewsItem(actu) {
        return {
            id: actu.id,
            date: actu.date,
            label: actu.title,
            page: 'actualites.html',
            anchor: actu.id,
            description: actu.summary,
            category: actu.category,
            featured: !!actu.featured
        };
    }

    function sortedByDateDesc() {
        return rawActualites()
            .slice()
            .sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); })
            .map(toNewsItem);
    }

    // Items à afficher dans la cloche : tous les "featured" + complétés par les plus récents
    function bellItems() {
        const all = sortedByDateDesc();
        const featured = all.filter(function (it) { return it.featured; });
        if (featured.length >= MAX_BELL) return featured.slice(0, MAX_BELL);
        const others = all.filter(function (it) { return !it.featured; });
        return featured.concat(others).slice(0, MAX_BELL);
    }

    function latest(n) {
        return sortedByDateDesc().slice(0, n);
    }

    // ----- ETAT LU / NON-LU (localStorage) -----
    function readSet() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return new Set(raw ? JSON.parse(raw) : []);
        } catch (e) {
            return new Set();
        }
    }

    function writeSet(set) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(set)));
        } catch (e) { /* quota / private mode */ }
    }

    // Évènement global : toutes les UI qui affichent l'état lu/non-lu peuvent
    // se synchroniser en écoutant 'rf-news-changed' sur document.
    function emitChange() {
        try {
            document.dispatchEvent(new CustomEvent('rf-news-changed'));
        } catch (e) { /* IE etc. */ }
    }

    function isRead(id) {
        return readSet().has(id);
    }

    function markAsRead(id) {
        const set = readSet();
        if (!set.has(id)) {
            set.add(id);
            writeSet(set);
            emitChange();
        }
    }

    function markAllAsRead() {
        const set = new Set(bellItems().map(function (it) { return it.id; }));
        writeSet(set);
        emitChange();
    }

    function unreadCount() {
        const set = readSet();
        return bellItems().reduce(function (acc, it) {
            return acc + (set.has(it.id) ? 0 : 1);
        }, 0);
    }

    // Items non lus, dans le pool de la cloche → source unique
    function unreadItems() {
        const set = readSet();
        return bellItems().filter(function (it) { return !set.has(it.id); });
    }

    // ----- BANDEAU ACCUEIL (etat dismiss) -----
    function bannerDismissedUpTo() {
        try {
            return localStorage.getItem(BANNER_KEY) || '';
        } catch (e) { return ''; }
    }

    function dismissBanner() {
        const top = latest(1)[0];
        if (!top) return;
        try { localStorage.setItem(BANNER_KEY, top.id); } catch (e) {}
    }

    function shouldShowBanner() {
        const top = latest(1)[0];
        if (!top) return false;
        return bannerDismissedUpTo() !== top.id;
    }

    // ----- EXPORT -----
    window.RFNewsAPI = {
        all: function () { return bellItems(); },     // pour la cloche (avec lus + non-lus)
        unreadItems: unreadItems,                       // pour le bandeau (non-lus uniquement)
        latest: function (n) { return latest(n || MAX_BANNER); },  // legacy
        isRead: isRead,
        markAsRead: markAsRead,
        markAllAsRead: markAllAsRead,
        unreadCount: unreadCount,
        shouldShowBanner: shouldShowBanner,
        dismissBanner: dismissBanner
    };
})();
