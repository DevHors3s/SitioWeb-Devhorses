"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import GlowCard from "./GlowCard";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      quoteKey: "testimonial_1_quote" as const,
      authorKey: "testimonial_1_author" as const,
      roleKey: "testimonial_1_role" as const,
      stars: 5,
    },
    {
      quoteKey: "testimonial_2_quote" as const,
      authorKey: "testimonial_2_author" as const,
      roleKey: "testimonial_2_role" as const,
      stars: 5,
    },
  ];

  return (
    <section className="py-10 md:py-14 px-4 md:px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white"
          >
            {t("testimonials_title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <GlowCard>
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(item.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 grow">
                  &ldquo;{t(item.quoteKey)}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4 border-t border-slate-800 pt-6 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm">
                      {t(item.authorKey).charAt(0)}
                  </div>
                  <div>
                      <div className="font-bold text-white">{t(item.authorKey)}</div>
                      <div className="text-slate-500 text-sm">{t(item.roleKey)}</div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;