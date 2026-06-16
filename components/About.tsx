import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section id="about" className="px-6 lg:px-10 py-24 lg:py-40 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <Reveal
            as="p"
            className="text-2xl lg:text-[2.5rem] leading-[1.3] tracking-[-0.015em] max-w-[34ch] font-serif italic"
          >
            I&rsquo;m Regina. Born in Mexico, working out of Ottawa.
          </Reveal>

          <Reveal
            delay={0.12}
            as="p"
            className="mt-10 text-lg leading-[1.6] text-ink/80 max-w-[58ch]"
          >
            Part designer, part developer. Most of what I make are websites,
            usually starting with a font choice and ending with code I&rsquo;m
            proud of. I came up through interactive media design at Algonquin
            College, finished with honours mostly because I liked the work, and
            kept the curiosity around.
          </Reveal>

          <Reveal
            delay={0.18}
            as="p"
            className="mt-6 text-lg leading-[1.6] text-ink/80 max-w-[58ch]"
          >
            Right now I&rsquo;m shaping the digital experience at{" "}
            <a
              href="https://thecyclery.ca"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-rule underline-offset-4 hover:decoration-ink transition-colors"
            >
              The Cyclery
            </a>
            , where most of my days are spent on what makes a shopper pause,
            then click. Before that, a record label, a VR studio, and a few
            years of freelance.
          </Reveal>

          <Reveal
            delay={0.24}
            as="p"
            className="mt-6 text-lg leading-[1.6] text-ink/80 max-w-[58ch]"
          >
            Lately I&rsquo;ve been more interested in the small systems behind
            the work — workflow automation, AI-assisted tooling, the practical
            bits that help a team move faster without losing the craft.
          </Reveal>

          <Reveal
            delay={0.3}
            className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            <div>
              <p className="text-ink/40">Now</p>
              <p className="mt-1.5">The Cyclery</p>
            </div>
            <div>
              <p className="text-ink/40">School</p>
              <p className="mt-1.5">Algonquin · IMD</p>
              <p className="mt-0.5">Honours · 4.0</p>
            </div>
            <div>
              <p className="text-ink/40">Tools</p>
              <p className="mt-1.5">Next · React · TS</p>
              <p className="mt-0.5">Figma · GSAP</p>
            </div>
            <div>
              <p className="text-ink/40">Reach</p>
              <p className="mt-1.5">
                <a
                  href="mailto:trevsregina@gmail.com"
                  className="hover:text-ink transition-colors"
                >
                  trevsregina@gmail.com
                </a>
              </p>
              <p className="mt-0.5">
                <a
                  href="https://www.linkedin.com/in/reginatrevs/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ink transition-colors"
                >
                  LinkedIn ↗
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
