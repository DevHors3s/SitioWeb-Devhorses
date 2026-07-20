"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import type { Translations } from "../context/LanguageContext";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface DemoData {
  id: number;
  nameKey: keyof Translations;
  categoryKey: keyof Translations;
  descriptionKey: keyof Translations;
  demoUrl: string;
  thumbnail?: string;
}

export default function DemoShowcase() {
  const { t } = useLanguage();

  const demosData: DemoData[] = [
    {
      id: 1,
      nameKey: "demo_1_name",
      categoryKey: "demo_1_category",
      descriptionKey: "demo_1_desc",
      demoUrl: "https://demo-gimnasio-eight.vercel.app/",
      thumbnail: "/gimnasio-mini.png",
    },
    {
      id: 2,
      nameKey: "demo_2_name",
      categoryKey: "demo_2_category",
      descriptionKey: "demo_2_desc",
      demoUrl: "https://demo-restaurante-pasteleria.vercel.app/",
      thumbnail: "/pasteleria-mini.png",
    },
    {
      id: 3,
      nameKey: "demo_3_name",
      categoryKey: "demo_3_category",
      descriptionKey: "demo_3_desc",
      demoUrl: "https://demo-restaurante-carnes.vercel.app/",
      thumbnail: "/restaurante-mini.png",
    },
    {
      id: 6,
      nameKey: "demo_6_name",
      categoryKey: "demo_6_category",
      descriptionKey: "demo_6_desc",
      demoUrl: "https://demo-retail.vercel.app/",
      thumbnail: "/retail-mini.png",
    },
    {
      id: 7,
      nameKey: "demo_7_name",
      categoryKey: "demo_7_category",
      descriptionKey: "demo_7_desc",
      demoUrl: "https://demo-tatto.vercel.app/",
      thumbnail: "/tatto-mini.png",
    },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-bg overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24">

        {/* Encabezado */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
          <div className="md:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="eyebrow block mb-6"
            >
              ( 04 — {t("demo_badge")} )
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-display text-ink text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight"
            >
              {t("demo_title")}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 md:col-start-9 text-muted text-base md:text-lg leading-relaxed"
          >
            {t("demo_subtitle")}
          </motion.p>
        </div>

        {/* Galería editorial asimétrica */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 md:gap-y-24">
          {demosData.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} />
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-24 md:mt-36 border-t border-line pt-16 md:pt-24 text-center"
        >
          <h3 className="font-display text-ink text-3xl sm:text-4xl md:text-6xl leading-[1.05] tracking-tight mb-10 max-w-3xl mx-auto">
            {t("demo_cta_title")}
          </h3>
          <a
            href={`https://wa.me/51981916198?text=${encodeURIComponent("Hola DevHorses, vi sus demos y me gustaría saber más sobre sus servicios 🚀")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-10 py-4 text-base"
          >
            <MessageCircle size={18} />
            {t("demo_cta_btn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function DemoCard({ demo, index }: { demo: DemoData; index: number }) {
  const { t } = useLanguage();

  const demoName = t(demo.nameKey);
  const whatsappUrl = `https://wa.me/51981916198?text=${encodeURIComponent(
    `Hola DevHorses, me interesa un sitio como "${demoName}" para mi negocio 🚀`
  )}`;

  // Layout asimétrico: alterna anchos y desplazamientos verticales
  const layouts = [
    "md:col-span-7",
    "md:col-span-5 md:mt-24",
    "md:col-span-5 md:mt-12",
    "md:col-span-7 md:-mt-12",
    "md:col-span-7 md:col-start-4",
  ];
  const layout = layouts[index % layouts.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: EASE }}
      className={`group ${layout}`}
    >
      {/* Imagen grande con zoom lento */}
      <a
        href={demo.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative overflow-hidden rounded-sm mb-6 aspect-[16/10]"
      >
        <img
          src={demo.thumbnail}
          alt={demoName}
          className="w-full h-full object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-bg/20 transition-opacity duration-700 group-hover:opacity-0" />

        {/* Flecha flotante */}
        <div className="absolute top-5 right-5 w-12 h-12 rounded-full bg-bg/60 backdrop-blur-md border border-line-strong flex items-center justify-center opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight size={20} className="text-ink" />
        </div>
      </a>

      {/* Meta */}
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4 mb-3">
        <h3 className="font-display text-ink text-2xl md:text-3xl transition-colors duration-300 group-hover:text-accent">
          {demoName}
        </h3>
        <span className="eyebrow shrink-0">{t(demo.categoryKey)}</span>
      </div>

      <p className="text-muted text-sm md:text-base leading-relaxed mb-5">
        {t(demo.descriptionKey)}
      </p>

      <div className="flex items-center gap-6">
        <a
          href={demo.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-[0.15em] uppercase text-ink hover:text-accent transition-colors flex items-center gap-1.5"
        >
          {t("demo_btn_view")} <ArrowUpRight size={13} />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-accent transition-colors flex items-center gap-1.5"
        >
          <MessageCircle size={13} />
          {t("demo_btn_want")}
        </a>
      </div>
    </motion.article>
  );
}
