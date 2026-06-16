import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end pt-32 pb-16 px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
        <Reveal
          as="h1"
          className="col-span-12 lg:col-span-10 lg:col-start-2 text-display leading-[0.95] tracking-[-0.03em] font-medium"
        >
          Regina Trevino,<br />
          <span className="font-serif italic font-normal">design engineer</span>.
        </Reveal>

        <Reveal
          delay={0.15}
          className="col-span-12 lg:col-span-7 lg:col-start-2 mt-12 lg:mt-20 text-lg lg:text-xl leading-[1.55] text-ink/80 max-w-[44ch]"
        >
          Part designer, part developer. I make thoughtful, responsive websites —
          usually starting with a font choice and ending with code I&rsquo;m proud
          of.
        </Reveal>

        <Reveal
          delay={0.25}
          className="col-span-12 lg:col-span-3 lg:col-start-10 mt-12 lg:mt-20 font-mono text-xs uppercase tracking-[0.18em] text-muted flex items-end justify-between gap-6"
        >
          <span aria-hidden>↓</span>
          <span>Three things, recently</span>
        </Reveal>
      </div>
    </section>
  );
}
