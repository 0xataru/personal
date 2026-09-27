"use client";

import { useMemo, useState, type CSSProperties } from "react";
import art from "@/data/art/portrait";

type Tri = number[]; // [x1, y1, x2, y2, x3, y3, paletteIndex]

// Deterministic pseudo-random so server and client render the same markup.
function hash(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

function facet(t: Tri, i: number) {
  const cx = (t[0] + t[2] + t[4]) / 3;
  const cy = (t[1] + t[3] + t[5]) / 3;
  // scatter outward from the centre of the face
  const vx = cx - art.w / 2;
  const vy = cy - art.h * 0.5;
  const len = Math.hypot(vx, vy) || 1;
  const dist = 250 + hash(i) * 650;
  return {
    points: t.slice(0, 6).join(","),
    style: {
      "--c": art.palette[t[6]],
      // draw-in sweeps from top to bottom
      "--d": `${Math.round((cy / art.h) * 1400 + hash(i + 7) * 400)}ms`,
      "--dx": `${((vx / len) * dist).toFixed(0)}px`,
      "--dy": `${((vy / len) * dist + (hash(i + 3) - 0.5) * 300).toFixed(0)}px`,
      "--r": `${Math.round((hash(i + 11) - 0.5) * 360)}deg`,
    } as CSSProperties,
  };
}

export default function Portrait({ className = "" }: { className?: string }) {
  const [scattered, setScattered] = useState(false);
  const sides = useMemo(
    () => ({
      left: (art.left as Tri[]).map((t, i) => facet(t, i)),
      right: (art.right as Tri[]).map((t, i) => facet(t, i + 5000)),
    }),
    [],
  );

  return (
    <button
      type="button"
      onClick={() => setScattered((v) => !v)}
      aria-label={scattered ? "Reassemble the portrait" : "Scatter the portrait"}
      className={`block cursor-pointer outline-none [-webkit-tap-highlight-color:transparent] ${className}`}
    >
      <svg
        viewBox={`0 0 ${art.w} ${art.h}`}
        className={`portrait w-full h-auto overflow-visible ${scattered ? "scattered" : ""}`}
        role="img"
        aria-hidden="true"
      >
        <g id="left-side">
          {sides.left.map((p, i) => (
            <polygon key={i} points={p.points} style={p.style} />
          ))}
        </g>
        <g id="right-side">
          {sides.right.map((p, i) => (
            <polygon key={i} points={p.points} style={p.style} />
          ))}
        </g>
      </svg>
    </button>
  );
}
