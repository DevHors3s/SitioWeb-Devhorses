import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/51981916198?text=${encodeURIComponent(
    "Hola DevHorses, entré a un link roto en su web y quería avisarles 🙂"
  )}`;

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden px-6">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] glow-accent pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        <span className="eyebrow block mb-8">( 404 — Página no encontrada )</span>
        <h1 className="font-display text-ink text-6xl sm:text-7xl md:text-8xl tracking-tight mb-6">
          <em className="text-gradient-accent italic">Ups.</em>
        </h1>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-10">
          La página que buscás no existe o se movió de lugar. Volvé al inicio o escribinos si creés que es un error nuestro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-accent px-7 py-3.5 text-sm group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-7 py-3.5 text-sm"
          >
            <MessageCircle size={16} />
            Avisar por WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
