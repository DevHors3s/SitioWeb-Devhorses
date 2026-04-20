"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(formRef.current!);
    formData.append("access_key", "392063e4-6c52-40e4-b3c6-1d749d3863d6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="absolute bottom-0 left-0 w-full h-125 bg-linear-to-t from-blue-900/10 to-transparent -z-10 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-white">
              {t("contact_title_1")} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">{t("contact_title_gradient")}</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-6 md:mb-10 max-w-md">
              {t("contact_subtitle")}
            </p>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-xl relative group"
          >
             {/* Borde neón sutil */}
             <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-500"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <input type="hidden" name="subject" value="Nuevo mensaje desde DevHorses Landing" />
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t("contact_label_name")}</label>
                <input type="text" name="user_name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder={t("contact_placeholder_name")}/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t("contact_label_email")}</label>
                <input type="email" name="user_email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder={t("contact_placeholder_email")}/>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t("contact_label_message")}</label>
                <textarea name="message" required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder={t("contact_placeholder_message")}></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="relative group w-full py-4 rounded-lg font-bold text-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-purple-500 to-fuchsia-500 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-400 via-white to-fuchsia-400 blur opacity-20 group-hover:opacity-50 animate-pulse"></div>
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? t("contact_btn_sending") : t("contact_btn_send")}
                  {!isSubmitting && (
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                  )}
                </span>
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center text-sm font-medium animate-pulse mt-2">
                  {t("contact_success")}
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