"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { smallThings } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";

export function SmallThings() {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
    };

    const tick = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${cx + 36}px, ${cy - 160}px, 0)`;
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

  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal className="mb-12 lg:mb-16">
          <p className="text-2xl lg:text-3xl tracking-[-0.015em] text-ink/65 max-w-[40ch] font-medium leading-[1.25]">
            Smaller things — side roads, volunteer work, experiments that
            ended up mattering.
          </p>
        </Reveal>

        <div ref={containerRef} className="relative">
          <div
            ref={previewRef}
            aria-hidden
            className={`pointer-events-none absolute top-0 left-0 z-30 hidden lg:block transition-opacity duration-500 ease-out ${
              active !== null ? "opacity-100" : "opacity-0"
            }`}
            style={{ willChange: "transform" }}
          >
            {active !== null && (
              <div className="w-[280px] aspect-[4/5] rounded-2xl border border-white/70 bg-gradient-to-br from-white/80 via-paper to-rule/30 shadow-[0_24px_48px_-24px_rgba(12,12,12,0.25)] overflow-hidden relative">
                {smallThings[active].image ? (
                  <Image
                    src={smallThings[active].image!}
                    alt=""
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.9),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(77,82,54,0.12),transparent_55%)]">
                    <span className="font-serif italic text-3xl lg:text-4xl leading-[1.05] text-ink/30 px-6 text-center">
                      {smallThings[active].title}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <ol className="border-t border-rule">
            {smallThings.map((t, i) => {
              const Row = ({ children }: { children: ReactNode }) => {
                const cls =
                  "group/row block py-8 lg:py-10 transition-colors hover:bg-ink/[0.02]";
                if (!t.href) {
                  return <div className={cls}>{children}</div>;
                }
                if (t.external) {
                  return (
                    <a
                      href={t.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cls}
                    >
                      {children}
                    </a>
                  );
                }
                return (
                  <Link href={t.href} className={cls}>
                    {children}
                  </Link>
                );
              };

              return (
                <li
                  key={t.slug}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="border-b border-rule"
                >
                  <Reveal delay={i * 0.04}>
                    <Row>
                      <div className="grid grid-cols-12 gap-x-6 items-baseline px-1">
                        <span className="col-span-2 lg:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-olive self-start pt-2">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="col-span-10 lg:col-span-7">
                          <h3 className="text-3xl lg:text-5xl tracking-[-0.02em] font-medium leading-[1.05]">
                            <span className="inline-block transition-transform duration-500 ease-out group-hover/row:translate-x-3">
                              {t.title}
                            </span>
                          </h3>
                          <p className="mt-3 text-sm text-muted">{t.kind}</p>
                          <p className="mt-4 text-[14px] leading-[1.55] text-ink/70 max-w-[52ch] lg:hidden">
                            {t.description}
                          </p>
                        </div>
                        <div className="col-span-12 lg:col-span-4 mt-5 lg:mt-0 flex lg:justify-end items-baseline gap-4">
                          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                            {t.year}
                          </span>
                          {t.href && (
                            <span
                              aria-hidden
                              className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-transform duration-500 ease-out group-hover/row:translate-x-1"
                            >
                              {t.external ? "↗" : "→"}
                            </span>
                          )}
                        </div>
                      </div>
                    </Row>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
