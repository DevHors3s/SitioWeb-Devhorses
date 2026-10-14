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
          "Depende del alcance, las integraciones y la disponibilidad del contenido. Antes de comenzar acordamos etapas, entregables y fechas; durante el desarrollo revisamos el avance contigo.",
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
      ]
    : [
        [
          "How long does a project take?",
          "It depends on scope, integrations and content availability. We agree stages, deliverables and dates before starting and review progress with you during development.",
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
