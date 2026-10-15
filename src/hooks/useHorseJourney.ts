"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { sceneForPath, type HorseScene } from "@/lib/horse-dialogue";
import { clamp, mix, damp, dampPose, smoothstep, horseLane, type HorsePose as Position } from "@/lib/horse-motion";

const scenes: HorseScene[] = ["hero", "services", "apu-case", "projects", "process", "testimonials", "instagram", "contact", "footer"];
type Mode = "hero" | "morph" | "floating";
type Journey = { path: string; scene: HorseScene; mode: Mode; docked: boolean };

/** Layout is measured separately; one RAF owns both departure and side crossings. */
export function useHorseJourney(root: RefObject<HTMLDivElement | null>, pathname: string) {
  const [state, setState] = useState<Journey>({ path: "", scene: "hero", mode: "hero", docked: false });
  const mode = useRef<Mode>("hero");

  useEffect(() => {
    const element = root.current;
    const avatar = element?.querySelector<HTMLElement>(".travel-avatar");
    const speech = element?.querySelector<HTMLElement>(".guide-speech");
    const trigger = element?.querySelector<HTMLButtonElement>(".character-trigger");
    const minimize = element?.querySelector<HTMLElement>(".companion-minimize");
    if (!element || !avatar || !speech || !trigger || !minimize) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const anchor = pathname === "/" ? document.getElementById("horse-home-anchor") : null;
    let frame = 0;
    let previousTime = 0;
    let scroll = window.scrollY;
    let dirty = true;
    let published = "";
    let lastLane = "right";
    let position: Position | null = null;
    let flight: { start: Position; time: number } | null = null;
    let bubbleHeight = 168;
    let layout = { width: 0, height: 0, maximum: 0, start: 0, length: 1,
      anchor: null as { x: number; top: number; width: number } | null,
      sections: [] as { scene: HorseScene; top: number; bottom: number }[] };

    const measure = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const bounds = anchor?.getBoundingClientRect();
      const top = bounds ? bounds.top + window.scrollY : 0;
      const start = bounds ? Math.max(24, top - height * .3) : 0;
      const services = pathname === "/" ? document.getElementById("services")?.getBoundingClientRect() : null;
      layout = {
        width, height,
        maximum: Math.max(0, document.documentElement.scrollHeight - height),
        start,
        // Finish before the services anchor settles beneath the fixed navigation.
        length: Math.max(1, Math.min(
          Math.min(document.getElementById("hero")?.offsetHeight ?? height, height) * .78,
          services ? services.top + window.scrollY - 112 - start : Infinity,
        )),
        anchor: bounds ? { x: bounds.left, top, width: bounds.width } : null,
        sections: (pathname === "/" ? scenes : ["footer" as HorseScene]).flatMap(scene => {
          const rect = document.getElementById(scene)?.getBoundingClientRect();
          return rect ? [{ scene, top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY }] : [];
        }),
      };
      bubbleHeight = speech.offsetHeight || bubbleHeight;
      dirty = false;
    };

    const draw = (time: number) => {
      frame = 0;
      if (dirty) measure();
      const dt = previousTime ? Math.min(64, time - previousTime) : 16;
      previousTime = time;
      const targetScroll = window.scrollY;
      scroll = reduced.matches || !position ? targetScroll : damp(scroll, targetScroll, dt, 65);
      if (Math.abs(scroll - targetScroll) < .05) scroll = targetScroll;
      const { width, height, maximum } = layout;
      const docked = width < 1280 || height < 620;
      const focus = targetScroll + height * .45;
      let active = sceneForPath(pathname);
      let nearest = Infinity;
      for (const section of layout.sections) {
        const distance = Math.max(section.top - focus, focus - section.bottom, 0);
        if (pathname === "/" && distance < nearest) { nearest = distance; active = section.scene; }
        else if (pathname !== "/" && section.top <= focus) active = "footer";
      }
      if (maximum > 0 && targetScroll >= maximum - 4 && layout.sections.some(s => s.scene === "footer")) active = "footer";
      let progress = layout.anchor ? clamp((scroll - layout.start) / layout.length, 0, 1) : 1;
      if (reduced.matches) progress = progress < .5 ? 0 : 1;
      const easing = smoothstep(progress);
      const currentMode: Mode = progress === 0 ? "hero" : progress === 1 ? "floating" : "morph";
      const lane = currentMode !== "floating" || reduced.matches ? "right" : horseLane(active);
      const size = docked ? 64 : 124;
      const margin = docked ? 12 : 18;
      // Wide screens have reserved gutters; smaller screens use a separate bottom strip.
      const endX = lane === "left" ? margin : width - size - (docked ? 52 : margin);
      const overall = maximum ? clamp(scroll / maximum, 0, 1) : 0;
      const endY = docked ? height - size * (480 / 440) - 12 : clamp(Math.max(280 + (height - 520) * overall, bubbleHeight + 117), 250, height - 180);
      const startX = layout.anchor?.x ?? endX;
      const startY = layout.anchor ? layout.anchor.top - scroll : endY;
      const startSize = layout.anchor?.width ?? size;
      const arc = Math.sin(progress * Math.PI);
      const desired: Position = {
        x: mix(startX, endX, easing) + arc * 20,
        y: mix(startY, endY, easing) - arc * 28,
        size: mix(startSize, size, easing), rotation: -arc * 5,
      };
      if (currentMode === "floating" && lane !== lastLane && position && !reduced.matches) {
        flight = { start: { ...position }, time };
        element.dataset.flying = lane;
      }
      if (currentMode !== "floating" || reduced.matches) { flight = null; delete element.dataset.flying; }
      if (flight) {
        const phase = clamp((time - flight.time) / 1200, 0, 1);
        const travel = smoothstep(phase);
        position = {
          x: mix(flight.start.x, endX, travel),
          y: mix(flight.start.y, endY, travel) - Math.sin(phase * Math.PI) * (docked ? 10 : 44),
          size: mix(flight.start.size, size, travel), rotation: Math.sin(phase * Math.PI) * (lane === "left" ? -4 : 4),
        };
        if (phase === 1) { flight = null; delete element.dataset.flying; }
      } else if (currentMode !== "hero" && position && !reduced.matches) {
        position = dampPose(position, desired, dt, 75);
      } else position = desired;

      const angle = Math.abs(position.rotation) * Math.PI / 180;
      const rotatedWidth = position.size * (Math.cos(angle) + (480 / 440) * Math.sin(angle));
      position.x = clamp(position.x, margin, width - margin - rotatedWidth);
      position.y = Math.max(100 + position.size * Math.sin(angle), position.y);
      // Direct transforms avoid inherited custom-property invalidation of the entire SVG tree.
      avatar.style.transform = `translate(${position.x}px,${position.y}px) scale(${position.size / 435}) rotate(${position.rotation}deg)`;
      const bubbleWidth = currentMode === "floating" ? (docked ? Math.min(520, width - 144) : 152) : 224;
      const heroX = position.x + position.size / 2 - bubbleWidth / 2;
      const heroY = position.y + position.size * (480 / 440) + 5;
      const bubbleX = currentMode === "floating"
        ? docked ? (lane === "left" ? 92 : width - bubbleWidth - 136) : (lane === "left" ? 10 : width - bubbleWidth - 10)
        : heroX;
      const bubbleY = currentMode === "floating" ? (docked ? height - 118 : Math.max(105, position.y - bubbleHeight - 12)) : heroY;
      const departing = currentMode !== "hero" && position.size > size + 1;
      const pixelRatio = window.devicePixelRatio || 1;
      const crisp = (value: number) => Math.round(value * pixelRatio) / pixelRatio;
      speech.style.transform = `translate(${crisp(clamp(bubbleX, 10, width - bubbleWidth - 10))}px,${crisp(bubbleY)}px)`;
      speech.style.opacity = String(flight || (departing && currentMode === "floating") ? 0 : currentMode === "morph" ? Math.max(0, 1 - progress * 5) : 1);
      speech.inert = currentMode === "morph" || departing || !!flight;
      trigger.disabled = currentMode === "morph" || departing || !!flight;
      minimize.style.transform = `translate(${crisp(position.x + position.size * .78)}px,${crisp(position.y + position.size * .25)}px)`;
      mode.current = currentMode;
      if (element.dataset.mode !== currentMode) element.dataset.mode = currentMode;
      if (element.dataset.lane !== lane) element.dataset.lane = lane;
      if (element.dataset.docked !== String(docked)) element.dataset.docked = String(docked);
      if (element.dataset.departing !== String(departing)) element.dataset.departing = String(departing);
      if (element.dataset.ready !== "true") element.dataset.ready = "true";
      const context = `${active}-${currentMode}-${docked}`;
      if (context !== published) { published = context; setState({ path: pathname, scene: active, mode: currentMode, docked }); }
      lastLane = lane;
      const moving = currentMode !== "hero" && Math.abs(position.x - desired.x) + Math.abs(position.y - desired.y) + Math.abs(position.size - desired.size) + Math.abs(position.rotation - desired.rotation) > .1;
      // Release the composited bitmap at rest so the browser can repaint the vector sharply.
      avatar.style.willChange = moving || flight || scroll !== targetScroll ? "transform" : "auto";
      if (scroll !== targetScroll || flight || moving) frame = requestAnimationFrame(draw);
      else previousTime = 0;
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(draw); };
    const resize = () => { dirty = true; schedule(); };
    const observer = new ResizeObserver(entries => {
      if (entries.some(entry => entry.target !== speech)) dirty = true;
      bubbleHeight = speech.offsetHeight || bubbleHeight;
      schedule();
    });
    observer.observe(document.body);
    observer.observe(speech);
    if (anchor) observer.observe(anchor);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize);
    reduced.addEventListener("change", resize);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      reduced.removeEventListener("change", resize);
    };
  }, [pathname, root]);

  return { scene: state.path === pathname ? state.scene : sceneForPath(pathname), mode, journeyMode: state.mode, docked: state.docked };
}
