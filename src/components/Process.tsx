"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const Process = () => {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.6"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { number: "01", titleKey: "process_step1_title" as const, descKey: "process_step1_desc" as const },
    { number: "02", titleKey: "process_step2_title" as const, descKey: "process_step2_desc" as const },
    { number: "03", titleKey: "process_step3_title" as const, descKey: "process_step3_desc" as const },
    { number: "04", titleKey: "process_step4_title" as const, descKey: "process_step4_desc" as const },
  ];

  return (
    <section id="process" className="relative py-24 md:py-36 bg-surface overflow-hidden">
      {/* Halo ambiental */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vh] glow-accent pointer-events-none opacity-60" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Columna izquierda sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="eyebrow block mb-6"
              >
                ( 02 — {t("process_title")} )
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE }}
                className="font-display text-ink text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-8"
              >
                {t("process_title")}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-muted text-base md:text-lg leading-relaxed max-w-md"
              >
                {t("process_subtitle")}
              </motion.p>
            </div>
          </div>

          {/* Columna derecha: pasos con línea de progreso */}
          <div ref={trackRef} className="lg:col-span-6 lg:col-start-7 relative">
            {/* Línea de fondo */}
            <div className="absolute left-[1.35rem] md:left-[1.85rem] top-0 bottom-0 w-px bg-line" />
            {/* Línea de progreso dorada ligada al scroll */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-[1.35rem] md:left-[1.85rem] top-0 w-px bg-accent origin-top"
            />

            <div className="flex flex-col gap-16 md:gap-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: EASE, delay: index * 0.05 }}
                  className="relative pl-16 md:pl-24 group"
                >
                  {/* Nodo */}
                  <div className="absolute left-[0.85rem] md:left-[1.35rem] top-3 w-4 h-4 rounded-full border border-accent bg-surface transition-all duration-500 group-hover:bg-accent group-hover:scale-125" />

                  {/* Número gigante fantasma */}
                  <span className="absolute right-0 -top-8 md:-top-12 font-display italic text-[5rem] md:text-[7rem] leading-none text-ink/[0.04] pointer-events-none select-none">
                    {step.number}
                  </span>

                  <span className="font-mono text-accent text-xs tracking-[0.25em] block mb-3">
                    {step.number}
                  </span>
                  <h3 className="font-display text-ink text-2xl md:text-4xl mb-4 transition-all duration-500 group-hover:italic group-hover:text-accent">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-muted text-base leading-relaxed max-w-md">
                    {t(step.descKey)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
