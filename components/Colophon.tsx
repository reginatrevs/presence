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
          <p className="font-serif italic text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink/85 max-w-[18ch]">
            Always making
            <br />
            something.
          </p>

          <div className="mt-14 lg:mt-20 grid grid-cols-12 gap-x-6 gap-y-6 text-[13px] items-baseline">
            <p className="col-span-12 lg:col-span-3 text-ink/65">
              © 2026 Regina Trevino
            </p>
            <p className="col-span-6 lg:col-span-3 text-ink/65">
              Geist · Instrument Serif
            </p>
            <p className="col-span-6 lg:col-span-3 text-ink/65">
              Next.js · GSAP · Vercel
            </p>
            <p className="col-span-12 lg:col-span-3 lg:text-right">
              <a
                href="mailto:trevsregina@gmail.com"
                className="text-ink hover:text-olive transition-colors font-medium"
              >
                trevsregina@gmail.com
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
