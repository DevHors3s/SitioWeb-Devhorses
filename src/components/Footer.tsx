"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Github, Linkedin, Mail, Instagram, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-surface border-t border-line pt-16 md:pt-24 pb-8 overflow-hidden">
      {/* Marca gigante de fondo */}
      <span
        aria-hidden
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-display italic whitespace-nowrap text-[18vw] leading-none text-ink/[0.03] pointer-events-none select-none"
      >
        DevHorses
      </span>

      <div className="site-container relative">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-16 md:mb-24">

          {/* MARCA */}
          <div className="md:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image src="/logo-icon.png" alt="DevHorses" width={429} height={429} className="h-10 w-auto" />
              <span className="font-display text-2xl text-ink">
                Dev<em className="text-accent italic">Horses</em>
              </span>
            </Link>
            <p className="text-muted leading-relaxed max-w-sm mb-8">
              {t("footer_desc")}
            </p>
            <div className="flex gap-3">
              <SocialIcon href={site.github} label="GitHub" icon={<Github size={18} />} />
              <SocialIcon href={site.linkedin} label="LinkedIn" icon={<Linkedin size={18} />} />
              <SocialIcon href={site.instagram} label="Instagram @devhorses" icon={<Instagram size={18} />} />
              <SocialIcon href={`mailto:${site.email}`} label={site.email} icon={<Mail size={18} />} />
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div className="md:col-span-3 md:col-start-8">
            <h3 className="eyebrow mb-8">{t("footer_explore")}</h3>
            <ul className="space-y-4">
              <FooterLink href="/" text={t("nav_home")} />
              <FooterLink href="/servicios" text={t("nav_services")} />
              <FooterLink href="/proyectos" text={t("nav_projects")} />
              <FooterLink href="/nosotros" text={t("nav_about")} />
              <FooterLink href="/#instagram" text="Instagram" />
            </ul>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-2 md:col-start-11">
            <h3 className="eyebrow mb-8">{t("footer_legal")}</h3>
            <ul className="space-y-4">
              <FooterLink href="/politica-de-privacidad" text={language === "es" ? "Privacidad" : "Privacy"} />
              <li className="text-faint text-sm pt-4">Lima, Perú 🇵🇪</li>
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-faint text-sm font-mono">
            © {currentYear} DevHorses. {t("footer_rights")}
          </p>
          <p className="eyebrow">Lima — Perú</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2 text-muted hover:text-accent transition-colors text-sm"
      >
        <span>{text}</span>
        <ArrowUpRight
          size={14}
          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        />
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-bg hover:bg-accent hover:border-accent transition-all duration-300"
    >
      {icon}
    </a>
  );
}
