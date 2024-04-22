import Link from "next/link";
import CldImage from "./cldimage";
import { cormorant, dancing_script } from "./fonts";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
        <CldImage
          src="vhee_logo_rcc6wf"
          alt="vhee world logo"
          width={70}
          height={70}
          priority
          className="h-auto w-auto"
        />
        <p className="font-semibold text-xl md:text-3xl p-2">
          <span className={`${cormorant.className} text-[#491BA2] font-bold text-2xl md:text-4xl`}>VHEE </span>
          <span className={`${dancing_script.className} text-[#408BE8]`}>World</span>
        </p>
      </Link>
  )
}