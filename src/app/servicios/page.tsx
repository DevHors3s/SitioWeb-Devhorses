import type { Metadata } from "next";
import ServiceDetails from "@/components/ServiceDetails";

export const metadata: Metadata = {
  title: "Webs, Sistemas de Gestión y Automatizaciones | DevHorses",
  description: "Webs, tiendas online, sistemas de gestión, automatizaciones y aplicaciones a medida en Lima. Alcances claros, respuesta inmediata y soporte 24/7.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() { return <ServiceDetails />; }
