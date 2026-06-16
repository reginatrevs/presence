import Link from "next/link";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-paper/70 border-b border-rule/60">
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 h-14 flex items-center justify-between text-[13px] tracking-tight">
        <Link href="/" className="font-sans">
          <span className="font-serif italic text-[17px] leading-none">Regina</span>
          <span className="text-muted ml-1">Trevino</span>
        </Link>
        <ul className="flex items-center gap-8 text-muted">
          <li>
            <Link href="/#work" className="hover:text-ink transition-colors">
              Index
            </Link>
          </li>
          <li>
            <Link href="/#about" className="hover:text-ink transition-colors">
              About
            </Link>
          </li>
          <li>
            <a
              href="mailto:trevsregina@gmail.com"
              className="hover:text-ink transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
