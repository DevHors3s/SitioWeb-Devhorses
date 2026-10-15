"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Clock, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { caseStudies, caseImageDimensions, type CaseSlug } from "@/lib/cases";
import { whatsappUrl } from "@/lib/site";
import ImageLightbox from "./ImageLightbox";

export default function CaseStudy({ slug }: { slug: CaseSlug }) {
  const { language, t } = useLanguage();
  const es = language === "es";
  const project = caseStudies[slug];
  const copy = project[language];
  const apu = slug === "apu-garden-lodge";
  const gallery = project.screenshots.map((src, i) => ({ src, caption: copy.captions[i], ...caseImageDimensions[src] }));
  const decisions = apu
    ? (es ? [["Conectar la reserva y la gestión", "La disponibilidad real alimenta la web y la reserva llega al sistema que utiliza el equipo."], ["Separar las vistas por rol", "Recepción, limpieza y administración acceden a la información necesaria para su trabajo."]]
      : [["Connect bookings and operations", "Real availability feeds the website and bookings reach the system used by the hotel team."], ["Separate role-based views", "Front desk, housekeeping and administration access the information needed for their work."]])
    : (es ? [["Ordenar una oferta especializada", "Empresa, tecnología y contacto forman un recorrido para entender la propuesta antes de consultar."], ["Distinguir web y tecnología del cliente", "DevHorses desarrolla la presencia digital. La tecnología de clasificación pertenece a Selekta."]]
      : [["Structure a specialized offer", "Company, technology and contact form a journey to understand the offer before making an inquiry."], ["Distinguish the website from client technology", "DevHorses builds the digital presence. Selekta owns its classification technology."]]);
  return (
    <main className="page-main case-page">
      <header className="site-container page-intro">
        <Link href="/proyectos" className="text-link mb-10">
          <ArrowLeft size={15} />
          {es ? "Todos los proyectos" : "All projects"}
        </Link>
        <span className="eyebrow text-accent block">
          {project.name} / {copy.industry}
        </span>
        <h1>{copy.title}</h1>
        <p>{copy.intro}</p>
        <div className="flex gap-3 flex-wrap mt-8">
          <a
            className="btn-accent px-6 py-3 text-sm"
            href={project.site}
            target="_blank"
            rel="noopener noreferrer"
          >
            {es ? "Explorar sitio del cliente" : "Explore the client's website"}
            <ArrowUpRight size={17} />
          </a>
          <span className="case-live">
            <span className="status-dot" />
            {es ? "En producción" : "Live in production"}
          </span>
        </div>
      </header>
      <div className="site-container">
        <div className="case-facts">
          <article><Clock size={18}/><h2>{es ? "Tiempo del proyecto" : "Project timeline"}</h2><strong>{es ? "Aproximadamente 1 mes" : "Approximately 1 month"}</strong><p>{es ? "Incluye desarrollo, revisiones, respuestas y aprobaciones del cliente." : "Includes development, reviews, client responses and approvals."}</p></article>
          <article><Layers size={18}/><h2>{es ? "Alcance de DevHorses" : "DevHorses scope"}</h2><strong>{apu ? (es ? "Web + sistema de gestión" : "Website + management system") : (es ? "Diseño y desarrollo web" : "Website design and development")}</strong><p>{apu ? (es ? "Recorridos para huéspedes, recepción, limpieza y administración." : "Journeys for guests, front desk, housekeeping and administration.") : (es ? "Presentación de la empresa, su tecnología y canales comerciales." : "Presentation of the company, its technology and commercial channels.")}</p></article>
        </div>
        <div className="case-cover">
          <Image
            src={project.image}
            alt={project.name}
            {...caseImageDimensions[project.image]}
            preload
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
        <div className="case-story">
          <section>
            <span className="eyebrow">
              01 / {es ? "El reto" : "The challenge"}
            </span>
            <h2>
              {es ? "Lo que debía resolver." : "What it needed to solve."}
            </h2>
            <p>{copy.challenge}</p>
          </section>
          <section>
            <span className="eyebrow">
              02 / {es ? "La solución" : "The solution"}
            </span>
            <h2>{es ? "Lo que construimos." : "What we built."}</h2>
            <p>{copy.solution}</p>
          </section>
        </div>
        <section className="case-decisions">
          <h2 className="section-title">{es ? "Decisiones que dan forma a la solución." : "Decisions that shape the solution."}</h2>
          <div>{decisions.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </section>
        <section className="case-features">
          <h2 className="section-title">
            {es ? "Por dentro del proyecto." : "Inside the project."}
          </h2>
          <div>
            {copy.features.map(([title, desc]) => (
              <article key={title}>
                <Check size={19} className="text-accent" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="case-flow">
          <span className="eyebrow text-accent">
            03 / {es ? "Ejemplo de uso" : "Example journey"}
          </span>
          <h2>{es ? "Así se utiliza." : "How it works."}</h2>
          <ol>
            {copy.flow.map(([title, desc], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </li>
            ))}
          </ol>
        </section>
        <div className="case-gallery">
          {project.screenshots.map((image, i) => (
            <figure key={image}>
              <div>
                <ImageLightbox images={gallery} initialIndex={i}>
                <Image
                  src={image}
                  alt={copy.captions[i]}
                  {...caseImageDimensions[image]}
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                </ImageLightbox>
              </div>
              <figcaption>{copy.captions[i]}</figcaption>
            </figure>
          ))}
        </div>
        <section className="case-outcome">
          <span className="eyebrow text-accent">
            04 / {es ? "El resultado" : "The result"}
          </span>
          <h2>
            {es
              ? "Una solución que puedes explorar."
              : "A solution you can explore."}
          </h2>
          <p>{copy.outcome}</p>
          <div>
            {copy.deliverables.map((item) => (
              <span key={item}>
                <Check size={14} />
                {item}
              </span>
            ))}
          </div>
        </section>
        <section className="case-reported-results">
          <span className="eyebrow text-accent">{es ? "Indicadores reportados" : "Reported indicators"}</span>
          <h2 className="section-title">{es ? "De las visitas al negocio." : "From visits to business."}</h2>
          <p>{es ? `Resultados facilitados por DevHorses para la web de ${project.name}.` : `Results provided by DevHorses for ${project.name}'s website.`}</p>
          <div className="reported-results-grid">
            <article><strong>&gt;50%</strong><h3>{es ? "Visitantes que realizaron una consulta" : "Visitors who made an inquiry"}</h3></article>
            <article><strong>30%</strong><h3>{es ? "Visitantes que contrataron servicios del cliente" : "Visitors who purchased the client's services"}</h3></article>
          </div>
          <p className="reported-results-note">{es ? "Cifras reportadas por el equipo de DevHorses para este proyecto. El periodo de medición no se ha especificado." : "Figures reported by the DevHorses team for this project. The measurement period has not been specified."}</p>
        </section>
        <blockquote className="case-client-quote">
          <span className="eyebrow text-accent">{es ? "En palabras del cliente" : "In the client's words"}</span>
          <p>“{apu ? t("testimonial_2_quote") : (es ? "Necesitábamos una web que transmitiera la seriedad y la tecnología que hay detrás de Selekta. DevHorses entendió nuestro negocio desde el primer día y entregó una plataforma que abre puertas en el sector agroexportador." : "We needed a website that conveyed the seriousness and technology behind Selekta. DevHorses understood our business from day one and delivered a platform that opens doors in the agro-export sector.")}”</p>
          <footer>{apu ? t("testimonial_2_author") : (es ? "Equipo Selekta" : "Selekta Team")}<span>{apu ? t("testimonial_2_role") : "Selekta Food"}</span></footer>
        </blockquote>
        <div className="page-cta">
          <h2>
            {es
              ? "¿Tu negocio necesita algo parecido?"
              : "Does your business need something similar?"}
          </h2>
          <a
            href={whatsappUrl(
              es
                ? `Hola DevHorses, vi el caso de ${project.name} y me gustaría conversar sobre mi proyecto.`
                : `Hi DevHorses, I saw the ${project.name} case study and would like to discuss my project.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-7 py-4"
          >
            {es ? "Hablemos de tu proyecto" : "Let's talk about your project"}
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </main>
  );
}
