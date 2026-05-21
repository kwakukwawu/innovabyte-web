document.addEventListener('DOMContentLoaded', () => {

  /* ── Splash Screen ───────────────────────── */
  const splash = document.getElementById('splash-screen');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hidden');
      document.body.classList.remove('no-scroll');
      setTimeout(() => splash.remove(), 600); // Cleanup DOM
    }, 1700); // Affiche le site après 1.7s (très rapide)
  }

  /* ── Scroll reveal ─────────────────────── */
  const anims = document.querySelectorAll('.anim');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  anims.forEach(el => io.observe(el));

  /* ── Hamburger mobile ──────────────────── */
  const toggle = document.getElementById('nav-toggle');
  const links  = document.getElementById('nav-links');

  toggle?.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    const [s1, s2, s3] = toggle.querySelectorAll('span');
    if (open) {
      s1.style.transform = 'translateY(6.5px) rotate(45deg)';
      s2.style.opacity   = '0';
      s3.style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      [s1, s2, s3].forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  /* Fermer sur clic lien */
  links?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      const [s1,s2,s3] = toggle.querySelectorAll('span');
      [s1,s2,s3].forEach(s => { s.style.transform=''; s.style.opacity=''; });
    });
  });

  /* ── Langues ───────────────────────── */
  const i18n = {
    fr: {
      title: 'InnovaByte | Cybersécurité, Réseaux & Ingénierie logicielle à Abidjan',
      meta: "InnovaByte — Réseaux informatiques, cybersécurité avancée et développement d'applications d'entreprise. Abidjan, Côte d'Ivoire.",
      navServices: 'Services',
      navAbout: 'Notre Cabinet',
      navTraining: 'Boutique',
      navQuote: 'Demander un devis',
      heroQuote: 'Démarrer un projet',
      slogan: 'Connecter. Sécuriser. Innover.',
      heroDesc: "Déploiement d'infrastructures réseaux fiables, sécurisation de vos données et développement d'applications sur-mesure — l'excellence technologique pour les entreprises exigeantes.",
      heroLearn: 'Découvrir notre expertise',
      expertiseTag: 'Expertise',
      servicesTitle: 'Des solutions qui font la différence',
      servicesSub: "Trois piliers d'excellence interconnectés pour sécuriser et accélérer votre transformation numérique.",
      netTitle: 'Réseaux & Infrastructures',
      netText: "Déploiement de câblage structuré, configuration d'équipements (routeurs, switchs, Wi-Fi), administration système et maintenance proactive.",
      cyberTitle: 'Cybersécurité Avancée',
      cyberText: "Sécurisation de vos réseaux, protection de vos données, audits de vulnérabilités et prévention active contre les cyberattaques.",
      devTitle: "Applications d'Entreprise",
      devText: "Création de sites web professionnels, d'applications mobiles et de logiciels sur-mesure pour digitaliser et optimiser vos processus métiers.",
      aboutTag: 'Notre Cabinet',
      aboutTitle: 'Expertise technique & Accompagnement sur-mesure.',
      aboutText1: 'InnovaByte réunit des ingénieurs certifiés pour répondre à toutes vos problématiques technologiques.',
      aboutText2: "Basés à Abidjan, nous accompagnons les entreprises avec la rigueur d'un cabinet de conseil et la réactivité d'un partenaire de proximité.",
      statSla: 'Disponibilité SLA',
      statSecure: 'Projets sécurisés',
      statSupport: 'Assistance technique',
      statPartners: 'Partenaires majeurs',
      trainingTag: 'Boutique',
      trainingTitle: 'Équipements et Matériel Informatique',
      trainingSub: "Vente, installation et configuration de matériel professionnel haut de gamme pour les entreprises.",
      courseCyberTag: 'Connectivité',
      courseCyberTitle: 'Starlink & Accès Internet',
      courseCyberText: "Vente de kits complets Starlink, installation sur site et configuration réseau pour un accès Internet très haut débit partout en Côte d'Ivoire.",
      courseNetTag: 'Infrastructure',
      courseNetTitle: 'Réseaux & Cybersécurité',
      courseNetText: "Switchs, routeurs d'entreprise, points d'accès Wi-Fi, baies de brassage, câblage réseau et pare-feux de nouvelle génération.",
      courseDevTag: 'Informatique Pro',
      courseDevTitle: 'Ordinateurs & Périphériques',
      courseDevText: "Ordinateurs portables, PC de bureau, écrans, onduleurs et accessoires informatiques (toutes marques).",
      advanced: 'Avancé',
      intermediate: 'Intermédiaire',
      signup: "Demander un devis",
      quoteTag: 'Démarrer',
      quoteTitle: 'Parlez-nous de votre projet',
      quoteSub: 'Réponse garantie sous 24 h ouvrées.',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Jean Dupont',
      emailLabel: 'E-mail professionnel',
      emailPlaceholder: 'j.dupont@entreprise.com',
      companyLabel: 'Société',
      companyPlaceholder: 'Votre entreprise',
      serviceLabel: 'Domaine concerné',
      choose: 'Choisir...',
      optNet: 'Réseaux & Infrastructures',
      optCyber: 'Cybersécurité',
      optDev: 'Applications sur-mesure',
      optTrainingCyber: 'Achat : Ordinateurs & Périphériques',
      optTrainingNet: 'Achat : Kit Starlink (Vente & Installation)',
      optTrainingDev: 'Achat : Équipements Réseaux & Sécurité',
      detailsLabel: 'Description du projet',
      detailsPlaceholder: 'Parlez-nous de vos besoins, du matériel recherché ou de votre projet...',
      send: 'Envoyer la demande',
      footerBrand: "Connecter. Sécuriser. Innover.\nAbidjan, Côte d'Ivoire.",
      footerServices: 'Services',
      footerTraining: 'Boutique',
      footerContact: 'Contact',
      footerNet: 'Réseaux & Infrastructures',
      footerCyber: 'Cybersécurité',
      footerDev: 'Développement Web & Mobile',
      footerSecurityTraining: 'Ordinateurs & Périphériques',
      footerNetworkTraining: 'Kits Starlink',
      footerDevops: 'Réseaux & Sécurité',
      footerCopyright: '© 2026 InnovaByte. Tous droits réservés.',
      footerBuilt: 'Conçu avec rigueur.',
      invalid: 'Veuillez remplir correctement tous les champs obligatoires.',
      mailGreeting: 'Bonjour,',
      mailIntro: 'Une nouvelle demande a été envoyée depuis le site InnovaByte.',
      mailName: 'Nom complet',
      mailEmail: 'E-mail',
      mailCompany: 'Société',
      mailService: 'Domaine concerné',
      mailDetails: 'Description du projet',
      mailNotice: 'Votre application mail va s’ouvrir avec la demande préremplie.',
      mailSubject: 'Nouvelle demande de devis',
      secureNotice: 'Vos informations sont chiffrées et strictement confidentielles.',
    },
    en: {
      title: 'InnovaByte | Cybersecurity, Networks & Software Engineering in Abidjan',
      meta: "InnovaByte — IT networks, advanced cybersecurity and enterprise application development. Abidjan, Côte d'Ivoire.",
      navServices: 'Services',
      navAbout: 'Our Firm',
      navTraining: 'Shop',
      navQuote: 'Request a quote',
      heroQuote: 'Start a project',
      slogan: 'Connect. Secure. Innovate.',
      heroDesc: 'Deployment of reliable network infrastructures, data security, and custom application development — technological excellence for demanding businesses.',
      heroLearn: 'Discover our expertise',
      expertiseTag: 'Expertise',
      servicesTitle: 'Solutions that make the difference',
      servicesSub: 'Three connected pillars of excellence to secure and accelerate your digital transformation.',
      netTitle: 'Networks & Infrastructure',
      netText: 'Deployment of structured cabling, equipment configuration (routers, switches, Wi-Fi), systems administration and proactive maintenance.',
      cyberTitle: 'Advanced Cybersecurity',
      cyberText: 'Securing your networks, protecting your data, vulnerability audits, and active prevention against cyber attacks.',
      devTitle: 'Enterprise Applications',
      devText: 'Creation of professional websites, mobile applications, and custom software to digitize and optimize your business processes.',
      aboutTag: 'Our Firm',
      aboutTitle: 'Technical expertise & Tailored support.',
      aboutText1: 'InnovaByte brings together certified engineers to solve all your technology challenges.',
      aboutText2: 'Based in Abidjan, we support businesses with the rigor of a consulting firm and the responsiveness of a local partner.',
      statSla: 'Uptime SLA',
      statSecure: 'Secured projects',
      statSupport: '24/7 Technical Support',
      statPartners: 'Major partners',
      trainingTag: 'Shop',
      trainingTitle: 'IT Hardware & Equipment',
      trainingSub: 'Sales, installation and configuration of high-end professional equipment for businesses.',
      courseCyberTag: 'Connectivity',
      courseCyberTitle: 'Starlink & Internet Access',
      courseCyberText: 'Complete Starlink kits sale, on-site installation and network configuration for high-speed internet everywhere in Côte d\'Ivoire.',
      courseNetTag: 'Infrastructure',
      courseNetTitle: 'Networking & Cybersecurity',
      courseNetText: 'Switches, enterprise routers, Wi-Fi access points, server racks, network cabling and next-gen firewalls.',
      courseDevTag: 'IT Pro',
      courseDevTitle: 'Computers & Peripherals',
      courseDevText: 'Laptops, desktop PCs, monitors, UPS and computer accessories (all brands).',
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      signup: 'Order now',
      quoteTag: 'Start',
      quoteTitle: 'Tell us about your project',
      quoteSub: 'Response guaranteed within 24 business hours.',
      nameLabel: 'Full name',
      namePlaceholder: 'John Smith',
      emailLabel: 'Professional e-mail',
      emailPlaceholder: 'j.smith@company.com',
      companyLabel: 'Company',
      companyPlaceholder: 'Your company',
      serviceLabel: 'Area of interest',
      choose: 'Choose...',
      optNet: 'Networks & Infrastructure',
      optCyber: 'Cybersecurity',
      optDev: 'Custom applications',
      optTrainingCyber: 'Buy: Computers & Peripherals',
      optTrainingNet: 'Buy: Starlink Kit (Sale & Install)',
      optTrainingDev: 'Buy: Network & Security Equipment',
      detailsLabel: 'Project Description',
      detailsPlaceholder: 'Tell us about your needs, the hardware you are looking for, or your project...',
      send: 'Send Request',
      footerBrand: "Connect. Secure. Innovate.\nAbidjan, Côte d'Ivoire.",
      footerServices: 'Services',
      footerTraining: 'Shop',
      footerContact: 'Contact',
      footerNet: 'Networks & Infrastructure',
      footerCyber: 'Cybersecurity',
      footerDev: 'Web & Mobile Development',
      footerSecurityTraining: 'Computers & Peripherals',
      footerNetworkTraining: 'Starlink Kits',
      footerDevops: 'Networking & Security',
      footerCopyright: '© 2026 InnovaByte. All rights reserved.',
      footerBuilt: 'Designed with rigor.',
      invalid: 'Please complete all required fields correctly.',
      mailGreeting: 'Hello,',
      mailIntro: 'A new request was sent from the InnovaByte website.',
      mailName: 'Full name',
      mailEmail: 'E-mail',
      mailCompany: 'Company',
      mailService: 'Area of interest',
      mailDetails: 'Project description',
      mailNotice: 'Your mail application will open with the request pre-filled.',
      mailSubject: 'New quote request',
      secureNotice: 'Your information is encrypted and strictly confidential.',
    },
  };

  const selectors = {
    navServices: '.nav-links a[href="#services"]',
    navAbout: '.nav-links a[href="#about"]',
    navTraining: '.nav-links a[href="#shop"]',
    navQuote: '.nav-cta',
    heroDesc: '.hero-desc',
    heroLearn: '.btn-ghost',
    expertiseTag: '#services .sh-tag',
    servicesTitle: '#services .sh-title',
    servicesSub: '#services .sh-sub',
    netTitle: '#svc-net h3',
    netText: '#svc-net p',
    cyberTitle: '#svc-sec h3',
    cyberText: '#svc-sec p',
    devTitle: '#svc-dev h3',
    devText: '#svc-dev p',
    aboutTag: '#about .sh-tag',
    aboutTitle: '#about .sh-title',
    aboutText1: '#about .about-body > p:nth-of-type(1)',
    aboutText2: '#about .about-body > p:nth-of-type(2)',
    statSla: '.stat:nth-child(1) .stat-l',
    statSecure: '.stat:nth-child(2) .stat-l',
    statSupport: '.stat:nth-child(3) .stat-l',
    statPartners: '.stat:nth-child(4) .stat-l',
    trainingTag: '#shop .sh-tag',
    trainingTitle: '#shop .sh-title',
    trainingSub: '#shop .sh-sub',
    courseCyberTag: '#shop-starlink .train-tag',
    courseCyberTitle: '#shop-starlink h3',
    courseCyberText: '#shop-starlink p',
    courseNetTag: '#shop-network .train-tag',
    courseNetTitle: '#shop-network h3',
    courseNetText: '#shop-network p',
    courseDevTag: '#shop-computers .train-tag',
    courseDevTitle: '#shop-computers h3',
    courseDevText: '#shop-computers p',
    quoteTag: '#quote .sh-tag',
    quoteTitle: '#quote .sh-title',
    quoteSub: '#quote .sh-sub',
    nameLabel: 'label[for="q-name"]',
    emailLabel: 'label[for="q-email"]',
    companyLabel: 'label[for="q-company"]',
    serviceLabel: 'label[for="q-service"]',
    detailsLabel: 'label[for="q-details"]',
    send: '#quote-submit',
    secureNotice: '#quote-secure span',
    footerServices: '.footer-top > .f-col:nth-of-type(2) h4',
    footerTraining: '.footer-top > .f-col:nth-of-type(3) h4',
    footerContact: '.footer-top > .f-col:nth-of-type(4) h4',
    footerNet: '.footer-top > .f-col:nth-of-type(2) li:nth-child(1) a',
    footerCyber: '.footer-top > .f-col:nth-of-type(2) li:nth-child(2) a',
    footerDev: '.footer-top > .f-col:nth-of-type(2) li:nth-child(3) a',
    footerSecurityTraining: '.footer-top > .f-col:nth-of-type(3) li:nth-child(1) a',
    footerNetworkTraining: '.footer-top > .f-col:nth-of-type(3) li:nth-child(2) a',
    footerDevops: '.footer-top > .f-col:nth-of-type(3) li:nth-child(3) a',
    footerCopyright: '.footer-bar span:nth-child(1)',
    footerBuilt: '.footer-bar span:nth-child(2)',
  };

  const placeholders = {
    namePlaceholder: '#q-name',
    emailPlaceholder: '#q-email',
    companyPlaceholder: '#q-company',
    detailsPlaceholder: '#q-details',
  };

  const options = {
    choose: '#q-service option[value=""]',
    optNet: '#q-service option[value="reseaux"]',
    optCyber: '#q-service option[value="cyber"]',
    optDev: '#q-service option[value="dev"]',
    optTrainingCyber: '#q-service option[value="shop-computers"]',
    optTrainingNet: '#q-service option[value="shop-starlink"]',
    optTrainingDev: '#q-service option[value="shop-network"]',
  };

  function setText(selector, value) {
    document.querySelectorAll(selector).forEach(el => { el.textContent = value; });
  }

  const arrowIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
  const chevronIcon = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>';

  function setButtonHtml(selector, label, icon) {
    document.querySelectorAll(selector).forEach(el => {
      el.innerHTML = `${label} ${icon}`;
    });
  }

  function setLanguage(lang) {
    const t = i18n[lang] || i18n.fr;
    document.documentElement.lang = lang;
    document.title = t.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta);

    Object.entries(selectors).forEach(([key, selector]) => setText(selector, t[key]));
    Object.entries(placeholders).forEach(([key, selector]) => {
      document.querySelectorAll(selector).forEach(el => el.setAttribute('placeholder', t[key]));
    });
    Object.entries(options).forEach(([key, selector]) => setText(selector, t[key]));

    document.querySelector('.hero-slogan').innerHTML = lang === 'en'
      ? 'Connect.&ensp;<span class="s">Secure.</span>&ensp;Innovate.'
      : 'Connecter.&ensp;<span class="s">Sécuriser.</span>&ensp;Innover.';
    setButtonHtml('.hero-actions .btn-fill', t.heroQuote, arrowIcon);
    setButtonHtml('.train-link', t.signup, chevronIcon);
    document.querySelector('.f-brand p').innerHTML = t.footerBrand.replace('\n', '<br>');

    document.getElementById('lang-fr')?.classList.toggle('active', lang === 'fr');
    document.getElementById('lang-en')?.classList.toggle('active', lang === 'en');

    window.innovabyteLang = lang;
  }

  function detectLanguage() {
    try {
      const saved = localStorage.getItem('innovabyte-lang');
      if (saved) return saved;
    } catch(e) {}
    // On force le français par défaut si aucun choix n'a été fait
    return 'fr';
  }

  const currentLang = detectLanguage();
  setLanguage(currentLang);

  document.getElementById('lang-fr')?.addEventListener('click', () => {
    try { localStorage.setItem('innovabyte-lang', 'fr'); } catch(e) {}
    setLanguage('fr');
  });
  document.getElementById('lang-en')?.addEventListener('click', () => {
    try { localStorage.setItem('innovabyte-lang', 'en'); } catch(e) {}
    setLanguage('en');
  });

  /* ── Pré-sélection formation ───────────── */
  window.preselectForm = function(val) {
    const sel = document.getElementById('q-service');
    if (sel) {
      [...sel.options].forEach(o => { if (o.value === val) o.selected = true; });
    }
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  /* ── Formulaires (Envoi direct via AJAX) ─ */
  const quoteForm = document.getElementById('quote-form');
  const quoteMsg = document.getElementById('quote-msg');
  
  quoteForm?.addEventListener('submit', async e => {
    e.preventDefault();

    const lang = window.innovabyteLang || detectLanguage();
    const t = i18n[lang] || i18n.fr;

    if (!quoteForm.checkValidity()) {
      quoteMsg.textContent = t.invalid;
      quoteMsg.className = 'form-notice err';
      quoteForm.reportValidity();
      return;
    }

    const btn = quoteForm.querySelector('button[type="submit"]');
    const originalBtnText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Envoi en cours';

    const data = new FormData(quoteForm);
    const service = quoteForm.querySelector('#q-service')?.selectedOptions?.[0]?.textContent || data.get('service');
    const subject = `${t.mailSubject} - ${data.get('company') || data.get('name') || 'InnovaByte'}`;
    
    const payload = {
      access_key: "8273935d-e777-49ad-907b-7c0384ac6903",
      subject: subject,
      from_name: data.get('name'),
      replyto: data.get('email'),
      Nom: data.get('name'),
      Email: data.get('email'),
      Societe: data.get('company'),
      Domaine: service,
      Message: data.get('message')
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        quoteMsg.textContent = 'Message envoyé. Nous vous répondrons sous 24 h.';
        quoteMsg.className = 'form-notice ok';
        quoteForm.reset();
      } else {
        quoteMsg.textContent = 'Erreur lors de l\'envoi. Veuillez réessayer plus tard.';
        quoteMsg.className = 'form-notice err';
      }
    } catch (err) {
      quoteMsg.textContent = 'Erreur réseau. Vérifiez votre connexion internet.';
      quoteMsg.className = 'form-notice err';
    } finally {
      btn.disabled = false;
      btn.textContent = originalBtnText;
      setTimeout(() => { quoteMsg.className = 'form-notice'; }, 6000);
    }
  });

  /* Canvas hero removed to keep the UI minimal and lightweight.
     Background visuals are handled with CSS/SVG for a subtle, premium look. */
});
