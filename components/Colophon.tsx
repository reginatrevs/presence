export function Colophon() {
  return (
    <footer className="px-6 lg:px-10 py-10 border-t border-rule">
      <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted items-baseline">
        <p className="col-span-6 lg:col-span-3">
          © 2026 Regina Trevino
        </p>
        <p className="col-span-6 lg:col-span-3">
          Geist · Instrument Serif
        </p>
        <p className="hidden lg:block lg:col-span-3">
          Next.js · GSAP · Vercel
        </p>
        <p className="col-span-12 lg:col-span-3 lg:text-right mt-4 lg:mt-0">
          <a
            href="mailto:trevsregina@gmail.com"
            className="hover:text-ink transition-colors"
          >
            trevsregina@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
