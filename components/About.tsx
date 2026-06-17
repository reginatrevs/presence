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
            className="text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.025em] max-w-[24ch] font-serif italic text-ink"
          >
            I&rsquo;m Regina, a creative technologist based in Ottawa.
          </Reveal>

          <Reveal
            delay={0.1}
            as="p"
            className="mt-10 lg:mt-14 text-lg lg:text-xl leading-[1.6] text-ink/85 max-w-[58ch]"
          >
            I work across design, front end development, and digital systems,
            building responsive websites, brand experiences, and the small
            structures that make them feel clear, useful, and well considered.
          </Reveal>

          <Reveal
            delay={0.16}
            as="p"
            className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[58ch]"
          >
            My background is in interactive media design, but most of what
            shaped me came from fast moving, hands on work: building for the
            web, solving evolving problems, and learning how to move quickly
            without losing the craft.
          </Reveal>

          <Reveal
            delay={0.22}
            as="p"
            className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[58ch]"
          >
            I currently support digital experience and web systems at{" "}
            <BracketLink href="https://instagram.com/cycleryottawa" external>
              The Cyclery
            </BracketLink>
            , where I work across internal workflows, web creation, content
            operations, and sponsor facing projects. My earlier work spans
            freelance, media, and immersive digital environments, always
            somewhere between design, strategy, and implementation.
          </Reveal>

          <Reveal
            delay={0.28}
            as="p"
            className="mt-6 text-lg leading-[1.65] text-ink/80 max-w-[58ch]"
          >
            More recently, I&rsquo;ve been exploring the systems behind the
            work: automation, AI assisted tooling, and practical ways to help
            teams work more efficiently while keeping the output thoughtful
            and human.
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
