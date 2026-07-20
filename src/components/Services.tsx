"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const Services = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState<number | null>(null);

  const services = [
    {
      number: "01",
      title: t("services_web_title"),
      desc: t("services_web_desc"),
      tags: ["Next.js", "React", "SEO"],
    },
    {
      number: "02",
      title: t("services_mobile_title"),
      desc: t("services_mobile_desc"),
      tags: ["iOS", "Android"],
    },
    {
      number: "03",
      title: t("services_ui_title"),
      desc: t("services_ui_desc"),
      tags: ["Logo", "Manual de marca", "UI/UX"],
    },
    {
      number: "04",
      title: t("services_eco_title"),
      desc: t("services_eco_desc"),
      tags: ["Pagos online", "Inventario", "Delivery"],
    },
  ];

  return (
    <section id="services" className="relative py-24 md:py-36 bg-bg overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24">

        {/* Encabezado editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="md:col-span-7"
          >
            <span className="eyebrow block mb-6">( 01 — {t("nav_services")} )</span>
            <h2 className="font-display text-ink text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              {t("services_title")}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-4 md:col-start-9 text-muted text-base md:text-lg leading-relaxed"
          >
            {t("services_subtitle")}
          </motion.p>
        </div>

        {/* Filas de servicios */}
        <div className="border-b border-line">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="service-row group cursor-default"
            >
              <div className="grid grid-cols-12 gap-4 items-baseline py-8 md:py-12 transition-all duration-500">
                {/* Número */}
                <span className="col-span-2 md:col-span-1 font-mono text-faint text-sm md:text-base transition-colors duration-500 group-hover:text-accent">
                  {service.number}
                </span>

                {/* Título */}
                <h3
                  className={`col-span-10 md:col-span-6 font-display text-2xl sm:text-3xl md:text-5xl leading-tight transition-all duration-500 ${
                    active === index ? "text-accent translate-x-3 md:translate-x-6 italic" : "text-ink"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Descripción + tags */}
                <div className="col-span-10 col-start-3 md:col-span-4 md:col-start-8 flex flex-col gap-4">
                  <p
                    className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                      active === index ? "text-ink" : "text-muted"
                    }`}
                  >
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.65rem] tracking-wider uppercase px-3 py-1 rounded-full border border-line text-muted transition-all duration-500 group-hover:border-accent/40 group-hover:text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Flecha */}
                <span className="hidden md:flex col-span-1 col-start-12 justify-end">
                  <ArrowUpRight
                    size={28}
                    className={`transition-all duration-500 ${
                      active === index
                        ? "text-accent rotate-45 scale-125"
                        : "text-faint"
                    }`}
                  />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
