"use client";
import type { HorseMood } from "@/lib/horse-dialogue";
import DevHorsesMascot, { type MascotVariant } from "./DevHorsesMascot";

/** Adapter preserves the existing dialogue, journey and accessible contact button. */
export default function HorseMascot({ mood = "wave", reactionKey, variant }: {
  mood?: HorseMood; reactionKey?: string; variant?: MascotVariant;
}) {
  return <DevHorsesMascot mood={mood} reactionKey={reactionKey} variant={variant ?? (mood === "typing" ? "working" : "idle")} />;
}
