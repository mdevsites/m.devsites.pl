// ===================================
// CONSTANTS & DATA FOR PORTFOLIO SITE
// ===================================

import NieruchomosciImg from "@/public/assets/projects/nieruchomosci-demo-v2.png";
import FotografImg from "@/public/assets/projects/fotograf-demo-main-v2.png";
import SalonBeautyImg from "@/public/assets/projects/salon-beauty-demo-main-v2.png";
import MechanikImg from "@/public/assets/projects/mechanik-demo-v2.png";

// Contact Information (Placeholders - to be updated)
export const CONTACT_INFO = {
  email: 'm.devkontakt@gmail.com',
  phone: '+48 691 630 461',
  whatsapp: '48691630461',
  location: 'Polska',
};

// Social Media Links (Placeholders)
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/profile.php?id=61585946020793',
  instagram: 'https://instagram.com',
  linkedin: 'https://www.linkedin.com/in/marcin-chrąchol-5a9a7b21b',
  github: 'https://github.com/mdevsites',
};

// Navigation Menu Items
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Jak pracuję', href: '/oferta' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Cennik', href: '/pricing' },
  { name: 'Kontakt', href: '/contact' },
];

// USP (Unique Selling Points) Data
export const USP_ITEMS = [
  {
    iconName: 'LuZap',
    title: 'Szybka realizacja',
    description: 'Projekty w 1-2 tygodnie',
    color: 'from-yellow-400 to-orange-500',
    span: 1,
  },
  {
    iconName: 'LuCode',
    title: 'Nowoczesne technologie',
    description: 'React, Next.js i więcej',
    color: 'from-blue-400 to-purple-500',
    span: 2,
  },
  {
    iconName: 'LuSmartphone',
    title: 'Responsywny design',
    description: 'Idealnie na każdym ekranie',
    color: 'from-green-400 to-cyan-500',
    span: 1,
  },
  {
    iconName: 'LuLifeBuoy',
    title: 'Wsparcie posprzedażowe',
    description: '3 miesiące wsparcia gratis',
    color: 'from-pink-400 to-red-500',
    span: 1,
  },
  {
    iconName: 'LuBadgeDollarSign',
    title: 'Konkurencyjne ceny',
    description: 'Jakość w dobrej cenie',
    color: 'from-emerald-400 to-teal-500',
    span: 1,
  },
];

// Process Timeline Data
export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Bezpłatna konsultacja',
    description: 'Rozmowa o potrzebach, analiza wymagań, wycena i propozycja',
    icon: 'MessageSquare',
  },
  {
    number: '02',
    title: 'Przygotowanie oferty',
    description: 'Ustalenie zakresu prac i harmonogramu projektu',
    icon: 'FileText',
  },
  {
    number: '03',
    title: 'Projektowanie',
    description: 'Mockupy, wireframes i akceptacja designu',
    icon: 'Palette',
  },
  {
    number: '04',
    title: 'Wdrożenie',
    description: 'Kodowanie strony, testy i poprawki',
    icon: 'Code2',
  },
  {
    number: '05',
    title: 'Wsparcie',
    description: 'Szkolenie z obsługi i pomoc techniczna',
    icon: 'Headset',
  },
];

// Testimonials Data (Placeholder content)
export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Profesjonalizm i szybka realizacja projektów! Nasza strona przekroczyła wszystkie oczekiwania.',
    author: 'Krzysztof Mazur',
    position: 'CEO',
    company: 'TechStartup',
    rating: 5,
    avatar: null, // Can add image path later
  },
  {
    id: 2,
    quote:
      'Świetna współpraca i elastyczne podejście. Marcin zawsze był otwarty na nasze sugestie.',
    author: 'Maria Lewandowska',
    position: 'Właścicielka',
    company: 'Salon Piękności',
    rating: 5,
    avatar: null,
  },
  {
    id: 3,
    quote:
      'Konkurencyjne ceny i wysoka jakość. Zdecydowanie polecam!',
    author: 'Piotr Nowak',
    position: 'Właściciel',
    company: 'Restauracja Smaki Świata',
    rating: 5,
    avatar: null,
  },
  {
    id: 4,
    quote:
      'Szybkie wdrożenie i przyjemny kontakt. Strona działa rewelacyjnie!',
    author: 'Anna Wiśniewska',
    position: 'Trenerka',
    company: 'Fitness Club',
    rating: 5,
    avatar: null,
  },
  {
    id: 5,
    quote:
      'Fantastyczne projekty i świetny kontakt. Współpraca była bezproblemowa!',
    author: 'Tomasz Rutkowski',
    position: 'Dyrektor',
    company: 'Firma Budowlana',
    rating: 5,
    avatar: null,
  },
];

