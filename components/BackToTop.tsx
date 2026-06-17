"use client";

export function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="group/back inline-flex flex-col items-start gap-1 text-left"
    >
      <span className="font-serif italic text-2xl lg:text-3xl text-ink/85 leading-none">
        you made it.
      </span>
      <span className="text-[11px] uppercase tracking-[0.18em] text-olive group-hover/back:text-ink transition-colors">
        ↑ back to top
      </span>
    </button>
  );
}
