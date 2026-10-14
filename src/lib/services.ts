import type { Locale } from "./site";

export const services = {
  es: [
    {
      id: "webs",
      title: "Webs y tiendas online",
      short:
        "Una presencia que representa a tu negocio. Una experiencia que facilita la siguiente consulta, reserva o compra.",
      tags: ["Presencia digital", "E-commerce", "Reservas"],
      audience:
        "Para negocios que necesitan presentar su oferta, captar consultas o vender por internet.",
      includes: [
        "Diseño adaptado a tu marca y a dispositivos móviles",
        "Páginas de servicios, productos y contacto",
        "Catálogo, carrito y pagos cuando el proyecto lo requiere",
        "SEO técnico y conexión con tus canales de atención",
      ],
      delivery:
        "Sitio publicado, accesos y una guía para administrar el contenido acordado.",
      timing:
        "El plazo depende del número de páginas, el contenido y las funciones. Lo definimos contigo antes de empezar.",
      input:
        "Tu identidad de marca, textos, imágenes y la información de tus productos o servicios.",
    },
    {
      id: "sistemas",
      title: "Sistemas de gestión",
      short:
        "Reservas, inventario, cargos y reportes en un mismo lugar. Software construido alrededor de cómo trabaja tu equipo.",
      tags: ["Operación", "Reportes", "Roles y permisos"],
      audience:
        "Para equipos que necesitan coordinar su operación y consultar información desde un solo sistema.",
      includes: [
        "Diagnóstico de procesos y definición de módulos",
        "Paneles y flujos adaptados a la operación",
        "Roles, permisos y reportes según el alcance",
        "Integración con tu web o herramientas existentes",
      ],
      delivery:
        "Sistema desplegado, accesos por rol, documentación y capacitación para los flujos acordados.",
      timing:
        "Trabajamos por etapas. La primera versión y los módulos posteriores tienen alcances y fechas definidos.",
      input:
        "Tus procesos actuales, ejemplos de datos y una persona del equipo para validar cada flujo.",
    },
    {
      id: "automatizaciones",
      title: "Automatizaciones e integraciones",
      short:
        "Conectamos tus herramientas para reducir el trabajo repetitivo y mantener la información donde tu equipo la necesita.",
      tags: ["Conexiones", "Notificaciones", "Flujos"],
      audience:
        "Para negocios que repiten tareas o trasladan información entre herramientas.",
      includes: [
        "Identificación del proceso que conviene automatizar",
        "Conexiones mediante las APIs disponibles",
        "Reglas, notificaciones y controles de errores",
        "Pruebas del flujo y documentación de funcionamiento",
      ],
      delivery:
        "Flujo implementado y documentado, con las conexiones y controles acordados.",
      timing:
        "Primero validamos la viabilidad y los accesos. El plazo se define según las integraciones y las reglas del flujo.",
      input:
        "Las herramientas que utilizas, sus permisos de integración y ejemplos del proceso a conectar.",
    },
    {
      id: "aplicaciones",
      title: "Aplicaciones a medida",
      short:
        "Herramientas para tus clientes o tu equipo, con las funciones que tu negocio necesita y una experiencia fácil de usar.",
      tags: ["Producto digital", "UX/UI", "Desarrollo a medida"],
      audience:
        "Para proyectos que necesitan una experiencia o funcionalidad que una web informativa no cubre.",
      includes: [
        "Definición de usuarios, necesidades y alcance",
        "Prototipo de los recorridos principales",
        "Desarrollo de las funciones e integraciones acordadas",
        "Pruebas y preparación del lanzamiento",
      ],
      delivery:
        "Aplicación funcional, accesos y documentación. La plataforma y la entrega de código se definen en la propuesta.",
      timing:
        "Definimos una primera versión útil y planificamos las siguientes etapas según las prioridades del negocio.",
      input:
        "Tu objetivo, quién utilizará la aplicación y las funciones que necesitas priorizar.",
    },
  ],
  en: [
    {
      id: "webs",
      title: "Websites & online stores",
      short:
        "A presence that represents your business. An experience that makes the next inquiry, booking or purchase easier.",
      tags: ["Digital presence", "E-commerce", "Bookings"],
      audience:
        "For businesses looking to present their offer, receive inquiries or sell online.",
      includes: [
        "Brand-specific design for desktop and mobile",
        "Service, product and contact pages",
        "Catalog, cart and payments where required",
        "Technical SEO and links to your contact channels",
      ],
      delivery:
        "A published website, access credentials and guidance for managing the agreed content.",
      timing:
        "Timing depends on pages, content and features. We agree it with you before starting.",
      input:
        "Brand identity, copy, images and information about your products or services.",
    },
    {
      id: "sistemas",
      title: "Management systems",
      short:
        "Bookings, inventory, charges and reports in one place. Software built around the way your team works.",
      tags: ["Operations", "Reports", "Roles & permissions"],
      audience:
        "For teams that need to coordinate operations and access information in one system.",
      includes: [
        "Process discovery and module definition",
        "Dashboards and workflows tailored to your operation",
        "Roles, permissions and reports within the agreed scope",
        "Integration with your website or existing tools",
      ],
      delivery:
        "A deployed system, role-specific access, documentation and training for agreed workflows.",
      timing:
        "We deliver in stages. The first release and subsequent modules have defined scopes and dates.",
      input:
        "Current processes, sample data and a team member to validate each workflow.",
    },
    {
      id: "automatizaciones",
      title: "Automations & integrations",
      short:
        "We connect your tools to reduce repetitive work and keep information where your team needs it.",
      tags: ["Connections", "Notifications", "Workflows"],
      audience:
        "For businesses repeating tasks or transferring information between tools.",
      includes: [
        "Identification of the process to automate",
        "Connections through available APIs",
        "Rules, notifications and error handling",
        "Workflow testing and documentation",
      ],
      delivery:
        "An implemented, documented workflow with the agreed connections and controls.",
      timing:
        "We first validate feasibility and access. Timing depends on integrations and workflow rules.",
      input:
        "Your tools, integration permissions and examples of the process to connect.",
    },
    {
      id: "aplicaciones",
      title: "Custom applications",
      short:
        "Tools for your customers or your team, with the features your business needs and an intuitive experience.",
      tags: ["Digital products", "UX/UI", "Custom development"],
      audience:
        "For projects requiring experiences or functionality beyond an informational website.",
      includes: [
        "User, need and scope definition",
        "Prototypes of the main user journeys",
        "Development of agreed features and integrations",
        "Testing and launch preparation",
      ],
      delivery:
        "A functional application, access and documentation. Platform and code handover are defined in the proposal.",
      timing:
        "We define a useful first release and plan subsequent stages around business priorities.",
      input:
        "Your goal, intended users and the features you need to prioritize.",
    },
  ],
} satisfies Record<Locale, unknown>;
