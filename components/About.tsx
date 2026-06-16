import { Reveal } from "@/components/motion/Reveal";
import { BracketLink } from "@/components/BracketLink";
import { skills } from "@/lib/about";

export function About() {
  return (
    <section id="about" className="px-6 lg:px-10 py-24 lg:py-40 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
        <div className="col-span-12 lg:col-span-10 lg:col-start-2">
          <Reveal
            as="p"
            className="text-2xl lg:text-[2.5rem] leading-[1.3] tracking-[-0.015em] max-w-[34ch] font-serif italic"
          >
            I&rsquo;m Regina. Designer and developer, working out of Ottawa.
          </Reveal>

          <Reveal
            delay={0.12}
            as="p"
            className="mt-10 text-lg leading-[1.6] text-ink/80 max-w-[58ch]"
          >
            Creative technologist working between design and the front end. I
            create adaptive and responsive websites — brand systems, campaigns,
            and the interactive moments that hold them together. I came up
            through interactive media design at{" "}
            <BracketLink href="https://www.algonquincollege.com/" external>
              Algonquin College
            </BracketLink>
            , finished with honours mostly because I liked the work, and kept
            the curiosity around.
          </Reveal>

          <Reveal
            delay={0.18}
            as="p"
            className="mt-6 text-lg leading-[1.6] text-ink/80 max-w-[58ch]"
          >
            Right now I&rsquo;m shaping the digital experience at{" "}
            <BracketLink href="https://thecyclery.ca" external>
              The Cyclery
            </BracketLink>
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
                <BracketLink href="https://thecyclery.ca" external>
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
