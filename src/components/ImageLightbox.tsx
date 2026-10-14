"use client";

import Image from "next/image";
import { useId, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export type GalleryImage = { src: string; caption: string; width: number; height: number };
export default function ImageLightbox({ images, initialIndex = 0, children }: { images: GalleryImage[]; initialIndex?: number; children: ReactNode }) {
  const { language } = useLanguage();
  const es = language === "es";
  const titleId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const [opened, setOpened] = useState(false);
  const image = images[index];
  const move = (direction: number) => setIndex((current) => (current + direction + images.length) % images.length);
  return <>
    <button type="button" className="image-expand-trigger" aria-label={`${es ? "Ampliar captura" : "Enlarge screenshot"}: ${images[initialIndex].caption}`} onClick={() => {
      setIndex(initialIndex);
      setOpened(true);
      dialog.current?.showModal();
    }}>
      {children}
      <span className="image-expand-label"><ZoomIn size={15}/>{es ? "Ampliar" : "Enlarge"}</span>
    </button>
    <dialog ref={dialog} className="image-lightbox" aria-labelledby={titleId} onClose={() => setOpened(false)} onClick={(event) => {
      if (event.target === event.currentTarget) dialog.current?.close();
    }} onKeyDown={(event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
    }}>
      <div className="lightbox-content">
        <header><h2 id={titleId}>{es ? "Por dentro del proyecto" : "Inside the project"}</h2><button type="button" onClick={() => dialog.current?.close()} aria-label={es ? "Cerrar captura" : "Close screenshot"}><X size={22}/></button></header>
        {opened && <div className="lightbox-image"><Image src={image.src} alt={image.caption} width={image.width} height={image.height} sizes="95vw" /></div>}
        <footer>
          <p>{image.caption}</p>
          <div className="lightbox-actions">
            {images.length > 1 && <><button onClick={() => move(-1)} aria-label={es ? "Captura anterior" : "Previous screenshot"}><ArrowLeft size={19}/></button><span>{index + 1} / {images.length}</span><button onClick={() => move(1)} aria-label={es ? "Siguiente captura" : "Next screenshot"}><ArrowRight size={19}/></button></>}
            <a href={image.src} target="_blank" rel="noopener noreferrer">{es ? "Ver a tamaño completo" : "View full size"}</a>
          </div>
        </footer>
      </div>
    </dialog>
  </>;
}
