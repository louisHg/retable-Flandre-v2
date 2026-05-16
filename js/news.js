// ==========================================
// NEWS / NOUVEAUTES — donnees + etat lu/non-lu
// ==========================================
//
// Pour ajouter une nouveaute :
//   1. Ajouter une entree dans RFNews ci-dessous (id unique, date au format YYYY-MM-DD)
//   2. Poser id="<anchor>" sur l'element cible dans la page concernee
//
// La cloche de la sidebar et le bandeau d'accueil se mettent a jour automatiquement.

(function () {
    'use strict';

    const STORAGE_KEY = 'rf-news-read';
    const BANNER_KEY = 'rf-news-banner-dismissed';

    // ----- DONNEES -----
    // Plus recent en premier (l'ordre n'a pas d'importance, on trie par date).
    const RFNews = [
        {
            id: 'galerie-evenements-2026',
            date: '2026-05-16',
            label: 'Nos événements en images',
            page: 'activites.html',
            anchor: 'section_evenements',
            description: 'Retours en photos sur les AG, visites guidées et rencontres récentes.'
        },
        {
            id: 'visite-eglises-2026',
            date: '2026-05-16',
            label: 'Galerie : visite des églises',
            page: 'visite-eglises.html',
            anchor: 'section_visite',
            description: '39 photos d\'églises de Flandre et des vitraux d\'Arnèke à découvrir.'
        },
        {
            id: 'redecouvrir-51',
            date: '2026-01-15',
            label: 'Lettre Redecouvrir N.51',
            page: 'index.html',
            anchor: 'section_hero',
            description: "La nouvelle lettre d'infos est en ligne, telechargez-la depuis l'accueil."
        },
        {
            id: 'depliants-eglises',
            date: '2025-11-10',
            label: 'Depliants des eglises a retables',
            page: 'depliants-eglises.html',
            anchor: '',
            description: '36 depliants paroissiaux sont desormais consultables en ligne.'
        }
    ];

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

    function isRead(id) {
        return readSet().has(id);
    }

    function markAsRead(id) {
        const set = readSet();
        if (!set.has(id)) {
            set.add(id);
            writeSet(set);
        }
    }

    function markAllAsRead() {
        const set = new Set(RFNews.map(function (n) { return n.id; }));
        writeSet(set);
    }

    function unreadCount() {
        const set = readSet();
        return RFNews.reduce(function (acc, n) {
            return acc + (set.has(n.id) ? 0 : 1);
        }, 0);
    }

    // ----- TRI / SELECTION -----
    function sortedByDateDesc() {
        return RFNews.slice().sort(function (a, b) {
            return (b.date || '').localeCompare(a.date || '');
        });
    }

    function latest(n) {
        return sortedByDateDesc().slice(0, n);
    }

    // ----- BANDEAU ACCUEIL (etat dismiss) -----
    // On stocke l'id le plus recent vu par l'utilisateur.
    // Le bandeau ne reapparait que lorsqu'une nouveaute plus recente est publiee.
    function bannerDismissedUpTo() {
        try {
            return localStorage.getItem(BANNER_KEY) || '';
        } catch (e) { return ''; }
    }

    function dismissBanner() {
        const top = sortedByDateDesc()[0];
        if (!top) return;
        try { localStorage.setItem(BANNER_KEY, top.id); } catch (e) {}
    }

    function shouldShowBanner() {
        const top = sortedByDateDesc()[0];
        if (!top) return false;
        return bannerDismissedUpTo() !== top.id;
    }

    // ----- EXPORT -----
    window.RFNews = RFNews;
    window.RFNewsAPI = {
        all: sortedByDateDesc,
        latest: latest,
        isRead: isRead,
        markAsRead: markAsRead,
        markAllAsRead: markAllAsRead,
        unreadCount: unreadCount,
        shouldShowBanner: shouldShowBanner,
        dismissBanner: dismissBanner
    };
})();
