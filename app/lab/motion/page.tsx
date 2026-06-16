import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Colophon } from "@/components/Colophon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic, Counter, Marquee, Trace } from "./MotionPieces";

export const metadata: Metadata = {
  title: "Motion — Regina Trevino",
  description:
    "Four small studies in web motion: a magnetic button, a count-up, a hover marquee, and a scroll-driven trace.",
};

const pieces: { title: string; note: string; Component: () => React.ReactElement }[] =
  [
    {
      title: "Magnetic.",
      note: "A button that's gently pulled toward the cursor when it nears. Easing on entry, an elastic reset on exit — same easing curve as a held breath.",
      Component: Magnetic,
    },
    {
      title: "Counter.",
      note: "A number that arrives the way numbers should: quickly at first, then settling. Eased on the last third so the final digits feel chosen, not thrown.",
      Component: Counter,
    },
    {
      title: "Marquee.",
      note: "Four lines, looping. Slow by default, faster on hover — the page meets the cursor's interest. Pure CSS, no library.",
      Component: Marquee,
    },
    {
      title: "Trace.",
      note: "An SVG path drawing itself as you scroll past, using native animation-timeline: view(). The browser does the work; the markup stays clean.",
      Component: Trace,
    },
  ];

export default function MotionPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 lg:px-10 pt-40 lg:pt-48 pb-24 lg:pb-32">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
            <Reveal className="col-span-12 lg:col-span-10 lg:col-start-2 flex items-baseline gap-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span>A motion study</span>
              <span aria-hidden>·</span>
              <span>2026</span>
            </Reveal>

            <Reveal
              delay={0.08}
              as="h1"
              className="col-span-12 lg:col-span-10 lg:col-start-2 mt-12 text-display leading-[0.95] tracking-[-0.03em] font-serif italic font-normal"
            >
              Motion.
            </Reveal>

            <Reveal
              delay={0.18}
              as="p"
              className="col-span-12 lg:col-span-7 lg:col-start-2 mt-16 text-lg lg:text-xl leading-[1.55] text-ink/80 max-w-[44ch]"
            >
              Four small studies in the kind of motion I actually reach for —
              held together by a single rule: every animation has to earn the
              milliseconds it takes.
            </Reveal>
          </div>
        </section>

        {pieces.map(({ title, note, Component }, i) => (
          <section
            key={title}
            className="px-6 lg:px-10 py-16 lg:py-24 border-t border-rule"
          >
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6 items-start">
              <Reveal className="col-span-12 lg:col-span-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {`0${i + 1}`}
                </p>
                <h2 className="mt-4 text-3xl lg:text-4xl tracking-[-0.02em] font-serif italic">
                  {title}
                </h2>
                <p className="mt-6 text-[15px] leading-[1.6] text-ink/75 max-w-[36ch]">
                  {note}
                </p>
              </Reveal>

              <Reveal delay={0.1} className="col-span-12 lg:col-span-8 lg:col-start-5 mt-10 lg:mt-0">
                <Component />
              </Reveal>
            </div>
          </section>
        ))}

        <section className="px-6 lg:px-10 py-24 lg:py-40 border-t border-rule">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6 items-end">
            <Reveal as="p" className="col-span-12 lg:col-span-7 lg:col-start-2 text-3xl lg:text-5xl leading-[1.1] tracking-[-0.02em] font-serif italic">
              The best motion is the one you don&rsquo;t notice the second time
              through.
            </Reveal>
            <Reveal
              delay={0.12}
              className="col-span-12 lg:col-span-3 lg:col-start-9 mt-10 lg:mt-0"
            >
              <Link
                href="/"
                className="group inline-flex items-baseline gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors"
              >
                <span aria-hidden>←</span>
                <span>Back to the index</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Colophon />
    </>
  );
}
