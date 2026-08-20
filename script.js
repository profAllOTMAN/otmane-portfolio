// ========================================
// OTMANE ALLAOUI — PORTFOLIO SCRIPTS
// ========================================

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

// --- Manual site localization ---
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

const frenchText = {
    'Work': 'Projets',
    'About': 'À propos',
    'Tools': 'Outils',
    'Resume': 'CV',
    "Let's Talk": 'Parlons-en',
    'Available for projects': 'Disponible pour des projets',
    'I': 'Je',
    'design': 'conçois',
    'ship': 'livre',
    'digital products.': 'des produits numériques.',
    'Product Designer specializing in SaaS, fintech & AI.': 'Product Designer spécialisé en SaaS, fintech et IA.',
    'From UX research to high-fidelity prototypes — and now shipping with vibe coding.': 'De la recherche UX aux prototypes haute fidélité — jusqu’à la mise en production avec le vibe coding.',
    'Download Resume': 'Télécharger le CV',
    'Download PDF Resume': 'Télécharger le CV PDF',
    'Get in Touch': 'Me contacter',
    'Years in Product Design': 'Années en Product Design',
    'Fintech & AI Products': 'Produits fintech et IA',
    'Design to Code': 'Du design au code',
    'Selected Work': 'Projets sélectionnés',
    "Projects I've built": 'Des projets que j’ai conçus',
    '& shipped': 'et mis en ligne',
    'View Case Study': 'Voir l’étude de cas',
    'View Project': 'Voir le projet',
    'A platform for tracking influencer performance and campaign effectiveness. Created personas, workflows, and a data-driven interface with AI analysis modules — improving monitoring efficiency by 30%.': 'Une plateforme de suivi de la performance des influenceurs et de l’efficacité des campagnes. J’ai créé les personas, les parcours et une interface data-driven avec des modules d’analyse IA — améliorant l’efficacité du suivi de 30 %.',
    'Investor-side MVP for an invoice financing platform. Led the design of a scalable design system, data visualization dashboards with ApexCharts, and implemented key interfaces using HTML, CSS & Tailwind.': 'MVP côté investisseur pour une plateforme de financement de factures. J’ai conçu un design system évolutif, des tableaux de bord avec ApexCharts et implémenté les interfaces clés en HTML, CSS et Tailwind.',
    'AI-powered real estate intelligence platform for Swiss property decisions. Designed and shipped a polished landing experience that explains institutional-grade analysis, market signals, and location data in a clear conversion flow.': 'Plateforme d’intelligence immobilière propulsée par l’IA pour le marché suisse. J’ai conçu et livré une landing page claire présentant l’analyse, les signaux du marché et les données de localisation dans un parcours de conversion efficace.',
    'Early-access AI system for managing customer conversations across channels. Created a focused product story, dark visual direction, and conversion path around demo booking and waitlist demand.': 'Système IA en accès anticipé pour gérer les conversations clients multicanales. J’ai créé un récit produit ciblé, une direction visuelle sombre et un parcours de conversion autour des démos et de la liste d’attente.',
    'Graphic Design': 'Design graphique',
    'Visual identity systems built for clear, distinctive brand expression.': 'Des identités visuelles conçues pour une expression de marque claire et distinctive.',
    'Automotive brand identity, collateral and social direction.': 'Identité automobile, supports de marque et direction des réseaux sociaux.',
    'Built-environment identity, brand applications and social system.': 'Identité pour le secteur du bâtiment, applications de marque et système social.',
    'From designer': 'De designer',
    'to builder.': 'à builder.',
    "I'm Otmane Allaoui — a Product Designer based in Morocco with 4+ years of experience in SaaS, fintech, mobility, and AI.": 'Je suis Otmane Allaoui — Product Designer basé au Maroc, avec plus de 4 ans d’expérience en SaaS, fintech, mobilité et IA.',
    "I specialize in UX/UI, design systems, prototyping, and data visualization. I've evolved MVPs into high-fidelity, complex products — always keeping user-centered design at the core.": 'Je suis spécialisé en UX/UI, design systems, prototypage et visualisation de données. J’ai fait évoluer des MVP vers des produits complexes et haute fidélité, toujours centrés sur les utilisateurs.',
    'Today I combine product design expertise with': 'Aujourd’hui, je combine mon expertise en product design avec le',
    'vibe coding': 'vibe coding',
    '— using AI tools like': '— en utilisant des outils IA comme',
    'alongside': 'ainsi que',
    'and': 'et',
    'to go from idea to live product. I believe the future belongs to designers who can build.': 'pour passer de l’idée au produit en ligne. Je crois que l’avenir appartient aux designers capables de construire.',
    'Self-Taught UX Designer': 'UX Designer autodidacte',
    'Product Designer — SaaS & AI Products': 'Product Designer — Produits SaaS et IA',
    'Now': 'Aujourd’hui',
    'Product Designer & Builder': 'Product Designer & Builder',
    'Design': 'Design',
    'Build': 'Construire',
    'Ship': 'Livrer',
    'UX/UI, Product Design, Design Systems, Prototyping': 'UX/UI, Product Design, Design Systems, Prototypage',
    'Vibe Coding, FlutterFlow, Webflow, AI-Assisted Dev': 'Vibe Coding, FlutterFlow, Webflow, développement assisté par IA',
    'From concept to live product, fast iteration, real users': 'Du concept au produit en ligne, itérations rapides, vrais utilisateurs',
    'Stack & Tools': 'Stack et outils',
    'How I build': 'Comment je construis',
    'things': 'les produits',
    'Design Process': 'Processus de design',
    'From problem framing to delivery': 'Du cadrage du problème à la livraison',
    'Discover, define, develop, deliver': 'Découvrir, définir, développer, livrer',
    'Evaluation & Testing': 'Évaluation et tests',
    'Heuristic evaluation and usability testing': 'Évaluation heuristique et tests d’utilisabilité',
    'Design Tools': 'Outils de design',
    'Product design and prototyping': 'Product design et prototypage',
    'Graphic and visual design': 'Design graphique et visuel',
    'Documentation and product specs': 'Documentation et spécifications produit',
    'AI-assisted product building': 'Création de produits assistée par IA',
    'Coding and implementation support': 'Support au code et à l’implémentation',
    'Research and rapid exploration': 'Recherche et exploration rapide',
    'Development': 'Développement',
    'Utility-first interfaces': 'Interfaces utility-first',
    'Visual web development': 'Développement web visuel',
    'Rapid web prototyping': 'Prototypage web rapide',
    'Got an idea?': 'Une idée ?',
    "Let's build it.": 'Construisons-la.',
    "Whether you need a SaaS product designed, a fintech MVP prototyped, or a design system built from scratch — I'm here to help turn your vision into reality.": 'Que vous ayez besoin de concevoir un produit SaaS, de prototyper un MVP fintech ou de créer un design system — je vous aide à transformer votre vision en réalité.',
    'Send an Email': 'Envoyer un e-mail',
    'Built with Claude & Cursor.': 'Réalisé avec Claude et Cursor.',
    '© 2026 Otmane Allaoui. Built with Claude & Cursor.': '© 2026 Otmane Allaoui. Réalisé avec Claude et Cursor.',
    'Back to portfolio': 'Retour au portfolio',
    '← Back to portfolio': '← Retour au portfolio',
    'Senior Product Designer · SaaS · Fintech · AI-Driven Products': 'Senior Product Designer · SaaS · Fintech · Produits propulsés par l’IA',
    'Rabat–Salé, Morocco · Available for product design opportunities': 'Rabat–Salé, Maroc · Disponible pour des opportunités en product design',
    'Profile': 'Profil',
    'Senior Product Designer with 4+ years of experience designing SaaS, AI, fintech, mobility and enterprise products.': 'Senior Product Designer avec plus de 4 ans d’expérience dans la conception de produits SaaS, IA, fintech, mobilité et entreprise.',
    'Contact': 'Contact',
    'Languages': 'Langues',
    'Arabic · Native': 'Arabe · Langue maternelle',
    'English · Fluent': 'Anglais · Courant',
    'French · Fluent': 'Français · Courant',
    'Summary': 'Résumé',
    'Designing clarity for complex products.': 'Créer de la clarté pour des produits complexes.',
    'Specialised in product strategy, UX/UI design, design systems, information architecture, prototyping and data visualisation. I lead products from discovery to delivery, transforming complex workflows into intuitive, scalable experiences through research and cross-functional collaboration.': 'Spécialisé en stratégie produit, UX/UI, design systems, architecture de l’information, prototypage et visualisation de données. Je mène les produits de la découverte à la livraison en transformant des parcours complexes en expériences intuitives et évolutives.',
    'Experience': 'Expérience',
    'Present': 'Aujourd’hui',
    '2026 — Present': '2026 — Aujourd’hui',
    'Lead UX design for a synthetic monitoring SaaS platform, covering product documentation, dashboard redesign and design-system alignment across modules.': 'Je dirige l’UX d’une plateforme SaaS de monitoring synthétique : documentation produit, refonte des tableaux de bord et alignement du design system entre les modules.',
    'Run heuristic evaluations and Jobs-to-be-Done research; translate findings into dashboards, stakeholder decks and developer-facing specifications.': 'Je mène des évaluations heuristiques et des recherches Jobs-to-be-Done, puis transforme les résultats en tableaux de bord, présentations et spécifications pour les développeurs.',
    'Rabat · Freelance': 'Rabat · Freelance',
    'Led a finance-sector product from discovery through user flows, interface design and high-fidelity prototyping.': 'J’ai mené un produit financier de la découverte aux parcours utilisateurs, à l’interface et au prototypage haute fidélité.',
    'Built its visual identity system and analytics views with ApexCharts, partnering with product, engineering and business stakeholders.': 'J’ai construit son identité visuelle et ses vues analytiques avec ApexCharts, en collaboration avec les équipes produit, technique et métier.',
    'Led design initiatives for AI and data-driven products, defining product-owner collaboration processes and reusable components for consistent delivery.': 'J’ai dirigé des initiatives design pour des produits IA et data-driven, défini les processus de collaboration produit et créé des composants réutilisables.',
    'Designed SaaS tools and a call-centre management web application; built a design system and collaborated with project managers and developers in Agile delivery.': 'J’ai conçu des outils SaaS et une application de gestion de centre d’appels, créé un design system et collaboré avec les chefs de projet et développeurs en Agile.',
    'Selected work': 'Projets sélectionnés',
    'AI analytics · personas, workflows and data-driven interface': 'Analyse IA · personas, parcours et interface data-driven',
    'Fintech investor MVP · design system, dashboard and implementation': 'MVP fintech investisseur · design system, dashboard et implémentation',
    'Parking-booking app · research, flows and high-fidelity mobile prototype': 'Application de réservation de parking · recherche, parcours et prototype mobile haute fidélité',
    'Capabilities': 'Compétences',
    'Product strategy': 'Stratégie produit',
    'User research': 'Recherche utilisateur',
    'UX/UI design': 'Design UX/UI',
    'Design systems': 'Design systems',
    'Information architecture': 'Architecture de l’information',
    'Prototyping': 'Prototypage',
    'Usability testing': 'Tests d’utilisabilité',
    'Data visualisation': 'Visualisation de données',
    'Accessibility': 'Accessibilité',
    'Education': 'Formation',
    'Google UX Design Certificate': 'Certificat Google UX Design',
    'Front-End Developer Track': 'Parcours développeur front-end',
    'Baccalaureate — Physical Science': 'Baccalauréat — Sciences physiques',
    'Morocco · 2016': 'Maroc · 2016',
    'Back to Work': 'Retour aux projets',
    'Role': 'Rôle',
    'Sector': 'Secteur',
    'Live': 'En ligne',
    'View Prototype ↗': 'Voir le prototype ↗',
    'The Challenge': 'Le défi',
    'The Solution': 'La solution',
    'Process': 'Processus',
    'Outcome': 'Résultat',
    'Next Project': 'Projet suivant'
};

