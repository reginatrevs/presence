"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { smallThings } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";

export function SmallThings() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const selected = smallThings[selectedIdx];

  const listRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mx = 0;
    let my = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const rect = listRef.current?.getBoundingClientRect();
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

        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10 items-start">
          <div ref={listRef} className="relative col-span-12 lg:col-span-7">
            <div
              ref={previewRef}
              aria-hidden
              className={`pointer-events-none absolute top-0 left-0 z-30 hidden lg:block transition-opacity duration-500 ease-out ${
                hoverIdx !== null ? "opacity-100" : "opacity-0"
              }`}
              style={{ willChange: "transform" }}
            >
              {hovered && (
                <div className="w-[280px] aspect-[4/5] rounded-2xl border border-white/70 bg-gradient-to-br from-white/80 via-paper to-rule/30 shadow-[0_24px_48px_-24px_rgba(12,12,12,0.25)] overflow-hidden relative">
                  {hovered.image ? (
                    <Image
                      src={hovered.image}
                      alt=""
                      fill
                      sizes="280px"
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
              {smallThings.map((t, i) => {
                const active = i === selectedIdx;
                return (
                  <li key={t.slug} className="border-b border-rule">
                    <button
                      type="button"
                      onClick={() => setSelectedIdx(i)}
                      onMouseEnter={() => setHoverIdx(i)}
                      onMouseLeave={() => setHoverIdx(null)}
                      aria-pressed={active}
                      className={`group w-full text-left py-7 lg:py-8 px-1 transition-colors ${
                        active ? "bg-ink/[0.04]" : "hover:bg-ink/[0.02]"
                      }`}
                    >
                      <Reveal delay={i * 0.04}>
                        <div className="grid grid-cols-12 gap-x-4 items-baseline">
                          <span className="col-span-2 lg:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-olive self-start pt-2">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div className="col-span-10 lg:col-span-9">
                            <h3
                              className={`text-2xl lg:text-4xl tracking-[-0.02em] font-medium leading-[1.05] transition-colors ${
                                active
                                  ? "text-ink"
                                  : "text-ink/40 group-hover:text-ink/80"
                              }`}
                            >
                              <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
                                {t.title}
                              </span>
                            </h3>
                            <p
                              className={`mt-2 text-sm transition-colors ${
                                active ? "text-muted" : "text-muted/70"
                              }`}
                            >
                              {t.kind}
                            </p>
                            <div className="mt-5 lg:hidden">
                              {active && (
                                <>
                                  <p className="text-[14px] leading-[1.55] text-ink/80">
                                    {t.description}
                                  </p>
                                  <p className="mt-3 text-[14px] leading-[1.55] text-ink/75">
                                    {t.note}
                                  </p>
                                  <CTA item={t} className="mt-5" />
                                </>
                              )}
                            </div>
                          </div>
                          <span
                            className={`col-span-12 lg:col-span-2 mt-3 lg:mt-0 font-mono text-xs uppercase tracking-[0.18em] text-right transition-colors ${
                              active ? "text-muted" : "text-muted/60"
                            }`}
                          >
                            {t.year}
                          </span>
                        </div>
                      </Reveal>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <aside className="hidden lg:block col-span-5 lg:col-start-8">
            <div className="sticky top-24">
              <article
                key={selected.slug}
                className="relative rounded-3xl border border-white/70 bg-gradient-to-br from-white/70 via-paper to-rule/30 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_24px_48px_-28px_rgba(12,12,12,0.22)] p-8 lg:p-10 animate-[detail_500ms_ease-out]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive">
                  {selected.kind}
                  <span className="text-muted/70"> · {selected.year}</span>
                </p>
                <h3 className="mt-6 text-3xl lg:text-4xl tracking-[-0.02em] font-medium leading-[1.05]">
                  {selected.title}
                </h3>
                <p className="mt-8 text-[15px] leading-[1.6] text-ink/85">
                  {selected.description}
                </p>
                <p className="mt-4 text-[15px] leading-[1.6] text-ink/75">
                  {selected.note}
                </p>
                <CTA item={selected} className="mt-10" />
              </article>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CTA({
  item,
  className = "",
}: {
  item: (typeof smallThings)[number];
  className?: string;
}) {
  const base =
    "group/cta inline-flex items-center gap-3 px-5 py-3 rounded-full font-mono text-[11px] uppercase tracking-[0.18em] transition-colors";
  if (!item.href) {
    return (
      <p
        className={`${className} font-mono text-[11px] uppercase tracking-[0.18em] text-muted`}
      >
        Internal — no public link
      </p>
    );
  }
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className={`${className} ${base} bg-ink text-paper hover:bg-ink/85`}
      >
        Visit project
        <span
          aria-hidden
          className="transition-transform duration-500 ease-out group-hover/cta:translate-x-1"
        >
          ↗
        </span>
      </a>
    );
  }
  return (
    <Link
      href={item.href}
      className={`${className} ${base} bg-ink text-paper hover:bg-ink/85`}
    >
      Open project
      <span
        aria-hidden
        className="transition-transform duration-500 ease-out group-hover/cta:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
