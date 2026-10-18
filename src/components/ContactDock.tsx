"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, MessageCircle, ArrowUpRight, RefreshCw, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { site, whatsappUrl } from "@/lib/site";
import HorseMascot from "./HorseMascot";
import { useHorseDialogue } from "@/hooks/useHorseDialogue";
import { useHorseJourney } from "@/hooks/useHorseJourney";
import { HorsePresence } from "@/lib/horse-presence";

export default function ContactDock() {
  const { language } = useLanguage();
  const es = language === "es";
  const pathname = usePathname();
  const [minimized, setMinimized] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const presence = useRef(new HorsePresence());
  const restoreAtHome = useCallback(() => {
    presence.current.restore();
    setMinimized(false);
  }, []);
  const { scene, journeyMode } = useHorseJourney(wrapper, pathname, restoreAtHome);
  const [reaction, setReaction] = useState<"hello" | "return" | null>(null);
  const greetingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogue = useHorseDialogue(scene, !open && !minimized && !reaction && journeyMode !== "morph");
  const showReaction = useCallback((kind: "hello" | "return") => {
    if (greetingTimer.current) clearTimeout(greetingTimer.current);
    setReaction(kind);
    greetingTimer.current = setTimeout(() => setReaction(null), kind === "return" ? 6500 : 2400);
  }, []);
  const minimize = () => {
    setOpen(false);
    presence.current.dismiss(window.scrollY);
    setMinimized(true);
  };
  useEffect(
    () => () => {
      if (greetingTimer.current) clearTimeout(greetingTimer.current);
    },
    [],
  );
  const interact = () => {
    if (wrapper.current?.dataset.mode !== "floating") {
      showReaction("hello");
    } else setOpen((value) => !value);
  };

  useEffect(() => {
    const scroll = () => {
      if (presence.current.scroll(window.scrollY)) setMinimized(false);
    };
    const leave = () => presence.current.leave(Date.now());
    const returned = () => {
      if (document.hidden) return;
      if (presence.current.return(Date.now()) && !minimized && !open) showReaction("return");
    };
    const visibility = () => document.hidden ? leave() : returned();
    const homeNavigation = (event: MouseEvent) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin === window.location.origin && destination.pathname === "/" && (!destination.hash || destination.hash === "#hero")) {
        restoreAtHome();
        // Next can reuse the current route without scrolling when Inicio points to "/".
        if (window.location.pathname === "/") window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
        });
      }
    };
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("blur", leave);
    window.addEventListener("focus", returned);
    document.addEventListener("visibilitychange", visibility);
    document.addEventListener("click", homeNavigation, true);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("blur", leave);
      window.removeEventListener("focus", returned);
      document.removeEventListener("visibilitychange", visibility);
      document.removeEventListener("click", homeNavigation, true);
    };
  }, [minimized, open, showReaction, restoreAtHome]);

  useEffect(() => {
    if (!open) return;
    firstLink.current?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <div
      ref={wrapper}
      className="travel-companion"
      data-section={scene}
      data-minimized={minimized}
      data-contact-open={open}
      data-activity={reaction ? "wave" : dialogue.mood}
    >
        <div className="guide-speech" aria-live="off" hidden={open || minimized}>
          <span className="guide-label">{dialogue.label}</span>
          <p key={`${dialogue.key}-${reaction}`} className="guide-comment">
            {reaction === "return"
              ? es ? "¡Hey! ¿Sigues por ahí? Seguimos cuando quieras. 😎" : "Hey, still there? Let's carry on whenever you're ready. 😎"
              : reaction === "hello"
              ? es
                ? "¡Hola de nuevo! Me alegra verte. 👋"
                : "Hello again! Happy to see you. 👋"
              : dialogue.text}
          </p>
          <div className="guide-speech-controls">
            <button
              onClick={dialogue.next}
              aria-label={
                es
                  ? "Otro comentario del caballo"
                  : "Another comment from the horse"
              }
            >
              <RefreshCw size={12} />
              <span>{es ? "¿Y qué más?" : "What else?"}</span>
            </button>
          </div>
        </div>
      <div className="companion-rail" aria-hidden="true" />
      {open && (
        <div
          id="horse-contact"
          className="dock-panel"
          role="region"
          aria-label={es ? "Contacto rápido" : "Quick contact"}
        >
          <button
            className="dock-close"
            onClick={() => {
              setOpen(false);
              trigger.current?.focus();
            }}
            aria-label={es ? "Cerrar contacto" : "Close contact"}
          >
            <X size={17} />
          </button>
          <span className="eyebrow text-accent">
            {es ? "Hablemos de tu idea" : "Let's talk about your idea"}
          </span>
          <h2>
            {es ? "¿Qué quieres construir?" : "What would you like to build?"}
          </h2>
          <p>
            {es
              ? "Respuesta inmediata. Soporte 24/7."
              : "Immediate response. 24/7 support."}
          </p>
          <a
            ref={firstLink}
            href={whatsappUrl(
              es
                ? "Hola DevHorses, me gustaría conversar sobre mi proyecto."
                : "Hi DevHorses, I'd like to discuss my project.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent px-4 py-3 text-sm"
          >
            <MessageCircle size={17} />
            WhatsApp
            <ArrowUpRight size={16} />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="btn-ghost px-4 py-3 text-sm"
          >
            <Mail size={16} />
            {es ? "Escribir por correo" : "Send an email"}
          </a>
        </div>
      )}
      <div className="travel-avatar" aria-live="off" inert={minimized}>
        <button
          ref={trigger}
          className="character-trigger"
          onClick={interact}
          aria-expanded={open}
          aria-controls={open ? "horse-contact" : undefined}
          aria-label={
            scene === "hero"
              ? es
                ? "Saludar al caballo de DevHorses"
                : "Say hello to the DevHorses horse"
              : es
                ? "Caballo DevHorses: abrir contacto rápido"
                : "DevHorses horse: open quick contact"
          }
        >
          <span className="travel-art">
            <HorseMascot
              variant={scene === "hero" ? "working" : undefined}
              mood={reaction ? "wave" : dialogue.mood}
              reactionKey={`${dialogue.key}-${reaction}`}
            />
          </span>
        </button>
      </div>
      <button className="companion-minimize" onClick={minimize} hidden={minimized || journeyMode !== "floating"} aria-label={es ? "Ocultar caballo hasta volver hacia arriba" : "Hide horse until scrolling up"} title={es ? "Ocultar hasta volver hacia arriba" : "Hide until scrolling up"}>
        <X size={13} />
      </button>
    </div>
  );
}
