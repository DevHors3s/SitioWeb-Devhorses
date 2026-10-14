"use client";

import Link from "next/link";
import { ArrowUpRight, Check, LifeBuoy, Palette } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/services";
import { whatsappUrl } from "@/lib/site";

export default function ServiceDetails() {
  const { language } = useLanguage();
  const es = language === "es";
  const faqs = es
    ? [
        [
          "¿Cuánto dura un proyecto?",
          "Como referencia real, Apu Garden Lodge y Selekta Food tomaron aproximadamente un mes, incluyendo desarrollo, respuestas y aprobaciones del cliente. Para tu proyecto definimos fechas según páginas, módulos, integraciones y contenido disponible, y revisamos avances contigo.",
        ],
        [
          "¿El dominio y el hosting están incluidos?",
          "Los definimos en la propuesta. Indicamos quién administra los accesos y qué costos recurrentes existen, incluidos los servicios de terceros que tu proyecto requiera.",
        ],
        [
          "¿Puedo administrar mi web o sistema?",
          "Sí. Definimos qué contenido o funciones necesitas administrar y preparamos los accesos y la guía correspondiente. En sistemas de gestión, los permisos dependen de cada rol.",
        ],
        [
          "¿Recibo el código y los accesos?",
          "La entrega de código, los accesos y las condiciones de uso se dejan por escrito en la propuesta. Así conoces las condiciones antes de contratar.",
        ],
        [
          "¿Qué pasa después del lanzamiento?",
          "Ofrecemos soporte 24/7. La propuesta detalla la cobertura, el mantenimiento y las tareas incluidas. Las nuevas funciones y ampliaciones se evalúan y cotizan por separado.",
        ],
        [
          "¿Pueden conectar herramientas que ya utilizo?",
          "Revisamos sus APIs, permisos y limitaciones antes de confirmar una integración. Primero validamos que la conexión sea viable y luego definimos su alcance.",
        ],
        ["¿Qué determina el presupuesto?", "El número de páginas o módulos, los recorridos de los usuarios, las integraciones y el contenido. Separaremos la implementación de los costos recurrentes de dominio, hosting y servicios externos para que puedas comparar el alcance."],
      ]
    : [
        [
          "How long does a project take?",
          "As a real reference, Apu Garden Lodge and Selekta Food each took approximately one month, including development, client responses and approvals. Your timeline depends on pages, modules, integrations and content availability; we review progress with you.",
        ],
        [
          "Are domain and hosting included?",
          "These are defined in the proposal, including access administration and recurring costs for any third-party services required.",
        ],
        [
          "Can I manage my website or system?",
          "Yes. We define the content and functions you need to manage and provide access and guidance. System permissions depend on each role.",
        ],
        [
          "Will I receive the code and access?",
          "Code handover, access and usage terms are documented in the proposal, so you understand the conditions before committing.",
        ],
        [
          "What happens after launch?",
          "We offer 24/7 support. The proposal details coverage, maintenance and included tasks. New features and extensions are assessed and quoted separately.",
        ],
        [
          "Can you connect tools I already use?",
          "We check APIs, permissions and limitations before confirming an integration. We validate feasibility first and then define scope.",
        ],
        ["What determines the budget?", "The number of pages or modules, user journeys, integrations and content. We separate implementation from recurring domain, hosting and external-service costs so you can compare scope."],
      ];
  return (
    <main className="page-main">
      <header className="site-container page-intro">
        <span className="eyebrow text-accent">
          {es
            ? "Servicios / Del objetivo a la solución"
            : "Services / From goals to solutions"}
        </span>
        <h1>
          {es ? "Tecnología pensada" : "Technology designed"}
          <br />
          <span className="text-gradient-accent">
            {es ? "para tu negocio." : "for your business."}
          </span>
        </h1>
        <p>
          {es
            ? "Empezamos por entender qué necesitas resolver. Después definimos qué construir, qué vas a recibir y cómo acompañarte después del lanzamiento."
            : "We start by understanding what you need to solve. Then we define what to build, what you'll receive and how we'll support you after launch."}
        </p>
        <nav
          aria-label={es ? "Tipos de servicio" : "Service types"}
          className="service-jump-links"
        >
          {services[language].map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.title}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </nav>
      </header>
      <div className="site-container">
        <section className="service-planning">
          <span className="eyebrow text-accent">{es ? "Elige por lo que necesitas resolver" : "Choose by the problem you need to solve"}</span>
          <h2 className="section-title">{es ? "Tres puntos de partida." : "Three starting points."}</h2>
          <div className="service-paths">
            {(es ? [
              ["Presentar y captar consultas", "Una web con oferta, servicios y contacto. Empezamos por el contenido y el recorrido del visitante.", "Referencia: Selekta Food", "/proyectos/selekta-food"],
              ["Conectar la operación", "Una web y un sistema para compartir reservas, estados y reportes. Definimos los módulos y permisos del equipo.", "Referencia: Apu Garden Lodge", "/proyectos/apu-garden-lodge"],
              ["Crecer por etapas", "Una primera versión con el flujo principal. Las siguientes funciones se priorizan después de validar su uso.", "Explorar aplicaciones a medida", "#aplicaciones"],
            ] : [
              ["Present your offer and attract inquiries", "A website with services and contact. We start with the content and the visitor journey.", "Reference: Selekta Food", "/proyectos/selekta-food"],
              ["Connect business operations", "A website and system sharing bookings, statuses and reports. We define modules and team permissions.", "Reference: Apu Garden Lodge", "/proyectos/apu-garden-lodge"],
              ["Grow in stages", "A first version covering the main workflow. Further features are prioritized after validating usage.", "Explore custom applications", "#aplicaciones"],
            ]).map(([title, text, label, href]) => <article key={title}><h3>{title}</h3><p>{text}</p><Link href={href} className="text-link">{label}<ArrowUpRight size={14}/></Link></article>)}
          </div>
          <p className="planning-reference">{es ? "Apu y Selekta: aproximadamente 1 mes por proyecto, incluyendo revisiones y aprobaciones. Usamos estos casos como referencia; el calendario de cada solución se acuerda según su alcance." : "Apu and Selekta: approximately 1 month per project, including reviews and approvals. These cases are references; each solution's schedule is agreed according to its scope."}</p>
        </section>
        {services[language].map((item, i) => (
          <section key={item.id} id={item.id} className="service-detail">
            <div>
              <span className="eyebrow text-accent">0{i + 1} / DEVHORSES</span>
              <h2>{item.title}</h2>
              <p className="text-muted leading-relaxed">{item.audience}</p>
              <a
                className="inline-flex items-center gap-2 text-accent text-sm mt-6"
                href={whatsappUrl(
                  es
                    ? `Hola DevHorses, me interesa ${item.title.toLowerCase()} para mi negocio.`
                    : `Hi DevHorses, I'm interested in ${item.title.toLowerCase()} for my business.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                {es
                  ? "Hablemos de este servicio"
                  : "Let's discuss this service"}
                <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="service-detail-content">
              <h3>{es ? "Qué puede incluir" : "What it can include"}</h3>
              <ul>
                {item.includes.map((text) => (
                  <li key={text}>
                    <Check size={15} />
                    {text}
                  </li>
                ))}
              </ul>
              <dl>
                {[
                  [es ? "Qué recibes" : "What you receive", item.delivery],
                  [
                    es ? "Cómo definimos el plazo" : "How we define timing",
                    item.timing,
                  ],
                  [
                    es ? "Qué necesitamos de ti" : "What we need from you",
                    item.input,
                  ],
                ].map(([label, text]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{text}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}
        <div className="service-extras">
          <article>
            <Palette size={23} className="text-accent" />
            <h2>{es ? "Una identidad coherente" : "A consistent identity"}</h2>
            <p>
              {es
                ? "Branding y diseño de interfaces como complemento de tu proyecto: logo, paleta, tipografía y criterios visuales para tu web y materiales."
                : "Branding and interface design to complement your project: logo, palette, typography and visual guidelines for your website and materials."}
            </p>
          </article>
          <article>
            <LifeBuoy size={23} className="text-accent" />
            <h2>
              {es ? "Seguimos contigo. 24/7." : "We're here for you. 24/7."}
            </h2>
            <p>
              {es
                ? "Soporte después del lanzamiento, con mantenimiento, monitoreo y actualizaciones según el alcance contratado. Las condiciones quedan claras desde la propuesta."
                : "Post-launch support, with maintenance, monitoring and updates according to your agreed scope. Conditions are clear from the proposal."}
            </p>
          </article>
        </div>
        <section className="proposal-checklist">
          <h2>{es ? "Lo que debe quedar claro en tu propuesta." : "What your proposal should make clear."}</h2>
          <ul>{(es ? ["Funciones y entregables de cada etapa, con fechas de revisión y aprobación.", "Código, repositorios, accesos y condiciones de uso de componentes de terceros.", "Dominio, hosting y servicios externos, con sus responsables y costos recurrentes.", "Soporte 24/7: canales de atención y cobertura de incidencias en lo entregado.", "Mantenimiento y nuevas funciones: tareas incluidas y ampliaciones que se cotizan aparte."] : ["Features and deliverables for each stage, with review and approval dates.", "Code, repositories, access and third-party component usage terms.", "Domain, hosting and external services, including responsibilities and recurring costs.", "24/7 support: contact channels and incident coverage for delivered work.", "Maintenance and new features: included tasks and extensions quoted separately."]).map(item => <li key={item}><Check size={15}/>{item}</li>)}</ul>
        </section>
        <section className="faq-section">
          <span className="eyebrow">
            {es ? "Antes de empezar" : "Before we start"}
          </span>
          <h2>
            {es
              ? "Preguntas que vale la pena resolver."
              : "Questions worth answering."}
          </h2>
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </section>
        <div className="page-cta">
          <h2>
            {es
              ? "Tu siguiente paso empieza con una conversación."
              : "Your next step starts with a conversation."}
          </h2>
          <Link href="/#contact" className="btn-accent px-7 py-4">
            {es ? "Cuéntanos tu proyecto" : "Tell us about your project"}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
