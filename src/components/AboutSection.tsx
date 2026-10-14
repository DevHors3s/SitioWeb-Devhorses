"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import {
  Github, Linkedin, MessageCircle, ArrowRight, Code2,
  Palette, Server, Cloud, LineChart, Monitor
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const { t } = useLanguage();

  const team = [
    {
      name: "Mathias Vasquez",
      role: t("team_1_role"),
      bio: t("team_1_bio"),
      icon: <Monitor size={28} />,
      color: "text-cyan-400",
      hoverBorder: "group-hover:border-cyan-500/40",
    },
    {
      name: "Aixa Vasquez",
      role: t("team_5_role"),
      bio: t("team_5_bio"),
      icon: <Palette size={28} />,
      color: "text-pink-400",
      hoverBorder: "group-hover:border-pink-500/40",
    },
    {
      name: "Diego Flores",
      role: t("team_2_role"),
      bio: t("team_2_bio"),
      icon: <Server size={28} />,
      color: "text-purple-400",
      hoverBorder: "group-hover:border-purple-500/40",
    },
    {
      name: "Gabriel Garcia",
      role: t("team_3_role"),
      bio: t("team_3_bio"),
      icon: <Cloud size={28} />,
      color: "text-emerald-400",
      hoverBorder: "group-hover:border-emerald-500/40",
    },
    {
      name: "Fabricio Apaza",
      role: t("team_4_role"),
      bio: t("team_4_bio"),
      icon: <LineChart size={28} />,
      color: "text-orange-400",
      hoverBorder: "group-hover:border-orange-500/40",
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-bg overflow-hidden">
      {/* Halo ambiental */}
      <div className="absolute top-0 left-1/4 w-[60vw] h-[60vh] glow-accent pointer-events-none opacity-70" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24">

        {/* PARTE 1: INTRO / MISIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 md:mb-36">

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="eyebrow block mb-6">( {t("about_badge")} )</span>

            <h1 className="font-display text-ink text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-8">
              {t("about_title_1")} <em className="text-gradient-accent italic">{t("about_title_gradient")}</em>
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed max-w-xl mb-10">
              {t("about_desc")}
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-6">
              <Stat number="5" label={t("about_stats_clients")} />
              <Stat number="4" label={t("about_stats_industries")} />
              <Stat number="100%" label={t("about_stats_commitment")} />
            </div>
          </motion.div>

          {/* CAJA DE CÓDIGO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-sm bg-surface border border-line p-6 md:p-8 relative z-10">
               <div className="flex gap-2 mb-6">
                 <div className="w-2.5 h-2.5 rounded-full bg-line-strong"/>
                 <div className="w-2.5 h-2.5 rounded-full bg-line-strong"/>
                 <div className="w-2.5 h-2.5 rounded-full bg-accent"/>
               </div>

               <div className="space-y-3 font-mono text-xs sm:text-sm overflow-x-auto">
                 <div className="text-faint">{t("about_mission_comment")}</div>
                 <div className="text-ink">const <span className="text-accent">devhorses</span> = {"{"}</div>
                 <div className="pl-4 text-muted">trato: <span className="text-ink">&quot;directo&quot;</span>,</div>
                 <div className="pl-4 text-muted">entregas: <span className="text-ink">&quot;semanales&quot;</span>,</div>
                 <div className="pl-4 text-muted">respuesta: <span className="text-ink">&quot;inmediata&quot;</span>,</div>
                 <div className="pl-4 text-muted">soporte: <span className="text-ink">&quot;24/7&quot;</span>,</div>
                 <div className="pl-4 text-muted">intermediarios: <span className="text-accent">null</span></div>
                 <div className="text-ink">{"}"};</div>
               </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border border-line rounded-sm -z-10" />
          </motion.div>
        </div>

        {/* PARTE 2: EL EQUIPO */}
        <div className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE }}
            className="flex items-center gap-3 mb-12 md:mb-16"
          >
             <Code2 className="text-accent" size={22} />
             <h2 className="font-display text-ink text-2xl md:text-3xl">{t("about_team_title")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-40px" }}
                className={`group p-6 rounded-sm bg-surface border border-line transition-all duration-500 ${member.hoverBorder}`}
              >
                <div className={`mb-6 p-3.5 rounded-sm border border-line w-fit transition-colors duration-500 ${member.color} ${member.hoverBorder}`}>
                  {member.icon}
                </div>

                <h3 className="font-display text-ink text-lg mb-1">{member.name}</h3>
                <p className={`eyebrow mb-4 ${member.color}`}>{member.role}</p>
                <p className="text-muted text-xs leading-relaxed mb-6 min-h-15">
                  {member.bio}
                </p>

                <div className="flex gap-3 pt-4 border-t border-line">
                  <SocialBtn icon={<Github size={15}/>} />
                  <SocialBtn icon={<Linkedin size={15}/>} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 3: CTA FINAL */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative p-8 md:p-16 rounded-sm overflow-hidden text-center border border-line"
        >
            <div className="absolute inset-0 glow-accent opacity-60 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full border border-line flex items-center justify-center mb-6 text-accent">
                    <MessageCircle size={26} />
                </div>

                <h3 className="font-display text-ink text-3xl md:text-4xl mb-4">
                    {t("cta_title")}
                </h3>
                <p className="text-muted mb-10 max-w-xl text-base md:text-lg">
                    {t("cta_desc")}
                </p>

                <a
                    href={`https://wa.me/51981916198?text=${encodeURIComponent("Hola DevHorses, me interesa una consultoría gratuita para mi negocio 🚀")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-accent px-8 py-4 text-base group"
                >
                    <MessageCircle size={18} />
                    {t("cta_btn")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string, label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-display text-accent text-2xl md:text-3xl">{number}</div>
      <div className="text-muted text-xs uppercase tracking-wider">{label}</div>
    </div>
  )
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-muted hover:text-bg hover:bg-accent hover:border-accent transition-all duration-300">
      {icon}
    </button>
  )
}
