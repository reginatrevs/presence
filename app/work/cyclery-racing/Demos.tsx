"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PINK = "#ff2d6f";

/* ── Splash counter — 000 to 100, eased, locks once when in view ── */
export function SplashCounter() {
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
        el.textContent = String(Math.round(obj.v)).padStart(3, "0");
      };
      set();

      if (reduced) {
        obj.v = 100;
        set();
        return;
      }

      gsap.to(obj, {
        v: 100,
        duration: 2.6,
        ease: "power3.inOut",
        onUpdate: set,
        scrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <div className="aspect-[4/3] flex flex-col items-center justify-center bg-ink text-paper rounded-2xl relative overflow-hidden">
      <span
        ref={ref}
        className="text-[clamp(4rem,12vw,8rem)] font-medium tracking-[-0.04em] tabular-nums leading-none"
      >
        000
      </span>
      <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50">
        Loading the team
      </span>
    </div>
  );
}

/* ── Cursor box — a small playground where the custom pink dot follows your cursor ── */
export function CursorBox() {
  const wrap = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const [inside, setInside] = useState(false);
  const [overTarget, setOverTarget] = useState(false);

  useEffect(() => {
    const w = wrap.current;
    const d = dot.current;
    if (!w || !d) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0,
      raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = w.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };
    const onEnter = () => setInside(true);
    const onLeave = () => setInside(false);

    const tick = () => {
      cx += (mx - cx) * 0.25;
      cy += (my - cy) * 0.25;
      if (d) d.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    w.addEventListener("pointermove", onMove);
    w.addEventListener("pointerenter", onEnter);
    w.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      w.removeEventListener("pointermove", onMove);
      w.removeEventListener("pointerenter", onEnter);
      w.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={wrap}
      className="relative aspect-[4/3] rounded-2xl bg-ink text-paper overflow-hidden"
      style={{ cursor: "none" }}
    >
      <div
        ref={dot}
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 rounded-full transition-[width,height,background-color,opacity] duration-300"
        style={{
          width: overTarget ? 56 : 14,
          height: overTarget ? 56 : 14,
          backgroundColor: overTarget ? "transparent" : PINK,
          border: overTarget ? `1.5px solid ${PINK}` : "none",
          opacity: inside ? 1 : 0,
        }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-paper/40 mb-4">
          Hover anywhere
        </p>
        <button
          type="button"
          onMouseEnter={() => setOverTarget(true)}
          onMouseLeave={() => setOverTarget(false)}
          className="px-6 py-3 border border-paper/30 rounded-full text-[13px] tracking-tight"
          style={{ cursor: "none" }}
        >
          touch a target
        </button>
      </div>

      <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/30">
        cycleryracing.ca
      </span>
    </div>
  );
}

/* ── Device-adaptive — two side-by-side cards, each playing the same content differently ── */
export function DeviceAdaptive() {
  const phoneCardRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-cycle the phone "centered card" highlight to mimic scroll-triggered selection
  useEffect(() => {
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % 3), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Desktop: hover opens */}
      <div className="rounded-2xl bg-ink/[0.03] border border-rule p-5 lg:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive mb-4">
          Desktop · hover to open
        </p>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="group/dcard relative aspect-[3/4] rounded-xl overflow-hidden bg-ink cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ink to-ink/70 transition-transform duration-500 group-hover/dcard:scale-110" />
              <div className="absolute inset-x-3 bottom-3 flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  Rider 0{n}
                </span>
                <span className="text-paper text-sm font-medium opacity-0 group-hover/dcard:opacity-100 transition-opacity duration-300">
                  Open profile →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: center-of-screen activates */}
      <div className="rounded-2xl bg-ink/[0.03] border border-rule p-5 lg:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive mb-4">
          Mobile · whichever card is centered
        </p>
        <div ref={phoneCardRef} className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((n, i) => {
            const active = i === activeIdx;
            return (
              <div
                key={n}
                className={`relative aspect-[3/4] rounded-xl overflow-hidden bg-ink transition-transform duration-500 ${
                  active ? "scale-[1.04]" : "scale-100"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-ink to-ink/70 transition-opacity duration-500 ${
                    active ? "opacity-100" : "opacity-60"
                  }`}
                />
                <div className="absolute inset-x-3 bottom-3 flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                    Rider 0{n}
                  </span>
                  <span
                    className={`text-paper text-sm font-medium transition-opacity duration-300 ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Centered →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Reveal rhythm — three rows stage in on click; shows the in-house motion vocabulary ── */
export function RevealRhythm() {
  const [key, setKey] = useState(0);
  const lines = [
    { w: "w-3/4", text: "Section title arrives first." },
    { w: "w-full", text: "Then the body, a beat later." },
    { w: "w-2/3", text: "Then the meta, quieter." },
  ];

  return (
    <div className="aspect-[4/3] rounded-2xl border border-rule bg-gradient-to-br from-white/60 via-paper to-rule/30 p-6 lg:p-8 flex flex-col justify-between gap-6 relative overflow-hidden">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-olive">
          Reveal cadence
        </span>
        <button
          type="button"
          onClick={() => setKey((k) => k + 1)}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors border border-ink/15 rounded-full px-3 py-1"
        >
          replay ↻
        </button>
      </div>

      <div key={key} className="flex flex-col gap-4 mb-2">
        {lines.map((line, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 opacity-0 translate-y-2 animate-[rhythmRise_700ms_ease-out_forwards]"
            style={{ animationDelay: `${i * 180}ms` }}
          >
            <div className={`${line.w} h-3 rounded-full bg-ink/85`} />
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              {line.text}
            </p>
          </div>
        ))}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
        each element on its own delay — same easing across the whole site.
      </p>
    </div>
  );
}

/* ── Animated stat counter (single value) ── */
export function StatCounter({
  value,
  suffix = "%",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
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
        el.textContent = String(Math.round(obj.v));
      };
      set();
      if (reduced) {
        obj.v = value;
        set();
        return;
      }
      gsap.to(obj, {
        v: value,
        duration: 2,
        ease: "power3.out",
        onUpdate: set,
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <div className="flex flex-col">
      <p className="text-[clamp(3rem,7vw,5.5rem)] tracking-[-0.04em] font-medium leading-none">
        <span ref={ref}>0</span>
        <span className="text-ink/40">{suffix}</span>
      </p>
      <p className="mt-3 text-sm text-muted max-w-[22ch]">{label}</p>
    </div>
  );
}
