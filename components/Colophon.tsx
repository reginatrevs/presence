import { BackToTop } from "@/components/BackToTop";

export function Colophon() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #f6f5f0 0%, #f7e6b4 55%, #f4dfa0 100%)",
      }}
    >
      <footer className="relative px-6 lg:px-10 pt-32 lg:pt-48 pb-12 lg:pb-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-16">
            <p className="font-serif italic text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink/85 max-w-[18ch]">
              Always making
              <br />
              something.
            </p>
            <BackToTop />
          </div>

          <div className="mt-14 lg:mt-20 grid grid-cols-12 gap-x-6 gap-y-6 text-[13px] items-baseline">
            <p className="col-span-12 lg:col-span-3 text-ink/65">
              © 2026 Regina Trevino
            </p>

            <div className="col-span-12 lg:col-span-5 lg:text-center text-ink/80">
              <p>
                <a
                  href="mailto:trevsregina@gmail.com"
                  className="font-medium hover:text-olive transition-colors"
                >
                  trevsregina@gmail.com
                </a>
                <span className="text-ink/40 mx-2">·</span>
                <a
                  href="mailto:regina@trevs.ca"
                  className="font-medium hover:text-olive transition-colors"
                >
                  regina@trevs.ca
                </a>
              </p>
            </div>

            <p className="col-span-12 lg:col-span-4 lg:text-right text-ink/80">
              <span className="italic">check my Instagram!</span>{" "}
              <a
                href="https://instagram.com/trevs.ca"
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-olive transition-colors"
              >
                @trevs.ca
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
