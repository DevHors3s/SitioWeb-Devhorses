"use client";

import { Check, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
export default function Process() {
  const { t, language } = useLanguage();
  const es = language === "es";
  const steps = [
    { title: t("process_step1_title"), desc: t("process_step1_desc") },
    { title: t("process_step2_title"), desc: t("process_step2_desc") },
    { title: t("process_step3_title"), desc: t("process_step3_desc") },
    { title: t("process_step4_title"), desc: t("process_step4_desc") },
  ];
  return (
    <section id="process" className="section-spacing process-section">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow text-accent">
              {es ? "Cómo trabajamos" : "How we work"}
            </span>
            <h2 className="chapter-title process-title mt-5">
              <span className="process-title-intro">{es ? "Contigo," : "With you,"}{" "}</span>
              <span>{es ? "en cada paso." : "at every step."}</span>
            </h2>
          </div>
          <p>
            {es
              ? "Alcance claro, avances que puedes revisar y comunicación con quienes construyen tu proyecto."
              : "Clear scope, progress you can review and direct communication with the people building your project."}
          </p>
        </div>
        <ol className="process-steps">
          {steps.map((step, i) => (
            <li key={step.title} data-motion-card>
              <span>0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="support-banner">
          <Headphones size={27} className="text-accent shrink-0" />
          <div>
            <h3>
              {es
                ? "Lanzar es solo el comienzo."
                : "Launch is just the beginning."}
            </h3>
            <p>
              {es
                ? "Soporte 24/7 para acompañarte después del lanzamiento. Definimos contigo la cobertura y el mantenimiento de tu solución."
                : "24/7 support to help you after launch. We agree your solution's coverage and maintenance with you."}
            </p>
          </div>
          <span className="support-badge">
            <Check size={14} />
            24/7
          </span>
        </div>
      </div>
    </section>
  );
}
