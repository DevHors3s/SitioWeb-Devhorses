import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | DevHorses",
  description: "Cómo DevHorses recopila, usa y protege tus datos personales al contactarnos a través de devhorses.com.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-3xl mx-auto px-6 sm:px-16 md:px-24 pt-32 pb-24">
        <h1 className="font-display text-ink text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
          Política de Privacidad
        </h1>
        <p className="text-faint text-sm font-mono mb-12">Última actualización: septiembre de 2026</p>

        <div className="flex flex-col gap-10 text-muted text-base leading-relaxed">
          <section>
            <h2 className="font-display text-ink text-xl mb-3">1. Responsable del tratamiento</h2>
            <p>
              DevHorses ("nosotros", "nuestro"), con contacto en{" "}
              <a href="mailto:hola@devhorses.com" className="text-accent hover:underline">hola@devhorses.com</a>,
              con base en Lima, Perú, es responsable del tratamiento de los datos personales que recopilamos a
              través de devhorses.com (el "Sitio").
            </p>
          </section>

          <section>
            <h2 className="font-display text-ink text-xl mb-3">2. Qué datos recopilamos</h2>
            <p>Recopilamos únicamente los datos que nos proporcionás voluntariamente al usar el formulario de contacto del Sitio:</p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>El contenido del mensaje que nos escribís</li>
            </ul>
            <p className="mt-3">
              Al día de hoy, el Sitio no utiliza cookies de analítica ni de publicidad, y no instala herramientas
              de seguimiento de comportamiento (Google Analytics, Meta Pixel u otras). Si en el futuro incorporamos
              alguna, actualizaremos esta política y solicitaremos tu consentimiento cuando corresponda.
            </p>
          </section>

          <section>
            <h2 className="font-display text-ink text-xl mb-3">3. Para qué usamos tus datos</h2>
            <p>Usamos los datos del formulario de contacto exclusivamente para:</p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li>Responder tu consulta o solicitud de cotización</li>
              <li>Coordinar una eventual propuesta o reunión de trabajo</li>
            </ul>
            <p className="mt-3">No usamos tus datos para enviarte marketing sin tu consentimiento previo, ni los usamos con fines distintos a los aquí descritos.</p>
          </section>

          <section>
            <h2 className="font-display text-ink text-xl mb-3">4. Con quién compartimos tus datos</h2>
            <p>
              No vendemos ni cedemos tus datos a terceros con fines comerciales. Para poder operar el formulario
              de contacto, tus datos pasan por los siguientes proveedores, que actúan como encargados del
              tratamiento bajo sus propias políticas de seguridad:
            </p>
            <ul className="list-disc pl-6 mt-3 flex flex-col gap-1.5">
              <li><strong className="text-ink">Resend</strong> — servicio usado para enviarnos el correo con tu mensaje.</li>
              <li><strong className="text-ink">Cloudflare</strong> — DNS, protección contra bots y verificación anti-spam (Turnstile) del formulario.</li>
              <li><strong className="text-ink">Vercel</strong> — hospedaje del Sitio.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-ink text-xl mb-3">5. Cuánto tiempo conservamos tus datos</h2>
            <p>
              Conservamos los mensajes de contacto solo el tiempo necesario para atender tu consulta y, si
              corresponde, dar seguimiento comercial. Podés solicitar la eliminación de tus datos en cualquier
              momento escribiéndonos a{" "}
              <a href="mailto:hola@devhorses.com" className="text-accent hover:underline">hola@devhorses.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-ink text-xl mb-3">6. Tus derechos</h2>
            <p>
              De acuerdo con la Ley N.º 29733, Ley de Protección de Datos Personales, y su Reglamento (D.S. N.º
              016-2024-JUS), tenés derecho a acceder, rectificar, cancelar y oponerte (derechos ARCO) al
              tratamiento de tus datos personales. Podés ejercer estos derechos escribiéndonos a{" "}
              <a href="mailto:hola@devhorses.com" className="text-accent hover:underline">hola@devhorses.com</a>,
              indicando tu nombre y el derecho que querés ejercer.
            </p>
          </section>

          <section>
            <h2 className="font-display text-ink text-xl mb-3">7. Contacto</h2>
            <p>
              Si tenés preguntas sobre esta Política de Privacidad o sobre cómo tratamos tus datos, escribinos a{" "}
              <a href="mailto:hola@devhorses.com" className="text-accent hover:underline">hola@devhorses.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
