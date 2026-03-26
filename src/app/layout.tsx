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
  title: "DevHorses — Software que Genera Clientes | Desarrollo Web, Apps & Branding",
  description: "Diseñamos y desarrollamos plataformas digitales que generan clientes, automatizan procesos y escalan contigo. Consultoría gratuita. Lima, Perú.",
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