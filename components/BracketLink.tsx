import Link from "next/link";

type Props = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function BracketLink({ href, external, children, className = "" }: Props) {
  const inner = (
    <>
      <span className="text-ink/40 font-normal">[</span>
      <span className="font-medium">{children}</span>
      <span className="text-ink/40 font-normal">]</span>
    </>
  );
  const cls = `inline-flex items-baseline hover:text-olive transition-colors ${className}`;
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        target={external || href.startsWith("http") ? "_blank" : undefined}
        rel={external || href.startsWith("http") ? "noreferrer" : undefined}
        className={cls}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
