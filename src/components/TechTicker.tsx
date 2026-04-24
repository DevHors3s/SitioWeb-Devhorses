"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

// Definimos la lista de tecnologías con su nombre y la ruta a su imagen
// IMPORTANTE: Asegúrate de tener estos archivos en la carpeta /public/logos/
const technologies = [
  { name: "React", src: "/logos/react.svg" },
  { name: "Next.js", src: "/logos/nextdotjs.svg" },      // Corregido
  { name: "Tailwind CSS", src: "/logos/tailwindcss.svg" }, // Corregido
  { name: "TypeScript", src: "/logos/typescript.svg" },
  { name: "Node.js", src: "/logos/nodedotjs.svg" },      // Corregido
  { name: "Figma", src: "/logos/figma.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "Python", src: "/logos/python.svg" },
];

const TechTicker = () => {
  const { t } = useLanguage();
  return (
    <section className="py-8 bg-[#0A0F1C] border-y border-slate-800/50 overflow-hidden relative z-20">

      <p className="text-center text-slate-500 text-sm mb-8 tracking-wider uppercase font-medium">
        {t("tech_ticker_title")}
      </p>

      <div className="flex">
        {/* Contenedor animado */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30, // Un poco más lento para apreciar los logos
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 pr-20 items-center"
        >
          {/* Duplicamos la lista para el efecto infinito */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center"
              title={tech.name} // Muestra el nombre al dejar el mouse quieto
            >
              {/* Contenedor de la imagen con tamaño fijo */}
              <div className="relative h-12 w-32 md:h-16 md:w-40 transition-all duration-300 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110">
                {/* Componente Image de Next.js */}
                <Image
                  src={tech.src}
                  alt={`${tech.name} logo`}
                  fill // Hace que la imagen llene el contenedor padre
                  className="object-contain" // Mantiene la proporción sin estirarse
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Sombras laterales (Vignette) más pronunciadas */}
      <div className="absolute top-0 left-0 w-40 h-full bg-linear-to-r from-[#0A0F1C] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-40 h-full bg-linear-to-l from-[#0A0F1C] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};

export default TechTicker;