import FilterByGenre from "@/app/(pages)/store/_components/filter-by-genre";
import FilterByPrice from "@/app/(pages)/store/_components/filter-by-price";
import FilterByRating from "@/app/(pages)/store/_components/filter-by-rating";
import { Accordion } from "@/components/ui/accordion";
import { XIcon } from "lucide-react";

export default function SidebarFilter() {
  return (
    <aside className="w-72 overflow-hidden px-4">
      <div className="flex-center gap-4 justify-between">
        <h5>Filter</h5>

        <button
          className={`text-destructive hidden flexs items-center gap-0.5 border-b border-transparent hover:border-destructive duration-300`}
        >
          <XIcon className="size-3" />
          <small>Clear</small>
        </button>
      </div>

      <Accordion type="multiple">
        <FilterByGenre />
        <FilterByPrice />
        <FilterByRating />
      </Accordion>
    </aside>
  );
}
