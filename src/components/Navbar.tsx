"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { Globe, Menu, X } from "lucide-react";

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

  const whatsappUrl = `https://wa.me/51981916198?text=${encodeURIComponent("Hola DevHorses, me interesa una cotización para mi proyecto 🚀")}`;

  const openWhatsApp = () => {
    setIsOpen(false);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-5 px-4 pointer-events-none">

        {/* BARRA PRINCIPAL */}
        <div className="pointer-events-auto flex items-center justify-between w-full max-w-5xl bg-bg/70 backdrop-blur-xl border border-line px-6 py-3 rounded-full shadow-2xl shadow-black/40 relative z-50">

          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => setIsOpen(false)}>
            <img src="/logo-full.png" alt="DevHorses" className="h-6 sm:h-7" />
          </Link>

          {/* LINKS DESKTOP */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className="relative px-4 py-2 text-sm group block">
                    <span
                      className={`relative z-10 transition-colors duration-300 font-mono text-xs tracking-[0.12em] uppercase ${
                        isActive ? "text-accent" : "text-muted group-hover:text-ink"
                      }`}
                    >
                      {link.name}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 bg-accent/10 rounded-full border border-accent/25"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <button
              onClick={openWhatsApp}
              className="hidden md:flex btn-accent px-5 py-2 text-sm"
            >
              {t("nav_cta")}
            </button>

            {/* IDIOMA */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-line font-mono text-xs text-muted hover:text-ink hover:border-line-strong transition-all cursor-pointer"
            >
              <Globe size={13} className="text-accent" />
              {language === "es" ? "ES" : "EN"}
            </button>

            {/* HAMBURGUESA */}
            <button
              className="md:hidden text-ink p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menú"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MENÚ MÓVIL */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto absolute top-20 w-[90%] max-w-md bg-surface border border-line rounded-2xl shadow-2xl shadow-black/50 p-4 flex flex-col gap-1 md:hidden overflow-hidden"
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3.5 rounded-xl text-center font-display text-lg transition-all ${
                      isActive
                        ? "text-accent italic"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button
                onClick={openWhatsApp}
                className="btn-accent mt-3 px-4 py-3.5 text-base"
              >
                {t("nav_cta")}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
