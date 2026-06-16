"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span" | "li" | "p" | "h1" | "h2" | "h3";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduced) {
        gsap.set(el, { opacity: 1, y: 0, clearProps: "willChange" });
        return;
      }

      gsap.set(el, { opacity: 0, y });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          once: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as never} className={className} data-reveal>
      {children}
    </Tag>
  );
}
