import type { HorseScene } from "./horse-dialogue";

export const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
export const mix = (from: number, to: number, progress: number) => from + (to - from) * progress;
export const smoothstep = (progress: number) => progress * progress * (3 - 2 * progress);
/** Time-based damping gives the same movement at different display refresh rates. */
export const damp = (current: number, target: number, dt: number, duration: number) => mix(current, target, 1 - Math.exp(-dt / duration));
export type HorsePose = { x: number; y: number; size: number; rotation: number };
export function dampPose(current: HorsePose, target: HorsePose, dt: number, duration: number): HorsePose {
  return { x: damp(current.x, target.x, dt, duration), y: damp(current.y, target.y, dt, duration), size: damp(current.size, target.size, dt, duration), rotation: damp(current.rotation, target.rotation, dt, duration) };
}
export function horseLane(scene: HorseScene): "left" | "right" {
  return ["process", "testimonials", "instagram", "selekta"].includes(scene) ? "left" : "right";
}
