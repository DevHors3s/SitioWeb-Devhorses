"use client";

import Link from "next/link";
import { ArrowUpRight, Globe, Layers, Workflow, AppWindow } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { services } from "@/lib/services";

const icons = [Globe, Layers, Workflow, AppWindow];
export default function Services() {
  const { language } = useLanguage();
  const es = language === "es";
  return (
    <section id="services" className="services-section section-spacing border-t border-line">
      <div className="site-container">
        <div className="section-heading services-heading">
          <div>
            <span className="eyebrow text-accent">
              {es ? "Lo que construimos" : "What we build"}
            </span>
            <h2 className="chapter-title services-title mt-5">
              <span className="chapter-lead">{es ? "De tu idea" : "From your idea"}{" "}</span>
              <span className="text-gradient-accent">{es ? "a lo que necesitas." : "to what you need."}</span>
            </h2>
          </div>
          <div>
            <p>
              {es
                ? "Una web para llegar a tus clientes. Un sistema para trabajar mejor. Conectamos ambas partes de tu negocio."
                : "A website to reach your customers. A system to work better. We connect both sides of your business."}
            </p>
            <Link href="/servicios" className="text-link mt-6">
              {es
                ? "Conoce los alcances y entregables"
                : "Explore scope and deliverables"}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="service-cards">
          {services[language].map((service, i) => {
            const Icon = icons[i];
            return (
              <Link
                key={service.id}
                href={`/servicios#${service.id}`}
                className="service-editorial group"
              >
                <span className="service-index" aria-hidden="true">0{i + 1}</span>
                <div className="service-editorial-title">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <h3>{service.title}</h3>
                </div>
                <div className="service-editorial-body">
                  <p>{service.short}</p>
                  <div className="service-editorial-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight
                  size={21}
                  className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            );
          })}
        </div>
        <p className="service-note">
          {es
            ? "También damos forma a tu identidad visual y te acompañamos con soporte 24/7."
            : "We also shape your visual identity and support you 24/7."}
        </p>
      </div>
    </section>
  );
}
