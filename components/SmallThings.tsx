"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { smallThings } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";

export function SmallThings() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${cx + 40}px, ${cy - 180}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const hovered = hoverIdx !== null ? smallThings[hoverIdx] : null;

  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal className="mb-12 lg:mb-16">
          <p className="text-2xl lg:text-3xl tracking-[-0.015em] text-ink/65 max-w-[40ch] font-medium leading-[1.25]">
            Smaller things — side roads, volunteer work, experiments that
            ended up mattering.
          </p>
        </Reveal>

        <div ref={wrapRef} className="relative">
          <div
            ref={previewRef}
            aria-hidden
            className={`pointer-events-none absolute top-0 left-0 z-30 hidden lg:block transition-opacity duration-500 ease-out ${
              hoverIdx !== null ? "opacity-100" : "opacity-0"
            }`}
            style={{ willChange: "transform" }}
          >
            {hovered && (
              <div className="w-[260px] aspect-[4/5] rounded-2xl border border-white/70 bg-gradient-to-br from-white/80 via-paper to-rule/30 shadow-[0_24px_48px_-24px_rgba(12,12,12,0.25)] overflow-hidden relative">
                {hovered.image ? (
                  <Image
                    src={hovered.image}
                    alt=""
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(77,82,54,0.12),transparent_55%)]">
                    <span className="font-serif italic text-3xl lg:text-4xl leading-[1.05] text-ink/30 px-6 text-center">
                      {hovered.title}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <ol className="border-t border-rule">
            {smallThings.map((t, i) => (
              <li
                key={t.slug}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
                className="border-b border-rule"
              >
                <Reveal delay={i * 0.04}>
                  <div className="group/row py-10 lg:py-14 px-1 transition-colors hover:bg-ink/[0.015]">
                    <div className="grid grid-cols-12 gap-x-6 items-start">
                      <span className="col-span-2 lg:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-olive pt-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="col-span-10 lg:col-span-5">
                        <h3 className="text-3xl lg:text-5xl tracking-[-0.02em] font-medium leading-[1.05]">
                          <span className="inline-block transition-transform duration-500 ease-out group-hover/row:translate-x-2">
                            {t.title}
                          </span>
                        </h3>
                        <p className="mt-3 text-sm text-muted">{t.kind}</p>
                      </div>
                      <div className="col-span-12 lg:col-span-4 mt-6 lg:mt-2">
                        <p className="text-[15px] leading-[1.6] text-ink/75 max-w-[40ch]">
                          {t.description}
                        </p>
                      </div>
                      <div className="col-span-12 lg:col-span-2 mt-5 lg:mt-2 flex lg:flex-col lg:items-end items-baseline gap-3 lg:gap-4">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                          {t.year}
                        </span>
                        <CTA item={t} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function CTA({ item }: { item: (typeof smallThings)[number] }) {
  const base =
    "group/cta inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[13px] font-medium transition-colors";
  if (!item.href) {
    return (
      <span className="text-[12px] text-muted/70 italic">
        Private project
      </span>
    );
  }
  const arrow = (
    <span
      aria-hidden
      className="transition-transform duration-500 ease-out group-hover/cta:translate-x-0.5"
    >
      {item.external ? "↗" : "→"}
    </span>
  );
  const cls = `${base} border-ink/20 text-ink bg-paper/50 hover:bg-ink hover:text-[#f6f5f0]! hover:border-ink`;
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={cls}
      >
        Visit project {arrow}
      </a>
    );
  }
  return (
    <Link href={item.href} className={cls}>
      Open project {arrow}
    </Link>
  );
}
