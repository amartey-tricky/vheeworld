"use client";

import Link from "next/link";
import { Logo } from "./ui/logo";
import { MenuLinks } from "./ui/menulinks";
import { Donate } from "./ui/donate";
import { useState } from "react";
import { Button } from "./ui/button";
import { acme } from "./ui/fonts";
import { Menu, X } from "lucide-react";

const Links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Ways To Give",
    href: "/ways-to-give",
  },
  {
    name: "Contact",
    href: "contact",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="rounded-md px-8 py-2 fixed top-0 backdrop-blur-xl w-full md:px-16">
      <div className="w-full flex items-center justify-between">
        <Logo />
        <MenuLinks />
        <Donate />
        <Button onClick={handleMenu} variant="ghost" className="xl:hidden">
          <span className="sr-only">Open menu</span>
          {menuOpen ? (
            <X size={30} className="font-semibold ease duration-200" />
          ) : (
            <Menu size={30} className="font-semibold ease duration-200" />
          )}
        </Button>
      </div>
      <div
        className={
          menuOpen
            ? "fixed h-screen w-[70%] text-slate-300 bg-[#491BA2] opacity-90 backdrop-blur-xl top-0 left-0 ease-in-out duration-200 md:w-[40%]"
            : "fixed left-[-100%] ease duration-300"
        }
      >
        <nav className="flex flex-col gap-9 text-xl items-center justify-between mt-[8rem] md:text-2xl md:font-semibold md:gap-12">
          {Links.map((link) => {
            return (
              <Link key={link.name} href={link.href}>{link.name}</Link>
            )
          })}
          <Link href="/donate">
            <button className={`${acme.className} text-2xl font-medium rounded-lg px-4 py-2 bg-[#75A11B] hover:bg-[#7F4EE1]`}>Donate</button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
