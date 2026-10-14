import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Política de Privacidad | DevHorses",
  description: "Cómo DevHorses recopila, usa y protege tus datos personales al contactarnos a través de devhorses.com.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: true, follow: true },
};

export default function PoliticaPrivacidadPage() {
  return <PrivacyPolicy />;
}
