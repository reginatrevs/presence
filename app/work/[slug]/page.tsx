import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Colophon } from "@/components/Colophon";
import { Reveal } from "@/components/motion/Reveal";
import { projects } from "@/lib/projects";

// cyclery-racing has its own dedicated route at app/work/cyclery-racing
const studies = projects.filter(
  (p) => !p.externalCase && p.slug !== "cyclery-racing",
);

export function generateStaticParams() {
  return studies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = studies.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Regina Trevino`,
    description: project.summary,
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = studies.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = studies.findIndex((p) => p.slug === slug);
  const next = studies[(idx + 1) % studies.length];

  return (
    <>
      <Nav />
      <main>
        <article>
          <header className="px-6 lg:px-10 pt-40 lg:pt-48 pb-20 lg:pb-32">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal className="col-span-12 lg:col-span-10 lg:col-start-2 flex items-baseline gap-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">
                <span>{project.role}</span>
                <span aria-hidden className="text-olive">·</span>
                <span className="text-olive">{project.year}</span>
              </Reveal>

              <Reveal
                delay={0.08}
                as="h1"
                className="col-span-12 lg:col-span-10 lg:col-start-2 mt-8 text-display leading-[0.95] tracking-[-0.03em] font-medium"
              >
                {project.title}
              </Reveal>

              <Reveal
                delay={0.2}
                as="p"
                className="col-span-12 lg:col-span-7 lg:col-start-2 mt-14 lg:mt-20 text-xl lg:text-[1.65rem] leading-[1.45] tracking-[-0.01em] text-ink/85 max-w-[48ch] font-normal"
              >
                {project.caseStudy.frame}
              </Reveal>

              {project.liveUrl && (
                <Reveal
                  delay={0.28}
                  className="col-span-12 lg:col-span-3 lg:col-start-10 mt-14 lg:mt-20 flex flex-col gap-3"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cta-pill group/cta self-start"
                    style={{ fontSize: 14, padding: "10px 18px" }}
                  >
                    Visit project
                    <span aria-hidden className="cta-arrow">
                      ↗
                    </span>
                  </a>
                </Reveal>
              )}
            </div>
          </header>

          <section className="px-6 lg:px-10 py-20 lg:py-32 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <div className="col-span-12 lg:col-span-8 lg:col-start-3">
                <Reveal
                  as="h2"
                  className="text-3xl lg:text-5xl leading-[1.1] tracking-[-0.02em] font-serif italic"
                >
                  {project.caseStudy.decisionLabel}.
                </Reveal>
                <Reveal
                  delay={0.12}
                  as="p"
                  className="mt-10 text-lg leading-[1.6] text-ink/80 max-w-[60ch]"
                >
                  {project.caseStudy.decision}
                </Reveal>
                <Reveal
                  delay={0.22}
                  as="p"
                  className="mt-8 text-lg leading-[1.6] text-ink/80 max-w-[60ch]"
                >
                  {project.caseStudy.build}
                </Reveal>
                <Reveal delay={0.3} className="mt-10 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted border border-rule px-3 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </Reveal>
                <Reveal
                  delay={0.4}
                  as="p"
                  className="mt-16 text-sm leading-[1.6] text-muted italic max-w-[60ch]"
                >
                  {project.caseStudy.credits}
                </Reveal>
              </div>
            </div>
          </section>

          <section className="px-6 lg:px-10 py-20 lg:py-32 border-t border-rule">
            <div className="mx-auto w-full max-w-[1400px] grid grid-cols-12 gap-x-6">
              <Reveal delay={0.05} className="col-span-12 lg:col-span-10 lg:col-start-2">
                <Link href={`/work/${next.slug}`} className="group block">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                    {next.role}
                  </p>
                  <h3 className="mt-3 text-4xl lg:text-6xl tracking-[-0.02em] font-medium leading-[1.05]">
                    <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
                      {next.title}
                    </span>
                    <span
                      aria-hidden
                      className="ml-3 inline-block transition-transform duration-500 ease-out group-hover:translate-x-2"
                    >
                      →
                    </span>
                  </h3>
                </Link>
              </Reveal>
            </div>
          </section>
        </article>
      </main>
      <Colophon />
    </>
  );
}
