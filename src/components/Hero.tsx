"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

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

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("services");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0F1C]">
      
      {/* 1. FONDO TÉCNICO (GRID + SPOTLIGHT) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-cyan-500/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0A0F1C] to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* 2. BADGE */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            {t("hero_badge")}
          </div>
        </motion.div>

        {/* 3. TÍTULO */}
        <motion.h1
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          {t("hero_title_1")} 
          <span className="text-transparent bg-clip-text bg-linear-to-b from-cyan-400 to-blue-600">
             {t("hero_title_gradient")}
          </span>
          <br className="hidden md:block" />
          {" "}{t("hero_title_2")} 
          <span className="text-transparent bg-clip-text bg-linear-to-b from-purple-400 to-pink-600">
             {t("hero_title_gradient_2")}
          </span>
        </motion.h1>

        {/* 4. SUBTÍTULO */}
        <motion.p 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* 5. BOTONES — Ahora apuntan a conversión */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button 
            onClick={scrollToContact} 
            className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-cyan-50 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
          >
            {t("hero_btn_primary")}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <button 
            onClick={scrollToServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
          >
            <Sparkles size={18} className="text-purple-400" />
            {t("hero_btn_secondary")}
          </button>
        </motion.div>

        {/* 6. STACK */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 pt-8 border-t border-white/5 w-full max-w-2xl"
        >
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">{t("hero_stack_title")}</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <TechItem text="Next.js" />
            <TechItem text="React" />
            <TechItem text="TypeScript" />
            <TechItem text="Tailwind" />
            <TechItem text="Node.js" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

function TechItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <Code2 size={16} className="text-cyan-500" />
      <span className="text-sm font-medium text-gray-400">{text}</span>
    </div>
  )
}

export default Hero;