export type HorseMood =
  | "wave"
  | "curious"
  | "nod"
  | "excited"
  | "typing"
  | "thinking";
type Comment = { text: string; mood: HorseMood };
type Scene = { label: string; comments: readonly Comment[] };

export const horseDialogue = {
  es: {
    hero: {
      label: "Hola, soy de DevHorses",
      comments: [
        { text: "¡Hola! Qué bueno verte por aquí. 👋", mood: "wave" },
        {
          text: "Pasa, ponte cómodo. Hay mucho por descubrir. ✨",
          mood: "thinking",
        },
        {
          text: "Aquí ando creando. ¡Gracias por la visita! 💻",
          mood: "typing",
        },
      ],
    },
    services: {
      label: "Lo que construimos",
      comments: [
        {
          text: "Una web atrae clientes. Un sistema ayuda a atenderlos mejor.",
          mood: "typing",
        },
        {
          text: "¿Tu equipo repite la misma tarea? Ahí podría ayudar una automatización.",
          mood: "thinking",
        },
        {
          text: "La tecnología se adapta a tu negocio. Empezamos por entenderlo.",
          mood: "wave",
        },
      ],
    },
    "apu-case": {
      label: "Por dentro de Apu",
      comments: [
        {
          text: "Aquí la web y la gestión del hotel trabajan conectadas. 🛎️",
          mood: "typing",
        },
        {
          text: "Prueba las pestañas: puedes ver habitaciones, detalles y reservas.",
          mood: "thinking",
        },
        {
          text: "El huésped reserva. El equipo del hotel continúa el recorrido.",
          mood: "nod",
        },
      ],
    },
    projects: {
      label: "Ideas en producción",
      comments: [
        {
          text: "Estas ideas ya están funcionando. ¿Cuál se parece a la tuya?",
          mood: "thinking",
        },
        {
          text: "Puedes visitar los sitios y explorar los casos de Apu y Selekta.",
          mood: "wave",
        },
        {
          text: "Cada negocio tiene su historia. Por eso construimos a medida.",
          mood: "nod",
        },
      ],
    },
    process: {
      label: "Paso a paso",
      comments: [
        {
          text: "Primero entendemos tu idea. Después le damos forma, contigo.",
          mood: "nod",
        },
        {
          text: "Los avances se revisan. Las decisiones se conversan.",
          mood: "typing",
        },
        {
          text: "Y después de lanzar, seguimos contigo: soporte 24/7. 💪",
          mood: "excited",
        },
      ],
    },
    testimonials: {
      label: "La voz de los clientes",
      comments: [
        {
          text: "Ahora les toca hablar a quienes ya construyeron con nosotros.",
          mood: "nod",
        },
        {
          text: "Diseño, tecnología y confianza. Las tres cosas cuentan.",
          mood: "thinking",
        },
        {
          text: "Detrás de cada lanzamiento hay un equipo y muchas conversaciones.",
          mood: "wave",
        },
      ],
    },
    instagram: {
      label: "Nos vemos en Instagram",
      comments: [
        {
          text: "Si te gusta lo que ves, nos encuentras en @devhorses. ✨",
          mood: "excited",
        },
        {
          text: "¿Nos seguimos? El botón te lleva directo a nuestra cuenta.",
          mood: "wave",
        },
        { text: "Las buenas ideas también merecen compartirse.", mood: "nod" },
      ],
    },
    contact: {
      label: "Tu idea sigue",
      comments: [
        {
          text: "Ahora te toca a ti: ¿qué te gustaría construir? 👀",
          mood: "thinking",
        },
        {
          text: "Cuéntanos qué necesitas resolver y cuándo te gustaría lanzarlo.",
          mood: "nod",
        },
        {
          text: "WhatsApp o correo. Tú eliges, y nosotros te respondemos de inmediato.",
          mood: "wave",
        },
      ],
    },
    footer: {
      label: "Gracias por el recorrido",
      comments: [
        {
          text: "Llegamos al final de la página. Tu proyecto puede empezar aquí.",
          mood: "wave",
        },
        {
          text: "Tócame si quieres abrir WhatsApp o escribirnos por correo.",
          mood: "thinking",
        },
        {
          text: "Desde Lima, para donde estés. ¿Construimos algo juntos?",
          mood: "excited",
        },
      ],
    },
    selekta: {
      label: "El caso de Selekta",
      comments: [
        {
          text: "Aquí el reto era comunicar una propuesta especializada con claridad.",
          mood: "thinking",
        },
        {
          text: "Nosotros construimos la web. La tecnología de clasificación es de Selekta.",
          mood: "nod",
        },
        {
          text: "Explora la historia y visita el sitio para ver el resultado.",
          mood: "wave",
        },
      ],
    },
    about: {
      label: "El equipo detrás",
      comments: [
        {
          text: "Aquí están quienes dan forma a las ideas de DevHorses.",
          mood: "wave",
        },
        {
          text: "Diseño, desarrollo, infraestructura y datos. Cada parte cuenta.",
          mood: "nod",
        },
        {
          text: "Hablas directamente con el equipo que construye tu proyecto.",
          mood: "excited",
        },
      ],
    },
  },
  en: {
    hero: {
      label: "Hi, I'm with DevHorses",
      comments: [
        { text: "Hi! It's great to see you here. 👋", mood: "wave" },
        {
          text: "Come on in. There's plenty to discover. ✨",
          mood: "thinking",
        },
        {
          text: "I'm building something. Thanks for stopping by! 💻",
          mood: "typing",
        },
      ],
    },
    services: {
      label: "What we build",
      comments: [
        {
          text: "A website attracts customers. A system helps you serve them better.",
          mood: "typing",
        },
        {
          text: "Repeating the same task? An automation could help with that.",
          mood: "thinking",
        },
        {
          text: "Technology fits your business. We start by understanding it.",
          mood: "wave",
        },
      ],
    },
    "apu-case": {
      label: "Inside Apu",
      comments: [
        {
          text: "Here, the website and hotel operations work together. 🛎️",
          mood: "typing",
        },
        {
          text: "Try the tabs to explore rooms, details and bookings.",
          mood: "thinking",
        },
        {
          text: "The guest books. The hotel team takes the next step.",
          mood: "nod",
        },
      ],
    },
    projects: {
      label: "Ideas in production",
      comments: [
        {
          text: "These ideas are already live. Which one feels like yours?",
          mood: "thinking",
        },
        {
          text: "Visit the websites and explore the Apu and Selekta case studies.",
          mood: "wave",
        },
        {
          text: "Every business has its own story. That's why we build to fit.",
          mood: "nod",
        },
      ],
    },
    process: {
      label: "Step by step",
      comments: [
        {
          text: "First we understand your idea. Then we shape it, with you.",
          mood: "nod",
        },
        {
          text: "Progress gets reviewed. Decisions get discussed.",
          mood: "typing",
        },
        {
          text: "And after launch, we're still here: 24/7 support. 💪",
          mood: "excited",
        },
      ],
    },
    testimonials: {
      label: "Our clients' voices",
      comments: [
        {
          text: "Now it's over to the people who have already built with us.",
          mood: "nod",
        },
        {
          text: "Design, technology and trust. All three matter.",
          mood: "thinking",
        },
        {
          text: "Behind each launch is a team and plenty of conversations.",
          mood: "wave",
        },
      ],
    },
    instagram: {
      label: "See you on Instagram",
      comments: [
        {
          text: "Like what you see? Find us at @devhorses. ✨",
          mood: "excited",
        },
        {
          text: "Follow along? The button takes you straight to our account.",
          mood: "wave",
        },
        { text: "Good ideas are worth sharing, too.", mood: "nod" },
      ],
    },
    contact: {
      label: "Your idea comes next",
      comments: [
        {
          text: "Your turn: what would you like to build? 👀",
          mood: "thinking",
        },
        {
          text: "Tell us what you need to solve and when you'd like to launch.",
          mood: "nod",
        },
        {
          text: "WhatsApp or email. You choose, and we respond right away.",
          mood: "wave",
        },
      ],
    },
    footer: {
      label: "Thanks for exploring",
      comments: [
        {
          text: "The page ends here. Your project could start here.",
          mood: "wave",
        },
        {
          text: "Tap me to open WhatsApp or send us an email.",
          mood: "thinking",
        },
        {
          text: "From Lima, wherever you are. Shall we build something together?",
          mood: "excited",
        },
      ],
    },
    selekta: {
      label: "Selekta's story",
      comments: [
        {
          text: "The challenge here was to explain a specialized offer clearly.",
          mood: "thinking",
        },
        {
          text: "We built the website. Selekta owns the classification technology.",
          mood: "nod",
        },
        {
          text: "Explore the story and visit the website to see the result.",
          mood: "wave",
        },
      ],
    },
    about: {
      label: "The people behind it",
      comments: [
        { text: "Meet the people who shape ideas at DevHorses.", mood: "wave" },
        {
          text: "Design, development, infrastructure and data. Every part matters.",
          mood: "nod",
        },
        {
          text: "You work directly with the team building your project.",
          mood: "excited",
        },
      ],
    },
  },
} satisfies Record<"es" | "en", Record<string, Scene>>;

export type HorseScene = keyof typeof horseDialogue.es;

export function sceneForPath(pathname: string): HorseScene {
  if (pathname === "/") return "hero";
  if (pathname === "/servicios") return "services";
  if (pathname.includes("apu-garden-lodge")) return "apu-case";
  if (pathname.includes("selekta-food")) return "selekta";
  if (pathname.startsWith("/proyectos")) return "projects";
  if (pathname === "/nosotros") return "about";
  return "contact";
}
