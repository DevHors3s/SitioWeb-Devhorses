"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import type { Translations } from "../context/LanguageContext";
import { Monitor, ExternalLink, MessageCircle } from "lucide-react";

// 2.1 — DemoData interface
interface DemoData {
  id: number;
  nameKey: keyof Translations;
  categoryKey: keyof Translations;
  descriptionKey: keyof Translations;
  demoUrl: string;
  gradient: string;
  thumbnail?: string;
}

// We need the Translations type for keyof usage — imported above

export default function DemoShowcase() {
  const { t } = useLanguage();

  // 2.1 — demosData array with 6 demos
  const demosData: DemoData[] = [
    {
      id: 1,
      nameKey: "demo_1_name",
      categoryKey: "demo_1_category",
      descriptionKey: "demo_1_desc",
      demoUrl: "https://demo-gimnasio-eight.vercel.app/",
      gradient: "from-cyan-500 to-blue-500",
      thumbnail: "/gimnasio-mini.png",
    },
    {
      id: 2,
      nameKey: "demo_2_name",
      categoryKey: "demo_2_category",
      descriptionKey: "demo_2_desc",
      demoUrl: "https://demo-restaurante-pasteleria.vercel.app/",
      gradient: "from-pink-500 to-rose-500",
      thumbnail: "/pasteleria-mini.png",
    },
    {
      id: 3,
      nameKey: "demo_3_name",
      categoryKey: "demo_3_category",
      descriptionKey: "demo_3_desc",
      demoUrl: "https://demo-restaurante-carnes.vercel.app/",
      gradient: "from-orange-400 to-red-500",
      thumbnail: "/restaurante-mini.png",
    },
    {
      id: 4,
      nameKey: "demo_4_name",
      categoryKey: "demo_4_category",
      descriptionKey: "demo_4_desc",
      demoUrl: "https://mv-abogados.vercel.app/",
      gradient: "from-purple-500 to-indigo-500",
      thumbnail: "/abogados-mini.png",
    },
    {
      id: 5,
      nameKey: "demo_5_name",
      categoryKey: "demo_5_category",
      descriptionKey: "demo_5_desc",
      demoUrl: "https://apu-garden-lodge.vercel.app/",
      gradient: "from-emerald-400 to-cyan-500",
      thumbnail: "/hotel-mini.png",
    },
    {
      id: 6,
      nameKey: "demo_6_name",
      categoryKey: "demo_6_category",
      descriptionKey: "demo_6_desc",
      demoUrl: "https://demo-retail.vercel.app/",
      gradient: "from-amber-400 to-orange-500",
      thumbnail: "/retail-mini.png",
    },
    {
      id: 7,
      nameKey: "demo_7_name",
      categoryKey: "demo_7_category",
      descriptionKey: "demo_7_desc",
      demoUrl: "https://demo-tatto.vercel.app/",
      gradient: "from-slate-400 to-zinc-600",
      thumbnail: "/tatto-mini.png",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-8 bg-[#0A0F1C] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* 2.2 — Section header: badge + gradient title + subtitle */}
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="p-2 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
              <Monitor className="text-cyan-400" size={20} />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider">
              {t("demo_badge")}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t("demo_title")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-base md:text-lg"
          >
            {t("demo_subtitle")}
          </motion.p>
        </div>

        {/* 2.3 — Responsive CSS grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {demosData.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} />
          ))}
        </div>

        {/* 3 — CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 md:mt-20 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            {t("demo_cta_title")}
          </h3>
          <a
            href={`https://wa.me/51999999999?text=${encodeURIComponent("Hola DevHorses, vi sus demos y me gustaría saber más sobre sus servicios 🚀")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-xl hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all hover:scale-105"
          >
            <MessageCircle size={20} />
            {t("demo_cta_btn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// 2.4, 2.5, 2.6 — Internal DemoCard function
function DemoCard({ demo, index }: { demo: DemoData; index: number }) {
  const { t } = useLanguage();

  const demoName = t(demo.nameKey);
  const whatsappMessage = encodeURIComponent(
    `Hola DevHorses, me interesa un sitio como "${demoName}" para mi negocio 🚀`
  );
  const whatsappUrl = `https://wa.me/51999999999?text=${whatsappMessage}`;

  return (
    // 2.6 — Framer Motion entrance animation with stagger
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Gradient glow behind card on hover */}
      <div
        className={`absolute -inset-0.5 bg-linear-to-r ${demo.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500 group-hover:duration-200`}
      />

      {/* 2.4 — Card content | 2.5 — Hover effects */}
      <div className="relative h-full bg-[#0B1121] rounded-2xl border border-slate-800 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:scale-[1.02] hover:border-slate-700">
        {/* Thumbnail */}
        <div className="relative w-full h-32 md:h-40 overflow-hidden">
          <div className={`absolute inset-0 bg-linear-to-br ${demo.gradient} opacity-10`} />
          {demo.thumbnail ? (
            <img
              src={demo.thumbnail}
              alt={demoName}
              className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full bg-linear-to-br ${demo.gradient} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
              <Monitor size={32} className="text-white/40" />
            </div>
          )}
        </div>

        <div className="p-5 md:p-6 flex flex-col grow">
        {/* Category badge */}
        <span
          className={`inline-block self-start px-2.5 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-linear-to-r ${demo.gradient} text-white mb-3`}
        >
          {t(demo.categoryKey)}
        </span>

        {/* Demo name */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {demoName}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 grow">
          {t(demo.descriptionKey)}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-2 mt-auto">
          <a
            href={demo.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-colors"
          >
            <ExternalLink size={14} />
            {t("demo_btn_view")}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-green-600/20 border border-green-500/30 rounded-lg hover:bg-green-600/30 hover:border-green-500/50 transition-colors"
          >
            <MessageCircle size={14} />
            {t("demo_btn_want")}
          </a>
        </div>
        </div>
      </div>
    </motion.div>
  );
}
