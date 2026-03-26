"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { Globe, Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_services"), href: "/servicios" },
    { name: t("nav_projects"), href: "/proyectos" },
    { name: t("nav_about"), href: "/nosotros" },
  ];

  const scrollToContact = () => {
    setIsOpen(false);
    if (pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.location.href = "/#contact";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-6 px-4 pointer-events-none">
        
        {/* BARRA PRINCIPAL (PÍLDORA) */}
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-4xl bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl relative z-50">
          
          {/* LOGO */}
          <Link href="/" className="text-xl font-bold font-mono text-white" onClick={() => setIsOpen(false)}>
            Dev<span className="text-cyan-400">Horses</span>.
          </Link>

          {/* LINKS DESKTOP (Ocultos en móvil) */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className="relative px-4 py-2 text-sm font-medium group block">
                    <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.span 
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {/* BOTÓN CTA — NUEVO */}
            <button
              onClick={scrollToContact}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black text-sm font-bold transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              <Zap size={14} />
              {t("nav_cta")}
            </button>

            {/* BOTÓN IDIOMA */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              <Globe size={14} className={language === 'en' ? "text-purple-400" : "text-cyan-400"} />
              {language === 'es' ? 'ES' : 'EN'}
            </button>

            {/* BOTÓN HAMBURGUESA (Solo Móvil) */}
            <button 
              className="md:hidden text-white p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL DESPLEGABLE */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto absolute top-20 w-[90%] max-w-md bg-[#0d121f] border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 md:hidden overflow-hidden"
            >
              {links.map((link) => {
                 const isActive = pathname === link.href;
                 return (
                  <Link 
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-center font-medium transition-all ${
                      isActive 
                      ? "bg-white/10 text-white border border-white/5" 
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                 )
              })}
              {/* CTA en menú móvil */}
              <button
                onClick={scrollToContact}
                className="mt-2 px-4 py-3 rounded-xl bg-cyan-500 text-black font-bold text-center hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap size={16} />
                {t("nav_cta")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
}