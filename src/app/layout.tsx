import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./sections.css";
import "./interactions.css";
import "./service-details.css";
import "./mascot.css";

// IMPORTAR COMPONENTES GLOBALES
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDock from "@/components/ContactDock";
import CardEffects from "@/components/CardEffects";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DevHorses — Webs, Sistemas y Automatizaciones | Lima, Perú",
  description: "Webs, sistemas de gestión y automatizaciones para conectar tus clientes con la operación de tu negocio. Lima, Perú. Respuesta inmediata y soporte 24/7.",
  keywords: [
    "desarrollo web Lima",
    "agencia digital Perú",
    "diseño web Lima",
    "aplicaciones móviles Perú",
    "tienda online Lima",
    "e-commerce Perú",
    "sistemas de gestión Lima",
    "automatización de procesos Perú",
    "branding Lima",
    "DevHorses",
    "páginas web para negocios",
    "desarrollo de software Lima",
  ],
  authors: [{ name: "DevHorses", url: "https://www.devhorses.com" }],
  creator: "DevHorses",
  metadataBase: new URL("https://www.devhorses.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.devhorses.com",
    siteName: "DevHorses",
    title: "DevHorses — Webs, Sistemas y Automatizaciones | Lima, Perú",
    description: "Webs, sistemas de gestión y automatizaciones a medida. Respuesta inmediata y soporte 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevHorses — Desarrollo Web y Apps en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHorses — Webs, Sistemas y Automatizaciones | Lima, Perú",
    description: "Webs, sistemas de gestión y automatizaciones a medida en Lima, Perú.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        <JsonLd />
        <LanguageProvider>
          <SmoothScroll>

            <Navbar />

            {children}

            <Footer />

            <ContactDock />
            <CardEffects />

          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
