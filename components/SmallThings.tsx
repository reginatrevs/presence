"use client";

import { useState } from "react";
import Link from "next/link";
import { smallThings } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";

export function SmallThings() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal className="mb-12 lg:mb-16">
          <p className="text-2xl lg:text-3xl tracking-[-0.01em] text-ink/60 max-w-[40ch] font-serif italic">
            Smaller things — side roads, volunteer work, experiments that ended
            up mattering.
          </p>
        </Reveal>

        <ol className="divide-y divide-rule border-y border-rule">
          {smallThings.map((t, i) => {
            const isOpen = open === t.slug;
            return (
              <li key={t.slug}>
                <Reveal delay={i * 0.04}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : t.slug)}
                    className="group w-full text-left py-6 lg:py-8 transition-colors hover:bg-ink/[0.015] focus:outline-none focus-visible:bg-ink/[0.03] cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`note-${t.slug}`}
                  >
                    <div className="grid grid-cols-12 gap-x-6 items-baseline">
                      <span className="col-span-2 lg:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-muted self-start pt-2">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="col-span-10 lg:col-span-3">
                        <h3 className="text-2xl lg:text-3xl tracking-[-0.02em] font-medium leading-[1.1]">
                          {t.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{t.kind}</p>
                      </div>
                      <p className="col-span-10 lg:col-span-6 col-start-3 lg:col-start-auto mt-4 lg:mt-0 text-[15px] leading-[1.55] text-ink/75 max-w-[52ch]">
                        {t.description}
                      </p>
                      <div className="col-span-12 lg:col-span-2 mt-4 lg:mt-0 flex lg:justify-end items-baseline gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                        <span>{t.year}</span>
                        <span
                          aria-hidden
                          className={`transition-transform duration-500 ease-out ${isOpen ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </button>

                  <div
                    id={`note-${t.slug}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-12 gap-x-6 pb-8 lg:pb-12">
                        <div className="col-span-10 col-start-3 lg:col-span-6 lg:col-start-5">
                          <p className="text-lg leading-[1.6] text-ink/85 max-w-[52ch]">
                            {t.note}
                          </p>
                          {t.href && (
                            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                              {t.external ? (
                                <a
                                  href={t.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-baseline gap-2 hover:text-ink transition-colors"
                                >
                                  Visit{" "}
                                  <span aria-hidden>↗</span>
                                </a>
                              ) : (
                                <Link
                                  href={t.href}
                                  className="inline-flex items-baseline gap-2 hover:text-ink transition-colors"
                                >
                                  Open{" "}
                                  <span aria-hidden>→</span>
                                </Link>
                              )}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
