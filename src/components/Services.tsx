"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import GlowCard from "./GlowCard";
import { Laptop, Smartphone, Palette, ShoppingCart } from "lucide-react";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="pt-16 md:pt-24 pb-16 md:pb-32 px-4 md:px-6 relative z-10 bg-[#0A0F1C]">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white"
          >
             {t("services_title")}
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            {t("services_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Tarjeta 1: Desarrollo Web (Stack Completo) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 h-full tilt-card"
          >
            <GlowCard>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform border border-cyan-500/20">
                  <Laptop size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_web_title")}</h3>
                <p className="text-slate-400 mb-6 grow leading-relaxed">
                  {t("services_web_desc")}
                </p>
                {/* STACK ACTUALIZADO CON MÁS TECNOLOGÍAS */}
                <div className="flex gap-2 flex-wrap mt-auto">
                  <TechBadge text="React" color="cyan" />
                  <TechBadge text="Angular" color="pink" />
                  <TechBadge text="Vue" color="emerald" />
                  <TechBadge text="JavaScript" color="orange" />
                  <TechBadge text="Python" color="blue" />
                  <TechBadge text="Spring Boot" color="green" />
                  <TechBadge text="Node.js" color="cyan" />
                </div>
            </GlowCard>
          </motion.div>

          {/* Tarjeta 2: Apps Móviles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-full tilt-card"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform border border-purple-500/20">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_mobile_title")}</h3>
                <p className="text-slate-400 mb-6 grow leading-relaxed">
                  {t("services_mobile_desc")}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <TechBadge text="Flutter" color="purple" />
                  <TechBadge text="Kotlin" color="purple" />
                  <TechBadge text="Swift" color="purple" />
                </div>
             </GlowCard>
          </motion.div>

          {/* Tarjeta 3: Diseño UI/UX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full tilt-card"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform border border-pink-500/20">
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_ui_title")}</h3>
                <p className="text-slate-400 mb-6 grow leading-relaxed">
                  {t("services_ui_desc")}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <TechBadge text="Figma" color="pink" />
                  <TechBadge text="Adobe XD" color="pink" />
                  <TechBadge text="Framer" color="pink" />
                </div>
             </GlowCard>
          </motion.div>

          {/* Tarjeta 4: E-commerce */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-2 h-full tilt-card"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform border border-emerald-500/20">
                  <ShoppingCart size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_eco_title")}</h3>
                <p className="text-slate-300 mb-6 grow leading-relaxed">
                  {t("services_eco_desc")}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <TechBadge text="Shopify" color="emerald" />
                  <TechBadge text="Stripe" color="emerald" />
                  <TechBadge text="WooCommerce" color="emerald" />
                  <TechBadge text="AWS" color="emerald" />
                </div>
             </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// HELPER PARA COLORES (Actualizado con blue, orange, green)
function TechBadge({ text, color }: { text: string; color: string }) {
    
    const styles = {
      cyan: "bg-cyan-950/30 border-cyan-500/20 text-cyan-300",
      purple: "bg-purple-950/30 border-purple-500/20 text-purple-300",
      pink: "bg-pink-950/30 border-pink-500/20 text-pink-300",
      emerald: "bg-emerald-950/30 border-emerald-500/20 text-emerald-300",
      
      // Nuevos colores para el stack
      blue: "bg-blue-950/30 border-blue-500/20 text-blue-300",
      orange: "bg-orange-950/30 border-orange-500/20 text-orange-300",
      green: "bg-green-950/30 border-green-500/20 text-green-300",
    };

    const className = styles[color as keyof typeof styles] || styles.cyan;

    return (
        <span className={`text-xs font-mono border px-2 py-1 rounded ${className}`}>
            {text}
        </span>
    );
}

export default Services;