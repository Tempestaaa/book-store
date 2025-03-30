import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import genres from "@/data/genres";
import { CheckIcon } from "lucide-react";

export default function SidebarFilter() {
  return (
    <aside className="w-72 overflow-hidden px-4 rounded-2xl">
      <Accordion type="multiple">
        {/* Filter by Genres */}
        <AccordionItem value="genre">
          <AccordionTrigger>Genres</AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="flex flex-col h-78 pr-4">
              {genres.map((item, id) => (
                <label
                  key={id}
                  className="flex-center gap-4 justify-between py-1 px-2 hover:bg-muted has-[:checked]:bg-primary duration-300 cursor-pointer"
                >
                  <input type="checkbox" className="peer hidden" />
                  <span className="">{item}</span>
                  <CheckIcon className="size-4 scale-0 peer-checked:scale-100 transition-[scale_0.5s_300ms]" />
                </label>
              ))}

              <ScrollBar />
            </ScrollArea>
          </AccordionContent>
        </AccordionItem>

        {/* Filter by Price */}
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
        </AccordionItem>

        {/* Filter by Rating */}
        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
