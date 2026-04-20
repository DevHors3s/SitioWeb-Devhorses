"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { 
  Github, Linkedin, Mail, ArrowRight, Code2, 
  Palette, Server, Cloud, LineChart, Monitor 
} from "lucide-react";

export default function AboutSection() {
  const { t } = useLanguage();

  // DEFINICIÓN DEL EQUIPO (4 MIEMBROS)
  const team = [
    {
      name: "Mathias Vasquez",
      role: t("team_1_role"),
      bio: t("team_1_bio"),
      icon: <Monitor size={32} />,
      color: "text-cyan-400",
      border: "group-hover:border-cyan-500/50"
    },
    {
      name: "Arwen Vasquez",
      role: t("team_5_role"),
      bio: t("team_5_bio"),
      icon: <Palette size={32} />,
      color: "text-pink-400",
      border: "group-hover:border-pink-500/50"
    },
    {
      name: "Diego Flores",
      role: t("team_2_role"),
      bio: t("team_2_bio"),
      icon: <Server size={32} />,
      color: "text-purple-400",
      border: "group-hover:border-purple-500/50"
    },
    {
      name: "Gabriel Garcia",
      role: t("team_3_role"),
      bio: t("team_3_bio"),
      icon: <Cloud size={32} />,
      color: "text-emerald-400",
      border: "group-hover:border-emerald-500/50"
    },
    {
      name: "Fabricio Apaza",
      role: t("team_4_role"),
      bio: t("team_4_bio"),
      icon: <LineChart size={32} />,
      color: "text-orange-400",
      border: "group-hover:border-orange-500/50"
    }
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 px-4 md:px-6 bg-[#0A0F1C] overflow-hidden">
      
      {/* Luces decorativas */}
      <div className="absolute top-20 right-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* PARTE 1: INTRO / MISIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-32">
          
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              {t("about_badge")}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              {t("about_title_1")} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                {t("about_title_gradient")}
              </span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              {t("about_desc")}
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6">
              <Stats number="10+" label={t("about_stats_projects")} />
              <Stats number="3+" label={t("about_stats_exp")} />
              <Stats number="100%" label={t("about_stats_commitment")} />
            </div>
          </motion.div>

          {/* CAJA DE CÓDIGO */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl bg-[#0d121f] border border-white/10 p-6 relative z-10 shadow-2xl">
               <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"/>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"/>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"/>
               </div>
               
               <div className="space-y-3 font-mono text-xs sm:text-sm overflow-x-auto">
                 <div className="text-gray-500">{t("about_mission_comment")}</div>
                 <div className="text-purple-400">const <span className="text-white">mission</span> = <span className="text-yellow-300">{"{"}</span></div>
                 <div className="pl-4 text-cyan-300">focus: <span className="text-green-300">&quot;Innovation&quot;</span>,</div>
                 <div className="pl-4 text-cyan-300">quality: <span className="text-green-300">&quot;Premium&quot;</span>,</div>
                 <div className="pl-4 text-cyan-300">limit: <span className="text-red-400">null</span></div>
                 <div className="text-yellow-300">{"}"};</div>
               </div>
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full border border-white/5 rounded-2xl -z-10 bg-white/5" />
          </motion.div>
        </div>

        {/* PARTE 2: EL ESCUADRÓN (4 COLUMNAS) */}
        <div className="mb-16 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10 md:mb-16"
          >
             <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
               <Code2 className="text-cyan-400" /> {t("about_team_title")}
             </h2>
          </motion.div>

          {/* GRID CONFIGURADO PARA 4 PERSONAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl bg-[#0d121f] border border-white/10 hover:bg-white/5 transition-all duration-300 ${member.border}`}
              >
                <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${member.color}`}>
                  {member.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className={`text-[10px] font-bold uppercase tracking-wider mb-4 ${member.color}`}>{member.role}</p>
                <p className="text-gray-400 text-xs mb-6 min-h-15 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <SocialBtn icon={<Github size={16}/>} />
                  <SocialBtn icon={<Linkedin size={16}/>} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 3: CTA FINAL */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-10 lg:p-16 rounded-3xl overflow-hidden text-center border border-white/10"
        >
            <div className="absolute inset-0 bg-linear-to-br from-cyan-900/20 via-[#0d121f] to-purple-900/20 backdrop-blur-xl z-0" />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                    <Mail className="text-white" size={32} />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {t("cta_title")}
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl text-lg">
                    {t("cta_desc")}
                </p>
                
                <a 
                    href="mailto:hola@devhorses.com" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-300 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(103,232,249,0.5)] group"
                >
                    <Mail size={20} />
                    {t("cta_btn")}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}

function Stats({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-white">{number}</div>
      <div className="text-gray-500 text-sm uppercase tracking-wider">{label}</div>
    </div>
  )
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
      {icon}
    </button>
  )
}