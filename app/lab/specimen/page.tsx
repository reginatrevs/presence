import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Colophon } from "@/components/Colophon";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./specimen.module.css";

export const metadata: Metadata = {
  title: "Specimen — Regina Trevino",
  description:
    "A small typographic specimen built around Instrument Serif and Geist Sans. CSS-driven scroll choreography, no library required.",
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const swatches: { name: string; token: string; value: string }[] = [
  { name: "Paper", token: "--color-paper", value: "#F6F5F0" },
  { name: "Ink", token: "--color-ink", value: "#0C0C0C" },
  { name: "Muted", token: "--color-muted", value: "#6A6A66" },
  { name: "Rule", token: "--color-rule", value: "#D8D6CD" },
];

const scale: { label: string; size: string; sample: string }[] = [
  { label: "Display", size: "112 / 6.0", sample: "Form follows feeling" },
  { label: "Editorial", size: "84 / 5.0", sample: "Considered restraint" },
  { label: "Section", size: "48 / 3.0", sample: "Pacing, not volume" },
  { label: "Body", size: "17 / 1.0625", sample: "Reads carefully, scrolls gracefully." },
  { label: "Meta", size: "11 / 0.6875", sample: "Set in monospace, all uppercase, tracked." },
];

export default function Specimen() {
  return (
    <>
      <Nav />
      <main className={styles.stage}>
        <section className="px-6 lg:px-10 pt-40 lg:pt-48 pb-24 lg:pb-32">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
            <Reveal className="col-span-12 lg:col-span-10 lg:col-start-2 flex items-baseline gap-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">
              <span>A type study</span>
              <span aria-hidden>·</span>
              <span>2026</span>
            </Reveal>

            <div className="col-span-12 lg:col-span-10 lg:col-start-2 mt-12">
              <h1 className={styles.hero}>Specimen.</h1>
            </div>

            <Reveal
              delay={0.15}
              as="p"
              className="col-span-12 lg:col-span-7 lg:col-start-2 mt-16 text-lg lg:text-xl leading-[1.55] text-ink/80 max-w-[44ch]"
            >
              A small study of the type system behind this site &mdash; the
              palette, the scale, the letterforms. No animation library; the
              hero tightens through{" "}
              <span className="font-mono text-base">animation-timeline: view()</span>,
              the browser doing the work.
            </Reveal>
          </div>
        </section>

        <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-rule">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
            <Reveal className="col-span-12 lg:col-span-2">
              <p className="font-serif italic text-xl text-ink/60">Colour.</p>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-10 mt-8 lg:mt-0">
              <div className={styles.swatches}>
                {swatches.map((s) => (
                  <div
                    key={s.name}
                    className={styles.swatch}
                    style={{ background: s.value, color: s.name === "Ink" ? "#F6F5F0" : "#0C0C0C" }}
                  >
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-80">
                        {s.name}
                      </p>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-60 mt-1">
                        {s.token}
                      </p>
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-80">
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-rule">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
            <Reveal className="col-span-12 lg:col-span-2">
              <p className="font-serif italic text-xl text-ink/60">Scale.</p>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-10 flex flex-col gap-12 lg:gap-16 mt-8 lg:mt-0">
              {scale.map((row) => (
                <div key={row.label} className={styles.scaleRow}>
                  <div>
                    <p className={styles.scaleLabel}>{row.label}</p>
                    <p className="font-mono text-[11px] text-muted/70 mt-1.5">
                      {row.size}
                    </p>
                  </div>
                  <p
                    className={styles.scaleSample}
                    style={{
                      fontSize:
                        row.label === "Display"
                          ? "clamp(3rem, 7vw, 6rem)"
                          : row.label === "Editorial"
                            ? "clamp(2.5rem, 5vw, 4.5rem)"
                            : row.label === "Section"
                              ? "clamp(2rem, 3vw, 3rem)"
                              : row.label === "Body"
                                ? "1.0625rem"
                                : "0.6875rem",
                      lineHeight:
                        row.label === "Body" || row.label === "Meta" ? 1.55 : 1.05,
                      textTransform: row.label === "Meta" ? "uppercase" : undefined,
                      letterSpacing: row.label === "Meta" ? "0.18em" : undefined,
                      fontFamily:
                        row.label === "Meta" ? "var(--font-mono)" : undefined,
                    }}
                  >
                    {row.sample}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-rule">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
            <Reveal className="col-span-12 lg:col-span-2">
              <p className="font-serif italic text-xl text-ink/60">Letters.</p>
            </Reveal>
            <Reveal delay={0.08} className="col-span-12 lg:col-span-10 mt-8 lg:mt-0">
              <div className={styles.glyphGrid}>
                {letters.map((l) => (
                  <div
                    key={l}
                    className={styles.glyph}
                    data-name={l}
                    aria-label={`Letter ${l}`}
                  >
                    {l}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-6 lg:px-10 py-24 lg:py-40 border-t border-rule">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6 items-end">
            <Reveal as="p" className="col-span-12 lg:col-span-7 lg:col-start-2">
              <span className={styles.tail}>
                Type is the work that does the most while being noticed the least.
              </span>
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
