import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function NavSearch() {
  return (
    <form className="flex-center border border-muted has-focus:border-foreground w-xs max-w-xs rounded-full px-2 group duration-300">
      <SearchIcon className="size-4 mx-2 text-sub group-focus-within:text-foreground duration-300" />
      <Input placeholder="Search..." className="flex-1" />
    </form>
  );
}
