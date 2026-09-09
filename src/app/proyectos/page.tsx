import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Proyectos y Casos de Cliente | DevHorses Lima",
  description: "Webs, sistemas de gestión y apps que construimos y mantenemos en producción para clientes reales en Lima y Latinoamérica: hotelería, salud, agroexportación y más.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <main className="bg-bg min-h-screen">
      <h1 className="sr-only">Proyectos y Casos de Cliente de DevHorses</h1>
      {/* 'pt-20' añade el espacio necesario para que el Navbar fijo no tape el título */}
      <div className="pt-20">
        <ProjectsSection />
      </div>
    </main>
  );
}