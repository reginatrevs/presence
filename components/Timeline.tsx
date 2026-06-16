import { Reveal } from "@/components/motion/Reveal";
import { BracketLink } from "@/components/BracketLink";
import { timeline } from "@/lib/about";

export function Timeline() {
  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-4 lg:col-start-2 lg:sticky lg:top-28 self-start">
          <Reveal
            as="h2"
            className="text-3xl lg:text-5xl tracking-[-0.02em] font-serif italic leading-[1.05]"
          >
            Where I&rsquo;ve been.
          </Reveal>
          <Reveal
            delay={0.1}
            as="p"
            className="mt-8 text-[15px] leading-[1.65] text-ink/70 max-w-[34ch]"
          >
            School, freelance, in-house, volunteer — usually overlapping. The
            common thread is web experiences for clients I learned from.
          </Reveal>
        </div>

        <ol className="col-span-12 lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0 relative">
          {/* Static faint rule */}
          <div
            aria-hidden
            className="absolute left-[15px] top-[18px] bottom-[18px] w-[1.5px] bg-rule/70 -translate-x-1/2"
          />
          {/* Scroll-driven olive trace */}
          <div
            aria-hidden
            className="timeline-trace absolute left-[15px] top-[18px] bottom-[18px] w-[1.5px] bg-olive -translate-x-1/2"
          />

          {timeline.map((entry, i) => (
            <li
              key={`${entry.org}-${i}`}
              className="relative grid grid-cols-[32px_1fr] gap-x-4 lg:gap-x-6 pb-14 lg:pb-16 last:pb-0"
            >
              {/* Dot column */}
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute left-1/2 top-[10px] z-10 flex h-[21px] w-[21px] -translate-x-1/2 items-center justify-center"
                >
                  <span className="absolute inset-0 rounded-full border border-olive/40 bg-paper" />
                  <span className="relative h-[9px] w-[9px] rounded-full bg-olive" />
                </span>
              </div>

              {/* Content column */}
              <div>
                <Reveal delay={i * 0.05}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive">
                    {entry.years}
                  </p>
                  <h3 className="mt-3 text-xl lg:text-[1.65rem] tracking-[-0.015em] font-medium leading-[1.2]">
                    {entry.role}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {entry.orgUrl ? (
                      <BracketLink href={entry.orgUrl} external>
                        {entry.org}
                      </BracketLink>
                    ) : (
                      entry.org
                    )}
                  </p>
                  <p className="mt-5 text-[14px] leading-[1.65] text-ink/75 max-w-[52ch]">
                    {entry.summary}
                  </p>
                </Reveal>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
