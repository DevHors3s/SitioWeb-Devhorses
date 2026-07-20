"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Turnstile } from "@marsidev/react-turnstile";
import { ArrowUpRight } from "lucide-react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
const EASE = [0.22, 1, 0.36, 1] as const;

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error" | "ratelimit">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) return;

    setIsSubmitting(true);
    setStatus("idle");

    const form = formRef.current!;
    const name = (form.elements.namedItem("user_name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("user_email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement).value;

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
        setErrorMsg(data.error ?? "Error inesperado.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Intentá de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-40 bg-bg overflow-hidden">
      {/* Halo dorado inferior */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] glow-accent pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 sm:px-16 md:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Titular editorial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="lg:col-span-6"
          >
            <span className="eyebrow block mb-8">( 06 — {t("contact_title_gradient")} )</span>
            <h2 className="font-display text-ink text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.98] tracking-tight mb-10">
              {t("contact_title_1")}{" "}
              <em className="text-gradient-accent italic">{t("contact_title_gradient")}</em>
            </h2>
            <p className="text-muted text-lg md:text-xl leading-relaxed max-w-md">
              {t("contact_subtitle")}
            </p>

            {/* Datos directos */}
            <div className="mt-12 flex flex-col gap-4">
              <a
                href="mailto:hola@devhorses.com"
                className="group flex items-center gap-3 text-ink hover:text-accent transition-colors font-mono text-sm tracking-wider"
              >
                hola@devhorses.com
                <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
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
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">

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
                <label className="eyebrow block mb-2">{t("contact_label_name")}</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="input-editorial"
                  placeholder={t("contact_placeholder_name")}
                />
              </div>

              <div>
                <label className="eyebrow block mb-2">{t("contact_label_email")}</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="input-editorial"
                  placeholder={t("contact_placeholder_email")}
                />
              </div>

              <div>
                <label className="eyebrow block mb-2">{t("contact_label_message")}</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="input-editorial resize-none"
                  placeholder={t("contact_placeholder_message")}
                ></textarea>
              </div>

              {/* Cloudflare Turnstile — widget invisible de seguridad */}
              <Turnstile
                siteKey={TURNSTILE_SITE_KEY}
                onSuccess={(token) => setTurnstileToken(token)}
                onError={() => setTurnstileToken(null)}
                onExpire={() => setTurnstileToken(null)}
                options={{ appearance: "interaction-only", theme: "dark" }}
              />

              <button
                type="submit"
                disabled={isSubmitting || !turnstileToken}
                className="btn-accent w-full py-5 text-base disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none group"
              >
                {isSubmitting ? t("contact_btn_sending") : t("contact_btn_send")}
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
                  ⏳ Demasiados intentos. Esperá un momento antes de reintentar.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center text-sm font-medium -mt-4">
                  {errorMsg || "Hubo un error al enviar. Intentá de nuevo o escribinos por WhatsApp."}
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
