import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// IMPORTAR COMPONENTES GLOBALES
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHorses — Desarrollo Web, Apps & Branding | Lima, Perú",
  description: "Agencia de desarrollo web y aplicaciones en Lima. Diseñamos y lanzamos webs, tiendas online y apps que generan clientes reales. Consultoría gratuita. Respuesta inmediata.",
  keywords: [
    "desarrollo web Lima",
    "agencia digital Perú",
    "diseño web Lima",
    "aplicaciones móviles Perú",
    "tienda online Lima",
    "e-commerce Perú",
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
    title: "DevHorses — Desarrollo Web, Apps & Branding | Lima, Perú",
    description: "Agencia de desarrollo web y aplicaciones en Lima. Webs, tiendas online y apps que generan clientes reales. Consultoría gratuita.",
    images: [
      {
        url: "/logo-full.png",
        width: 1200,
        height: 630,
        alt: "DevHorses — Desarrollo Web y Apps en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevHorses — Desarrollo Web, Apps & Branding | Lima, Perú",
    description: "Agencia de desarrollo web y aplicaciones en Lima. Webs y apps que generan clientes reales.",
    images: ["/logo-full.png"],
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
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          
          <Navbar /> 
          
          {children}

          <Footer />
          
          {/* Botón flotante de WhatsApp */}
          <WhatsAppButton />

        </LanguageProvider>
      </body>
    </html>
  );
}