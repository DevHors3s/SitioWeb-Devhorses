import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Servicios de Desarrollo Web y Apps en Lima | DevHorses",
  description: "Desarrollo web con Next.js, apps móviles iOS/Android, branding y e-commerce en Lima, Perú. Consultoría gratuita y respuesta inmediata.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-bg">
      <h1 className="sr-only">Servicios de Desarrollo Web, Apps y Branding en Lima</h1>
      <div className="pt-32">
        <Services />
      </div>
    </main>
  );
}