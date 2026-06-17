import Link from "next/link";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Colophon } from "@/components/Colophon";
import { Reveal } from "@/components/motion/Reveal";
import {
  SplashCounter,
  CursorBox,
  DeviceAdaptive,
  StatCounter,
} from "./Demos";

export const metadata: Metadata = {
  title: "Cyclery Racing — Regina Trevino",
  description:
    "A women's pro cycling team's site, designed and built end to end. Custom motion, device-adaptive interactions, identity expressed through behavior.",
};

const stack = ["Next.js", "React", "TypeScript", "GSAP", "Vercel"];

const craft: { title: string; body: string; demo: "splash" | "cursor" | "device" | "reveal" }[] = [
  {
    title: "A cursor that pays attention.",
    body: "A custom pink dot that follows with eased motion and changes state by context — expanding over interactive zones, going light over dark sections — driven by data attributes in the markup so the design language and the behavior stay in sync. It steps aside entirely on touch and for anyone who's asked for reduced motion.",
    demo: "cursor",
  },
  {
    title: "An entrance that earns the wait.",
    body: "A splash that counts from 000 to 100 on a custom easing curve, holds, then lifts away — built by hand with requestAnimationFrame, locking scroll until it's done so the first moment is composed, not chaotic.",
    demo: "splash",
  },
  {
    title: "Interaction that respects the device it's on.",
    body: "On desktop you hover a card and it opens. On a phone — where hover is a lie — the same component watches your scroll and lights up whichever card is at the center of your screen. Two different ways to feel the same content, each native to the hand holding it.",
    demo: "device",
  },
  {
    title: "Reveals with rhythm.",
    body: "Sections arrive as you reach them, with direction and timing I can tune per element — a small, reusable motion vocabulary I wrote once and used everywhere. (You're scrolling through it right now.)",
    demo: "reveal",
  },
];

