"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Store",
      href: "/store",
    },
  ];

  return (
    <menu className="flex-center gap-1">
      {links.map(({ name, href }) => (
        <Link
          key={href}
          href={href}
          className={`font-heading px-8 py-2 hover:bg-muted duration-200 rounded-full text-sub hover:text-foreground ${
            isActive(href) && "!text-foreground bg-muted"
          }`}
        >
          {name}
        </Link>
      ))}
    </menu>
  );
}
