"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as const
    } 
  },
};

// Typing effect words
const typingWordsES = ["venden más", "atraen clientes", "trabajan por ti"];
const typingWordsEN = ["sell more", "attract clients", "work for you"];

const Hero = () => {
  const { t, language } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);
  const words = language === "es" ? typingWordsES : typingWordsEN;

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0F1C] pt-24 pb-12">
      
      {/* 1. AURORA GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0 aurora-bg" />

      {/* 2. GRID PATTERN */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0F1C] to-transparent" />
      </div>

      {/* 3. FLOATING PARTICLES */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* 4. SPOTLIGHT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-500/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* BADGE */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="mb-4 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t("hero_badge")}
          </div>
        </motion.div>

        {/* TÍTULO CON TYPING EFFECT */}
        <motion.h1
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4 md:mb-6 leading-tight"
        >
          {t("hero_title_1")} 
          <br className="hidden md:block" />

          {/* Animated word swap */}
          <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[wordIndex]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-shimmer inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>

          <br className="hidden md:block" />
          {" "}{t("hero_title_2")} 
          <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-pink-600">
             {t("hero_title_gradient_2")}
          </span>
        </motion.h1>

        {/* SUBTÍTULO */}
        <motion.p 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-base md:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 md:mb-10 leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* BOTONES CON GLOW PULSE */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={scrollToContact} 
            className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-cyan-50 transition-all hover:scale-105 glow-pulse cursor-pointer"
          >
            {t("hero_btn_primary")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-105 cursor-pointer"
          >
            <Sparkles size={18} className="text-purple-400" />
            {t("hero_btn_secondary")}
          </button>
        </motion.div>

        {/* TRUST SIGNAL — social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-white/5 w-full max-w-2xl"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-base">⚡</span>
              <span>{t("hero_trust_1")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-base">100%</span>
              <span>{t("hero_trust_2")}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold text-base">0</span>
              <span>{t("hero_trust_3")}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;