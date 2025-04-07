import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function ReviewSearch() {
  return (
    <form className="flex-center border border-muted has-focus:border-foreground rounded-full px-1 py-0.5 group duration-200">
      <SearchIcon className="size-4 mx-2 text-sub group-focus-within:text-foreground duration-200" />
      <Input placeholder="Search..." className="flex-1" />

      <Button variant="negative" className="ml-2 rounded-full !px-6">
        <SearchIcon />
      </Button>
    </form>
  );
}
