"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

export default function InstagramSection() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <section id="instagram" className="instagram-section section-spacing">
      <div className="site-container instagram-layout">
        <div>
          <span className="eyebrow text-accent">
            {es ? "Dentro de DevHorses" : "Inside DevHorses"}
          </span>
          <h2 className="section-title mt-5">
            {es ? "Así construimos" : "This is how we build"}
            <br />
            <span className="text-gradient-accent">
              {es ? "en DevHorses." : "at DevHorses."}
            </span>
          </h2>
          <p className="text-muted leading-relaxed mt-6 max-w-md">
            {es
              ? "Proyectos, avances y el equipo detrás de cada lanzamiento. Sigue el camino de nuestras ideas a productos reales."
              : "Projects, progress and the team behind each launch. Follow our journey from ideas to real products."}
          </p>
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-card group"
          aria-label={
            es
              ? "Seguir a @devhorses en Instagram (abre una nueva pestaña)"
              : "Follow @devhorses on Instagram (opens a new tab)"
          }
        >
          <div className="instagram-profile">
            <span className="instagram-avatar">
              <Image src="/logo-icon.png" alt="" width={48} height={48} />
            </span>
            <div>
              <strong>DevHorses</strong>
              <span>{site.instagramHandle}</span>
            </div>
            <ArrowUpRight
              size={22}
              className="ml-auto text-muted group-hover:text-accent transition-colors"
            />
          </div>
          <div className="instagram-art" aria-hidden="true">
            <span className="instagram-art-orbit" />
            <Instagram size={98} strokeWidth={1.2} />
            <span className="instagram-spark instagram-spark--one">
              <Sparkles size={22} />
            </span>
            <span className="instagram-spark instagram-spark--two">
              &lt;/&gt;
            </span>
          </div>
          <div className="instagram-card-bottom">
            <span>{es ? "Ideas. Código. Equipo." : "Ideas. Code. Team."}</span>
            <span className="instagram-follow">
              {es ? "Seguir en Instagram" : "Follow on Instagram"}
              <ArrowUpRight size={16} />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
