"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  BedDouble,
  CalendarCheck,
  Wallet,
  FileText,
  BarChart3,
  Users,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const tabs = [
  { key: "rooms", img: "/saas apu gestion/ApuGestion1.png", labelKey: "saas_tab_1" as const },
  { key: "detail", img: "/saas apu gestion/ApuGestion2.png", labelKey: "saas_tab_2" as const },
  { key: "reservation", img: "/saas apu gestion/ApuGestion3.png", labelKey: "saas_tab_3" as const },
];

const features = [
  { icon: <BedDouble size={18} />, titleKey: "saas_feat_1_title" as const, descKey: "saas_feat_1_desc" as const },
  { icon: <CalendarCheck size={18} />, titleKey: "saas_feat_2_title" as const, descKey: "saas_feat_2_desc" as const },
  { icon: <Wallet size={18} />, titleKey: "saas_feat_3_title" as const, descKey: "saas_feat_3_desc" as const },
  { icon: <FileText size={18} />, titleKey: "saas_feat_4_title" as const, descKey: "saas_feat_4_desc" as const },
  { icon: <BarChart3 size={18} />, titleKey: "saas_feat_5_title" as const, descKey: "saas_feat_5_desc" as const },
  { icon: <Users size={18} />, titleKey: "saas_feat_6_title" as const, descKey: "saas_feat_6_desc" as const },
];

const stats = [
  { valueKey: "saas_stat_1_value" as const, labelKey: "saas_stat_1_label" as const },
  { valueKey: "saas_stat_2_value" as const, labelKey: "saas_stat_2_label" as const },
  { valueKey: "saas_stat_3_value" as const, labelKey: "saas_stat_3_label" as const },
];

export default function SaasShowcase() {
  const { t } = useLanguage();

  const whatsappUrl = `https://wa.me/51981916198?text=${encodeURIComponent(
    "Hola DevHorses, vi el sistema de gestión que construyeron para Apu Garden Lodge y quiero algo así para mi negocio 🚀"
  )}`;

  return (
    <section className="relative py-24 md:py-36 bg-[#0d0a06] overflow-hidden">
      {/* Halo dorado ambiental — paleta propia del producto */}
      <div className="absolute top-1/4 right-0 w-[55vw] h-[55vh] rounded-full blur-[120px] opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(217,173,92,0.25)_0%,transparent_70%)]" />
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-[#3a2a17]/60 hidden sm:block" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-[#3a2a17]/60 hidden sm:block" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-start">

          {/* COLUMNA IZQUIERDA — narrativa */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-[#3a2a17] bg-[#181209]"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9ad5c] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d9ad5c]" />
              </span>
              <span className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[#d9ad5c]">
                {t("saas_eyebrow")}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="font-display text-[#f5efe4] text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-8"
            >
              {t("saas_title_1")}
              <em className="italic text-[#d9ad5c] not-italic bg-gradient-to-r from-[#e8c07a] to-[#d9ad5c] bg-clip-text text-transparent">
                {t("saas_title_gradient")}
              </em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25 }}
              className="text-[#a89a83] text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            >
              {t("saas_desc")}
            </motion.p>

            {/* Grid de features — horizontal, aprovecha el ancho de la columna */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 mb-12">
              {features.map((f, i) => (
                <motion.div
                  key={f.titleKey}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 w-9 h-9 rounded-sm border border-[#3a2a17] bg-[#181209] flex items-center justify-center text-[#d9ad5c]">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-[#f5efe4] text-sm font-semibold mb-1">{t(f.titleKey)}</h4>
                    <p className="text-[#a89a83] text-xs leading-relaxed">{t(f.descKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-x-10 gap-y-5 mb-12 pb-12 border-b border-[#3a2a17]/60"
            >
              {stats.map((s) => (
                <div key={s.labelKey} className="flex flex-col gap-1">
                  <span className="font-display text-[#d9ad5c] text-2xl md:text-3xl">{t(s.valueKey)}</span>
                  <span className="text-[#a89a83] text-xs uppercase tracking-wider">{t(s.labelKey)}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#d9ad5c] text-[#181209] font-semibold text-sm transition-all hover:scale-[1.03] hover:bg-[#e8c07a]"
              >
                <MessageCircle size={16} />
                {t("saas_cta_want")}
              </a>
              <a
                href="https://apu-garden-lodge.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#3a2a17] text-[#f5efe4] font-medium text-sm transition-all hover:border-[#d9ad5c]/60 hover:bg-[#181209]"
              >
                {t("saas_cta_public")}
                <ExternalLink size={14} />
              </a>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA — mockup interactivo, sticky para acompañar el scroll del texto */}
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-28">
              <DeviceMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DeviceMockup() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle — se reinicia cada vez que el usuario elige un tab a mano,
  // para que un click manual no se lo "robe" el siguiente tick automático
  const startAutoCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % tabs.length);
    }, 4200);
  };

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const selectTab = (i: number) => {
    setActive(i);
    startAutoCycle();
  };

  // Tilt 3D al mouse
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, { stiffness: 120, damping: 16 });
  const springY = useSpring(rotY, { stiffness: 120, damping: 16 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotY.set(px * 10);
    rotX.set(py * -10);
  };

  const handleMouseLeave = () => {
    rotX.set(0);
    rotY.set(0);
  };

  const glowX = useTransform(springY, (v) => 50 + v * 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1, ease: EASE }}
      className="relative"
      style={{ perspective: 1600 }}
    >
      <div
        ref={wrapRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => selectTab(i)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                active === i
                  ? "bg-[#d9ad5c] text-[#181209]"
                  : "border border-[#3a2a17] text-[#a89a83] hover:text-[#f5efe4] hover:border-[#d9ad5c]/40"
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Frame estilo navegador con tilt 3D */}
        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
            transformStyle: "preserve-3d",
          }}
          className="relative rounded-lg border border-[#3a2a17] bg-[#14100b] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
        >
          {/* Barra superior tipo navegador */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#3a2a17] bg-[#181209]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#3a2a17]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3a2a17]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#3a2a17]" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <span className="px-4 py-1 rounded-full bg-[#0d0a06] font-mono text-[0.65rem] text-[#a89a83] tracking-wide">
                gestion.apu-garden-lodge.com
              </span>
            </div>
            <span className="hidden sm:flex items-center gap-1.5 font-mono text-[0.6rem] text-[#d9ad5c] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d9ad5c] animate-pulse" />
              {t("saas_live_badge")}
            </span>
          </div>

          {/* Screenshot con crossfade */}
          <div className="relative aspect-[16/9] bg-[#0d0a06]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tabs[active].img}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={tabs[active].img}
                  alt={t(tabs[active].labelKey)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Reflejo/halo dinámico bajo el mockup */}
        <motion.div
          style={{ left: glowX }}
          className="absolute -bottom-10 -translate-x-1/2 w-2/3 h-20 rounded-full blur-3xl opacity-25 bg-[#d9ad5c] pointer-events-none -z-10"
        />

        {/* Tarjeta flotante — foto real desde el celular */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
          className="hidden md:block absolute -bottom-14 -left-10 w-36 lg:w-44"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border-2 border-[#3a2a17] shadow-2xl shadow-black/60 bg-[#14100b]"
          >
            <Image
              src="/saas apu gestion/ApuGestion5.jpg"
              alt={t("saas_phone_caption")}
              fill
              sizes="180px"
              className="object-cover object-[50%_18%]"
            />
          </motion.div>
          <p className="mt-2 text-center font-mono text-[0.6rem] text-[#a89a83] tracking-wide leading-tight">
            {t("saas_phone_caption")}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
