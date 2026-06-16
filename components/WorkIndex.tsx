import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";

export function WorkIndex() {
  return (
    <section id="work" className="relative px-6 lg:px-10 pt-32 lg:pt-48 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%] bg-[radial-gradient(ellipse_at_top,rgba(77,82,54,0.06)_0%,transparent_60%)]"
      />
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal className="mb-16 lg:mb-24">
          <p className="text-2xl lg:text-3xl tracking-[-0.015em] text-ink/65 max-w-[28ch] font-medium leading-[1.25]">
            A few things from the last couple of years.
          </p>
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((p, i) => {
            const href = p.externalCase ?? `/work/${p.slug}`;
            const initials = p.title
              .split(/\s+/)
              .slice(0, 2)
              .map((w) => w[0])
              .join("");
            return (
              <li key={p.slug}>
                <Reveal delay={i * 0.08}>
                  <Link href={href} className="group block">
                    <article>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-white/70 via-paper to-rule/30 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_18px_40px_-22px_rgba(12,12,12,0.18)] transition-transform duration-700 ease-out group-hover:-translate-y-1">
                        {p.image ? (
                          <Image
                            src={p.image}
                            alt={`${p.title} preview`}
                            fill
                            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div
                            aria-hidden
                            className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(77,82,54,0.12),transparent_55%)]"
                          >
                            <span className="font-serif italic text-[clamp(4rem,8vw,7rem)] leading-none text-ink/25 select-none">
                              {initials}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 grid grid-cols-12 gap-x-4 items-baseline">
                        <span className="col-span-2 font-mono text-xs uppercase tracking-[0.18em] text-olive">
                          {p.index}
                        </span>
                        <div className="col-span-10">
                          <h3 className="text-2xl lg:text-3xl tracking-[-0.02em] font-medium leading-[1.05]">
                            <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1">
                              {p.title}
                            </span>
                          </h3>
                          <p className="mt-1.5 text-sm text-muted">{p.role}</p>
                          <p className="mt-4 text-[15px] leading-[1.55] text-ink/75">
                            {p.summary}
                          </p>
                          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted flex items-baseline gap-3">
                            <span>{p.year}</span>
                            <span
                              aria-hidden
                              className="transition-transform duration-500 ease-out group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
