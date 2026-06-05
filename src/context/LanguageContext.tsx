"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

export type Translations = {
  // Nav
  nav_home: string;
  nav_services: string;
  nav_projects: string;
  nav_about: string;
  nav_cta: string;

  // Hero
  hero_badge: string;
  hero_title_1: string;
  hero_title_gradient: string;
  hero_title_2: string;
  hero_title_gradient_2: string;
  hero_subtitle: string;
  hero_btn_primary: string;
  hero_btn_secondary: string;
  hero_trust_1: string;
  hero_trust_2: string;
  hero_trust_3: string;
  hero_stack_title: string;
  tech_ticker_title: string;

  // Services
  services_title: string;
  services_subtitle: string;
  services_web_title: string;
  services_web_desc: string;
  services_mobile_title: string;
  services_mobile_desc: string;
  services_ui_title: string;
  services_ui_desc: string;
  services_eco_title: string;
  services_eco_desc: string;

  // Process
  process_title: string;
  process_subtitle: string;
  process_step1_title: string;
  process_step1_desc: string;
  process_step2_title: string;
  process_step2_desc: string;
  process_step3_title: string;
  process_step3_desc: string;
  process_step4_title: string;
  process_step4_desc: string;

  // Testimonials
  testimonials_title: string;
  testimonial_1_quote: string;
  testimonial_1_author: string;
  testimonial_1_role: string;
  testimonial_2_quote: string;
  testimonial_2_author: string;
  testimonial_2_role: string;

  // Contact
  contact_title_1: string;
  contact_title_gradient: string;
  contact_subtitle: string;
  contact_label_name: string;
  contact_label_email: string;
  contact_label_message: string;
  contact_placeholder_name: string;
  contact_placeholder_email: string;
  contact_placeholder_message: string;
  contact_btn_send: string;
  contact_btn_sending: string;
  contact_success: string;

  // Projects
  projects_badge: string;
  projects_title: string;
  projects_subtitle: string;
  projects_btn_demo: string;
  projects_btn_code: string;
  projects_live_label: string;
  project_1_desc: string;
  project_2_desc: string;
  project_3_desc: string;
  project_4_desc: string;
  project_5_desc: string;
  project_6_desc: string;
  project_7_desc: string;
  project_8_desc: string;
  testimonial_3_quote: string;
  testimonial_3_author: string;
  testimonial_3_role: string;

  // About
  about_badge: string;
  about_title_1: string;
  about_title_gradient: string;
  about_desc: string;
  about_stats_projects: string;
  about_stats_exp: string;
  about_stats_clients: string;
  about_stats_industries: string;
  about_stats_commitment: string;
  about_mission_comment: string;
  about_team_title: string;

  // Team
  team_1_role: string;
  team_1_bio: string;
  team_2_role: string;
  team_2_bio: string;
  team_3_role: string;
  team_3_bio: string;
  team_4_role: string;
  team_4_bio: string;
  team_5_role: string;
  team_5_bio: string;

  // Demo Showcase
  demo_badge: string;
  demo_title: string;
  demo_subtitle: string;
  demo_1_name: string;
  demo_1_category: string;
  demo_1_desc: string;
  demo_2_name: string;
  demo_2_category: string;
  demo_2_desc: string;
  demo_3_name: string;
  demo_3_category: string;
  demo_3_desc: string;
  demo_4_name: string;
  demo_4_category: string;
  demo_4_desc: string;
  demo_5_name: string;
  demo_5_category: string;
  demo_5_desc: string;
  demo_6_name: string;
  demo_6_category: string;
  demo_6_desc: string;
  demo_7_name: string;
  demo_7_category: string;
  demo_7_desc: string;
  demo_btn_view: string;
  demo_btn_want: string;
  demo_cta_title: string;
  demo_cta_btn: string;

  // CTA
  cta_title: string;
  cta_desc: string;
  cta_btn: string;

  // Footer
  footer_desc: string;
  footer_explore: string;
  footer_legal: string;
  footer_rights: string;
  footer_coded: string;
};

