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
      <svg viewBox="0 0 440 480" aria-hidden="true" className="horse-art">
        <defs>
          <linearGradient id={`${id}-coat`} x1="0" y1="0" x2="1" y2="0.85">
            <stop stopColor="#fff" />
            <stop offset=".5" stopColor="#e6edf4" />
            <stop offset="1" stopColor="#899bad" />
          </linearGradient>
          <linearGradient id={`${id}-muzzle`} x1="0" y1="0" x2=".7" y2="1">
            <stop stopColor="#f7f9fc" />
            <stop offset="1" stopColor="#9caec0" />
          </linearGradient>
          <linearGradient id={`${id}-mane`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#344b70" />
            <stop offset=".6" stopColor="#18243c" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
          <linearGradient id={`${id}-hoodie`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#293c58" />
            <stop offset=".6" stopColor="#122035" />
            <stop offset="1" stopColor="#080f1c" />
          </linearGradient>
          <linearGradient id={`${id}-glasses`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#67e8f9" />
            <stop offset=".6" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id={`${id}-lens`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#baf4ff" stopOpacity=".18" />
            <stop offset="1" stopColor="#1b4161" stopOpacity=".35" />
          </linearGradient>
          <clipPath id={`${id}-eyes`}>
            <rect x="128" y="179" width="77" height="59" rx="23" />
            <rect x="239" y="178" width="76" height="59" rx="23" />
          </clipPath>
        </defs>
        <ellipse
          cx="226"
          cy="449"
          rx="143"
          ry="16"
          fill="#000"
          opacity=".25"
          className="horse-shadow"
        />
        <g className="horse-reaction" key={reactionKey}>
          <g className="horse-idle">
            <path
              d="M83 431c4-78 32-119 90-127h93c61 6 95 54 100 127l-49 23H132Z"
              fill={`url(#${id}-hoodie)`}
              stroke="#3c516c"
              strokeWidth="2"
            />
            <path
              d="M151 317c21-12 46-16 76-16s53 5 73 17l-30 51h-86Z"
              fill="#0c1728"
              stroke="#445c79"
              strokeWidth="3"
            />
            <path
              d="M181 299v43c13 27 63 27 77-1l2-44"
              fill={`url(#${id}-coat)`}
            />
            <path
              d="M166 327l20 35 33-15-18 41-48-48m130-13-22 35-33-15 18 41 47-49"
              fill="#263a55"
              stroke="#415a76"
              strokeWidth="2"
            />
            <path
              d="M181 366v43m80-43v43"
              stroke="#8fabc1"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <rect x="178" y="405" width="6" height="15" rx="3" fill="#22d3ee" />
            <rect x="258" y="405" width="6" height="15" rx="3" fill="#a78bfa" />
            <path
              d="m201 407-10 8 10 8m39-16 10 8-10 8m-16-21-7 27"
              fill="none"
              stroke="#67e8f9"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g className="horse-head">
              <path
                d="M279 111c57 18 69 99 41 169l-28 49c-3-56-42-98-38-161Z"
                fill={`url(#${id}-mane)`}
                stroke="#506687"
                strokeWidth="2"
              />
              <g className="horse-ear horse-ear--left">
                <path
                  d="M135 146C109 111 103 61 126 45c24 12 45 42 49 89Z"
                  fill={`url(#${id}-coat)`}
                  stroke="#8c9fb5"
                  strokeWidth="2"
                />
                <path
                  d="M137 122c-13-23-20-44-12-61 13 11 27 33 28 56"
                  fill="#8094b1"
                />
                <path
                  d="M126 69c2 18 6 30 14 42"
                  fill="none"
                  stroke="#b7c5d9"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
              <g className="horse-ear horse-ear--right">
                <path
                  d="M261 136c3-36 20-75 50-97 25 35 11 80-16 112Z"
                  fill={`url(#${id}-coat)`}
                  stroke="#8c9fb5"
                  strokeWidth="2"
                />
                <path
                  d="M281 124c4-25 16-48 27-63 8 21 3 43-8 63Z"
                  fill="#8196b2"
                />
              </g>
              <path
                d="M137 132c28-31 98-44 142-14 36 25 41 78 28 119l-24 58c-16 35-43 51-73 51-38 0-60-29-70-65l-21-60c-10-35-6-65 18-89Z"
                fill={`url(#${id}-coat)`}
                stroke="#8c9fb5"
                strokeWidth="2"
              />
              <path
                d="M136 137c16-16 40-27 63-27-12 19-17 42-18 63l-20 42-20 65c-17-36-30-94-5-143Z"
                fill="#fff"
                opacity=".36"
              />
              <path
                d="M217 147c-15 20-14 58-7 85l-12 34h37l-12-35c7-36 13-62-6-84Z"
                fill="#fff"
                opacity=".58"
              />
              <path
                d="M134 143c-12-21-1-53 38-67 43-16 106-6 127 31-28-5-44-1-58 16-14 18-30 29-62 23l19-28c-19 15-37 23-64 25Z"
                fill={`url(#${id}-mane)`}
                stroke="#4d6686"
                strokeWidth="2"
              />
              <path
                d="M157 116c23-21 59-29 99-18m-76 22c18-14 39-20 59-18"
                fill="none"
                stroke="#728db2"
                strokeWidth="3"
                strokeLinecap="round"
                opacity=".6"
              />
              <path
                d="M139 171c14-7 35-8 50-1m57 0c15-7 35-5 48 1"
                fill="none"
                stroke="#60778c"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <g clipPath={`url(#${id}-eyes)`} className="horse-eyes">
                <ellipse cx="169" cy="208" rx="24" ry="23" fill="#fff" />
                <ellipse cx="271" cy="207" rx="24" ry="23" fill="#fff" />
                <g className="horse-pupils">
                  <ellipse cx="173" cy="210" rx="13" ry="17" fill="#1b2940" />
                  <ellipse cx="267" cy="209" rx="13" ry="17" fill="#1b2940" />
                  <circle cx="177" cy="204" r="4.5" fill="#fff" />
                  <circle cx="271" cy="203" r="4.5" fill="#fff" />
                  <circle cx="168" cy="216" r="2" fill="#67e8f9" />
                  <circle cx="262" cy="215" r="2" fill="#67e8f9" />
                </g>
              </g>
              <path
                d="M117 191l-12-7m211 7 12-7"
                stroke="#17253c"
                strokeWidth="11"
                strokeLinecap="round"
              />
              <rect
                x="122"
                y="175"
                width="88"
                height="67"
                rx="25"
                fill={`url(#${id}-lens)`}
                stroke="#17253c"
                strokeWidth="12"
              />
              <rect
                x="233"
                y="174"
                width="88"
                height="67"
                rx="25"
                fill={`url(#${id}-lens)`}
                stroke="#17253c"
                strokeWidth="12"
              />
              <rect
                x="122"
                y="175"
                width="88"
                height="67"
                rx="25"
                fill="none"
                stroke={`url(#${id}-glasses)`}
                strokeWidth="3"
              />
              <rect
                x="233"
                y="174"
                width="88"
                height="67"
                rx="25"
                fill="none"
                stroke={`url(#${id}-glasses)`}
                strokeWidth="3"
              />
              <path
                d="M211 195c7-5 14-5 21 0"
                fill="none"
                stroke="#17253c"
                strokeWidth="10"
              />
              <path
                d="m137 188 19-2m91 1 18-2"
                stroke="#b9f4ff"
                strokeWidth="3"
                strokeLinecap="round"
                opacity=".7"
              />
              <path
                d="M147 266c20-17 47-14 71-14 28 0 49-5 70 12 30 24 22 61-3 78-32 23-98 24-133 2-30-19-34-54-5-78Z"
                fill={`url(#${id}-muzzle)`}
                stroke="#8c9fb5"
                strokeWidth="2"
              />
              <ellipse
                cx="175"
                cy="288"
                rx="10"
                ry="7"
                fill="#50657d"
                transform="rotate(-22 175 288)"
              />
              <ellipse
                cx="267"
                cy="286"
                rx="10"
                ry="7"
                fill="#50657d"
                transform="rotate(22 267 286)"
              />
              <path
                d="M177 318c22 15 56 15 78-1"
                fill="none"
                stroke="#546a80"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M187 330c18 6 42 6 57-1"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                opacity=".5"
              />
              <ellipse
                cx="157"
                cy="307"
                rx="15"
                ry="8"
                fill="#b2a6c9"
                opacity=".27"
              />
              <ellipse
                cx="281"
                cy="305"
                rx="15"
                ry="8"
                fill="#b2a6c9"
                opacity=".27"
              />
            </g>
          </g>
        </g>
        {mood === "typing" && (
          <g className="horse-laptop" key={`laptop-${reactionKey}`}>
            <path
              d="M121 373c-23 7-26 29-9 48l40 20 14-20-35-21m186-27c24 8 25 29 8 47l-38 22-15-22 34-20"
              fill="#253b59"
              stroke="#536e8d"
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
                fill="#e2edf7"
                stroke="#91a6ba"
                strokeWidth="2"
              />
              <path
                d="m146 428 8 5m-3-9 10 5"
                stroke="#8ca6bb"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
            <g className="typing-hoof typing-hoof--right">
              <path
                d="M303 411c-8-4-22 0-29 6l-13 14c0 8 26 11 32 4l14-15Z"
                fill="#e2edf7"
                stroke="#91a6ba"
                strokeWidth="2"
              />
              <path
                d="m292 428-8 5m3-9-10 5"
                stroke="#8ca6bb"
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
