"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const EASE = [0.22, 1, 0.36, 1] as const;

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: "testimonial_1_quote" as const,
      authorKey: "testimonial_1_author" as const,
      roleKey: "testimonial_1_role" as const,
    },
    {
      quoteKey: "testimonial_2_quote" as const,
      authorKey: "testimonial_2_author" as const,
      roleKey: "testimonial_2_role" as const,
    },
    {
      quoteKey: "testimonial_3_quote" as const,
      authorKey: "testimonial_3_author" as const,
      roleKey: "testimonial_3_role" as const,
    },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-surface overflow-hidden">
      {/* Comilla decorativa gigante */}
      <span
        aria-hidden
        className="absolute -top-10 left-4 md:left-16 font-display italic text-[16rem] md:text-[24rem] leading-none text-ink/[0.03] pointer-events-none select-none"
      >
        &ldquo;
      </span>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24 relative">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="eyebrow block mb-16 md:mb-24"
        >
          ( 05 — {t("testimonials_title")} )
        </motion.span>

        <div className="flex flex-col">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: EASE }}
              className={`group border-t border-line py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 ${
                index === testimonials.length - 1 ? "border-b" : ""
              }`}
            >
              {/* Estrellas en mono */}
              <span className="md:col-span-2 font-mono text-accent text-sm tracking-[0.35em]">
                ★★★★★
              </span>

              {/* Cita en serif grande */}
              <p className="md:col-span-7 font-display text-ink text-xl sm:text-2xl md:text-3xl leading-snug transition-colors duration-500 group-hover:text-accent-bright">
                &ldquo;{t(item.quoteKey)}&rdquo;
              </p>

              {/* Autor */}
              <footer className="md:col-span-3 md:text-right self-end">
                <div className="font-medium text-ink">{t(item.authorKey)}</div>
                <div className="text-faint text-sm mt-1">{t(item.roleKey)}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
