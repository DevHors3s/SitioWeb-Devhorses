"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { horseDialogue, type HorseScene } from "@/lib/horse-dialogue";

export function useHorseDialogue(scene: HorseScene, enabled = true) {
  const { language } = useLanguage();
  const copy = horseDialogue[language][scene];
  const context = `${scene}-${language}`;
  const [rotation, setRotation] = useState({ context: "", count: 0 });
  // A new section or language starts with its introduction immediately.
  const count = rotation.context === context ? rotation.count : 0;
  const next = useCallback(() => {
    setRotation((previous) => ({
      context,
      count: previous.context === context ? previous.count + 1 : 1,
    }));
  }, [context]);

  useEffect(() => {
    if (!enabled) return;
    const interval = setInterval(() => {
      if (!document.hidden) next();
    }, 9000);
    return () => clearInterval(interval);
  }, [enabled, next]);

  return {
    ...copy.comments[count % copy.comments.length],
    label: copy.label,
    key: `${context}-${count}`,
    next,
  };
}
