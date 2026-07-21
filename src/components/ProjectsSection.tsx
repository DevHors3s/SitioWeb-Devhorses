"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  thumbnail: string;
}

export default function ProjectsSection() {
  const { t } = useLanguage();

  const projectsData: Project[] = [
    {
      id: 1,
      title: "MV Abogados",
      description: t("project_1_desc"),
      tags: ["Servicios legales", "Lima"],
      link: "https://mv-abogados.vercel.app/",
      thumbnail: "/abogados-mini.png",
    },
    {
      id: 2,
      title: "Apu Garden Lodge",
      description: t("project_2_desc"),
      tags: ["Hospedaje", "SaaS de Gestión"],
      link: "https://apu-garden-lodge.com/",
      thumbnail: "/apu web mini.png",
    },
    {
      id: 3,
      title: "Selekta Food",
      description: t("project_8_desc"),
      tags: ["Agroexportación", "IA"],
      link: "https://www.selektafood.com/",
      thumbnail: "/selekta-mini.png",
    },
  ];

  return (
    <section className="relative bg-bg">
      {/* Encabezado */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24 pt-24 md:pt-36 pb-12 md:pb-20">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow block mb-6"
        >
          ( 03 — {t("projects_badge")} )
        </motion.span>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="md:col-span-7 font-display text-ink text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
          >
            {t("projects_title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 md:col-start-9 text-muted text-base md:text-lg leading-relaxed"
          >
            {t("projects_subtitle")}
          </motion.p>
        </div>
      </div>

      {/* Paneles apilados inmersivos */}
      <div className="relative">
        {projectsData.map((project, index) => (
          <ProjectPanel
            key={project.id}
            project={project}
            index={index}
            total={projectsData.length}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectPanel({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const { t } = useLanguage();
  const panelRef = useRef<HTMLDivElement>(null);

  // Progreso mientras el siguiente panel cubre a este
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const brightness = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  // Parallax interno de la imagen
  const { scrollYProgress: entryProgress } = useScroll({
    target: panelRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(entryProgress, [0, 1], ["-8%", "8%"]);

  const isLast = index === total - 1;

  return (
    <div
      ref={panelRef}
      className="sticky top-0 h-screen overflow-hidden"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, filter }}
        className="relative h-full w-full bg-surface origin-top"
      >
        {/* Imagen de fondo a pantalla completa con parallax */}
        <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </motion.div>

        {/* Veladura cinematográfica — oscurece de forma pareja para que el
            contenido propio de cada captura (badges, texto de la demo) no
            compita con el título y la descripción que superponemos */}
        <div className="absolute inset-0 bg-bg/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/65 to-bg/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/20 to-transparent" />

        {/* Contenido */}
        <div className="relative z-10 h-full max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24 flex flex-col justify-end pb-16 md:pb-24">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-3xl">
              {/* Índice */}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.7, ease: EASE }}
                className="font-mono text-accent text-sm tracking-[0.3em] block mb-4"
              >
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </motion.span>

              {/* Título gigante */}
              <div className="mask-line mb-6">
                <motion.h3
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1, ease: EASE }}
                  className="font-display text-ink text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight"
                >
                  {project.title}
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                className="text-muted text-base md:text-xl leading-relaxed max-w-xl mb-8"
              >
                {project.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="flex flex-wrap items-center gap-3"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.65rem] tracking-wider uppercase px-4 py-1.5 rounded-full border border-line-strong text-ink/80 backdrop-blur-sm bg-bg/30"
                  >
                    {tag}
                  </span>
                ))}
                <span className="flex items-center gap-1.5 font-mono text-[0.65rem] tracking-wider uppercase text-accent ml-2">
                  <CheckCircle2 size={13} />
                  {t("projects_live_label")}
                </span>
              </motion.div>
            </div>

            {/* CTA circular */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              className="hidden md:block shrink-0"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-line-strong backdrop-blur-md bg-bg/60 transition-all duration-500 hover:bg-accent hover:border-accent"
              >
                <ArrowUpRight
                  size={32}
                  className="text-ink transition-all duration-500 group-hover:text-bg group-hover:rotate-45"
                />
                <span className="mt-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-muted transition-colors duration-500 group-hover:text-bg">
                  {t("projects_btn_demo")}
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Link móvil */}
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden mt-8 btn-ghost px-8 py-3.5 text-sm self-start"
          >
            {t("projects_btn_demo")}
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Borde inferior si no es el último */}
        {!isLast && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-line-strong" />
        )}
      </motion.div>
    </div>
  );
}
