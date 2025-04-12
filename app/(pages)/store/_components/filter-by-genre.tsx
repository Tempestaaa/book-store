import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import genres from "@/data/genres";
import { CheckIcon } from "lucide-react";

export default function FilterByGenre() {
  return (
    <AccordionItem value="genre">
      <AccordionTrigger>Genres</AccordionTrigger>
      <AccordionContent>
        <ScrollArea className="flex flex-col h-76 pr-4">
          {genres.map((item, id) => (
            <label
              key={id}
              className="flex-center gap-4 justify-between py-1 px-2 hover:bg-muted has-[:checked]:bg-foreground has-[:checked]:text-background duration-300 cursor-pointer"
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
  );
}
