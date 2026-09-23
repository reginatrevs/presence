import Image from "next/image";

const PORTRAIT = "/regina.png";

/**
 * Portrait sits inline above the "I'm Regina" lead — same on desktop and mobile.
 * Grayscale by default, warms to full colour on hover.
 */
export function FloatingPortrait() {
  return (
    <div className="mb-8 lg:mb-10">
      <div className="group relative w-[130px] lg:w-[160px] aspect-[3.5/4.5] rounded-md overflow-hidden">
        <Image
          src={PORTRAIT}
          alt="Regina Trevino"
          fill
          sizes="(min-width: 1024px) 160px, 130px"
          className="object-cover grayscale contrast-[1.02] transition-[filter] duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100"
        />
      </div>
    </div>
  );
}