// Project Types for Contact Form
export const PROJECT_TYPES = [
  'Landing Page',
  'Strona firmowa',
  'Sklep e-commerce',
  'Portfolio/Blog',
  'Aplikacja webowa',
  'Inne',
];

// Budget Ranges for Contact Form
export const BUDGET_RANGES = [
  '< 2000 PLN',
  '2000-5000 PLN',
  '5000-10000 PLN',
  '> 10000 PLN',
  'Nie jestem pewien',
];

// Service Packages for Pricing Page (preview data)
export const SERVICE_PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    price: '1999',
    currency: 'PLN',
    description: 'Idealny na start dla małych firm',
    features: [
      'Landing page (1 strona)',
      'Responsywny design',
      'Formularz kontaktowy',
      'Podstawowe SEO',
      '1 miesiąc wsparcia',
    ],
    highlighted: false,
  },
  {
    id: 'business',
    name: 'Business',
    price: '4999',
    currency: 'PLN',
    description: 'Najpopularniejszy wybór przedsiębiorców',
    features: [
      'Do 7 podstron',
      'Zaawansowany design',
      'CMS do zarządzania treścią',
      'Galeria zdjęć',
      'Zaawansowane SEO',
      '3 miesiące wsparcia',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '9999',
    currency: 'PLN',
    description: 'Kompleksowe rozwiązanie dla wymagających',
    features: [
      'Nielimitowane podstrony',
      'Custom funkcjonalności',
      'Sklep e-commerce',
      'Integracje API',
      'Premium SEO + Analytics',
      '6 miesięcy wsparcia',
      'Dedykowany opiekun projektu',
    ],
    highlighted: false,
  },
];
// Portfolio Projects Data
export const PORTFOLIO_PROJECTS = [
  {
    id: 'nieruchomosci-premium',
    title: 'Horizon Estates - Pakiet PRO',
    shortDescription:
      'Luksusowa platforma dla agencji nieruchomości. Pakiet PRO - 5 podstron, zaawansowane animacje, bento grid i filtracja.',
    fullDescription:
      'Najbardziej zaawansowany projekt w portfolio, demonstrujący możliwości pakietu PRO. Zawiera 5 podstron: Home (z bento grid), Lista ofert z filtracją, Detale nieruchomości, O nas oraz Kontakt. Skupia się na prestiżowym designie (dark/gold) i płynnych animacjach typu reveal.',
    tags: ['Next.js', 'Framer Motion', 'Bento Grid', 'Filtering', 'Luxury Design'],
    imageSrc: NieruchomosciImg,
    link: '/demos/nieruchomosci',
    client: 'Demo Project',
    timeline: '3 tygodnie',
    role: 'Lead Developer',
    challenge: 'Stworzenie wrażenia najwyższej klasy luksusu przy jednoczesnym zachowaniu intuicyjnej nawigacji i rozbudowanej funkcjonalności filtracji.',
    solution: 'Zastosowanie palety Deep Charcoal i Warm Gold. Implementacja zaawansowanych komponentów Bento Grid dla sekcji udogodnień oraz dynamicznej filtracji po stronie klienta.',
    results: [
      'Kompletna platforma z 5 podstronami',
      'Zaawansowane animacje premium (reveal, scale)',
      'Design pozycjonujący markę w segmencie luksusowym'
    ]
  },
  {
    id: 'portfolio-fotografa',
    title: 'Anna Kowalska Photography - Pakiet START',
    shortDescription:
      'Minimalistyczne portfolio dla fotografa. Skupienie na zdjęciach, masonry grid galeria i elegancka typografia.',
    fullDescription:
      'Projekt portfolio dla fotografa stworzony w ramach pakietu START. Cechuje się minimalistycznym designem, który nie odciąga uwagi od zdjęć. Wykorzystuje klasyczną typografię Playfair Display oraz nowoczesny układ masonry dla galerii.',
    tags: ['Next.js', 'Tailwind CSS', 'Masonry Grid', 'Minimalism'],
    imageSrc: FotografImg,
    link: '/demos/fotograf',
    client: 'Demo Project',
    timeline: '3 dni',
    role: 'Frontend Developer',
    challenge: 'Stworzenie eleganckiego portfolio bez użycia skomplikowanych bibliotek do galerii (wymóg pakietu START).',
    solution: 'Zastosowanie CSS Grid i Flexbox do stworzenia responsywnego układu masonry oraz wykorzystanie natywnych filtrów CSS dla efektów hover.',
    results: [
      'Elegancka prezentacja zdjęć',
      'Szybki czas ładowania dzięki brakowi ciężkich bibliotek',
      'W pełni responsywny layout'
    ]
  },
  {
    id: 'salon-beauty',
    title: 'Beauty Salon - Pakiet BIZNES',
    shortDescription:
      'Elegancka strona dla salonu kosmetycznego z animacjami i podstronami. Design premium z akcentami złota i różu.',
    fullDescription:
      'Rozbudowany projekt dla salonu beauty realizujący założenia pakietu BIZNES. Zawiera 4 podstrony (Home, Usługi, Galeria, Kontakt), lekkie animacje przy scrollowaniu oraz dedykowany layout graficzny.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Multi-page'],
    imageSrc: SalonBeautyImg,
    link: '/demos/salon-beauty',
    client: 'Demo Project',
    timeline: '2 tygodnie',
    role: 'Full Stack Developer',
    challenge: 'Stworzenie wrażenia premium i elegancji przy zachowaniu wysokiej wydajności i płynności animacji.',
    solution: 'Użycie Framer Motion do subtelnych animacji wejścia (fade-in, slide-up). Dobór ekskluzywnej palety kolorystycznej oraz customowych fontów Montserrat i Open Sans.',
    results: [
      'Wysoka konwersja dzięki przemyślanym CTA',
      'Płynne przejścia między podstronami',
      'Profesjonalna prezentacja usług i cennika'
    ]
  },
  {
    id: 'warsztat-mechaniczny',
    title: 'Warsztat Mechaniczny - Pakiet START',
    shortDescription:
      'Profesjonalna strona dla warsztatu samochodowego. Responsywny design, sekcje usług, o warsztacie, formularz kontaktowy. Zbudowana według specyfikacji pakietu START.',
    fullDescription:
      'Kompleksowa strona typu one-page dla warsztatu samochodowego. Zawiera hero section z call-to-action, przegląd 6 głównych usług, sekcję "O nas" z zdjęciem zespołu oraz funkcjonalny formularz kontaktowy.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Responsive'],
    imageSrc: MechanikImg,
    link: '/demos/mechanik',
    client: 'Demo Project',
    timeline: '1 tydzień',
    role: 'Full Stack Developer',
    challenge: 'Stworzenie profesjonalnej strony warsztatu samochodowego zgodnie z pakietem START - max 4 sekcje, bez animacji, z funkcjonalnym formularzem kontaktowym.',
    solution: 'Wykorzystanie Next.js 14 z App Router, Tailwind CSS dla stylowania oraz Lucide React do ikon. Zastosowanie wzorca flex justify-center dla prawidłowego centrowania sekcji.',
    results: [
      'Pełna responsywność na wszystkich urządzeniach',
      'Czas ładowania poniżej 2 sekund',
      'Zgodność ze specyfikacją pakietu START'
    ]
  },
];
