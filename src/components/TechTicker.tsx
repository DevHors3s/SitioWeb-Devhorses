"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const technologies = [
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/nextdotjs.svg" },
  { name: "Tailwind CSS", src: "/logos/tailwindcss.svg" },
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Node.js", src: "/logos/nodedotjs.svg" },
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Python", src: "/logos/python.svg" },
];

const TechTicker = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-14 bg-bg border-y border-line overflow-hidden marquee-paused">
      <p className="eyebrow text-center mb-10">{t("tech_ticker_title")}</p>

      <div className="flex overflow-hidden">
        <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center animate-marquee shrink-0">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="group relative flex items-center gap-4 shrink-0"
              title={tech.name}
            >
              <div className="relative h-9 w-9 md:h-11 md:w-11 transition-all duration-500 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                <Image
                  src={tech.src}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-muted text-xl md:text-2xl italic transition-colors duration-500 group-hover:text-ink">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Viñetas laterales */}
      <div className="absolute top-0 left-0 w-32 md:w-48 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 md:w-48 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default TechTicker;
