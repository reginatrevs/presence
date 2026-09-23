import Image from "next/image";

const PORTRAIT = "/regina.png";

export function MobilePortrait() {
  return (
    <div className="lg:hidden mb-10 flex justify-center">
      <div className="relative w-[140px] aspect-[3.5/4.5] rounded-md overflow-hidden">
        <Image
          src={PORTRAIT}
          alt="Regina Trevino"
          fill
          sizes="140px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
