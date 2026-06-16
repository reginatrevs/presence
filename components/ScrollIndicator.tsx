"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function ScrollIndicator() {
  const [progress, setProgress] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;
      setProgress(pct);
      setAtBottom(pct >= 0.985);
      setVisible(scrollTop > 200);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      aria-hidden
      className={`fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-px h-[40vh] bg-rule/70 overflow-visible">
        <div
          className="absolute left-1/2 top-0 h-full w-[1.5px] -translate-x-1/2 origin-top bg-olive transition-transform duration-200"
          style={{ transform: `translateX(-50%) scaleY(${progress})` }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full overflow-hidden border-2 border-paper shadow-[0_8px_20px_-8px_rgba(12,12,12,0.35)] transition-[top] duration-200"
          style={{ top: `${progress * 100}%` }}
        >
          <Image
            src="/cursor-full.png"
            alt=""
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={scrollTop}
        className={`pointer-events-auto group/back inline-flex flex-col items-center gap-1 font-serif italic text-[13px] text-ink/70 hover:text-ink transition-opacity duration-500 ${
          atBottom ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span>you made it.</span>
        <span className="text-[11px] not-italic font-sans uppercase tracking-[0.18em] text-olive group-hover/back:translate-y-[-1px] transition-transform">
          ↑ back to top
        </span>
      </button>
    </div>
  );
}
