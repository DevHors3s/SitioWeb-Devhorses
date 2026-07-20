import ProjectsSection from "@/components/ProjectsSection";

export default function ProyectosPage() {
  return (
    <main className="bg-bg min-h-screen">
      {/* 'pt-20' añade el espacio necesario para que el Navbar fijo no tape el título */}
      <div className="pt-20">
        <ProjectsSection />
      </div>
    </main>
  );
}