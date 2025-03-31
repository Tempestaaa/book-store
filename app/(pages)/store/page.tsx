import BookGrid from "@/app/(pages)/store/_components/book-grid";
import GridTools from "@/app/(pages)/store/_components/grid-tools";
import SidebarFilter from "@/app/(pages)/store/_components/sidebar-filter";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function StorePage() {
  return (
    <div className="flex gap-4 h-full">
      <SidebarFilter />

      <ScrollArea className="px-4 flex-1 h-full">
        <GridTools />
        <BookGrid />

        <ScrollBar />
      </ScrollArea>
    </div>
  );
}
