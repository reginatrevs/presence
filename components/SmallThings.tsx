import Link from "next/link";
import { smallThings } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";

export function SmallThings() {
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal className="mb-12 lg:mb-16">
          <p className="text-2xl lg:text-3xl tracking-[-0.01em] text-ink/60 max-w-[36ch] font-serif italic">
            Smaller things — side roads, volunteer work, sketches that ended up
            mattering.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
          {smallThings.map((t, i) => {
            const cardClass =
              "group flex flex-col justify-between bg-paper p-6 lg:p-10 min-h-[240px] hover:bg-ink/[0.02] transition-colors h-full";
            const inner = (
              <>
                <div className="flex items-baseline justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  <span>{t.kind}</span>
                  <span>{t.year}</span>
                </div>
                <div className="mt-10">
                  <h3 className="text-2xl lg:text-3xl tracking-[-0.01em] font-medium leading-[1.1]">
                    {t.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.55] text-ink/75 max-w-[44ch]">
                    {t.description}
                  </p>
                  {t.href && (
                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted inline-flex items-baseline gap-2 transition-transform duration-500 ease-out group-hover:translate-x-1">
                      <span>{t.external ? "Visit" : "Open"}</span>
                      <span aria-hidden>{t.external ? "↗" : "→"}</span>
                    </p>
                  )}
                </div>
              </>
            );
            return (
              <li key={t.slug}>
                <Reveal delay={i * 0.05} className="h-full">
                  {t.href ? (
                    t.external ? (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cardClass}
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link href={t.href} className={cardClass}>
                        {inner}
                      </Link>
                    )
                  ) : (
                    <div className={cardClass}>{inner}</div>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
