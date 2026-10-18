"use client";
import { useId, useRef } from "react";
import { preload } from "react-dom";
import type { HorseMood } from "@/lib/horse-dialogue";
import { useMascotInteraction } from "@/hooks/useMascotInteraction";

export type MascotVariant = "working" | "idle";
const atlas = "/mascot/devhorses-rig-v1.webp";

/** Native SVG windows register independent art layers without deforming pixels. */
function RigPart({ crop, x, y, width, height }: {
  crop: string; x: number; y: number; width: number; height: number;
}) {
  return <svg x={x} y={y} width={width} height={height} viewBox={crop} overflow="hidden">
    <image href={atlas} width="1254" height="1254" />
  </svg>;
}

export default function DevHorsesMascot({ variant = "working", mood = "typing", reactionKey }: {
  variant?: MascotVariant; mood?: HorseMood; reactionKey?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, "");
  preload(atlas, { as: "image", fetchPriority: "high" });
  useMascotInteraction(root);
  return (
    <div ref={root} className="horse-mascot dh-mascot" data-variant={variant} data-mood={mood} data-motion="paused">
      <svg viewBox="0 0 440 480" aria-hidden="true" focusable="false" className="horse-art dh-art">
        <defs>
          <linearGradient id={`${id}-case`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#223455" /><stop offset=".45" stopColor="#101a33" /><stop offset="1" stopColor="#090c1d" /></linearGradient>
          <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#24e5f4" /><stop offset=".5" stopColor="#3f629d" /><stop offset="1" stopColor="#9271f7" /></linearGradient>
          <radialGradient id={`${id}-light`}><stop stopColor="#02ddeb" stopOpacity=".3" /><stop offset="1" stopColor="#02ddeb" stopOpacity="0" /></radialGradient>
        </defs>
        <ellipse cx="235" cy="456" rx="176" ry="18" fill={`url(#${id}-light)`} />
        <g className="dh-tech dh-tech--code" transform="translate(34 170)"><g className="dh-tech-drift"><rect width="69" height="61" rx="12" /><path d="m24 20-10 10 10 10m21-20 10 10-10 10m-6-23-9 28" /></g></g>
        <g className="dh-tech dh-tech--chart" transform="translate(367 220)"><g className="dh-tech-drift"><rect width="48" height="52" rx="11" /><path d="M12 38V29m12 9V20m12 18V12" /></g></g>
        <g className="dh-tech dh-tech--app" transform="translate(59 285)"><g className="dh-tech-drift"><rect width="48" height="43" rx="9" /><path d="M10 12h28M12 23h10m-10 9h23" /></g></g>
        <g className="dh-body-breath">
          <RigPart crop="646 227 574 531" x={168} y={281} width={220} height={203.5} />
          <image href="/logo-icon.png" x="324" y="355" width="24" height="24" opacity=".92" />
        </g>
        <g className="dh-arm dh-arm--far"><RigPart crop="64 805 527 402" x={139} y={323} width={123} height={94} /></g>
        <g className="dh-head-gaze"><g className="dh-head-idle"><g className="dh-head-gesture" key={reactionKey}>
          <RigPart crop="0 0 627 780" x={118} y={5} width={280} height={348.3} />
        </g></g></g>
        <g className="dh-screen-glow"><ellipse cx="237" cy="335" rx="117" ry="96" fill={`url(#${id}-light)`} /></g>
        <g className="dh-working-prop"><g className="dh-laptop">
          <path d="m79 435 222-10 66 28-231 9Z" fill="#22304b" stroke="#536994" strokeWidth="1.5" />
          <path d="m278 433 52 14-126 7-20-8Z" fill="#0a1429" />
          <path d="m220 443 99-4m-104 10 121-5" stroke="#3f6680" strokeWidth="1.4" />
          <path d="m58 337 186-8c8 0 12 4 14 11l30 105-197 9-39-105c-3-7-1-11 6-12Z" fill={`url(#${id}-case)`} stroke={`url(#${id}-edge)`} strokeWidth="2.5" />
          <path d="m64 345 177-8 29 101-174 8Z" fill="#0b1328" opacity=".55" />
          <path d="m136 462 225-9-3 5-220 11-47-10v-5Z" fill="#0b1225" stroke="#385073" strokeWidth="1" />
          <image href="/logo-icon.png" x="145" y="374" width="37" height="37" transform="rotate(-3 163 392)" />
          <path d="m62 339 178-8" stroke="#5ff6ff" strokeWidth="1.3" opacity=".6" />
        </g></g>
        <g className="dh-near-pose"><g className="dh-arm dh-arm--near"><RigPart crop="666 805 526 402" x={277} y={341} width={129} height={98.6} /></g></g>
        <g className="dh-thought" key={`thought-${reactionKey}`}><circle cx="362" cy="114" r="3" /><circle cx="375" cy="98" r="5" /><g className="dh-thought-bubble"><rect x="348" y="41" width="70" height="45" rx="20" /><circle cx="365" cy="64" r="3" /><circle cx="383" cy="64" r="3" /><circle cx="401" cy="64" r="3" /></g></g>
        <g className="dh-greeting-spark"><path d="m402 303 3-10m7 20 10-2m-12 13 6 8" /></g>
      </svg>
    </div>
  );
}
