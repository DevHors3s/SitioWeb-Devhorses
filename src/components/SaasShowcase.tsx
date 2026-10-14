"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { caseImageDimensions } from "@/lib/cases";
import ImageLightbox from "./ImageLightbox";

const tabs = [
  { img: "/saas apu gestion/ApuGestion1.png", key: "saas_tab_1" as const },
  { img: "/saas apu gestion/ApuGestion2.png", key: "saas_tab_2" as const },
  { img: "/saas apu gestion/ApuGestion3.png", key: "saas_tab_3" as const },
];
export default function SaasShowcase() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const es = language === "es";
  return (
    <section id="apu-case" className="featured-case section-spacing">
      <div className="site-container featured-layout">
        <div>
          <span className="eyebrow featured-eyebrow">
            {es
              ? "Caso destacado / Apu Garden Lodge"
              : "Featured case / Apu Garden Lodge"}
          </span>
          <h2 className="section-title mt-6">
            {es ? "De la reserva" : "From the booking"}
            <br />
            <span className="featured-gradient">
              {es ? "a la operación." : "to the operation."}
            </span>
          </h2>
          <p className="featured-desc">
            {es
              ? "Conectamos la web del hotel con un sistema de gestión a medida. Huéspedes, recepción y administración, trabajando con la misma información."
              : "We connected the hotel's website with a custom management system. Guests, front desk and administration, working with the same information."}
          </p>
          <ul className="featured-features">
            {(es
              ? [
                  "Disponibilidad y reservas conectadas",
                  "Habitaciones, cargos y reportes",
                  "Vistas y permisos para cada rol",
                ]
              : [
                  "Connected availability and bookings",
                  "Rooms, charges and reports",
                  "Views and permissions for each role",
                ]
            ).map((text) => (
              <li key={text}>
                <Check size={16} />
                {text}
              </li>
            ))}
          </ul>
          <Link
            href="/proyectos/apu-garden-lodge"
            className="btn-accent px-7 py-4 text-sm mt-8"
          >
            {es ? "Ver caso completo" : "Read the case study"}
            <ArrowUpRight size={17} />
          </Link>
          <p className="featured-location">
            URUBAMBA, VALLE SAGRADO ·{" "}
            {es ? "EN PRODUCCIÓN" : "LIVE IN PRODUCTION"}
          </p>
        </div>
        <div className="featured-preview">
          <div
            className="featured-tabs"
            role="tablist"
            aria-label={
              es ? "Vistas del sistema de gestión" : "Management system views"
            }
          >
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                id={`apu-tab-${i}`}
                role="tab"
                aria-selected={active === i}
                aria-controls="apu-preview"
                tabIndex={active === i ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => {
                  if (
                    ["ArrowRight", "ArrowLeft", "Home", "End"].includes(
                      event.key,
                    )
                  ) {
                    event.preventDefault();
                    const next =
                      event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? 2
                          : (i + (event.key === "ArrowRight" ? 1 : 2)) % 3;
                    setActive(next);
                    document.getElementById(`apu-tab-${next}`)?.focus();
                  }
                }}
              >
                {t(tab.key)}
              </button>
            ))}
          </div>
          <div className="featured-browser">
            <span />
            <span />
            <span />
            <span className="ml-2">Apu Gestión</span>
          </div>
          <div
            id="apu-preview"
            role="tabpanel"
            aria-labelledby={`apu-tab-${active}`}
            className="featured-screen"
            tabIndex={0}
          >
            <ImageLightbox images={tabs.map(tab => ({ src: tab.img, caption: t(tab.key), ...caseImageDimensions[tab.img] }))} initialIndex={active}>
            <Image
              src={tabs[active].img}
              alt={t(tabs[active].key)}
              {...caseImageDimensions[tabs[active].img]}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            </ImageLightbox>
          </div>
          <div className="featured-caption">
            <span className="status-dot" />
            {es
              ? "Una solución construida para el día a día del hotel."
              : "A solution built for the hotel's everyday work."}
          </div>
        </div>
      </div>
    </section>
  );
}
