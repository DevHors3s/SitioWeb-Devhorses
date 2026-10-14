"use client";

import { Fragment } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/lib/site";

const policyCopy = {
  es: {
    title: "Política de Privacidad", updated: "Última actualización: octubre de 2026",
    sections: [
      { title: "Responsable del tratamiento", paragraphs: ['DevHorses ("nosotros", "nuestro"), con base en Lima, Perú y contacto en {email}, es responsable del tratamiento de los datos personales que recopilamos a través de devhorses.com (el "Sitio").'] },
      { title: "Qué datos recopilamos", paragraphs: ["Recopilamos los datos que nos proporcionas voluntariamente al usar el formulario de contacto:", "El Sitio no utiliza cookies de analítica ni de publicidad, ni herramientas de seguimiento de comportamiento como Google Analytics o Meta Pixel. Si incorporamos alguna, actualizaremos esta política y solicitaremos tu consentimiento cuando corresponda.", "Tu navegador guarda tu preferencia de idioma para recordarla al volver al Sitio. Esta preferencia no se utiliza para analizar tu comportamiento."], items: ["Nombre completo", "Dirección de correo electrónico", "El contenido de tu mensaje"] },
      { title: "Para qué usamos tus datos", paragraphs: ["Usamos los datos del formulario exclusivamente para responder tu consulta o solicitud de cotización y coordinar una eventual propuesta o reunión de trabajo. No los usamos para enviarte marketing sin tu consentimiento previo ni para fines distintos a los descritos aquí."] },
      { title: "Con quién compartimos tus datos", paragraphs: ["No vendemos ni cedemos tus datos a terceros con fines comerciales. Para operar el formulario, tus datos pasan por estos proveedores, bajo sus propias políticas de seguridad:"], items: ["Resend: envío del correo con tu mensaje.", "Cloudflare: DNS, protección contra bots y verificación anti-spam con Turnstile.", "Vercel: hospedaje del Sitio."] },
      { title: "Cuánto tiempo conservamos tus datos", paragraphs: ["Conservamos los mensajes solo el tiempo necesario para atender tu consulta y, si corresponde, dar seguimiento comercial. Puedes solicitar la eliminación de tus datos en cualquier momento escribiendo a {email}."] },
      { title: "Tus derechos", paragraphs: ["De acuerdo con la Ley N.º 29733, Ley de Protección de Datos Personales, y su Reglamento (D.S. N.º 016-2024-JUS), tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos (derechos ARCO). Puedes ejercer estos derechos escribiendo a {email}, indicando tu nombre y el derecho que quieres ejercer."] },
      { title: "Contacto", paragraphs: ["Si tienes preguntas sobre esta política o el tratamiento de tus datos, escríbenos a {email}."] },
    ],
  },
  en: {
    title: "Privacy Policy", updated: "Last updated: October 2026",
    sections: [
      { title: "Data controller", paragraphs: ['DevHorses ("we", "our"), based in Lima, Peru and reachable at {email}, is responsible for processing personal data collected through devhorses.com (the "Site").'] },
      { title: "Data we collect", paragraphs: ["We collect the information you voluntarily provide through the contact form:", "The Site does not use analytics or advertising cookies, or behavioral tracking tools such as Google Analytics or Meta Pixel. If we introduce any, we will update this policy and request your consent where appropriate.", "Your browser stores your language preference to remember it when you return. This preference is not used to analyze your behavior."], items: ["Full name", "Email address", "The content of your message"] },
      { title: "How we use your data", paragraphs: ["We use contact-form data solely to respond to your inquiry or quote request and coordinate a possible proposal or meeting. We do not use it to send marketing without your prior consent, or for purposes other than those described here."] },
      { title: "Who processes your data", paragraphs: ["We do not sell or share your data with third parties for commercial purposes. To operate the form, your data passes through these providers under their own security policies:"], items: ["Resend: delivery of the email containing your message.", "Cloudflare: DNS, bot protection and Turnstile spam verification.", "Vercel: hosting the Site."] },
      { title: "How long we keep your data", paragraphs: ["We keep contact messages only as long as necessary to handle your inquiry and, where appropriate, follow up commercially. You may request deletion at any time by writing to {email}."] },
      { title: "Your rights", paragraphs: ["Under Peru's Law No. 29733 on Personal Data Protection and its Regulation (Supreme Decree No. 016-2024-JUS), you may access, rectify, cancel and object to the processing of your data (ARCO rights). To exercise these rights, write to {email}, stating your name and the right you wish to exercise."] },
      { title: "Contact", paragraphs: ["For questions about this policy or the processing of your data, contact {email}."] },
    ],
  },
};

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const copy = policyCopy[language];
  const emailText = (text: string) => text.split("{email}").map((part, i) => <Fragment key={i}>{i > 0 && <a href={`mailto:${site.email}`} className="text-accent hover:underline">{site.email}</a>}{part}</Fragment>);
  return <main className="page-main">
    <div className="site-container privacy-content">
      <h1>{copy.title}</h1>
      <p className="text-faint text-sm font-mono mt-4 mb-12">{copy.updated}</p>
      <div className="flex flex-col gap-10 text-muted text-base leading-relaxed">
        {copy.sections.map((section, i) => <section key={section.title}>
          <h2 className="font-display text-ink text-xl mb-3">{i + 1}. {section.title}</h2>
          <p>{emailText(section.paragraphs[0])}</p>
          {"items" in section && <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">{section.items?.map(item => <li key={item}>{item}</li>)}</ul>}
          {section.paragraphs.slice(1).map(paragraph => <p key={paragraph} className="mt-3">{emailText(paragraph)}</p>)}
        </section>)}
      </div>
    </div>
  </main>;
}
