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
  hero_stack_title: string;

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
  testimonial_3_quote: string;
  testimonial_3_author: string;
  testimonial_3_role: string;

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
  project_1_desc: string;
  project_2_desc: string;
  project_3_desc: string;
  project_4_desc: string;
  project_5_desc: string;
  project_6_desc: string;
  project_7_desc: string;

  // About
  about_badge: string;
  about_title_1: string;
  about_title_gradient: string;
  about_desc: string;
  about_stats_projects: string;
  about_stats_exp: string;
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
    hero_badge: "CONSULTORÍA DIGITAL GRATUITA",
    hero_title_1: "Tu negocio merece ",
    hero_title_gradient: "más clientes",
    hero_title_2: "no solo una ",
    hero_title_gradient_2: "web bonita",
    hero_subtitle: "Diseñamos y desarrollamos plataformas digitales que generan clientes, automatizan procesos y escalan contigo. Para negocios que quieren crecer en serio.",
    hero_btn_primary: "Agendar consultoría gratuita",
    hero_btn_secondary: "Ver nuestros servicios",
    hero_stack_title: "TECNOLOGÍAS QUE IMPULSAN TU CRECIMIENTO",

    // Services — Orientados a resultados
    services_title: "Soluciones que generan resultados",
    services_subtitle: "No vendemos tecnología. Creamos sistemas digitales que resuelven problemas reales de tu negocio.",
    services_web_title: "Sitios web que convierten",
    services_web_desc: "No solo bonitos — diseñados para que cada visitante se convierta en cliente. Plataformas rápidas, seguras y optimizadas para ventas, con backend robusto que escala con tu crecimiento.",
    services_mobile_title: "Apps que tus clientes amarán",
    services_mobile_desc: "Aplicaciones móviles rápidas y fluidas que mantienen a tus usuarios enganchados. Experiencia nativa, notificaciones push y rendimiento de primer nivel en cualquier dispositivo.",
    services_ui_title: "Identidad visual que impone",
    services_ui_desc: "Branding profesional que posiciona tu marca por encima de la competencia. Diseño centrado en el usuario que convierte visitantes en clientes desde el primer contacto visual.",
    services_eco_title: "Tiendas que venden 24/7",
    services_eco_desc: "E-commerce optimizado con checkout rápido, pagos seguros y gestión de inventario automatizada. Tu negocio vendiendo incluso mientras duermes.",

    // Process
    process_title: "Cómo trabajamos",
    process_subtitle: "Un proceso transparente diseñado para que tu proyecto se entregue a tiempo, sin sorpresas y con resultados medibles.",
    process_step1_title: "Diagnóstico",
    process_step1_desc: "Analizamos tu negocio, competencia y objetivos para diseñar la estrategia digital perfecta para ti.",
    process_step2_title: "Diseño",
    process_step2_desc: "Creamos prototipos interactivos y diseños visuales que validas antes de escribir una sola línea de código.",
    process_step3_title: "Desarrollo",
    process_step3_desc: "Construimos tu solución con tecnología de punta, código limpio y entregas semanales para que veas el avance.",
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
    testimonial_3_quote: "Pasamos de recibir pedidos por WhatsApp a tener una tienda online profesional con catálogo y delivery integrado. Nuestras ventas crecieron un 150% y ahora los clientes pueden hacer pedidos personalizados las 24 horas.",
    testimonial_3_author: "Lucía Fernández",
    testimonial_3_role: "Propietaria, Pastelería Dulce Arte",

    // Contact
    contact_title_1: "¿Listo para ",
    contact_title_gradient: "escalar tu negocio?",
    contact_subtitle: "Cuéntanos tu idea y te respondemos en menos de 24 horas con una propuesta personalizada. Sin compromiso.",
    contact_label_name: "Nombre",
    contact_label_email: "Email",
    contact_label_message: "Cuéntanos tu proyecto",
    contact_placeholder_name: "Tu nombre completo",
    contact_placeholder_email: "tu@email.com",
    contact_placeholder_message: "Quiero una web para mi negocio de...",
    contact_btn_send: "Enviar mensaje",
    contact_btn_sending: "Enviando...",
    contact_success: "✅ ¡Mensaje enviado! Te contactaremos en menos de 24h.",

    // Projects
    projects_badge: "PORTFOLIO V.1.0",
    projects_title: "Nuestros Proyectos",
    projects_subtitle: "Resultados reales para negocios reales. Cada proyecto es una historia de crecimiento digital.",
    projects_btn_demo: "Ver Demo",
    projects_btn_code: "Código",
    project_1_desc: "Portal profesional para bufete de abogados con consultas online, áreas de práctica, testimonios y diseño que transmite confianza y autoridad.",
    project_2_desc: "Sitio web para lodge turístico con galería inmersiva, sistema de reservas, disponibilidad en tiempo real y experiencias locales destacadas.",
    project_3_desc: "Plataforma moderna para gimnasios con reservas de clases, planes de membresía, seguimiento de progreso y diseño motivacional.",
    project_4_desc: "Tienda online para pastelería con catálogo visual, pedidos personalizados, delivery integrado y experiencia de compra premium.",
    project_5_desc: "Sitio web para restaurante de carnes con menú interactivo, reservas online, galería de platos y diseño que abre el apetito.",
    project_6_desc: "E-commerce completo con carrito de compras, pasarela de pagos, gestión de inventario automatizada y experiencia de compra fluida.",
    project_7_desc: "Sitio web para estudio de tatuajes con galería de trabajos, reservas online, perfiles de artistas y diseño dark premium.",

    // About: "Sobre Nosotros",
    about_title_1: "Arquitectos de la ",
    about_title_gradient: "Realidad Digital",
    about_desc: "En DevHorses, no solo escribimos código; forjamos experiencias. Somos un colectivo de ingenieros y creativos unidos por una misión: transformar ideas abstractas en productos digitales de alto impacto.",
    about_stats_projects: "Proyectos",
    about_stats_exp: "Años Exp.",
    about_stats_commitment: "Compromiso",
    about_mission_comment: "// Nuestra misión principal",
    about_team_title: "El Escuadrón",

    // Team
    team_1_role: "FRONTEND & CLOUD",
    team_1_bio: "Especialista en interfaces modernas con React y Next.js, y arquitectura cloud. Construye experiencias digitales rápidas y escalables desde el frontend hasta la nube.",
    team_2_role: "BACKEND SPECIALIST",
    team_2_bio: "Maestro de la lógica del servidor. Diseña APIs robustas y arquitecturas de bases de datos optimizadas para velocidad y seguridad extrema.",
    team_3_role: "DEVOPS & CLOUD ARCHITECT",
    team_3_bio: "El puente entre el código y la nube. Experto en pipelines de despliegue (CI/CD) y escalabilidad horizontal para que el sistema nunca caiga.",
    team_4_role: "DATA ANALYST & SYSTEMS",
    team_4_bio: "Transforma datos crudos en estrategias de oro. Analiza patrones sistémicos para optimizar el rendimiento y la toma de decisiones del negocio.",
    team_5_role: "UI/UX & BRANDING LEAD",
    team_5_bio: "Diseñadora gráfica y líder creativa. Crea identidades visuales memorables, manuales de marca y experiencias de usuario que conectan con tus clientes.",

    // Demo Showcase
    demo_badge: "DEMOS INTERACTIVAS",
    demo_title: "Explora cómo podría verse tu negocio vendiendo online",
    demo_subtitle: "Sitios reales que hemos creado. Elige tu industria y mira cómo podría lucir tu negocio en internet.",
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
    cta_title: "¿Listo para iniciar tu próximo gran proyecto?",
    cta_desc: "Ya sea una idea disruptiva o una mejora técnica, nuestro equipo está listo para desplegar.",
    cta_btn: "hola@devhorses.com",

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
    hero_badge: "FREE DIGITAL CONSULTATION",
    hero_title_1: "Your Business Deserves ",
    hero_title_gradient: "More Clients",
    hero_title_2: "Not Just a ",
    hero_title_gradient_2: "Pretty Website",
    hero_subtitle: "We design and develop digital platforms that generate clients, automate processes, and scale with you. For businesses serious about growth.",
    hero_btn_primary: "Book Free Consultation",
    hero_btn_secondary: "See Our Services",
    hero_stack_title: "TECHNOLOGIES THAT POWER YOUR GROWTH",

    // Services
    services_title: "Solutions that Drive Results",
    services_subtitle: "We don't sell technology. We create digital systems that solve real business problems.",
    services_web_title: "Websites that Convert",
    services_web_desc: "Not just beautiful — designed to turn every visitor into a customer. Fast, secure platforms optimized for sales, with a robust backend that scales with your growth.",
    services_mobile_title: "Apps Your Clients Will Love",
    services_mobile_desc: "Fast, fluid mobile applications that keep your users engaged. Native experience, push notifications, and top-tier performance on any device.",
    services_ui_title: "Visual Identity that Commands Respect",
    services_ui_desc: "Professional branding that positions your brand above the competition. User-centered design that converts visitors into clients from the very first visual contact.",
    services_eco_title: "Stores that Sell 24/7",
    services_eco_desc: "Optimized e-commerce with fast checkout, secure payments, and automated inventory management. Your business selling even while you sleep.",

    // Process
    process_title: "How We Work",
    process_subtitle: "A transparent process designed to deliver your project on time, with no surprises and measurable results.",
    process_step1_title: "Discovery",
    process_step1_desc: "We analyze your business, competition, and goals to design the perfect digital strategy for you.",
    process_step2_title: "Design",
    process_step2_desc: "We create interactive prototypes and visual designs you validate before a single line of code is written.",
    process_step3_title: "Development",
    process_step3_desc: "We build your solution with cutting-edge technology, clean code, and weekly deliveries so you see progress.",
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
    testimonial_3_quote: "We went from taking orders on WhatsApp to having a professional online store with a catalog and integrated delivery. Our sales grew 150% and now customers can place custom orders 24/7.",
    testimonial_3_author: "Lucía Fernández",
    testimonial_3_role: "Owner, Pastelería Dulce Arte",

    // Contact
    contact_title_1: "Ready to ",
    contact_title_gradient: "Scale Your Business?",
    contact_subtitle: "Tell us your idea and we'll respond within 24 hours with a personalized proposal. No strings attached.",
    contact_label_name: "Name",
    contact_label_email: "Email",
    contact_label_message: "Tell us about your project",
    contact_placeholder_name: "Your full name",
    contact_placeholder_email: "you@email.com",
    contact_placeholder_message: "I want a website for my business of...",
    contact_btn_send: "Send Message",
    contact_btn_sending: "Sending...",
    contact_success: "✅ Message sent! We'll contact you within 24h.",

    // Projects
    projects_badge: "PORTFOLIO V.1.0",
    projects_title: "Our Projects",
    projects_subtitle: "Real results for real businesses. Every project is a story of digital growth.",
    projects_btn_demo: "View Demo",
    projects_btn_code: "Code",
    project_1_desc: "Professional law firm portal with online consultations, practice areas, testimonials, and a design that conveys trust and authority.",
    project_2_desc: "Tourism lodge website with immersive gallery, booking system, real-time availability, and featured local experiences.",
    project_3_desc: "Modern gym platform with class bookings, membership plans, progress tracking, and motivational design.",
    project_4_desc: "Online bakery store with visual catalog, custom orders, integrated delivery, and a premium shopping experience.",
    project_5_desc: "Steakhouse website with interactive menu, online reservations, dish gallery, and a design that whets the appetite.",
    project_6_desc: "Complete e-commerce with shopping cart, payment gateway, automated inventory management, and a seamless shopping experience.",
    project_7_desc: "Tattoo studio website with work gallery, online bookings, artist profiles, and premium dark design.",

    // About: "About Us",
    about_title_1: "Architects of ",
    about_title_gradient: "Digital Reality",
    about_desc: "At DevHorses, we don't just write code; we forge experiences. We are a collective of engineers and creatives united by a mission: to transform abstract ideas into high-impact digital products.",
    about_stats_projects: "Projects",
    about_stats_exp: "Years Exp.",
    about_stats_commitment: "Commitment",
    about_mission_comment: "// Our core mission",
    about_team_title: "The Squad",

    // Team
    team_1_role: "FRONTEND & CLOUD",
    team_1_bio: "Specialist in modern interfaces with React and Next.js, and cloud architecture. Builds fast, scalable digital experiences from frontend to cloud.",
    team_2_role: "BACKEND SPECIALIST",
    team_2_bio: "Master of server logic. Designs robust APIs and database architectures optimized for speed and extreme security.",
    team_3_role: "DEVOPS & CLOUD ARCHITECT",
    team_3_bio: "The bridge between code and cloud. Expert in deployment pipelines (CI/CD) and horizontal scalability ensuring zero downtime.",
    team_4_role: "DATA ANALYST & SYSTEMS",
    team_4_bio: "Transforms raw data into golden strategies. Analyzes systemic patterns to optimize performance and business decision-making.",
    team_5_role: "UI/UX & BRANDING LEAD",
    team_5_bio: "Graphic designer and creative lead. Crafts memorable visual identities, brand manuals, and user experiences that connect with your clients.",

    // Demo Showcase
    demo_badge: "INTERACTIVE DEMOS",
    demo_title: "Explore how your business could look selling online",
    demo_subtitle: "Real sites we've built. Pick your industry and see how your business could look on the internet.",
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
    cta_title: "Ready to start your next big project?",
    cta_desc: "Whether it's a disruptive idea or a technical upgrade, our team is ready to deploy.",
    cta_btn: "hello@devhorses.com",

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