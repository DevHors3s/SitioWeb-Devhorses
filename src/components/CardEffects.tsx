"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

/** Progressive enhancement: all content stays visible when animation is unavailable. */
export default function CardEffects() {
  const pathname = usePathname();
  const { language } = useLanguage();
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-card]"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let active: HTMLElement | null = null;
    let bounds: DOMRect | null = null;
    let x = .5, y = .5;
    const observer = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).dataset.cardReveal = "visible";
        observer?.unobserve(entry.target);
      });
    }, { threshold: .1, rootMargin: "0px 0px -24px 0px" });
    cards.forEach((card, index) => {
      card.style.setProperty("--card-delay", `${(index % 4) * 65}ms`);
      if (reduced.matches || !observer) return;
      card.dataset.cardReveal = "waiting";
      observer.observe(card);
    });
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (active) {
        active.style.removeProperty("--card-rx");
        active.style.removeProperty("--card-ry");
        delete active.dataset.cardActive;
      }
      active = null;
      bounds = null;
    };
    const draw = () => {
      frame = 0;
      if (!active) return;
      active.style.setProperty("--card-x", `${(x * 100).toFixed(2)}%`);
      active.style.setProperty("--card-y", `${(y * 100).toFixed(2)}%`);
      active.style.setProperty("--card-rx", `${((.5 - y) * 4).toFixed(2)}deg`);
      active.style.setProperty("--card-ry", `${((x - .5) * 5).toFixed(2)}deg`);
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !fine.matches || event.pointerType === "touch") return;
      const card = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-motion-card]") : null;
      if (!card) { reset(); return; }
      if (card !== active) { reset(); active = card; active.dataset.cardActive = "true"; }
      bounds ??= card.getBoundingClientRect();
      x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const invalidate = () => { bounds = null; };
    const preference = () => {
      reset();
      if (reduced.matches) {
        observer?.disconnect();
        cards.forEach(card => { delete card.dataset.cardReveal; });
      }
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("scroll", invalidate, { passive: true });
    window.addEventListener("resize", invalidate);
    reduced.addEventListener("change", preference);
    return () => {
      reset();
      observer?.disconnect();
      cards.forEach(card => { delete card.dataset.cardReveal; });
      document.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("scroll", invalidate);
      window.removeEventListener("resize", invalidate);
      reduced.removeEventListener("change", preference);
    };
  }, [pathname, language]);
  return null;
}
