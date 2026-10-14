"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
              ? "Explora cómo una reserva se conecta con la gestión de un hotel y cómo presentamos la tecnología de una empresa. Encuéntranos también en Instagram para seguir de cerca a DevHorses."
              : "Explore how a booking connects to hotel management and how we present a company's technology. Find us on Instagram to keep up with DevHorses, too."}
          </p>
        </div>
        <div className="instagram-card">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="instagram-profile" aria-label={es ? "DevHorses en Instagram (abre una nueva pestaña)" : "DevHorses on Instagram (opens a new tab)"}>
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
          </a>
          <div className="instagram-work-grid">
            <Link href="/proyectos/apu-garden-lodge">
              <Image src="/saas apu gestion/ApuGestion1.png" alt={es ? "Mapa de habitaciones de Apu Gestión" : "Apu Management room map"} width={1365} height={632} sizes="(max-width: 767px) 45vw, 240px" />
              <span>Apu Garden Lodge</span>
              <small>{es ? "Web + gestión hotelera" : "Website + hotel operations"}</small>
            </Link>
            <Link href="/proyectos/selekta-food">
              <Image src="/selekta-mini.png" alt={es ? "Web corporativa de Selekta Food" : "Selekta Food corporate website"} width={1347} height={627} sizes="(max-width: 767px) 45vw, 240px" />
              <span>Selekta Food</span>
              <small>{es ? "Presencia corporativa" : "Corporate presence"}</small>
            </Link>
          </div>
          <div className="instagram-card-bottom">
            <span>{es ? "Trabajo real del equipo" : "Real work from our team"}</span>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="instagram-follow" aria-label={es ? "Seguir a @devhorses en Instagram (abre una nueva pestaña)" : "Follow @devhorses on Instagram (opens a new tab)"}>
              {es ? "Seguir en Instagram" : "Follow on Instagram"}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
