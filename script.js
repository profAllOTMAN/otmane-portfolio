// ========================================
// OTMANE ALLAOUI — PORTFOLIO SCRIPTS
// ========================================

document.querySelectorAll('iframe[data-desktop-viewport]').forEach((frame) => {
    const shell = frame.parentElement;
    const desktopWidth = Number(frame.dataset.desktopViewport);

    const fitDesktopViewport = () => {
        const scale = shell.clientWidth / desktopWidth;
        if (!scale) return;

        frame.style.setProperty('width', desktopWidth + 'px', 'important');
        frame.style.setProperty('min-width', desktopWidth + 'px', 'important');
        frame.style.setProperty('height', shell.clientHeight / scale + 'px', 'important');
        frame.style.transform = `scale(${scale})`;
    };

    fitDesktopViewport();
    new ResizeObserver(fitDesktopViewport).observe(shell);
});

// --- Cursor Glow ---
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.1;
    glowY += (mouseY - glowY) * 0.1;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
}
animateGlow();

// --- Navigation scroll ---
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
}, { passive: true });

// --- Mobile menu ---
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// --- Scroll animations ---
const animatedElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

animatedElements.forEach(el => observer.observe(el));

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// --- Case study localization ---
const portfolioTranslations = {
    en: {},
    fr: {
        navWork: 'Projets', navAbout: 'À propos', navTools: 'Outils', navResume: 'CV', navTalk: 'Parlons-en', backToWork: 'Retour aux projets',
        heroDescription: 'Une plateforme data-driven pour suivre la performance des influenceurs et l’efficacité des campagnes, avec des modules d’analyse IA et des parcours de suivi simplifiés.',
        metaRole: 'Rôle', metaSector: 'Secteur', metaSectorValue: 'Marketing d’influence', metaTools: 'Outils', metaLive: 'En ligne', viewProduct: 'Voir le prototype ↗',
        challengeLabel: 'Le défi', challengeTitle: 'Le suivi des influenceurs est manuel et fragmenté', challengeText: 'Les équipes marketing qui gèrent des campagnes d’influence s’appuient souvent sur des feuilles de calcul, des outils dispersés et des processus manuels. Il n’existait pas de plateforme unifiée pour suivre l’efficacité des influenceurs, mesurer les résultats des campagnes et prendre des décisions fondées sur les données.',
        challengeManual: 'Un suivi fragmenté entre plusieurs outils', challengeAi: 'Des capacités d’analyse intelligente limitées', challengeSlow: 'Des processus de suivi inefficaces',
        solutionLabel: 'La solution', solutionTitle: 'Une plateforme de suivi guidée par les données', solutionText: 'J’ai conçu une plateforme unifiée qui centralise le suivi des influenceurs, la performance des campagnes et l’analyse assistée par IA dans une interface claire.',
        featureOneTitle: 'Des parcours guidés par les personas', featureOneText: 'J’ai créé des personas détaillés et cartographié les parcours utilisateurs pour répondre aux besoins réels des équipes marketing.',
        featureTwoTitle: 'Une interface guidée par les données', featureTwoText: 'J’ai conçu un tableau de bord avec des visualisations claires pour suivre les métriques des influenceurs, les résultats des campagnes et l’engagement.',
        featureThreeTitle: 'Des modules d’analyse IA', featureThreeText: 'J’ai intégré des modules d’analyse assistée par IA au prototype afin de faire émerger automatiquement les enseignements liés aux influenceurs et aux campagnes.',
        processLabel: 'Processus', processTitle: 'Comment je l’ai conçu', processText: 'Le projet visait à transformer le suivi des campagnes d’influence en une expérience produit plus claire et plus rapide pour les équipes marketing.',
        processOneTitle: 'Personas et recherche', processOneText: 'J’ai créé des personas détaillés pour comprendre les différents profils utilisateurs et leurs besoins spécifiques de suivi.',
        processTwoTitle: 'Cartographie des parcours', processTwoText: 'J’ai cartographié les parcours de suivi des campagnes, d’évaluation des influenceurs et de reporting pour créer une expérience plus fluide.',
        processThreeTitle: 'Conception d’une interface data-driven', processThreeText: 'J’ai privilégié la visualisation et la clarté afin de rendre les métriques complexes faciles à lire et à exploiter.',
        processFourTitle: 'Prototypage haute fidélité', processFourText: 'J’ai livré des prototypes interactifs haute fidélité dans Figma, avec des concepts de modules d’analyse IA, prêts pour le handoff.',
        outcomeLabel: 'Résultat', outcomeTitle: 'Points clés', outcomeOneTitle: '30 % d’amélioration de l’efficacité du suivi', outcomeOneText: 'L’interface guidée par les données et les parcours simplifiés ont réduit le temps consacré au suivi manuel.',
        outcomeTwoTitle: 'Des prototypes intégrant l’IA', outcomeTwoText: 'Les prototypes ont montré comment des insights pertinents peuvent améliorer les décisions liées aux campagnes.',
        outcomeThreeTitle: 'Des décisions ancrées dans les personas', outcomeThreeText: 'Chaque décision de conception reposait sur des personas et des parcours validés afin de répondre aux vrais besoins.',
        nextProject: 'Projet suivant', viewCaseStudy: 'Voir l’étude de cas', footerBuilt: 'Réalisé avec Claude et Cursor.'
    }
};

function getPortfolioLocale() {
    const browserLocales = navigator.languages || [navigator.language || 'en'];
    if (browserLocales.some(locale => locale.toLowerCase().startsWith('fr'))) return 'fr';
    if (browserLocales.some(locale => locale.toLowerCase().startsWith('en'))) return 'en';
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (['Africa/Casablanca', 'Europe/Paris'].includes(timezone)) return 'fr';
    return 'en';
}

function setPortfolioLocale(locale) {
    const translations = portfolioTranslations[locale] || portfolioTranslations.en;
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const value = translations[element.dataset.i18n];
        if (value) element.textContent = value;
    });
    if (locale === 'fr') {
        const navigation = { '#work': 'Projets', 'index.html#work': 'Projets', '#about': 'À propos', 'index.html#about': 'À propos', '#tools': 'Outils', 'index.html#tools': 'Outils', 'resume.html': 'CV', '#contact': 'Parlons-en', 'index.html#contact': 'Parlons-en' };
        document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
            const label = navigation[link.getAttribute('href')];
            if (label) link.textContent = label;
        });
        document.querySelectorAll('.nav-cta').forEach(link => { link.textContent = 'Parlons-en'; });
    }
}

setPortfolioLocale(getPortfolioLocale());