export default function CycleryRacingPage() {
  return (
    <>
      <Nav />
      <main>
        <article>
          {/* Hero */}
          <header className="px-6 lg:px-10 pt-40 lg:pt-48 pb-20 lg:pb-28">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal className="col-span-12 lg:col-span-10 lg:col-start-2 flex items-baseline gap-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span>Brand &amp; launch site</span>
                <span aria-hidden className="text-olive">
                  ·
                </span>
                <span className="text-olive">2026</span>
              </Reveal>

              <Reveal
                delay={0.08}
                as="h1"
                className="col-span-12 lg:col-span-10 lg:col-start-2 mt-8 text-display leading-[0.95] tracking-[-0.03em] font-medium"
              >
                Cyclery Racing
              </Reveal>

              <Reveal
                delay={0.2}
                as="p"
                className="col-span-12 lg:col-span-8 lg:col-start-2 mt-14 lg:mt-20 text-2xl lg:text-[2.4rem] leading-[1.15] tracking-[-0.02em] max-w-[26ch] font-serif italic text-ink/85"
              >
                Most team websites apply a brand. This one performs it.
              </Reveal>

              <Reveal
                delay={0.28}
                className="col-span-12 lg:col-span-3 lg:col-start-10 mt-14 lg:mt-20 flex flex-col gap-3"
              >
                <a
                  href="https://www.cycleryracing.ca"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-baseline gap-2 text-lg tracking-[-0.01em] border-b border-ink/20 hover:border-ink pb-1 self-start transition-colors"
                >
                  cycleryracing.ca
                  <span
                    aria-hidden
                    className="transition-transform duration-500 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="https://github.com/reginatrevs/cyclery-racing"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-baseline gap-2 text-sm text-muted hover:text-ink transition-colors"
                >
                  view source ↗
                </a>
              </Reveal>
            </div>
          </header>

          {/* The project */}
          <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal className="col-span-12 lg:col-span-3 lg:col-start-2">
                <p className="font-serif italic text-2xl text-ink/60">
                  The project.
                </p>
              </Reveal>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5 mt-6 lg:mt-0">
                <Reveal
                  as="p"
                  className="text-lg leading-[1.65] text-ink/85 max-w-[62ch]"
                >
                  Cyclery Racing is a Canadian women&rsquo;s professional cycling
                  team. They had an aging, paid WordPress site that didn&rsquo;t
                  look like the athletes it represented. I designed and built its
                  replacement end to end — identity, interaction, and front end
                  — as a single custom build they own outright, with the polish
                  they&rsquo;d associated with tools like Framer or Webflow and
                  none of the monthly fee.
                </Reveal>
                <Reveal
                  delay={0.08}
                  as="p"
                  className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[62ch]"
                >
                  I treated the brand as something the page <em>does</em>, not
                  just something it shows. The energy of the team — fast,
                  deliberate, alive — lives in how the site behaves: an entrance
                  that counts itself up before it lets you in, a cursor that
                  reacts to where it is, stats and races that come to life as
                  you move through them. Design and code weren&rsquo;t two
                  phases here. They were the same act.
                </Reveal>
              </div>
            </div>
          </section>

          {/* The idea */}
          <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal className="col-span-12 lg:col-span-3 lg:col-start-2">
                <p className="font-serif italic text-2xl text-ink/60">
                  The idea.
                </p>
              </Reveal>
              <Reveal
                delay={0.08}
                as="p"
                className="col-span-12 lg:col-span-7 lg:col-start-5 mt-6 lg:mt-0 text-lg leading-[1.65] text-ink/85 max-w-[62ch]"
              >
                The hard part of a brand site isn&rsquo;t decoration — it&rsquo;s
                making identity <em>legible through behavior</em>. I wanted the
                first ten seconds to feel like the team: motion with intent,
                nothing idle. So the interaction model became the brand
                expression. The site doesn&rsquo;t have animations bolted onto a
                layout; the animation is how the layout means what it means.
              </Reveal>
            </div>
          </section>

          {/* The craft — 4 interactive blocks */}
          <section className="px-6 lg:px-10 py-20 lg:py-32 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px]">
              <Reveal className="mb-12 lg:mb-20">
                <h2 className="font-serif italic text-3xl lg:text-5xl tracking-[-0.02em] leading-[1.05]">
                  The craft.
                </h2>
                <p className="mt-4 text-[15px] text-muted max-w-[42ch]">
                  Where the idea becomes real — four moments you can actually feel.
                </p>
              </Reveal>

              <ol className="flex flex-col gap-20 lg:gap-28">
                {craft.map((item, i) => (
                  <li key={item.title}>
                    <Reveal
                      delay={i * 0.05}
                      className="grid grid-cols-12 gap-x-6 gap-y-8 items-center"
                    >
                      <div
                        className={`col-span-12 lg:col-span-5 ${
                          i % 2 === 1 ? "lg:col-start-8 lg:order-2" : "lg:col-start-2"
                        }`}
                      >
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-olive">
                          {String(i + 1).padStart(2, "0")} · craft
                        </p>
                        <h3 className="mt-3 text-2xl lg:text-[2rem] tracking-[-0.02em] leading-[1.1] font-serif italic">
                          {item.title}
                        </h3>
                        <p className="mt-5 text-[15px] leading-[1.65] text-ink/80 max-w-[42ch]">
                          {item.body}
                        </p>
                      </div>
                      <div
                        className={`col-span-12 lg:col-span-6 ${
                          i % 2 === 1 ? "lg:col-start-2 lg:order-1" : "lg:col-start-7"
                        }`}
                      >
                        {item.demo === "splash" && <SplashCounter />}
                        {item.demo === "cursor" && <CursorBox />}
                        {item.demo === "device" && <DeviceAdaptive />}
                        {item.demo === "reveal" && (
                          <div className="aspect-[4/3] rounded-2xl border border-rule bg-gradient-to-br from-white/60 via-paper to-rule/30 p-6 lg:p-8 flex flex-col justify-end gap-4">
                            <div className="h-3 w-3/4 rounded-full bg-ink/15" />
                            <div className="h-3 w-2/3 rounded-full bg-ink/10" />
                            <div className="h-3 w-1/2 rounded-full bg-ink/5" />
                            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                              Each line revealed as it crosses 88% of the viewport.
                            </p>
                          </div>
                        )}
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* The making */}
          <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal className="col-span-12 lg:col-span-3 lg:col-start-2">
                <p className="font-serif italic text-2xl text-ink/60">
                  The making.
                </p>
              </Reveal>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5 mt-6 lg:mt-0">
                <Reveal
                  as="p"
                  className="text-lg leading-[1.65] text-ink/85 max-w-[62ch]"
                >
                  I built the motion system myself instead of pulling in a
                  library. Every reveal, the cursor, the splash, the scroll
                  behavior — hand-written, on{" "}
                  <span className="font-mono text-base">IntersectionObserver</span>{" "}
                  and{" "}
                  <span className="font-mono text-base">requestAnimationFrame</span>
                  , which kept the whole thing at four runtime dependencies and
                  kept performance a default rather than an afterthought:
                  properly sized images, passive and throttled scroll,
                  GPU-friendly transforms, no webfont round-trip. The reveal
                  logic is a single reusable hook and wrapper the pages consume,
                  and the color language is defined once as design tokens. Built
                  in Next.js and React with TypeScript; shipped on Vercel.
                </Reveal>
                <Reveal
                  delay={0.08}
                  as="p"
                  className="mt-6 text-base italic text-ink/65"
                >
                  It&rsquo;s not a tech demo. It&rsquo;s a real site, for a real
                  team, that real people use.
                </Reveal>
                <Reveal delay={0.16} className="mt-8 flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted border border-rule px-3 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </Reveal>
              </div>
            </div>
          </section>

          {/* Stats — it works where it matters */}
          <section className="px-6 lg:px-10 py-20 lg:py-32 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px]">
              <Reveal className="mb-12 lg:mb-16">
                <h2 className="font-serif italic text-3xl lg:text-5xl tracking-[-0.02em] leading-[1.05]">
                  It works where it matters.
                </h2>
                <p className="mt-4 text-[15px] text-muted max-w-[44ch]">
                  The audience is on their phones; the build was designed for
                  that from the first decision.
                </p>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                <Reveal delay={0.05}>
                  <StatCounter
                    value={77}
                    suffix="%"
                    label="of visitors arrive on mobile."
                  />
                </Reveal>
                <Reveal delay={0.12}>
                  <StatCounter
                    value={1}
                    suffix=""
                    label="Instagram is the top referrer — ahead of Google."
                  />
                </Reveal>
                <Reveal delay={0.19}>
                  <StatCounter
                    value={87}
                    suffix="%"
                    label="of traffic is Canadian, for a proudly homegrown team."
                  />
                </Reveal>
              </div>
            </div>
          </section>

          {/* How I work */}
          <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal className="col-span-12 lg:col-span-3 lg:col-start-2">
                <p className="font-serif italic text-2xl text-ink/60">
                  How I work.
                </p>
              </Reveal>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5 mt-6 lg:mt-0">
                <Reveal
                  as="p"
                  className="text-lg leading-[1.65] text-ink/85 max-w-[62ch]"
                >
                  I don&rsquo;t hand a design to an engineer or a build to a
                  designer — I move between the two until the idea and the
                  implementation are the same thing. I&rsquo;ll write the motion
                  by hand if that&rsquo;s what gives me control over the feel,
                  and I&rsquo;ll cut the heavy tool if a lighter one ships a
                  better experience. The launch is where I start paying
                  attention, not where I stop: the first thing I added after
                  this one went live was reduced-motion support, because motion
                  you can&rsquo;t opt out of isn&rsquo;t craft, it&rsquo;s noise.
                </Reveal>
                <Reveal
                  delay={0.08}
                  as="p"
                  className="mt-8 text-sm leading-[1.6] text-muted italic max-w-[62ch]"
                >
                  Solo project — identity, IA, interaction, and build. The
                  physical team race kit was designed separately. AI as an
                  accelerator in my workflow; the decisions are mine.
                </Reveal>
              </div>
            </div>
          </section>

          {/* Next */}
          <section className="px-6 lg:px-10 py-20 lg:py-32 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal delay={0.05} className="col-span-12 lg:col-span-10 lg:col-start-2">
                <Link href="/work/notto" className="group block">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    Product site
                  </p>
                  <h3 className="mt-3 text-4xl lg:text-6xl tracking-[-0.02em] font-medium leading-[1.05]">
                    <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
                      Notto
                    </span>
                    <span
                      aria-hidden
                      className="ml-3 inline-block transition-transform duration-500 ease-out group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </h3>
                </Link>
              </Reveal>
            </div>
          </section>
        </article>
      </main>
      <Colophon />
    </>
  );
}
