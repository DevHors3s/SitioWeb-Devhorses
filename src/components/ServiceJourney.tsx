"use client";

import { useEffect, useRef } from "react";
import { AppWindow, ArrowRight, Check, Database, Globe, Layers, Lightbulb, Link2, Palette, Rocket, Users, Workflow } from "lucide-react";

const journeys = {
  webs: [
    { icon: Palette, es: "Tu marca", en: "Your brand" },
    { icon: Globe, es: "Tu web", en: "Your website" },
    { icon: Rocket, es: "Publicada", en: "Live online" },
  ],
  sistemas: [
    { icon: Layers, es: "Tu operación", en: "Your operation" },
    { icon: Database, es: "Un solo sistema", en: "One system" },
    { icon: Users, es: "Equipo conectado", en: "Connected team" },
  ],
  automatizaciones: [
    { icon: Link2, es: "Tus herramientas", en: "Your tools" },
    { icon: Workflow, es: "Flujo automático", en: "Automated flow" },
    { icon: Check, es: "Menos tareas", en: "Fewer tasks" },
  ],
  aplicaciones: [
    { icon: Lightbulb, es: "Tu idea", en: "Your idea" },
    { icon: AppWindow, es: "Tu producto", en: "Your product" },
    { icon: Rocket, es: "A evolucionar", en: "Keep evolving" },
  ],
};

export default function ServiceJourney({ kind, es }: { kind: string; es: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const steps = journeys[kind as keyof typeof journeys] ?? journeys.webs;
  useEffect(() => {
    const element = root.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      element.dataset.playing = String(entry.isIntersecting);
    }, { threshold: .2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={root} className="service-journey" data-motion-card data-playing="false">
      <span className="service-journey-caption">{es ? "Del objetivo a la entrega" : "From goal to delivery"}</span>
      <ol>
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={index}>
              <span className="service-journey-node"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /></span>
              <span className="service-journey-label">{es ? step.es : step.en}</span>
              {index < steps.length - 1 && <span className="service-journey-connector" aria-hidden="true"><ArrowRight size={16} /></span>}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
