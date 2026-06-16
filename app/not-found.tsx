import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Colophon } from "@/components/Colophon";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[70svh] flex items-center px-6 lg:px-10 pt-32">
        <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              404 · Off the path
            </p>
            <h1 className="mt-6 text-display leading-[0.95] tracking-[-0.03em] font-medium">
              Nothing here<span className="font-serif italic font-normal">.</span>
            </h1>
            <p className="mt-10 text-lg leading-[1.55] text-ink/80 max-w-[42ch]">
              The page you were looking for has either moved or never existed.
              Either way, it isn't here.
            </p>
            <Link
              href="/"
              className="group inline-flex items-baseline gap-2 mt-10 text-lg tracking-[-0.01em] border-b border-ink/20 hover:border-ink pb-1"
            >
              <span aria-hidden>←</span> Back to the index
            </Link>
          </div>
        </div>
      </main>
      <Colophon />
    </>
  );
}
