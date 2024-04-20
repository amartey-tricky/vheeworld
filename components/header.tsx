import Link from "next/link";
import CldImage from "./ui/cldimage";
import { dancing_script, cormorant } from "./ui/fonts";
import { MenuLinks } from "./ui/menulinks";
import { Donate } from "./ui/donate";

export default function Header() {
  return (
    <header className="rounded-md flex items-center justify-between px-8 py-2 fixed top-0 backdrop-blur-xl w-full md:px-16">
      <Link href="/" className="flex items-center gap-2">
        <CldImage
          src="vhee_logo_rcc6wf"
          alt="vhee world logo"
          width={86}
          height={86}
          priority
        />
        <p className="font-semibold text-3xl p-2">
          <span className={`${cormorant.className} text-[#a370f0] font-bold text-4xl`}>VHEE </span>
          <span className={`${dancing_script.className} text-[#9400D3]`}>World</span>
        </p>
      </Link>
      <MenuLinks />
      <Donate />
    </header>
  );
}
