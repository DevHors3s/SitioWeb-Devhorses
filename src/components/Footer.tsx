"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-line pt-16 md:pt-24 pb-8 overflow-hidden">
      {/* Marca gigante de fondo */}
      <span
        aria-hidden
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-display italic whitespace-nowrap text-[18vw] leading-none text-ink/[0.03] pointer-events-none select-none"
      >
        DevHorses
      </span>

      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24 relative">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 mb-16 md:mb-24">

          {/* MARCA */}
          <div className="md:col-span-6">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <img src="/logo-icon.png" alt="DevHorses" className="h-10" />
              <span className="font-display text-2xl text-ink">
                Dev<em className="text-accent italic">Horses</em>
              </span>
            </Link>
            <p className="text-muted leading-relaxed max-w-sm mb-8">
              {t("footer_desc")}
            </p>
            <div className="flex gap-3">
              <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={18} />} />
              <SocialIcon href="https://www.linkedin.com/company/devhorses" icon={<Linkedin size={18} />} />
              <SocialIcon href="mailto:hola@devhorses.com" icon={<Mail size={18} />} />
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
            </ul>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-2 md:col-start-11">
            <h3 className="eyebrow mb-8">{t("footer_legal")}</h3>
            <ul className="space-y-4">
              <FooterLink href="#" text="Privacidad" />
              <FooterLink href="#" text="Términos" />
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

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-bg hover:bg-accent hover:border-accent transition-all duration-300"
    >
      {icon}
    </a>
  );
}
