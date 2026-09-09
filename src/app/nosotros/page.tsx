import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Equipo DevHorses en Lima, Perú",
  description: "Conocé al equipo de DevHorses: desarrolladores y diseñadores en Lima que construyen productos digitales sin intermediarios, de principio a fin.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <main className="bg-bg min-h-screen">
      <div className="pt-20">
        <AboutSection />
      </div>
    </main>
  );
}