const translations: Record<Language, Translations> = {
  es: {
    // Nav
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_projects: "Proyectos",
    nav_about: "Nosotros",
    nav_cta: "Cotizar gratis",

    // Hero — Copy persuasivo orientado a resultados
    hero_badge: "CONSULTORÍA GRATUITA · RESPUESTA INMEDIATA",
    hero_title_1: "Webs y aplicaciones que ",
    hero_title_gradient: "venden más",
    hero_title_2: "para negocios que quieren ",
    hero_title_gradient_2: "crecer",
    hero_subtitle: "Diseñamos, desarrollamos y lanzamos. Desde restaurantes y pastelerías hasta bufetes y lodges — construimos la web que tu negocio necesita para competir en serio.",
    hero_btn_primary: "Agendar consultoría gratuita",
    hero_btn_secondary: "Ver nuestros servicios",
    hero_trust_1: "Respuesta inmediata",
    hero_trust_2: "dedicado a tu proyecto",
    hero_trust_3: "intermediarios",
    hero_stack_title: "CONSTRUIDO CON TECNOLOGÍA MODERNA",
    tech_ticker_title: "Tecnologías con las que trabajamos",

    // Services — Beneficios concretos
    services_title: "Lo que hacemos",
    services_subtitle: "Webs, tiendas online y apps que resuelven problemas concretos de tu negocio. Sin vueltas.",
    services_web_title: "Webs que convierten",
    services_web_desc: "Diseñadas para que cada scroll empuje hacia el contacto o la venta. Rápidas, responsivas y listas para posicionarse en Google desde el día uno.",
    services_mobile_title: "Apps móviles a medida",
    services_mobile_desc: "Para reservas, pedidos, fidelización o lo que tu operación necesite. Disponibles en iOS y Android con notificaciones push y buen rendimiento.",
    services_ui_title: "Branding e identidad visual",
    services_ui_desc: "Logo, paleta, tipografía y manual de marca. Todo coherente en tu web, redes y materiales, para que tu negocio se vea serio y memorable.",
    services_eco_title: "Tiendas que venden 24/7",
    services_eco_desc: "E-commerce con checkout rápido, pagos seguros y gestión de inventario automatizada. Tu negocio vendiendo incluso mientras dormís.",

    // Process
    process_title: "Cómo trabajamos",
    process_subtitle: "Un proceso transparente diseñado para que tu proyecto se entregue a tiempo, sin sorpresas y con resultados medibles.",
    process_step1_title: "Diagnóstico",
    process_step1_desc: "Analizamos tu negocio, competencia y objetivos para diseñar la estrategia digital perfecta para ti.",
    process_step2_title: "Diseño",
    process_step2_desc: "Creamos prototipos interactivos y diseños visuales que validas antes de escribir una sola línea de código.",
    process_step3_title: "Desarrollo",
    process_step3_desc: "Construimos tu sitio con entregas semanales. Vas viendo el avance paso a paso y no hay sorpresas al final.",
    process_step4_title: "Lanzamiento",
    process_step4_desc: "Desplegamos tu producto con pruebas rigurosas, optimización de rendimiento y soporte post-lanzamiento incluido.",

    // Testimonials
    testimonials_title: "Lo que dicen nuestros clientes",
    testimonial_1_quote: "Necesitábamos una presencia digital que transmitiera la seriedad de nuestro bufete. DevHorses creó un portal profesional que nos posicionó como referentes en nuestra área. Las consultas online se duplicaron en el primer mes.",
    testimonial_1_author: "Miguel Vásquez",
    testimonial_1_role: "Socio Fundador, MV Abogados",
    testimonial_2_quote: "Nuestro lodge necesitaba mostrar la experiencia completa que ofrecemos. El sitio que nos construyeron tiene una galería inmersiva y un sistema de reservas que funciona perfecto. Los huéspedes nos dicen que reservaron porque la web les transmitió confianza.",
    testimonial_2_author: "Andrea Quispe",
    testimonial_2_role: "Gerente General, Apu Garden Lodge",

    // Contact
    contact_title_1: "¿Listo para ",
    contact_title_gradient: "hacer crecer tu negocio?",
    contact_subtitle: "Contanos tu idea y te respondemos de inmediato con una propuesta personalizada. Sin compromiso.",
    contact_label_name: "Nombre",
    contact_label_email: "Email",
    contact_label_message: "Cuéntanos tu proyecto",
    contact_placeholder_name: "Tu nombre completo",
    contact_placeholder_email: "tu@email.com",
    contact_placeholder_message: "Quiero una web para mi negocio de...",
    contact_btn_send: "Enviar mensaje",
    contact_btn_sending: "Enviando...",
    contact_success: "✅ ¡Mensaje enviado! Te contactaremos a la brevedad.",

    // Projects
    projects_badge: "CLIENTES REALES",
    projects_title: "Casos de cliente",
    projects_subtitle: "Webs que construimos, lanzamos y mantenemos en producción para clientes reales. Si querés ver más ejemplos por industria, mirá nuestras demos abajo.",
    projects_btn_demo: "Visitar sitio",
    projects_btn_code: "Código",
    projects_live_label: "En producción",
    project_1_desc: "Portal profesional para bufete de abogados con consultas online, áreas de práctica, testimonios y diseño que transmite confianza y autoridad.",
    project_2_desc: "Sitio web para lodge turístico con galería inmersiva, sistema de reservas, disponibilidad en tiempo real y experiencias locales destacadas.",
    project_3_desc: "Plataforma moderna para gimnasios con reservas de clases, planes de membresía, seguimiento de progreso y diseño motivacional.",
    project_4_desc: "Tienda online para pastelería con catálogo visual, pedidos personalizados, delivery integrado y experiencia de compra premium.",
    project_5_desc: "Sitio web para restaurante de carnes con menú interactivo, reservas online, galería de platos y diseño que abre el apetito.",
    project_6_desc: "E-commerce completo con carrito de compras, pasarela de pagos, gestión de inventario automatizada y experiencia de compra fluida.",
    project_7_desc: "Sitio web para estudio de tatuajes con galería de trabajos, reservas online, perfiles de artistas y diseño dark premium.",
    project_8_desc: "Portal corporativo para empresa de agroexportación con tecnología de clasificación inteligente por IA. Diseñado para transmitir innovación, precisión y generar confianza en mercados internacionales.",
    testimonial_3_quote: "Necesitábamos una web que transmitiera la seriedad y la tecnología que hay detrás de Selekta. DevHorses entendió nuestro negocio desde el primer día y entregó una plataforma que abre puertas en el sector agroexportador.",
    testimonial_3_author: "Equipo Selekta",
    testimonial_3_role: "Selekta Food — Agroexportación & IA",

    about_badge: "SOBRE NOSOTROS",
    about_title_1: "Un equipo pequeño. ",
    about_title_gradient: "Resultados grandes.",
    about_desc: "Somos desarrolladores y diseñadores que construyen productos digitales sin intermediarios. Trabajamos directo con vos: planificamos, diseñamos, programamos y lanzamos. Sin agencias de por medio, sin sorpresas.",
    about_stats_projects: "Proyectos",
    about_stats_exp: "Años Exp.",
    about_stats_clients: "Clientes activos",
    about_stats_industries: "Industrias cubiertas",
    about_stats_commitment: "Compromiso",
    about_mission_comment: "// Cómo trabajamos",
    about_team_title: "El equipo",

    // Team
    team_1_role: "FRONTEND & CLOUD",
    team_1_bio: "Desarrolla las interfaces que ven tus clientes con React y Next.js. También se ocupa de que todo esté desplegado y funcionando en la nube.",
    team_2_role: "BACKEND",
    team_2_bio: "Construye la lógica que hace funcionar tu web por detrás: APIs, bases de datos y todo lo que el usuario no ve pero necesita para que nada falle.",
    team_3_role: "DEVOPS & INFRAESTRUCTURA",
    team_3_bio: "Se asegura de que tu sitio esté siempre online, cargue rápido y pueda crecer cuando llegue más tráfico. Automatiza despliegues y monitorea el sistema.",
    team_4_role: "DATA & ANÁLISIS",
    team_4_bio: "Convierte los datos de tu negocio en información útil. Configura analítica, reportes y dashboards para que sepas qué está funcionando.",
    team_5_role: "UI/UX & BRANDING",
    team_5_bio: "Diseña cómo se ve y cómo se usa todo. Desde el logo y la identidad de marca hasta cada botón de la web, pensado para que tus clientes conecten.",

    // Demo Showcase
    demo_badge: "DEMOS POR INDUSTRIA",
    demo_title: "Así podría verse tu negocio",
    demo_subtitle: "Sitios funcionales que construimos como demostración por rubro. Elegí la industria más cercana a la tuya, explorala por dentro y pedí una versión personalizada para tu negocio.",
    demo_1_name: "Gimnasio FitPro",
    demo_1_category: "Fitness",
    demo_1_desc: "Plataforma moderna para gimnasios con reservas de clases, planes de membresía y seguimiento de progreso.",
    demo_2_name: "Pastelería Dulce Arte",
    demo_2_category: "Gastronomía",
    demo_2_desc: "Tienda online para pastelería con catálogo visual, pedidos personalizados y delivery integrado.",
    demo_3_name: "Parrilla & Brasas",
    demo_3_category: "Gastronomía",
    demo_3_desc: "Sitio web para restaurante de carnes con menú interactivo, reservas online y galería de platos.",
    demo_4_name: "MV Abogados",
    demo_4_category: "Servicios Profesionales",
    demo_4_desc: "Portal profesional para bufete de abogados con consultas online, áreas de práctica y testimonios.",
    demo_5_name: "Apu Garden Lodge",
    demo_5_category: "Hospedaje",
    demo_5_desc: "Sitio de reservas para lodge con galería inmersiva, disponibilidad en tiempo real y experiencias locales.",
    demo_6_name: "Tienda RetailPro",
    demo_6_category: "E-commerce",
    demo_6_desc: "E-commerce completo con carrito de compras, pasarela de pagos y gestión de inventario automatizada.",
    demo_7_name: "Yume Tattoo",
    demo_7_category: "Belleza & Arte",
    demo_7_desc: "Sitio web para estudio de tatuajes con galería de trabajos, reservas online, perfiles de artistas y diseño dark premium.",
    demo_btn_view: "Ver demo",
    demo_btn_want: "Quiero algo así",
    demo_cta_title: "¿Te gustaría algo así para tu negocio?",
    demo_cta_btn: "Hablemos por WhatsApp",

    // CTA
    cta_title: "¿Listo para empezar tu proyecto?",
    cta_desc: "Escribinos por WhatsApp y te respondemos de inmediato. Sin compromiso, sin vueltas.",
    cta_btn: "Hablemos por WhatsApp",

    // Footer
    footer_desc: "Transformamos negocios con software de alto impacto. Especialistas en soluciones digitales que generan resultados reales.",
    footer_explore: "Explorar",
    footer_legal: "Legal",
    footer_rights: "Todos los derechos reservados.",
    footer_coded: "Codeado con",
  },
  en: {
    // Nav
    nav_home: "Home",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_about: "About Us",
    nav_cta: "Free Quote",

    // Hero
    hero_badge: "FREE CONSULTATION · IMMEDIATE RESPONSE",
    hero_title_1: "Websites & applications that ",
    hero_title_gradient: "sell more",
    hero_title_2: "for businesses ready to ",
    hero_title_gradient_2: "grow",
    hero_subtitle: "We design, build and launch. From restaurants and bakeries to law firms and lodges — we build the web presence your business needs to compete seriously.",
    hero_btn_primary: "Book Free Consultation",
    hero_btn_secondary: "See Our Services",
    hero_trust_1: "Immediate response",
    hero_trust_2: "focused on your project",
    hero_trust_3: "middlemen",
    hero_stack_title: "BUILT WITH MODERN TECHNOLOGY",
    tech_ticker_title: "Technologies we work with",

    // Services
    services_title: "What We Do",
    services_subtitle: "Websites, online stores and apps that solve real business problems. No fluff.",
    services_web_title: "Websites that Convert",
    services_web_desc: "Designed so every scroll pushes toward contact or sale. Fast, responsive, and ready to rank on Google from day one.",
    services_mobile_title: "Custom Mobile Apps",
    services_mobile_desc: "For bookings, orders, loyalty, or whatever your operation needs. Available on iOS and Android with push notifications and solid performance.",
    services_ui_title: "Branding & Visual Identity",
    services_ui_desc: "Logo, color palette, typography, and brand manual. Everything consistent across your site, social media, and materials — so your business looks serious and memorable.",
    services_eco_title: "Stores that Sell 24/7",
    services_eco_desc: "E-commerce with fast checkout, secure payments, and automated inventory management. Your business selling even while you sleep.",

    // Process
    process_title: "How We Work",
    process_subtitle: "A transparent process designed to deliver your project on time, with no surprises and measurable results.",
    process_step1_title: "Discovery",
    process_step1_desc: "We analyze your business, competition, and goals to design the perfect digital strategy for you.",
    process_step2_title: "Design",
    process_step2_desc: "We create interactive prototypes and visual designs you validate before a single line of code is written.",
    process_step3_title: "Development",
    process_step3_desc: "We build your site with weekly deliveries. You see progress step by step, and there are no surprises at the end.",
    process_step4_title: "Launch",
    process_step4_desc: "We deploy your product with rigorous testing, performance optimization, and post-launch support included.",

    // Testimonials
    testimonials_title: "What Our Clients Say",
    testimonial_1_quote: "We needed a digital presence that conveyed the seriousness of our firm. DevHorses built a professional portal that positioned us as leaders in our field. Online consultations doubled in the first month.",
    testimonial_1_author: "Miguel Vásquez",
    testimonial_1_role: "Founding Partner, MV Abogados",
    testimonial_2_quote: "Our lodge needed to showcase the full experience we offer. The site they built has an immersive gallery and a booking system that works flawlessly. Guests tell us they booked because the website gave them confidence.",
    testimonial_2_author: "Andrea Quispe",
    testimonial_2_role: "General Manager, Apu Garden Lodge",

    // Contact
    contact_title_1: "Ready to ",
    contact_title_gradient: "Grow Your Business?",
    contact_subtitle: "Tell us your idea and we'll get back to you right away with a personalized proposal. No strings attached.",
    contact_label_name: "Name",
    contact_label_email: "Email",
    contact_label_message: "Tell us about your project",
    contact_placeholder_name: "Your full name",
    contact_placeholder_email: "you@email.com",
    contact_placeholder_message: "I want a website for my business of...",
    contact_btn_send: "Send Message",
    contact_btn_sending: "Sending...",
    contact_success: "✅ Message sent! We'll be in touch shortly.",

    // Projects
    projects_badge: "REAL CLIENTS",
    projects_title: "Client Cases",
    projects_subtitle: "Websites we built, launched, and maintain in production for real clients. If you'd like to see more examples by industry, check out our demos below.",
    projects_btn_demo: "Visit Site",
    projects_btn_code: "Code",
    projects_live_label: "Live in production",
    project_1_desc: "Professional law firm portal with online consultations, practice areas, testimonials, and a design that conveys trust and authority.",
    project_2_desc: "Tourism lodge website with immersive gallery, booking system, real-time availability, and featured local experiences.",
    project_3_desc: "Modern gym platform with class bookings, membership plans, progress tracking, and motivational design.",
    project_4_desc: "Online bakery store with visual catalog, custom orders, integrated delivery, and a premium shopping experience.",
    project_5_desc: "Steakhouse website with interactive menu, online reservations, dish gallery, and a design that whets the appetite.",
    project_6_desc: "Complete e-commerce with shopping cart, payment gateway, automated inventory management, and a seamless shopping experience.",
    project_7_desc: "Tattoo studio website with work gallery, online bookings, artist profiles, and premium dark design.",
    project_8_desc: "Corporate portal for an agro-export company powered by AI-driven smart classification technology. Designed to convey innovation, precision, and build trust in international markets.",
    testimonial_3_quote: "We needed a website that conveyed the seriousness and technology behind Selekta. DevHorses understood our business from day one and delivered a platform that opens doors in the agro-export sector.",
    testimonial_3_author: "Selekta Team",
    testimonial_3_role: "Selekta Food — Agro-Export & AI",

    about_badge: "ABOUT US",
    about_title_1: "A small team. ",
    about_title_gradient: "Big results.",
    about_desc: "We're developers and designers who build digital products with no middlemen. You work directly with us: we plan, design, code and launch. No agencies in between, no surprises.",
    about_stats_projects: "Projects",
    about_stats_exp: "Years Exp.",
    about_stats_clients: "Active clients",
    about_stats_industries: "Industries covered",
    about_stats_commitment: "Commitment",
    about_mission_comment: "// How we work",
    about_team_title: "The Team",

    // Team
    team_1_role: "FRONTEND & CLOUD",
    team_1_bio: "Builds the interfaces your customers see, with React and Next.js. Also handles deployment and keeps everything running in the cloud.",
    team_2_role: "BACKEND",
    team_2_bio: "Builds the logic that powers your site behind the scenes: APIs, databases, and everything the user doesn't see but needs so nothing breaks.",
    team_3_role: "DEVOPS & INFRASTRUCTURE",
    team_3_bio: "Makes sure your site is always online, loads fast, and can scale when traffic grows. Automates deployments and monitors the system.",
    team_4_role: "DATA & ANALYTICS",
    team_4_bio: "Turns your business data into useful insights. Sets up analytics, reports and dashboards so you know what's actually working.",
    team_5_role: "UI/UX & BRANDING",
    team_5_bio: "Designs how everything looks and feels. From the logo and brand identity to every button on the site, built to connect with your clients.",

    // Demo Showcase
    demo_badge: "DEMOS BY INDUSTRY",
    demo_title: "This is how your business could look",
    demo_subtitle: "Fully functional sites we built as industry demonstrations. Pick the industry closest to yours, explore it live, and ask for a custom version tailored to your business.",
    demo_1_name: "FitPro Gym",
    demo_1_category: "Fitness",
    demo_1_desc: "Modern gym platform with class bookings, membership plans, and progress tracking.",
    demo_2_name: "Sweet Art Bakery",
    demo_2_category: "Gastronomy",
    demo_2_desc: "Online bakery store with visual catalog, custom orders, and integrated delivery.",
    demo_3_name: "Grill & Embers",
    demo_3_category: "Gastronomy",
    demo_3_desc: "Steakhouse website with interactive menu, online reservations, and dish gallery.",
    demo_4_name: "MV Lawyers",
    demo_4_category: "Professional Services",
    demo_4_desc: "Professional law firm portal with online consultations, practice areas, and testimonials.",
    demo_5_name: "Apu Garden Lodge",
    demo_5_category: "Hospitality",
    demo_5_desc: "Lodge booking site with immersive gallery, real-time availability, and local experiences.",
    demo_6_name: "RetailPro Store",
    demo_6_category: "E-commerce",
    demo_6_desc: "Complete e-commerce with shopping cart, payment gateway, and automated inventory management.",
    demo_7_name: "Yume Tattoo",
    demo_7_category: "Beauty & Art",
    demo_7_desc: "Tattoo studio website with work gallery, online bookings, artist profiles, and premium dark design.",
    demo_btn_view: "View demo",
    demo_btn_want: "I want something like this",
    demo_cta_title: "Would you like something like this for your business?",
    demo_cta_btn: "Let's chat on WhatsApp",

    // CTA
    cta_title: "Ready to start your project?",
    cta_desc: "Message us on WhatsApp and we'll respond right away. No commitment, no strings attached.",
    cta_btn: "Let's chat on WhatsApp",

    // Footer
    footer_desc: "We transform businesses with high-impact software. Specialists in digital solutions that generate real results.",
    footer_explore: "Explore",
    footer_legal: "Legal",
    footer_rights: "All rights reserved.",
    footer_coded: "Coded with",
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: keyof Translations) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};