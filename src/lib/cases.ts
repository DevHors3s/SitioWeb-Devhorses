export const caseImageDimensions: Record<string, { width: number; height: number }> = {
  "/apu web mini.png": { width: 1365, height: 677 },
  "/selekta-mini.png": { width: 1347, height: 627 },
  "/saas apu gestion/ApuGestion1.png": { width: 1365, height: 632 },
  "/saas apu gestion/ApuGestion2.png": { width: 1051, height: 535 },
  "/saas apu gestion/ApuGestion3.png": { width: 1106, height: 590 },
};

export const caseStudies = {
  "apu-garden-lodge": {
    name: "Apu Garden Lodge",
    site: "https://apu-garden-lodge.com/",
    image: "/apu web mini.png",
    screenshots: [
      "/saas apu gestion/ApuGestion1.png",
      "/saas apu gestion/ApuGestion2.png",
      "/saas apu gestion/ApuGestion3.png",
    ],
    es: {
      industry: "Hotelería / Urubamba, Valle Sagrado",
      title: "Una web de reservas. Toda una operación conectada.",
      intro:
        "Desarrollamos el sitio público y el sistema de gestión de Apu Garden Lodge: dos experiencias conectadas para huéspedes y equipo del hotel.",
      challenge:
        "El proyecto debía resolver dos recorridos: facilitar que un huésped consulte y reserve desde la web, y permitir que recepción, limpieza y administración coordinen la operación con la misma información.",
      solution:
        "Construimos una web conectada con un sistema de gestión a medida. La disponibilidad de habitaciones, las reservas y la información operativa se consultan desde las vistas correspondientes, con permisos por rol.",
      features: [
        [
          "Disponibilidad y reservas",
          "La web pública consulta la disponibilidad real y registra la reserva en el sistema de gestión.",
        ],
        [
          "Mapa de habitaciones",
          "El equipo consulta el estado de las habitaciones y accede al detalle para gestionar la operación diaria.",
        ],
        [
          "Cargos y comprobantes",
          "Los consumos y cargos se registran en el folio del huésped. El sistema genera el voucher de la reserva.",
        ],
        [
          "Reportes y permisos",
          "Ocupación, ingresos y ADR en reportes del sistema, con vistas para recepción, limpieza y administración.",
        ],
      ],
      flow: [
        [
          "El huésped reserva",
          "Consulta disponibilidad desde la web y registra su reserva.",
        ],
        [
          "Recepción organiza",
          "Revisa la reserva y gestiona la habitación y los cargos del huésped.",
        ],
        [
          "El equipo se coordina",
          "Cada rol accede a la información que necesita para su trabajo.",
        ],
        [
          "Administración consulta",
          "Revisa ocupación e ingresos desde los reportes del sistema.",
        ],
      ],
      outcome:
        "Una web pública y un sistema de gestión en producción que conectan las reservas con la operación diaria del hotel. Las capturas muestran el mapa de habitaciones, el detalle y la creación de reservas.",
      captions: [
        "Mapa de habitaciones: una vista de la operación del hotel.",
        "Detalle de habitación: información y acciones para recepción.",
        "Nueva reserva: registro conectado con la operación.",
      ],
      deliverables: [
        "Web pública de reservas",
        "Sistema de gestión hotelera",
        "Roles para el equipo",
        "Reportes operativos",
      ],
    },
    en: {
      industry: "Hospitality / Urubamba, Sacred Valley",
      title: "A booking website. An entire operation connected.",
      intro:
        "We built Apu Garden Lodge's public website and management system: two connected experiences for guests and the hotel team.",
      challenge:
        "The project needed to cover two journeys: helping guests check availability and book online, and enabling front desk, housekeeping and administration to coordinate operations using the same information.",
      solution:
        "We built a website connected to a custom management system. Room availability, bookings and operational information are available in the appropriate views, with role-based permissions.",
      features: [
        [
          "Availability & bookings",
          "The public website checks real availability and records the booking in the management system.",
        ],
        [
          "Room map",
          "The team checks room status and opens the details needed to manage daily operations.",
        ],
        [
          "Charges & vouchers",
          "Consumption and charges are recorded in the guest folio. The system generates the booking voucher.",
        ],
        [
          "Reports & permissions",
          "Occupancy, revenue and ADR reports, with views for front desk, housekeeping and administration.",
        ],
      ],
      flow: [
        [
          "The guest books",
          "Checks availability on the website and records a reservation.",
        ],
        [
          "Front desk organizes",
          "Reviews the booking and manages the room and guest charges.",
        ],
        [
          "The team coordinates",
          "Each role accesses the information needed for their work.",
        ],
        [
          "Administration checks",
          "Reviews occupancy and revenue through system reports.",
        ],
      ],
      outcome:
        "A public website and live management system connecting bookings with the hotel's daily operation. Screenshots show the room map, room details and booking creation.",
      captions: [
        "Room map: a view of the hotel's operation.",
        "Room detail: information and actions for front desk.",
        "New booking: a record connected with operations.",
      ],
      deliverables: [
        "Public booking website",
        "Hotel management system",
        "Team roles",
        "Operational reports",
      ],
    },
  },
  "selekta-food": {
    name: "Selekta Food",
    site: "https://www.selektafood.com/",
    image: "/selekta-mini.png",
    screenshots: ["/selekta-mini.png"],
    es: {
      industry: "Agroexportación / Presencia corporativa",
      title: "Una presencia digital a la altura de su tecnología.",
      intro:
        "Diseñamos y desarrollamos la web corporativa de Selekta Food para presentar su propuesta de agroexportación y su tecnología de clasificación a potenciales clientes.",
      challenge:
        "La web debía explicar una oferta especializada: agroexportación con tecnología de clasificación inteligente. El reto de comunicación era presentar esa capacidad con claridad y facilitar el contacto comercial.",
      solution:
        "Construimos un sitio corporativo que organiza la propuesta de la empresa, presenta su tecnología y conecta la exploración del contenido con sus canales de contacto. El trabajo de DevHorses corresponde a la web; la tecnología de clasificación pertenece a Selekta.",
      features: [
        [
          "Presentación de la empresa",
          "Una estructura que permite conocer la propuesta de Selekta y el sector en el que trabaja.",
        ],
        [
          "Comunicación de tecnología",
          "Contenido visual y textos para explicar su enfoque de clasificación inteligente.",
        ],
        [
          "Experiencia adaptable",
          "Una presentación que se puede explorar desde escritorio y dispositivos móviles.",
        ],
        [
          "Contacto comercial",
          "Accesos de contacto para continuar la conversación con el equipo de la empresa.",
        ],
      ],
      flow: [
        [
          "Conocer la propuesta",
          "El visitante identifica qué hace Selekta y a quién se dirige.",
        ],
        [
          "Explorar su capacidad",
          "Consulta la información de la empresa y su tecnología.",
        ],
        [
          "Dar el siguiente paso",
          "Utiliza los canales de contacto para conversar sobre su necesidad.",
        ],
      ],
      outcome:
        "Una web corporativa publicada que permite explorar la propuesta de Selekta Food y acceder a sus canales comerciales. El resultado puede consultarse directamente en el sitio del cliente.",
      captions: [
        "Web corporativa de Selekta Food: propuesta, tecnología y contacto.",
      ],
      deliverables: [
        "Web corporativa",
        "Diseño de interfaces",
        "Presentación de la tecnología",
        "Accesos de contacto",
      ],
    },
    en: {
      industry: "Agro-export / Corporate presence",
      title: "A digital presence that reflects their technology.",
      intro:
        "We designed and developed Selekta Food's corporate website to present its agro-export offer and classification technology to potential clients.",
      challenge:
        "The website needed to explain a specialized offer: agro-export with intelligent classification technology. The communication challenge was to present that capability clearly and make commercial contact easier.",
      solution:
        "We built a corporate website that organizes the company's offer, presents its technology and connects content exploration with contact channels. DevHorses' work covers the website; the classification technology belongs to Selekta.",
      features: [
        [
          "Company presentation",
          "A structure that introduces Selekta's offer and the sector it serves.",
        ],
        [
          "Technology communication",
          "Visual content and copy explaining its intelligent classification approach.",
        ],
        [
          "Responsive experience",
          "A presentation visitors can explore on desktop and mobile.",
        ],
        [
          "Commercial contact",
          "Contact links to continue the conversation with the company's team.",
        ],
      ],
      flow: [
        [
          "Understand the offer",
          "Visitors identify what Selekta does and who it serves.",
        ],
        [
          "Explore its capabilities",
          "They review information about the company and technology.",
        ],
        [
          "Take the next step",
          "They use contact channels to discuss their needs.",
        ],
      ],
      outcome:
        "A published corporate website where visitors can explore Selekta Food's offer and access its commercial channels. The result can be reviewed directly on the client's website.",
      captions: [
        "Selekta Food's corporate website: offer, technology and contact.",
      ],
      deliverables: [
        "Corporate website",
        "Interface design",
        "Technology presentation",
        "Contact links",
      ],
    },
  },
};

export type CaseSlug = keyof typeof caseStudies;
