import { Reveal } from "@/components/motion/Reveal";
import { BracketLink } from "@/components/BracketLink";
import { timeline } from "@/lib/about";

export function Timeline() {
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-4 lg:col-start-2">
          <Reveal as="h2" className="text-3xl lg:text-5xl tracking-[-0.02em] font-serif italic leading-[1.05]">
            Where I&rsquo;ve been.
          </Reveal>
          <Reveal
            delay={0.1}
            as="p"
            className="mt-8 text-[15px] leading-[1.65] text-ink/70 max-w-[34ch]"
          >
            School, freelance, in-house, volunteer — usually overlapping. The
            common thread is sites I cared about, with people I learned from.
          </Reveal>
        </div>

        <ol className="col-span-12 lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0 relative">
          <div
            aria-hidden
            className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-rule via-rule to-transparent"
          />

          {timeline.map((entry, i) => (
            <li key={`${entry.org}-${i}`} className="relative pl-12 pb-12 lg:pb-14 last:pb-0">
              <Reveal delay={i * 0.06} className="block">
                <span
                  aria-hidden
                  className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-ink bg-paper"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive">
                  {entry.years}
                </p>
                <h3 className="mt-2 text-xl lg:text-2xl tracking-[-0.015em] font-medium leading-[1.15]">
                  {entry.role}
                </h3>
                <p className="mt-1.5 text-sm text-muted">
                  {entry.orgUrl ? (
                    <BracketLink href={entry.orgUrl} external>
                      {entry.org}
                    </BracketLink>
                  ) : (
                    entry.org
                  )}
                </p>
                <p className="mt-4 text-[14px] leading-[1.6] text-ink/75 max-w-[52ch]">
                  {entry.summary}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