const localizedTitles = {
    '/': 'Otmane Allaoui — Product Designer freelance | SaaS, Fintech et IA',
    '/index.html': 'Otmane Allaoui — Product Designer freelance | SaaS, Fintech et IA',
    '/resume': 'CV — Otmane Allaoui, Senior Product Designer',
    '/resume.html': 'CV — Otmane Allaoui, Senior Product Designer',
    '/case-influencer-monitoring': 'Étude de cas Influencer Monitoring — Otmane Allaoui',
    '/case-influencer-monitoring.html': 'Étude de cas Influencer Monitoring — Otmane Allaoui'
};

const originalTitle = document.title;

function addLanguageSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Choose language');
    switcher.innerHTML = '<button type="button" data-locale="en" aria-label="Switch to English">EN</button><button type="button" data-locale="fr" aria-label="Passer en français">FR</button>';
    document.body.appendChild(switcher);

    switcher.addEventListener('click', event => {
        const button = event.target.closest('[data-locale]');
        if (!button) return;
        setPortfolioLocale(button.dataset.locale);
    });
}

function translateTextNodes(locale) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parent = node.parentElement;
            if (!parent || parent.closest('script, style, [data-i18n], .language-switcher')) return NodeFilter.FILTER_REJECT;
            return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
        if (node.__portfolioEnglishText === undefined) node.__portfolioEnglishText = node.textContent;
        const original = node.__portfolioEnglishText;
        const trimmed = original.trim();
        if (locale === 'fr' && frenchText[trimmed]) {
            const leadingSpace = original.match(/^\s*/)[0];
            const trailingSpace = original.match(/\s*$/)[0];
            node.textContent = leadingSpace + frenchText[trimmed] + trailingSpace;
        } else {
            node.textContent = original;
        }
    });
}

function setPortfolioLocale(locale) {
    if (!['en', 'fr'].includes(locale)) locale = 'en';
    const translations = portfolioTranslations[locale] || portfolioTranslations.en;
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        if (!element.dataset.i18nEnglish) element.dataset.i18nEnglish = element.textContent.trim();
        const value = translations[element.dataset.i18n];
        element.textContent = locale === 'fr' && value ? value : element.dataset.i18nEnglish;
    });
    translateTextNodes(locale);
    localStorage.setItem('portfolio-locale', locale);
    document.title = locale === 'fr' ? (localizedTitles[window.location.pathname] || originalTitle) : originalTitle;
    document.querySelectorAll('.language-switcher button').forEach(button => {
        const isActive = button.dataset.locale === locale;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
    });
}

addLanguageSwitcher();
setPortfolioLocale(localStorage.getItem('portfolio-locale') || 'en');
