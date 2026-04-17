"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { Github, ArrowRight, Layers } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  link: string;
  github: string;
  thumbnail: string;
}

export default function ProjectsSection() {
  const { t } = useLanguage();

  // ✅ CORRECCIÓN: La lista de datos ahora está DENTRO del componente
  // Así puede usar la función t() y actualizarse en tiempo real.
  const projectsData: Project[] = [
    {
      id: 1,
      title: "MV Abogados",
      description: t("project_1_desc"),
      tags: ["Next.js", "Tailwind", "TypeScript"],
      gradient: "from-purple-500 to-indigo-500",
      link: "https://mv-abogados.vercel.app/",
      github: "#",
      thumbnail: "/abogados-mini.png",
    },
    {
      id: 2,
      title: "Apu Garden Lodge",
      description: t("project_2_desc"),
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      gradient: "from-emerald-400 to-cyan-500",
      link: "https://apu-garden-lodge.vercel.app/",
      github: "#",
      thumbnail: "/hotel-mini.png",
    },
    {
      id: 3,
      title: "Gimnasio FitPro",
      description: t("project_3_desc"),
      tags: ["Next.js", "Tailwind", "React"],
      gradient: "from-cyan-500 to-blue-500",
      link: "https://demo-gimnasio-eight.vercel.app/",
      github: "#",
      thumbnail: "/gimnasio-mini.png",
    },
    {
      id: 4,
      title: "Pastelería Dulce Arte",
      description: t("project_4_desc"),
      tags: ["Next.js", "Tailwind", "E-commerce"],
      gradient: "from-pink-500 to-rose-500",
      link: "https://demo-restaurante-pasteleria.vercel.app/",
      github: "#",
      thumbnail: "/pasteleria-mini.png",
    },
  ];

  return (
    <section className="relative min-h-screen py-16 md:py-20 px-4 md:px-8 bg-[#0A0F1C] overflow-hidden">
      
      {/* Luz de fondo ambiental */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-10 md:mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="p-2 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
              <Layers className="text-cyan-400" size={20} />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider">{t("projects_badge")}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
          >
            {t("projects_title")}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-base md:text-lg"
          >
            {t("projects_subtitle")}
          </motion.p>
        </div>

        {/* GRILLA DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const { t } = useLanguage(); 

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`absolute -inset-0.5 bg-linear-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500 group-hover:duration-200`} />

      <div className="relative h-full bg-[#0d121f] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-white/20 transition-colors">
        
        <div className={`w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden`}>
          <div className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-10`} />
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-6 md:p-8 flex flex-col grow">
          <div className="mb-4">
             <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
               {project.title}
             </h3>
             <div className="flex flex-wrap gap-2">
               {project.tags.map((tag: string) => (
                 <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-gray-400 bg-white/5 rounded border border-white/5">
                   {tag}
                 </span>
               ))}
             </div>
          </div>

          <p className="text-gray-400 text-sm mb-6 leading-relaxed grow">
            {project.description}
          </p>

          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
            <Link href={project.link} className="flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors text-sm">
              {t("projects_btn_demo")} <ArrowRight size={16} />
            </Link>
            <Link href={project.github} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm ml-auto">
              <Github size={18} /> {t("projects_btn_code")}
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}