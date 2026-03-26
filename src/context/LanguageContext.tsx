"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

type Translations = {
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
    testimonial_1_quote: "Triplicamos nuestras ventas online en 3 meses. El equipo de DevHorses entendió perfectamente lo que necesitábamos y lo ejecutaron con una calidad impresionante.",
    testimonial_1_author: "Carlos Mendoza",
    testimonial_1_role: "CEO, FreshMarket Perú",
    testimonial_2_quote: "Nuestro sistema de reservas pasó de ser un caos en WhatsApp a una plataforma automatizada. Los pacientes están encantados y nosotros ahorramos 4 horas diarias.",
    testimonial_2_author: "Dra. Valentina Ríos",
    testimonial_2_role: "Directora, Clínica Estética Lumière",
    testimonial_3_quote: "No son solo desarrolladores, son socios estratégicos. Nos desafiaron a pensar más grande y el resultado superó todas nuestras expectativas.",
    testimonial_3_author: "Andrés Gutiérrez",
    testimonial_3_role: "Fundador, LogiTrack Solutions",

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
    project_1_desc: "Plataforma de e-commerce con integración de pagos y UI de alto rendimiento que incrementó las ventas un 200%.",
    project_2_desc: "Dashboard de analytics en tiempo real con visualización de datos masivos y reportes automatizados.",
    project_3_desc: "Experiencia web inmersiva con animaciones 3D y transiciones fluidas que redujo la tasa de rebote un 60%.",
    project_4_desc: "Interfaz de chat impulsada por IA con streaming de respuestas y procesamiento de lenguaje natural.",

    // About
    about_badge: "Sobre Nosotros",
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
    testimonial_1_quote: "We tripled our online sales in 3 months. The DevHorses team perfectly understood what we needed and executed with impressive quality.",
    testimonial_1_author: "Carlos Mendoza",
    testimonial_1_role: "CEO, FreshMarket Peru",
    testimonial_2_quote: "Our booking system went from WhatsApp chaos to an automated platform. Patients love it and we save 4 hours daily.",
    testimonial_2_author: "Dr. Valentina Ríos",
    testimonial_2_role: "Director, Clínica Estética Lumière",
    testimonial_3_quote: "They're not just developers, they're strategic partners. They challenged us to think bigger and the result exceeded all expectations.",
    testimonial_3_author: "Andrés Gutiérrez",
    testimonial_3_role: "Founder, LogiTrack Solutions",

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
    project_1_desc: "E-commerce platform with payment integration and high-performance UI that increased sales by 200%.",
    project_2_desc: "Real-time analytics dashboard with massive data visualization and automated reports.",
    project_3_desc: "Immersive web experience with 3D animations and fluid transitions that reduced bounce rate by 60%.",
    project_4_desc: "AI-powered chat interface with response streaming and natural language processing.",

    // About
    about_badge: "About Us",
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