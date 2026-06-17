"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    let current = 0;
    let target = 0;

    const compute = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      target = docHeight > 0 ? Math.min(1, window.scrollY / docHeight) : 0;
      setVisible(window.scrollY > 200);
    };

    const tick = () => {
      current += (target - current) * 0.18;
      if (Math.abs(target - current) < 0.0005) current = target;

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${current})`;
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${current * 100}%`;
      }
      raf = requestAnimationFrame(tick);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={`fixed top-14 left-0 right-0 z-[55] h-[2px] hidden lg:block pointer-events-none transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-rule/50" />
        <div
          ref={fillRef}
          className="absolute inset-0 bg-olive origin-left will-change-transform"
          style={{ transform: "scaleX(0)" }}
        />
        <div
          ref={dotRef}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-9 w-9 rounded-full overflow-hidden border-2 border-paper shadow-[0_8px_18px_-6px_rgba(12,12,12,0.35)] ring-1 ring-ink/10 will-change-[left]"
          style={{ left: "0%" }}
        >
          <Image
            src="/cursor-full.png"
            alt=""
            width={72}
            height={72}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

    </>
  );
}
