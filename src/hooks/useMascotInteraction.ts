"use client";
import { useEffect, type RefObject } from "react";

/** Direct style writes keep pointer tracking out of React's render loop. */
export function useMascotInteraction(root: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const element = root.current;
    const surface = element?.closest<HTMLElement>(".character-trigger") ?? element;
    if (!element || !surface) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let visible = false, frame = 0, previousTime = 0;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    let lastGreeting = -Infinity;
    let greetingTimer: ReturnType<typeof setTimeout> | undefined;
    const active = () => visible && !document.hidden && !reduce.matches && !element.closest('[data-minimized="true"]');
    const write = () => {
      element.style.setProperty("--dh-look-x", x.toFixed(4));
      element.style.setProperty("--dh-look-y", y.toFixed(4));
    };
    const draw = (time: number) => {
      frame = 0;
      if (!active()) return;
      const dt = previousTime ? Math.min(64, time - previousTime) : 16;
      previousTime = time;
      const step = 1 - Math.exp(-dt / 110);
      x += (targetX - x) * step; y += (targetY - y) * step;
      write();
      if (Math.abs(x - targetX) + Math.abs(y - targetY) > .002) frame = requestAnimationFrame(draw);
      else previousTime = 0;
    };
    const schedule = () => { if (!frame && active()) frame = requestAnimationFrame(draw); };
    const reset = () => { targetX = targetY = 0; schedule(); };
    const greet = () => {
      const now = performance.now();
      if (!active() || now - lastGreeting < 6500) return;
      lastGreeting = now; element.dataset.greeting = "true";
      clearTimeout(greetingTimer);
      greetingTimer = setTimeout(() => delete element.dataset.greeting, 1500);
    };
    const enter = (event: PointerEvent) => { if (fine.matches && event.pointerType !== "touch") greet(); };
    const move = (event: PointerEvent) => {
      if (!active() || !fine.matches || event.pointerType === "touch") return;
      const bounds = surface.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      schedule();
    };
    const sync = () => {
      element.dataset.motion = active() ? "running" : "paused";
      if (!active()) {
        cancelAnimationFrame(frame); frame = 0; previousTime = 0;
        x = y = targetX = targetY = 0; write();
        clearTimeout(greetingTimer); delete element.dataset.greeting;
      }
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(element);
    const companion = element.closest(".travel-companion");
    const presence = new MutationObserver(sync);
    if (companion) presence.observe(companion, { attributes: true, attributeFilter: ["data-minimized"] });
    surface.addEventListener("pointerenter", enter);
    surface.addEventListener("pointermove", move, { passive: true });
    surface.addEventListener("pointerleave", reset);
    surface.addEventListener("pointercancel", reset);
    // Click follows a tap; pointerdown would also greet during touch scrolling.
    surface.addEventListener("click", greet);
    surface.addEventListener("focus", greet);
    surface.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", sync);
    reduce.addEventListener("change", sync);
    fine.addEventListener("change", reset);
    return () => {
      observer.disconnect(); presence.disconnect(); cancelAnimationFrame(frame); clearTimeout(greetingTimer);
      surface.removeEventListener("pointerenter", enter);
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerleave", reset);
      surface.removeEventListener("pointercancel", reset);
      surface.removeEventListener("click", greet);
      surface.removeEventListener("focus", greet);
      surface.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", sync);
      reduce.removeEventListener("change", sync);
      fine.removeEventListener("change", reset);
    };
  }, [root]);
}
