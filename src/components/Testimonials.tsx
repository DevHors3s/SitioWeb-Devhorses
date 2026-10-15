"use client";

import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
export default function Testimonials() {
  const { t, language } = useLanguage();
  const es = language === "es";
  const entries = [
    {
      quote: "testimonial_1_quote",
      author: "testimonial_1_author",
      role: "testimonial_1_role",
    },
    {
      quote: "testimonial_2_quote",
      author: "testimonial_2_author",
      role: "testimonial_2_role",
    },
    {
      quote: "testimonial_3_quote",
      author: "testimonial_3_author",
      role: "testimonial_3_role",
    },
  ] as const;
  return (
    <section id="testimonials" className="testimonials-section section-spacing">
      <div className="site-container">
        <span className="eyebrow text-accent">{t("testimonials_title")}</span>
        <h2 className="chapter-title testimonials-title mt-5">
          <span className="chapter-lead">{es ? "La confianza" : "Trust"}{" "}</span>
          <span>{es ? "se construye." : "is built together."}</span>
        </h2>
        <div className="testimonial-grid">
          {entries.map((item) => (
            <blockquote key={item.author} data-motion-card>
              <Quote size={24} className="text-accent" />
              <p>“{t(item.quote)}”</p>
              <footer>
                <strong>{t(item.author)}</strong>
                <span>{t(item.role)}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
