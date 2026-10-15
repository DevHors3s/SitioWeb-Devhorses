"use client";
import { useEffect, useRef } from "react";
import type { HorseMood } from "@/lib/horse-dialogue";
/** One persistent vector character with independent gaze, gestures and props. */
export default function HorseMascot({
  mood = "wave",
  reactionKey,
}: {
  mood?: HorseMood;
  reactionKey?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const id = "devhorses-character";
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let frame = 0;
    let currentX = 0,
      currentY = 0,
      targetX = 0,
      targetY = 0;
    const draw = () => {
      currentX += (targetX - currentX) * 0.11;
      currentY += (targetY - currentY) * 0.11;
      element.style.setProperty("--horse-x", currentX.toFixed(3));
      element.style.setProperty("--horse-y", currentY.toFixed(3));
      if (Math.abs(targetX - currentX) + Math.abs(targetY - currentY) > 0.005) {
        frame = requestAnimationFrame(draw);
      } else frame = 0;
    };
    const move = (event: PointerEvent) => {
      if (
        reduce.matches ||
        !finePointer.matches ||
        event.pointerType === "touch"
      )
        return;
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > innerHeight) return;
      targetX = Math.max(
        -1,
        Math.min(
          1,
          (event.clientX - bounds.x - bounds.width / 2) / (innerWidth * 0.4),
        ),
      );
      targetY = Math.max(
        -1,
        Math.min(
          1,
          (event.clientY - bounds.y - bounds.height / 2) / (innerHeight * 0.4),
        ),
      );
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const reset = () => {
      targetX = targetY = 0;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const preferenceChanged = () => {
      if (reduce.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        currentX = currentY = targetX = targetY = 0;
        element.style.setProperty("--horse-x", "0");
        element.style.setProperty("--horse-y", "0");
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    reduce.addEventListener("change", preferenceChanged);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      reduce.removeEventListener("change", preferenceChanged);
    };
  }, []);
  return (
    <div ref={root} className={`horse-mascot horse-mascot--${mood}`}>
      <svg viewBox="0 0 440 480" aria-hidden="true" className="horse-art" shapeRendering="geometricPrecision">
        <defs>
          <linearGradient id={`${id}-coat`} x1="0" y1="0" x2=".8" y2="1">
            <stop stopColor="#f6f0ff" /><stop offset=".58" stopColor="#d4c2fa" /><stop offset="1" stopColor="#a68adb" />
          </linearGradient>
          <linearGradient id={`${id}-muzzle`} x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#faf4f6" /><stop offset="1" stopColor="#d9c4dc" />
          </linearGradient>
          <linearGradient id={`${id}-mane`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#29243f" /><stop offset=".55" stopColor="#423060" /><stop offset="1" stopColor="#8960c5" />
          </linearGradient>
          <linearGradient id={`${id}-lens`} x1="0" y1="0" x2=".7" y2="1">
            <stop stopColor="#272536" /><stop offset="1" stopColor="#080b14" />
          </linearGradient>
        </defs>
        <ellipse cx="222" cy="449" rx="119" ry="10" fill="#030611" opacity=".4" className="horse-shadow" />
        <g className="horse-reaction" key={reactionKey}>
          <g className="horse-idle">
            {/* Shoulders and chest only: no legs, feet or tail. */}
            <path d="M172 315c-38 14-61 54-65 108 28 20 197 20 226 0-4-54-27-94-65-108Z" fill={`url(#${id}-coat)`} stroke="#382a51" strokeWidth="4" strokeLinejoin="round" />
            <path d="M193 335c-11 23-21 58-20 93 27 7 66 7 94 0-1-36-11-71-25-93Z" fill="#eee4ff" opacity=".5" />
            <g className="horse-rest-hooves">
              <path d="M140 355c-20 8-27 32-16 49 7 11 25 8 29-4l11-30Z" fill={`url(#${id}-coat)`} stroke="#382a51" strokeWidth="5" />
              <path d="M126 386c8-3 19-1 27 5l-2 13c-8 8-19 9-26 1Z" fill="#39304f" />
              <path d="M285 354c22 4 32 25 24 44-5 13-23 14-29 3l-14-28Z" fill={`url(#${id}-coat)`} stroke="#382a51" strokeWidth="5" />
              <path d="M280 389c8-5 19-7 29-3l-1 15c-7 9-17 10-25 4Z" fill="#39304f" />
            </g>
            <g className="horse-head">
              <path d="M277 111c52 16 69 66 54 119l-8 36 15 19-35-3 10 35-39-23-18-119Z" fill={`url(#${id}-mane)`} stroke="#272139" strokeWidth="5" strokeLinejoin="round" />
              <g className="horse-ear horse-ear--left">
                <path d="M139 147C116 125 104 86 116 61c25 8 48 35 52 72Z" fill={`url(#${id}-coat)`} stroke="#382a51" strokeWidth="5" strokeLinejoin="round" />
                <path d="M140 123c-10-14-17-28-17-43 14 11 24 27 26 40Z" fill="#b88cce" />
              </g>
              <g className="horse-ear horse-ear--right">
                <path d="M261 135c0-32 14-67 35-87 21 23 21 59-3 96Z" fill={`url(#${id}-coat)`} stroke="#382a51" strokeWidth="5" strokeLinejoin="round" />
                <path d="M280 123c0-19 6-38 15-53 8 18 6 35-4 54Z" fill="#b88cce" />
              </g>
              <path d="M138 127c32-35 102-38 141-7 35 29 33 78 18 115l-15 59c-7 30-31 49-65 49-39 0-64-22-72-57l-20-58c-14-43-13-74 13-101Z" fill={`url(#${id}-coat)`} stroke="#382a51" strokeWidth="5" />
              <path d="M218 129c-17 21-24 68-20 100l-12 37h46l-8-41c12-44 15-73-6-96Z" fill="#fff9ef" opacity=".9" />
              <path d="M127 146c-11-30 9-57 47-68 42-14 92-5 124 28l-38-2 17 22-44-2-37 30 4-25c-18 13-41 22-73 17Z" fill={`url(#${id}-mane)`} stroke="#272139" strokeWidth="5" strokeLinejoin="round" />
              <path d="M159 111c24-18 51-22 82-15l-29 6-21 23 1-16-26 14Z" fill="#75ebdc" />
              <path d="m277 160 17-5m-153 5-18-4" stroke="#382a51" strokeWidth="5" strokeLinecap="round" />
              {/* Bold stepped black shades inspired by the playful pixel sunglasses. */}
              <g className="horse-shades">
                <path d="M113 177h94v10h24v-10h89v15h-9v34h-9v12h-61v-10h-10v-22h-24v21h-9v12h-63v-11h-11v-30h-11Z" fill="#090c15" stroke="#090c15" strokeWidth="5" strokeLinejoin="round" />
                <path d="M131 187h64v29h-9v10h-46v-10h-9Zm111 0h61v29h-9v10h-43v-10h-9Z" fill={`url(#${id}-lens)`} />
                <g fill="#fff" opacity=".94">
                  <path d="m137 189 10 0 15 20h-10Zm121 0h10l15 20h-10Z" />
                </g>
                <path d="M170 190h17m91 0h17" stroke="#a7a4b4" strokeWidth="3" strokeLinecap="round" opacity=".55" />
              </g>
              <path d="M169 248c14-7 32-7 49-7 23 0 42 0 57 15 15 16 19 42 8 62-12 22-39 31-65 30-30-1-53-12-61-34-9-24-8-51 12-66Z" fill={`url(#${id}-muzzle)`} stroke="#382a51" strokeWidth="4" />
              <path d="M170 261c9-5 18-7 28-7" fill="none" stroke="#fffafc" strokeWidth="5" strokeLinecap="round" opacity=".75" />
              <path d="M178 280c2-5 8-7 13-4m57 0c5-4 11-2 13 3" fill="none" stroke="#765777" strokeWidth="5" strokeLinecap="round" />
              <path d="M187 313c17 10 40 10 57-1" fill="none" stroke="#65466b" strokeWidth="4" strokeLinecap="round" />
              <path d="m243 309 6 3" stroke="#65466b" strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>
        </g>
        {mood === "typing" && (
          <g className="horse-laptop" key={`laptop-${reactionKey}`}>
            <path
              d="M121 373c-23 7-26 29-9 48l40 20 14-20-35-21m186-27c24 8 25 29 8 47l-38 22-15-22 34-20"
              fill="#cbb5f2"
              stroke="#382a51"
              strokeWidth="3"
            />
            <g className="laptop-screen">
              <path
                d="M132 348h177a8 8 0 0 1 8 9l-12 67H143l-19-66a8 8 0 0 1 8-10Z"
                fill="#18334b"
                stroke="#67e8f9"
                strokeWidth="3"
              />
              <path d="M141 359h162l-9 53H155Z" fill="#091525" />
              <path
                d="M159 372h30m13 0h40m-81 12h57m11 0h31m-96 12h83"
                fill="none"
                stroke="#67e8f9"
                strokeWidth="3"
                strokeLinecap="round"
                className="laptop-code"
              />
              <path
                d="M164 405h25m13 0h24"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <rect
                x="250"
                y="399"
                width="4"
                height="8"
                rx="1"
                fill="#a78bfa"
                className="laptop-cursor"
              />
              <circle cx="220" cy="353" r="2" fill="#74a6c4" />
            </g>
            <path
              d="M143 424h162l40 29H102Z"
              fill="#536c84"
              stroke="#9fbbcf"
              strokeWidth="2"
            />
            <path d="M157 430h132l21 13H141Z" fill="#152d44" />
            <path
              d="M164 434h120m-132 5h141m-116-9-4 13m23-13-2 13m22-13v13m21-13 2 13m21-13 4 13"
              stroke="#7396af"
              strokeWidth="2"
              opacity=".6"
            />
            <path d="M192 445h56l6 6h-68Z" fill="#9fbacc" />
            <path
              d="M102 453h243l-6 7H108Z"
              fill="#253b53"
              stroke="#7194b0"
              strokeWidth="2"
            />
            <g className="typing-hoof typing-hoof--left">
              <path
                d="M134 411c7-4 22-1 29 5l13 14c1 9-27 12-33 5l-13-15Z"
                fill="#d9c6fa"
                stroke="#382a51"
                strokeWidth="2"
              />
              <path
                d="m146 428 8 5m-3-9 10 5"
                stroke="#8e6fb3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <g className="typing-hoof typing-hoof--right">
              <path
                d="M303 411c-8-4-22 0-29 6l-13 14c0 8 26 11 32 4l14-15Z"
                fill="#d9c6fa"
                stroke="#382a51"
                strokeWidth="2"
              />
              <path
                d="m292 428-8 5m3-9-10 5"
                stroke="#8e6fb3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>
        )}
        {mood === "thinking" && (
          <g className="horse-thought" key={`thought-${reactionKey}`}>
            <circle
              cx="291"
              cy="130"
              r="5"
              fill="#daf2ff"
              className="thought-trail thought-trail--one"
            />
            <circle
              cx="307"
              cy="109"
              r="8"
              fill="#daf2ff"
              className="thought-trail thought-trail--two"
            />
            <g className="thought-cloud">
              <path
                d="M320 82c-20-2-24-26-7-35-5-19 19-34 34-23 10-18 38-16 45 5 22-6 37 15 27 32 10 16-3 32-20 29h-69Z"
                fill="#e8f6ff"
                stroke="#9bdff3"
                strokeWidth="2"
              />
              <circle
                cx="337"
                cy="58"
                r="5"
                fill="#396981"
                className="thinking-dot thinking-dot--one"
              />
              <circle
                cx="362"
                cy="58"
                r="5"
                fill="#396981"
                className="thinking-dot thinking-dot--two"
              />
              <circle
                cx="387"
                cy="58"
                r="5"
                fill="#396981"
                className="thinking-dot thinking-dot--three"
              />
              <path
                d="m399 15 4-7m7 17 8-2m-14 13 6 6"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="3"
                strokeLinecap="round"
                className="thought-spark"
              />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
