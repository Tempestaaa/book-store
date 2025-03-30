import Logo from "@/components/shared/logo";
import NavMenu from "@/components/shared/nav-menu";
import NavSearch from "@/components/shared/nav-search";
import NavUser from "@/components/shared/nav-user";
import { Button } from "@/components/ui/button";
import { BellIcon, ShoppingBagIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex-center border-b border-muted bg-background z-50">
      <nav className="px-2 md:px-4 flex-center gap-4 h-14 overflow-hidden justify-between w-full">
        <section className="flex-center gap-4 relative">
          <Logo />
          <NavMenu />
        </section>

        <section className="flex-center gap-4">
          <NavSearch />

          <div className="flex-center gap-2">
            <Button variant="outline" size="icon">
              <BellIcon />
            </Button>
            <Button variant="outline" size="icon">
              <ShoppingBagIcon />
            </Button>
          </div>

          <NavUser />
        </section>
      </nav>
    </header>
  );
}
