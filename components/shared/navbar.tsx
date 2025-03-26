import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ChevronLeftIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Store",
    href: "/store",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="px-2 md:px-4 border-b border-muted fixed top-0 left-0 right-0 z-50 bg-background">
      <nav className="h-14 flex-center justify-between relative">
        <Sheet>
          <section className="flex-center gap-2">
            <section className="flex-center gap-2">
              {/* Moblie sidebar menu trigger */}
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <MenuIcon className="size-4" />
                </Button>
              </SheetTrigger>

              {/* Logo */}
              <Logo />
            </section>

            {/* Desktop menu */}
            <section className="hidden md:flex items-center">
              {links.map((item) => (
                <Button key={item.href} asChild variant="ghost">
                  <Link href={item.href} className="px-4 font-normal text-sub">
                    {item.name}
                  </Link>
                </Button>
              ))}
            </section>
          </section>

          <section className="flex-center gap-2">
            {/* Search button on mobile device */}
            <input type="checkbox" id="search-input" className="peer sr-only" />

            <label
              htmlFor="search-input"
              className="size-10 rounded-full grid-center"
            >
              <SearchIcon className="size-4 md:hidden" />
            </label>

            {/* Search input */}
            <div className="hidden md:flex items-center rounded-2xl px-2 ring-2 ring-transparent has-focus:ring-primary border-2 border-muted has-focus:border-transparent duration-300 placeholder:text-sm peer-checked:absolute peer-checked:flex peer-checked:bg-background peer-checked:rounded-none top-0 -left-2 peer-checked:h-full peer-checked:w-screen peer-checked:ring-0">
              <label htmlFor="search-input" className="mr-4 md:hidden">
                <ChevronLeftIcon className="size-4" />
              </label>

              <SearchIcon className="size-4" />
              <input
                type="text"
                placeholder="Search"
                className="h-8 pl-2 pr-4 rounded-2xl focus-visible:outline-0 duration-300 w-full"
              />
            </div>

            {/* To /cart site */}
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCartIcon className="size-4" />
              </Link>
            </Button>

            {/* User's avatar */}
            <Image
              src="/images/user-profile.jpg"
              alt="user's avatar"
              width={40}
              height={40}
              priority
              className="rounded-full"
            />
          </section>

          {/* Sidebar menu */}
          {/* Todo: Add "aria-describedby" attribute */}
          <SheetContent side="left">
            <SheetTitle>
              <div className="grid-center py-2">
                <Logo />
              </div>
            </SheetTitle>

            <div className="flex flex-col px-2">
              {links.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Button asChild variant="ghost">
                    <Link
                      href={item.href}
                      className="px-4 font-normal text-sub"
                    >
                      {item.name}
                    </Link>
                  </Button>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
