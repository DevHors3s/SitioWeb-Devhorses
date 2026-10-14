"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { sceneForPath, type HorseScene } from "@/lib/horse-dialogue";

const scenes: HorseScene[] = [
  "hero",
  "services",
  "apu-case",
  "projects",
  "process",
  "testimonials",
  "instagram",
  "contact",
  "footer",
];
const leftScenes = new Set<HorseScene>([
  "process",
  "testimonials",
  "instagram",
  "selekta",
]);
const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));
const mix = (from: number, to: number, progress: number) =>
  from + (to - from) * progress;

/** One persistent character: scroll interpolates its hero position into its travelling position. */
export function useHorseJourney(
  root: RefObject<HTMLDivElement | null>,
  pathname: string,
) {
  const [state, setState] = useState<{ path: string; scene: HorseScene }>({
    path: "",
    scene: "hero",
  });
  const mode = useRef<"hero" | "morph" | "floating">("hero");
  const scene = state.path === pathname ? state.scene : sceneForPath(pathname);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let flightTimer: ReturnType<typeof setTimeout> | undefined;
    let lastLane = "right";
    let lastMode = "hero";
    let initialized = false;

    const update = () => {
      frame = 0;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mobile = width < 768;
      const maximum = Math.max(
        0,
        document.documentElement.scrollHeight - height,
      );
      const overall = maximum ? clamp(window.scrollY / maximum, 0, 1) : 0;
      const focus = height * 0.45;
      let active = sceneForPath(pathname);
      if (pathname === "/") {
        let nearest = Infinity;
        for (const candidate of scenes) {
          const bounds = document
            .getElementById(candidate)
            ?.getBoundingClientRect();
          if (!bounds) continue;
          const distance =
            bounds.top > focus
              ? bounds.top - focus
              : bounds.bottom < focus
                ? focus - bounds.bottom
                : 0;
          if (distance < nearest) {
            nearest = distance;
            active = candidate;
          }
        }
      } else if (
        (document.getElementById("footer")?.getBoundingClientRect().top ??
          Infinity) <= focus
      )
        active = "footer";
      if (
        maximum > 0 &&
        window.scrollY >= maximum - 4 &&
        document.getElementById("footer")
      )
        active = "footer";

      const anchor =
        pathname === "/"
          ? document
              .getElementById("horse-home-anchor")
              ?.getBoundingClientRect()
          : undefined;
      const anchorDocumentTop = anchor ? anchor.top + window.scrollY : 0;
      const start = anchor ? Math.max(24, anchorDocumentTop - height * 0.3) : 0;
      const journeyLength =
        Math.min(
          document.getElementById("hero")?.offsetHeight ?? height,
          height,
        ) * 0.62;
      let progress = anchor
        ? clamp((window.scrollY - start) / journeyLength, 0, 1)
        : 1;
      if (reduced.matches && anchor) progress = progress < 0.5 ? 0 : 1;
      const easing = progress * progress * (3 - 2 * progress);
      const currentMode =
        progress === 0 ? "hero" : progress >= 0.999 ? "floating" : "morph";
      mode.current = currentMode;
      // Stay on each side for a group of sections before crossing again.
      const lane =
        currentMode !== "floating" || reduced.matches
          ? "right"
          : leftScenes.has(active)
            ? "left"
            : "right";
      const size = mobile ? (width < 360 ? 96 : 120) : 166;
      const margin = mobile ? 12 : 20;
      const endX = lane === "left" ? margin : width - size - margin;
      const endY = mobile
        ? height - size * (480 / 440) - 22
        : clamp(115 + (height - 350) * overall, 105, height - 225);
      const startX = anchor?.left ?? endX;
      const startY = anchor?.top ?? endY;
      const startWidth = anchor?.width ?? size;
      const drawnWidth = mix(startWidth, size, easing);
      const arc = Math.sin(progress * Math.PI);
      const angle = (arc * 7 * Math.PI) / 180;
      const rotatedWidth =
        drawnWidth * (Math.cos(angle) + (480 / 440) * Math.sin(angle));
      const x = clamp(
        mix(startX, endX, easing) + arc * (mobile ? 12 : 32),
        margin,
        width - margin - rotatedWidth,
      );
      // Keep the rotating character below navigation and inside the screen during departure.
      const y = Math.max(
        100 + drawnWidth * Math.sin(angle),
        mix(startY, endY, easing) - arc * 45,
      );
      const scale = drawnWidth / 435;
      element.style.setProperty(
        "--character-transform",
        `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0) scale(${scale.toFixed(5)}) rotate(${(-arc * 7).toFixed(2)}deg)`,
      );

      const bubbleWidth = mobile ? (width < 360 ? 176 : 184) : 224;
      const heroBubbleX = x + drawnWidth / 2 - bubbleWidth / 2;
      const heroBubbleY = y + drawnWidth * (480 / 440) + 5;
      const floatingBubbleX =
        lane === "left" ? endX + size + 10 : endX - bubbleWidth - 10;
      const floatingBubbleY = clamp(endY + 16, 100, height - 170);
      const bubbleX = clamp(
        mix(heroBubbleX, floatingBubbleX, easing),
        10,
        width - bubbleWidth - 10,
      );
      const bubbleY = mix(heroBubbleY, floatingBubbleY, easing);
      element.style.setProperty(
        "--speech-transform",
        `translate3d(${bubbleX.toFixed(2)}px,${bubbleY.toFixed(2)}px,0)`,
      );
      element.style.setProperty(
        "--speech-opacity",
        String(
          progress < 0.5
            ? Math.max(0, 1 - progress * 4)
            : Math.max(0, (progress - 0.75) * 4),
        ),
      );
      element.dataset.mode = currentMode;
      element.dataset.lane = lane;
      element.dataset.ready = "true";
      const speech = element.querySelector<HTMLElement>(".guide-speech");
      const trigger =
        element.querySelector<HTMLButtonElement>(".character-trigger");
      if (speech)
        speech.inert =
          currentMode === "morph" || Boolean(element.dataset.flying);
      if (trigger) trigger.disabled = currentMode === "morph";

      if (
        initialized &&
        lastMode === "floating" &&
        currentMode === "floating" &&
        lane !== lastLane &&
        !reduced.matches
      ) {
        element.dataset.flying = lane;
        if (flightTimer) clearTimeout(flightTimer);
        if (speech) speech.inert = true;
        flightTimer = setTimeout(() => {
          delete element.dataset.flying;
          const currentSpeech =
            element.querySelector<HTMLElement>(".guide-speech");
          if (currentSpeech) currentSpeech.inert = mode.current === "morph";
        }, 1400);
      }
      if (currentMode !== "floating") {
        delete element.dataset.flying;
        if (flightTimer) clearTimeout(flightTimer);
      }
      lastLane = lane;
      lastMode = currentMode;
      initialized = true;
      setState((previous) =>
        previous.path === pathname && previous.scene === active
          ? previous
          : { path: pathname, scene: active },
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      if (flightTimer) clearTimeout(flightTimer);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, [pathname, root]);

  return { scene, mode };
}
