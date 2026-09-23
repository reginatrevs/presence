import { Reveal } from "@/components/motion/Reveal";
import { BracketLink } from "@/components/BracketLink";
import { FloatingPortrait } from "@/components/FloatingPortrait";
import { skills } from "@/lib/about";

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 lg:px-10 py-24 lg:py-40 border-t border-rule"
    >
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-8 lg:col-start-2">
          <div id="about-intro" className="relative">
            <FloatingPortrait />
          <Reveal
            as="p"
            className="text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.025em] max-w-[24ch] font-serif italic text-ink"
          >
            I&rsquo;m Regina, a creative technologist based in Ottawa.
          </Reveal>

          <Reveal
            delay={0.1}
            as="p"
            className="mt-10 lg:mt-14 text-lg lg:text-xl leading-[1.6] text-ink/85 max-w-[58ch]"
          >
            I design and build digital products, interfaces, and systems that
            make complex things easier to use and manage.
          </Reveal>

          <Reveal
            delay={0.16}
            as="p"
            className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[58ch]"
          >
            My background is in interactive media design, but most of what
            shaped my practice came from hands-on work: solving evolving
            problems, building real things, and learning to move between
            design and implementation without the details falling apart.
          </Reveal>

          <Reveal
            delay={0.22}
            as="p"
            className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[58ch]"
          >
            I own the digital experience and systems at{" "}
            <BracketLink href="https://instagram.com/cycleryottawa" external>
              The Cyclery
            </BracketLink>
            , where my work covers e-commerce, internal workflows, product
            launches, and the tools behind them. I also designed and built
            the Cyclery Racing site end to end. Earlier work spans freelance,
            media, and immersive digital environments, which put me in front
            of very different kinds of users and problems.
          </Reveal>

          <Reveal
            delay={0.28}
            as="p"
            className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[58ch]"
          >
            I&rsquo;m most interested in products that need both thoughtful
            design and real execution: tools people use, systems teams rely
            on. Lately that&rsquo;s meant automation and AI-assisted tooling,
            less because it&rsquo;s fast and more because it changes what&rsquo;s
            worth building in the first place.
          </Reveal>

          <Reveal
            delay={0.34}
            as="p"
            className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[58ch]"
          >
            I think the interesting work right now is in deciding what to
            build, not in how quickly you can build it.
          </Reveal>
          </div>

          {/* Skills */}
          <div className="mt-16 lg:mt-20 border-t border-rule pt-12 lg:pt-16">
            <Reveal className="mb-10">
              <h3 className="text-2xl lg:text-3xl tracking-[-0.015em] font-serif italic text-ink/85">
                Stack &amp; tools.
              </h3>
            </Reveal>

            <ul className="space-y-7 lg:space-y-8">
              {skills.map((group, i) => (
                <li key={group.label}>
                  <Reveal
                    delay={i * 0.05}
                    className="grid grid-cols-12 gap-x-6 items-baseline"
                  >
                    <p className="col-span-12 lg:col-span-3 text-sm text-muted lg:pt-2 mb-3 lg:mb-0">
                      {group.label}
                    </p>
                    <div className="col-span-12 lg:col-span-9 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center px-3 py-1.5 rounded-full border border-ink/15 text-[13px] text-ink/85 hover:bg-ink hover:text-paper hover:border-ink transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal
            delay={0.3}
            className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6 text-sm"
          >
            <div>
              <p className="text-muted">Reach</p>
              <p className="mt-1.5">
                <a
                  href="mailto:trevsregina@gmail.com"
                  className="hover:text-olive transition-colors"
                >
                  trevsregina@gmail.com
                </a>
              </p>
            </div>
            <div>
              <p className="text-muted">Elsewhere</p>
              <p className="mt-1.5">
                <BracketLink
                  href="https://www.linkedin.com/in/reginatrevs/"
                  external
                >
                  LinkedIn
                </BracketLink>
                <span className="mx-2 text-muted/60">·</span>
                <BracketLink href="https://github.com/reginatrevs" external>
                  GitHub
                </BracketLink>
              </p>
            </div>
            <div>
              <p className="text-muted">Now</p>
              <p className="mt-1.5">
                <BracketLink href="https://instagram.com/cycleryottawa" external>
                  The Cyclery
                </BracketLink>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

