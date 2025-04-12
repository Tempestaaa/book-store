"use client";

import {
  BellIcon,
  CircleUserRoundIcon,
  HistoryIcon,
  KeyRoundIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const links = [
    {
      icon: CircleUserRoundIcon,
      name: "Profile preferences",
      href: "profile",
    },
    {
      icon: KeyRoundIcon,
      name: "Change password",
      href: "change-password",
    },
    {
      icon: BellIcon,
      name: "Notifications",
      href: "notifications",
    },
    {
      icon: HistoryIcon,
      name: "Purchase history",
      href: "history",
    },
  ];

  const pathname = usePathname();
  const isActive = (href: string) => pathname === `/settings/${href}`;

  return (
    <menu className="flex flex-col flex-1">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={`/settings/${item.href}`}
            className={`flex-center gap-4 font-heading py-3 duration-300 text-sub hover:text-foreground hover:underline underline-offset-4 ${
              isActive(item.href) && "underline !text-foreground"
            }`}
          >
            <Icon className="size-4" />
            <p>{item.name}</p>
          </Link>
        );
      })}
    </menu>
  );
}
