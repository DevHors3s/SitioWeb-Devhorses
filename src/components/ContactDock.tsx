"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, MessageCircle, ArrowUpRight, RefreshCw, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { site, whatsappUrl } from "@/lib/site";
import HorseMascot from "./HorseMascot";
import { useHorseDialogue } from "@/hooks/useHorseDialogue";
import { useHorseJourney } from "@/hooks/useHorseJourney";

export default function ContactDock() {
  const { language } = useLanguage();
  const es = language === "es";
  const pathname = usePathname();
  const [muted, setMuted] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const { scene } = useHorseJourney(wrapper, pathname);
  const [greeting, setGreeting] = useState(false);
  const greetingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialogue = useHorseDialogue(scene, !open && !muted);
  useEffect(
    () => () => {
      if (greetingTimer.current) clearTimeout(greetingTimer.current);
    },
    [],
  );
  const interact = () => {
    if (wrapper.current?.dataset.mode !== "floating") {
      setGreeting(true);
      if (greetingTimer.current) clearTimeout(greetingTimer.current);
      greetingTimer.current = setTimeout(() => setGreeting(false), 2400);
    } else setOpen((value) => !value);
  };

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
      data-activity={greeting ? "wave" : dialogue.mood}
    >
      {!open && !muted && (
        <div className="guide-speech" aria-live="off">
          <span className="guide-label">{dialogue.label}</span>
          <p key={dialogue.key} className="guide-comment">
            {greeting
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
            <button
              onClick={() => setMuted(true)}
              aria-label={
                es
                  ? "Ocultar comentarios del caballo"
                  : "Hide the horse's comments"
              }
            >
              <X size={13} />
            </button>
          </div>
        </div>
      )}
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
      {muted && !open && (
        <button
          className="guide-unmute"
          onClick={() => setMuted(false)}
          aria-label={
            es ? "Mostrar comentarios del caballo" : "Show the horse's comments"
          }
        >
          <MessageCircle size={16} />
        </button>
      )}
      <div className="travel-avatar" aria-live="off">
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
              mood={greeting ? "wave" : dialogue.mood}
              reactionKey={`${dialogue.key}-${greeting}`}
            />
          </span>
        </button>
      </div>
    </div>
  );
}
