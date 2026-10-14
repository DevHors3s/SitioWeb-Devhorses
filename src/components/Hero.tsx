"use client";

import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow flex items-center gap-3 mb-7">
            <span className="status-dot" />
            {es
              ? "Tu próximo paso, con DevHorses"
              : "Your next step, with DevHorses"}
          </p>
          <h1 className="headline-hero hero-title">
            {es ? "Webs y sistemas" : "Websites & systems"}
            <br />
            {es ? "que hacen avanzar" : "that move"}
            <br />
            <span className="text-gradient-accent">
              {es ? "tu negocio." : "your business forward."}
            </span>
          </h1>
          <p className="hero-description">
            {es
              ? "Creamos webs, sistemas de gestión y automatizaciones para negocios que atienden clientes, gestionan reservas o reciben pedidos. Conectamos tu presencia digital con el trabajo de tu equipo."
              : "We build websites, management systems and automations for businesses serving customers, managing bookings or taking orders. We connect your digital presence with your team's work."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href="#contact" className="btn-accent px-7 py-4 text-sm">
              {es ? "Cuéntanos tu proyecto" : "Tell us about your project"}
              <ArrowUpRight size={18} />
            </a>
            <Link href="/proyectos" className="btn-ghost px-7 py-4 text-sm">
              {es ? "Explora nuestros proyectos" : "Explore our projects"}
            </Link>
          </div>
          <div className="hero-trust">
            {(es
              ? ["Respuesta inmediata", "Soporte 24/7", "Trato directo"]
              : ["Immediate response", "24/7 support", "Direct collaboration"]
            ).map((label) => (
              <span key={label}>
                <Check size={14} />
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-character">
          <div className="horse-orbit horse-orbit--outer" aria-hidden="true" />
          <div className="horse-orbit horse-orbit--inner" aria-hidden="true" />
          <div className="horse-stage-glow" aria-hidden="true" />
          <div
            id="horse-home-anchor"
            className="horse-home-anchor"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="site-container hero-bottom">
        <span>
          EST. LIMA, PERÚ <span className="text-faint">/</span>{" "}
          {es ? "CONSTRUIMOS SIN FRONTERAS" : "BUILDING WITHOUT BORDERS"}
        </span>
        <a
          href="#services"
          aria-label={es ? "Explorar los servicios" : "Explore our services"}
        >
          <span>
            {es ? "Descubre lo que hacemos" : "Discover what we build"}
          </span>
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
