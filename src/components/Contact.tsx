"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Turnstile } from "@marsidev/react-turnstile";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const EASE = [0.22, 1, 0.36, 1] as const;

const Contact = () => {
  const { t, language } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "ratelimit">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (TURNSTILE_SITE_KEY && !turnstileToken) return;

    setIsSubmitting(true);
    setStatus("idle");

    const form = formRef.current!;
    const name = (form.elements.namedItem("user_name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("user_email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement).value;

    if (!TURNSTILE_SITE_KEY) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Proyecto de ${name} — DevHorses`)}&body=${encodeURIComponent(`${name}\n${email}\n\n${message}`)}`;
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, honeypot, turnstileToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        formRef.current?.reset();
        setTurnstileToken(null);
      } else if (response.status === 429) {
        setStatus("ratelimit");
      } else {
        setStatus("error");
        setErrorMsg(language === "es" ? (data.error ?? "Error inesperado.") : "Your message could not be sent. Please try again or contact us on WhatsApp.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(language === "es" ? "Error de conexión. Intenta de nuevo." : "Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative section-spacing bg-bg overflow-hidden">
      {/* Halo dorado inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] glow-accent pointer-events-none" />

      <div className="site-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Titular editorial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="lg:col-span-6"
          >
            <span className="eyebrow block mb-8">{language === "es" ? "TU SIGUIENTE PROYECTO" : "YOUR NEXT PROJECT"}</span>
            <h2 className="chapter-title contact-title mb-10">
              <span className="chapter-lead">{t("contact_title_1")}{" "}</span>
              <em className="text-gradient-accent italic">{t("contact_title_gradient")}</em>
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-md">
              {t("contact_subtitle")}
            </p>

            {/* Datos directos */}
            <div className="mt-12 flex flex-col gap-4">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 text-ink hover:text-accent transition-colors font-mono text-sm tracking-wider"
              >
                {site.email}
                <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a href={whatsappUrl(language === "es" ? "Hola DevHorses, me gustaría conversar sobre mi proyecto." : "Hi DevHorses, I'd like to discuss my project.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-accent text-sm"><MessageCircle size={17}/>{site.phone}<ArrowUpRight size={14}/></a>
              <span className="text-muted text-xs">{language === "es" ? "Respuesta inmediata · Soporte 24/7" : "Immediate response · 24/7 support"}</span>
              <span className="eyebrow">Lima — Perú</span>
            </div>
          </motion.div>

          {/* Formulario editorial */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">

              {/* Honeypot — invisible para humanos, visible para bots */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              <div>
                <label htmlFor="contact-name" className="eyebrow block mb-2">{t("contact_label_name")}</label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  required
                  className="input-editorial"
                  placeholder={t("contact_placeholder_name")}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="eyebrow block mb-2">{t("contact_label_email")}</label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  required
                  className="input-editorial"
                  placeholder={t("contact_placeholder_email")}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="eyebrow block mb-2">{t("contact_label_message")}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  className="input-editorial resize-none"
                  placeholder={t("contact_placeholder_message")}
                ></textarea>
              </div>

              {/* Cloudflare Turnstile — widget invisible de seguridad */}
              {TURNSTILE_SITE_KEY && <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken(null)}
                onExpire={() => setTurnstileToken(null)}
                options={{ appearance: "interaction-only", theme: "dark" }}
              />}

              <button
                type="submit"
                disabled={isSubmitting || (!!TURNSTILE_SITE_KEY && !turnstileToken)}
                className="btn-accent w-full py-5 text-base disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none group"
              >
                {isSubmitting ? t("contact_btn_sending") : !TURNSTILE_SITE_KEY ? (language === "es" ? "Enviar por correo" : "Send by email") : t("contact_btn_send")}
                {!isSubmitting && (
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform duration-300"
                  />
                )}
              </button>

              {status === "success" && (
                <p className="text-accent text-center text-sm font-medium -mt-4">
                  {t("contact_success")}
                </p>
              )}
              {status === "ratelimit" && (
                <p className="text-yellow-500 text-center text-sm font-medium -mt-4">
                  {language === "es" ? "Demasiados intentos. Espera un momento antes de reintentar." : "Too many attempts. Please wait before trying again."}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center text-sm font-medium -mt-4">
                  {errorMsg || (language === "es" ? "Hubo un error al enviar. Intenta de nuevo o escríbenos por WhatsApp." : "Your message could not be sent. Please try again or contact us on WhatsApp.")}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
