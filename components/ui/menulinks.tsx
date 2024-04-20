import Link from "next/link";

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

export function MenuLinks() {
  return (
    <nav className="hidden xl:flex gap-8">
      {Links.map((link) => {
        return (
          <Link key={link.name} href={link.href} className="flex font-medium text-xl hover:border-b-4 border-violet-600 duration-100">
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
