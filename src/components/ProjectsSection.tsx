"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { t, language } = useLanguage();
  const es = language === "es";
  const projects = [
    {
      title: "Apu Garden Lodge",
      desc: t("project_2_desc"),
      category: es ? "Web + gestión hotelera" : "Website + hotel management",
      link: "https://apu-garden-lodge.com/",
      image: "/apu web mini.png",
      slug: "apu-garden-lodge",
    },
    {
      title: "Selekta Food",
      desc: t("project_8_desc"),
      category: es
        ? "Web corporativa / Agroexportación"
        : "Corporate website / Agro-export",
      link: "https://www.selektafood.com/",
      image: "/selekta-mini.png",
      slug: "selekta-food",
    },
    {
      title: "Dental Tello",
      desc: t("project_dentaltello_desc"),
      category: es ? "Salud / Odontología" : "Health / Dentistry",
      link: "https://www.dentaltello.com/es",
      image: "/dental tello pagina.png",
    },
    {
      title: "Business Beans",
      desc: t("project_businessbeans_desc"),
      category: es
        ? "Web corporativa / Agroexportación"
        : "Corporate website / Agro-export",
      link: "https://www.businessbeans.com.pe/",
      image: "/business beans web.png",
    },
    {
      title: "MV Abogados",
      desc: t("project_1_desc"),
      category: es ? "Servicios legales" : "Legal services",
      link: "https://mv-abogados.vercel.app/",
      image: "/abogados-mini.png",
    },
  ];
  const visible = compact ? projects.slice(1) : projects;
  return (
    <section id="projects" className={`projects-section section-spacing${compact ? " projects-section--home" : ""}`}>
      <div className="site-container">
        <div className="section-heading projects-heading">
          <div>
            <span className="eyebrow text-accent">
              {es
                ? "Trabajo real, en producción"
                : "Real work, live in production"}
            </span>
            <h2 className="chapter-title projects-title mt-5">
              <span className="chapter-lead">{es ? "Ideas que ya" : "Ideas already"}{" "}</span>
              <span>{es ? "están funcionando." : "out in the world."}</span>
            </h2>
          </div>
          <div>
            <p>
              {es
                ? "Conoce los negocios con los que trabajamos, explora sus sitios y descubre cómo construimos cada solución."
                : "Meet the businesses we work with, explore their websites and discover how we build each solution."}
            </p>
            {compact && (
              <Link href="/proyectos" className="text-link mt-6">
                {es ? "Todos los proyectos y demos" : "All projects and demos"}
                <ArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <article key={project.title} className="project-card">
              <Link
                href={
                  project.slug ? `/proyectos/${project.slug}` : project.link
                }
                target={project.slug ? undefined : "_blank"}
                rel={project.slug ? undefined : "noopener noreferrer"}
                className="project-image-link"
                aria-label={`${project.title}: ${project.slug ? (es ? "ver caso de estudio" : "view case study") : es ? "visitar sitio" : "visit website"}`}
              >
                <Image
                  src={project.image}
                  alt={
                    es
                      ? `Vista del sitio de ${project.title}`
                      : `${project.title} website preview`
                  }
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <span className="project-image-action">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
              <div className="project-info">
                <span className="eyebrow">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-links">
                  {project.slug && (
                    <Link
                      className="text-link"
                      href={`/proyectos/${project.slug}`}
                    >
                      {es ? "Ver caso de estudio" : "View case study"}
                      <ArrowUpRight size={15} />
                    </Link>
                  )}
                  <a
                    className={`text-link ${project.slug ? "text-muted" : ""}`}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {es ? "Visitar sitio" : "Visit website"}
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
