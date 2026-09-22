import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-28 pb-24 px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
        <Reveal
          as="h1"
          className="col-span-12 lg:col-span-10 lg:col-start-2 text-display leading-[0.95] tracking-[-0.03em] font-medium"
        >
          Regina{" "}
          <span className="group/t inline-block align-baseline">
            <span className="relative inline-block align-baseline">
              <span className="transition-opacity duration-300 group-hover/t:opacity-0">
                Trevino
              </span>
              <Image
                src="/logo.png"
                alt=""
                width={577}
                height={231}
                priority
                className="pointer-events-none absolute left-1/2 top-1/2 h-[1.55em] w-auto max-w-none -translate-x-1/2 -translate-y-[55%] opacity-0 transition-opacity duration-300 group-hover/t:opacity-100"
              />
            </span>
            <span className="transition-opacity duration-300 group-hover/t:opacity-0">
              ,
            </span>
          </span>
          <br />
          creative technologist.
        </Reveal>

        <Reveal
          delay={0.15}
          className="col-span-12 lg:col-span-7 lg:col-start-2 mt-12 lg:mt-20 text-lg lg:text-xl leading-[1.55] text-ink/80 max-w-[46ch]"
        >
          I design things and then build them. Interfaces, brand systems, and
          the interactive moments that hold them together.
        </Reveal>

        <Reveal
          delay={0.25}
          className="col-span-12 lg:col-span-3 lg:col-start-10 mt-12 lg:mt-20 text-sm text-muted flex items-end justify-between gap-6"
        >
          <span aria-hidden className="text-olive text-base">↓</span>
          <span className="italic font-serif text-base">Three things, recently.</span>
        </Reveal>
      </div>
    </section>
  );
}
