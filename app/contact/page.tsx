import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Colophon } from "@/components/Colophon";
import { Reveal } from "@/components/motion/Reveal";
import { BracketLink } from "@/components/BracketLink";

export const metadata: Metadata = {
  title: "Contact — Regina Trevino",
  description:
    "Open to full-time roles in design engineering, front-end, and product design. Also taking select freelance projects.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="px-6 lg:px-10 pt-40 lg:pt-48 pb-24 lg:pb-40">
          <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6 lg:gap-x-10 items-start">
            <div className="col-span-12 lg:col-span-10 lg:col-start-2">
              <h1 className="sr-only">Contact</h1>

              <Reveal
                as="p"
                className="text-xl lg:text-2xl leading-[1.5] tracking-[-0.01em] text-ink/85 max-w-[42ch]"
              >
                Open to full-time roles in design engineering, front-end, and
                product design. Also taking select freelance projects.
              </Reveal>

              {/* Big email */}
              <Reveal delay={0.12} className="mt-14 lg:mt-20">
                <a
                  href="mailto:regina@trevs.ca"
                  className="group inline-flex items-baseline gap-3 text-[clamp(2rem,4.5vw,3.5rem)] tracking-[-0.03em] font-medium leading-[1.05] border-b border-ink/20 hover:border-ink pb-2 transition-colors"
                >
                  regina@trevs.ca
                  <span
                    aria-hidden
                    className="text-olive transition-transform duration-500 group-hover:translate-x-2"
                  >
                    ↗
                  </span>
                </a>
                <p className="mt-4 text-sm text-muted">
                  or{" "}
                  <a
                    href="mailto:trevsregina@gmail.com"
                    className="text-ink/80 hover:text-olive transition-colors border-b border-ink/15 hover:border-olive pb-0.5"
                  >
                    trevsregina@gmail.com
                  </a>
                </p>
              </Reveal>

              {/* Social links */}
              <Reveal
                delay={0.2}
                className="mt-14 lg:mt-16 grid grid-cols-2 gap-y-8 gap-x-6 text-sm"
              >
                <div>
                  <p className="text-muted">LinkedIn</p>
                  <p className="mt-2">
                    <BracketLink
                      href="https://www.linkedin.com/in/reginatrevs/"
                      external
                    >
                      @reginatrevs
                    </BracketLink>
                  </p>
                </div>
                <div>
                  <p className="text-muted">GitHub</p>
                  <p className="mt-2">
                    <BracketLink href="https://github.com/reginatrevs" external>
                      @reginatrevs
                    </BracketLink>
                  </p>
                </div>
                <div>
                  <p className="text-muted">Instagram</p>
                  <p className="mt-2">
                    <BracketLink
                      href="https://instagram.com/trevs.ca"
                      external
                    >
                      @trevs.ca
                    </BracketLink>
                  </p>
                </div>
                <div>
                  <p className="text-muted">Based in</p>
                  <p className="mt-2 text-ink font-medium">
                    Ottawa, ON
                    <span className="text-muted font-normal">
                      {" · open to remote"}
                    </span>
                  </p>
                </div>
              </Reveal>

              {/* Closing */}
              <Reveal
                delay={0.28}
                as="p"
                className="mt-20 lg:mt-24 font-serif italic text-2xl lg:text-3xl leading-[1.3] text-ink/70 max-w-[28ch]"
              >
                Usually faster by email.
                <br />
                Usually on a bike otherwise.
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Colophon />
    </>
  );
}
