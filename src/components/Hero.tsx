"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Palabras rotativas
const typingWordsES = ["venden más", "atraen clientes", "trabajan por ti"];
const typingWordsEN = ["sell more", "attract clients", "work for you"];

const EASE = [0.22, 1, 0.36, 1] as const;

// Reveal de línea enmascarada
const lineReveal = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EASE, delay: 0.15 + i * 0.13 },
  }),
};

// Proyectos flotantes: imagen, etiqueta, posición, profundidad y rotación
const floatingProjects = [
  {
    src: "/abogados-mini.png",
    label: "MV Abogados",
    className: "top-[14%] right-[6%] w-44 lg:w-56",
    depth: 1,
    rotate: 4,
    floatDur: 6,
    delay: 1.1,
  },
  {
    src: "/apu web mini.png",
    label: "Apu Garden Lodge",
    className: "bottom-[22%] right-[15%] w-40 lg:w-52",
    depth: 1.8,
    rotate: -5,
    floatDur: 7.5,
    delay: 1.25,
  },
  {
    src: "/selekta-mini.png",
    label: "Selekta Food",
    className: "top-[20%] left-[6%] w-36 lg:w-48",
    depth: 1.4,
    rotate: -3,
    floatDur: 8,
    delay: 1.4,
  },
  {
    src: "/gimnasio-mini.png",
    label: "Demo — Gimnasio",
    className: "bottom-[13%] left-[13%] w-32 lg:w-44",
    depth: 2.2,
    rotate: 6,
    floatDur: 6.8,
    delay: 1.55,
  },
];

const Hero = () => {
  const { t, language } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);
  const words = language === "es" ? typingWordsES : typingWordsEN;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax cinematográfico al hacer scroll
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  // Parallax al mouse (suavizado con spring)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 45, damping: 18 });
  const smoothY = useSpring(mouseY, { stiffness: 45, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [words.length]);

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg pt-32 pb-16"
    >
      {/* Halo ambiental con parallax */}
      <motion.div
        style={{ scale: glowScale }}
        className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[120vw] h-[80vh] glow-accent pointer-events-none"
      />

      {/* Líneas verticales decorativas */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-line hidden sm:block" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-line hidden sm:block" />

      {/* PROYECTOS FLOTANTES con parallax al mouse y al scroll */}
      <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden>
        {floatingProjects.map((project) => (
          <FloatingCard
            key={project.src}
            project={project}
            smoothX={smoothX}
            smoothY={smoothY}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>

      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24 w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex items-center gap-4 mb-10 md:mb-14"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="eyebrow">{t("hero_badge")}</span>
          <span className="hidden md:block flex-1 h-px bg-line" />
          <span className="eyebrow hidden md:block">Lima — Perú</span>
        </motion.div>

        {/* TITULAR GIGANTE */}
        <h1 className="headline-hero text-ink text-[11vw] sm:text-[8vw] md:text-[6.5vw] lg:text-[5.5vw]">
          <span className="mask-line">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={lineReveal}
              className="block"
            >
              {t("hero_title_1")}
            </motion.span>
          </span>

          <span className="mask-line py-[0.08em]">
            <motion.span
              custom={1}
              initial="hidden"
              animate="visible"
              variants={lineReveal}
              className="block"
            >
              <span className="inline-block relative align-bottom">
                <AnimatePresence mode="wait">
                  <motion.em
                    key={words[wordIndex]}
                    initial={{ y: "60%", opacity: 0, rotateX: 40 }}
                    animate={{ y: "0%", opacity: 1, rotateX: 0 }}
                    exit={{ y: "-60%", opacity: 0, rotateX: -40 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="inline-block text-gradient-accent italic font-display pr-[0.06em]"
                  >
                    {words[wordIndex]}
                  </motion.em>
                </AnimatePresence>
              </span>
            </motion.span>
          </span>

          <span className="mask-line">
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={lineReveal}
              className="block text-muted"
            >
              {t("hero_title_2")} {t("hero_title_gradient_2")}
            </motion.span>
          </span>
        </h1>

        {/* CTA + señales de confianza */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={scrollTo("contact")}
              className="btn-accent px-9 py-4 text-base group"
            >
              {t("hero_btn_primary")}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1.5 transition-transform duration-300"
              />
            </button>
            <button
              onClick={scrollTo("services")}
              className="btn-ghost px-9 py-4 text-base"
            >
              {t("hero_btn_secondary")}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="flex flex-wrap items-start gap-x-6 gap-y-4 md:gap-x-10"
          >
            <TrustStat value="⚡" label={t("hero_trust_1")} />
            <TrustStat value="100%" label={t("hero_trust_2")} />
            <TrustStat value="0" label={t("hero_trust_3")} />
          </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-faint"
      >
        <span className="eyebrow text-[0.6rem]">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Tarjeta de proyecto flotante con triple movimiento:
// parallax al mouse, parallax al scroll y flotación idle
function FloatingCard({
  project,
  smoothX,
  smoothY,
  scrollProgress,
}: {
  project: (typeof floatingProjects)[number];
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
}) {
  const x = useTransform(smoothX, (v) => v * project.depth * -38);
  const mouseYOffset = useTransform(smoothY, (v) => v * project.depth * -26);
  const scrollYOffset = useTransform(scrollProgress, [0, 1], [0, project.depth * 130]);
  const y = useTransform(
    [mouseYOffset, scrollYOffset],
    ([m, s]) => (m as number) + (s as number)
  );

  return (
    <motion.div
      style={{ x, y }}
      className={`absolute ${project.className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.75, rotate: project.rotate * 2 }}
        animate={{ opacity: 1, scale: 1, rotate: project.rotate }}
        transition={{ duration: 1.2, ease: EASE, delay: project.delay }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: project.floatDur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: project.delay,
          }}
          className="rounded-xl overflow-hidden border border-line-strong bg-surface shadow-2xl shadow-black/50 opacity-80"
        >
          <img
            src={project.src}
            alt=""
            className="w-full aspect-[16/11] object-cover object-top"
            loading="eager"
          />
          <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-line bg-bg/80 backdrop-blur-sm">
            <span className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-muted">
              {project.label}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 max-w-[7.5rem] md:max-w-[9rem]">
      <span className="font-display text-accent text-xl md:text-2xl">{value}</span>
      <span className="text-muted text-xs md:text-sm leading-snug">{label}</span>
    </div>
  );
}

export default Hero;
