"use client";
import { useId, useRef } from "react";
import { preload } from "react-dom";
import type { HorseMood } from "@/lib/horse-dialogue";
import { useMascotInteraction } from "@/hooks/useMascotInteraction";

export type MascotVariant = "working" | "idle";
const atlas = "/mascot/devhorses-poses-v2.webp";
const brandmark = "/logo%20fondo%20oscuro.png";
type Badge = { x: number; y: number; size: number; angle?: number; skew?: number };
// Coordinates belong to the unchanged atlas, so badges travel/fade with their own pose.
const badges: Record<string, Badge[]> = {
  working: [
    { x: 178, y: 515, size: 88, angle: 2, skew: 13 },
    { x: 440, y: 486, size: 56, angle: -5 },
  ],
  friendly: [{ x: 1025, y: 515, size: 66, angle: -10 }],
  technology: [{ x: 413, y: 1091, size: 64, angle: -10 }],
};

function BrandBadge({ x, y, size, angle = 0, skew = 0 }: Badge) {
  return <g data-mascot-brand="devhorses-original" transform={`translate(${x} ${y}) rotate(${angle}) skewX(${skew})`}>
    <image href={brandmark} x={-size / 2} y={-size / 2} width={size} height={size} />
  </g>;
}

/** Each window contains a complete reference pose, including its own head and hands. */
function Pose({ name, crop, x, y, width, height, clipId }: {
  name: string; crop: string; x: number; y: number; width: number; height: number; clipId?: string;
}) {
  return <g className={`dh-pose dh-pose--${name}`}>
    <svg x={x} y={y} width={width} height={height} viewBox={crop} overflow="hidden">
      <image href={atlas} width="1254" height="1254" clipPath={clipId ? `url(#${clipId})` : undefined} />
      {badges[name]?.map((badge, index) => <BrandBadge key={index} {...badge} />)}
    </svg>
  </g>;
}

export default function DevHorsesMascot({ variant = "working", mood = "typing" }: {
  variant?: MascotVariant; mood?: HorseMood; reactionKey?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  const pose = mood === "thinking" ? "resting" : variant === "working" ? "working"
    : mood === "wave" || mood === "excited" ? "friendly" : "technology";
  preload(atlas, { as: "image", fetchPriority: "high" });
  useMascotInteraction(root);
  return (
    <div ref={root} className="horse-mascot dh-mascot" data-variant={variant} data-mood={mood} data-pose={pose} data-motion="paused">
      <svg viewBox="0 0 440 480" aria-hidden="true" focusable="false" className="horse-art dh-art">
        <defs>
          <radialGradient id={`${id}-light`}><stop stopColor="#02ddeb" stopOpacity=".3" /><stop offset="1" stopColor="#02ddeb" stopOpacity="0" /></radialGradient>
          {/* A stepped atlas boundary keeps the working tail without including the adjacent pose. */}
          <clipPath id={`${id}-working`}><path d="M0 0H650V410H680V635H0Z" /></clipPath>
          <clipPath id={`${id}-friendly`}><path d="M650 0H1254V650H680V410H650Z" /></clipPath>
        </defs>
        <ellipse cx="230" cy="455" rx="178" ry="16" fill={`url(#${id}-light)`} />
        <g className="dh-cursor-light"><ellipse cx="230" cy="285" rx="175" ry="155" fill={`url(#${id}-light)`} /></g>
        <g className="dh-tech dh-tech--code" transform="translate(19 168)"><g className="dh-tech-drift"><rect width="65" height="58" rx="12" /><path d="m23 19-10 10 10 10m20-20 10 10-10 10m-6-23-9 28" /></g></g>
        <g className="dh-tech dh-tech--chart" transform="translate(367 225)"><g className="dh-tech-drift"><rect width="48" height="52" rx="11" /><path d="M12 38V29m12 9V20m12 18V12" /></g></g>
        <Pose name="working" crop="0 0 680 635" x={18} y={75} width={404} height={377.3} clipId={`${id}-working`} />
        <Pose name="friendly" crop="650 0 604 650" x={35} y={35} width={370} height={398.2} clipId={`${id}-friendly`} />
        <Pose name="technology" crop="80 633 525 610" x={48} y={37} width={344} height={399.7} />
        <Pose name="resting" crop="620 675 600 560" x={20} y={76} width={400} height={373.3} />
        <g className="dh-screen-glow"><ellipse cx="195" cy="348" rx="120" ry="90" fill={`url(#${id}-light)`} /></g>
        <g className="dh-thought"><circle cx="357" cy="132" r="3" /><circle cx="371" cy="111" r="5" /><g className="dh-thought-bubble"><rect x="336" y="51" width="78" height="47" rx="22" /><circle cx="356" cy="75" r="3" /><circle cx="375" cy="75" r="3" /><circle cx="394" cy="75" r="3" /></g></g>
        <g className="dh-greeting-spark"><path d="m402 205 3-10m7 20 10-2m-12 13 6 8" /></g>
      </svg>
    </div>
  );
}
