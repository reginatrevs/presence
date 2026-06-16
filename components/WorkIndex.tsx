import Link from "next/link";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/motion/Reveal";

export function WorkIndex() {
  return (
    <section id="work" className="px-6 lg:px-10 pt-32 lg:pt-48 pb-24">
      <div className="mx-auto w-full max-w-[1400px]">
        <Reveal className="mb-16 lg:mb-24">
          <p className="text-2xl lg:text-3xl tracking-[-0.015em] text-ink/65 max-w-[28ch] font-medium leading-[1.25]">
            A few things from the last couple of years.
          </p>
        </Reveal>

        <ol className="divide-y divide-rule border-y border-rule">
          {projects.map((p, i) => {
            const href = p.externalCase ?? `/work/${p.slug}`;
            return (
              <li key={p.slug}>
                <Link
                  href={href}
                  className="group block py-8 lg:py-12 transition-colors"
                >
                  <Reveal
                    delay={i * 0.05}
                    className="grid grid-cols-12 gap-x-6 items-baseline"
                  >
                    <span className="col-span-2 lg:col-span-1 font-mono text-xs uppercase tracking-[0.18em] text-muted self-start pt-2">
                      {p.index}
                    </span>
                    <div className="col-span-10 lg:col-span-5">
                      <h3 className="text-3xl lg:text-5xl tracking-[-0.02em] font-medium leading-[1.05]">
                        <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
                          {p.title}
                        </span>
                      </h3>
                      <p className="mt-3 text-sm text-muted">{p.role}</p>
                    </div>
                    <p className="col-span-9 lg:col-span-4 col-start-3 lg:col-start-auto mt-6 lg:mt-0 text-[15px] leading-[1.55] text-ink/75 max-w-[42ch]">
                      {p.summary}
                    </p>
                    <div className="col-span-12 lg:col-span-2 mt-6 lg:mt-0 flex lg:justify-end items-baseline gap-4">
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                        {p.year}
                      </span>
                      <span
                        aria-hidden
                        className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-transform duration-500 ease-out group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </Reveal>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
