"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* — Magnetic — A button is gently pulled toward the cursor when it nears. */
export function Magnetic() {
  const wrap = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const w = wrap.current;
    const b = btn.current;
    if (!w || !b) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const strength = 0.35;
    const onMove = (e: PointerEvent) => {
      const r = w.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      gsap.to(b, { x: dx, y: dy, duration: 0.6, ease: "power3.out" });
    };
    const onLeave = () => {
      gsap.to(b, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.5)" });
    };

    w.addEventListener("pointermove", onMove);
    w.addEventListener("pointerleave", onLeave);
    return () => {
      w.removeEventListener("pointermove", onMove);
      w.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrap}
      className="relative h-[280px] flex items-center justify-center"
    >
      <button
        ref={btn}
        type="button"
        className="rounded-full bg-ink text-paper px-10 py-5 font-mono text-xs uppercase tracking-[0.18em] cursor-pointer"
      >
        Press me
      </button>
    </div>
  );
}

/* — Counter — A number eases up when the section enters view. */
const COUNTER_TARGET = 1842;
export function Counter() {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const obj = { v: 0 };
      const set = () => {
        el.textContent = Math.round(obj.v).toLocaleString();
      };
      set();

      if (reduced) {
        obj.v = COUNTER_TARGET;
        set();
        return;
      }

      gsap.to(obj, {
        v: COUNTER_TARGET,
        duration: 2.4,
        ease: "power4.out",
        onUpdate: set,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div className="h-[280px] flex flex-col items-start justify-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted mb-4">
        Page views this morning
      </p>
      <span
        ref={ref}
        className="text-display leading-none tracking-[-0.04em] font-medium tabular-nums"
        style={{ fontSize: "clamp(4rem, 8vw, 7rem)" }}
      >
        0
      </span>
    </div>
  );
}

/* — Marquee — A line of text loops smoothly, faster on hover. */
export function Marquee() {
  const phrases = [
    "Form follows feeling",
    "Type does the heavy lifting",
    "Motion that earns the milliseconds",
    "Quiet beats loud",
  ];

  return (
    <div className="h-[280px] flex items-center overflow-hidden border-y border-rule group">
      <div className="flex animate-[marquee_28s_linear_infinite] group-hover:[animation-duration:9s] whitespace-nowrap will-change-transform">
        {[...phrases, ...phrases, ...phrases, ...phrases].map((p, i) => (
          <span
            key={i}
            className="font-serif italic text-5xl lg:text-7xl tracking-[-0.02em] px-10"
          >
            {p}
            <span className="text-muted/40 mx-6" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* — Trace — An SVG line draws itself as the section is scrolled through.
   Uses native CSS scroll-driven animations (animation-timeline: view()). */
export function Trace() {
  const pathLength = 1200;

  return (
    <div className="h-[280px] flex items-center justify-center">
      <svg
        viewBox="0 0 600 200"
        className="w-full max-w-[600px] h-auto"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        aria-hidden
      >
        <path
          d="M 10 100 C 100 30, 200 30, 300 100 S 500 170, 590 100"
          className="trace-path text-ink"
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
            animation: "draw linear both",
            animationTimeline: "view()",
            animationRange: "entry 0% cover 60%",
          }}
        />
        <circle cx="10" cy="100" r="3" className="fill-ink" />
        <circle cx="590" cy="100" r="3" className="fill-ink" />
      </svg>
      <style>{`
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .trace-path { stroke-dashoffset: 0 !important; animation: none !important; }
        }
      `}</style>
    </div>
  );
}
