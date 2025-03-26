import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import genres from "@/data/genres";
import { StarIcon } from "lucide-react";

export default function Filter() {
  return (
    <section className="border-r border-muted p-4 pl-0 w-3xs md:h-full hidden md:block">
      <div className="flex items-end gap-4 justify-between">
        <h6>Filter</h6>
        <small className={`hidden`}>Clear</small>
      </div>

      <div className="">
        <Accordion type="multiple">
          {/* Filter by Genres */}
          <AccordionItem value="genres">
            <AccordionTrigger>Genres</AccordionTrigger>
            <AccordionContent className="max-h-80 overflow-y-auto">
              {genres.map((item, i) => (
                <label key={i} className="flex-center gap-2">
                  <Checkbox />
                  <span>{item}</span>
                </label>
              ))}
            </AccordionContent>
          </AccordionItem>

          {/* Filter by Price */}
          <AccordionItem value="Price">
            <AccordionTrigger>Price</AccordionTrigger>
            <AccordionContent>100</AccordionContent>
          </AccordionItem>

          {/* Filter by Rating */}
          <AccordionItem value="Rating">
            <AccordionTrigger>Rating</AccordionTrigger>
            <AccordionContent className="flex-center gap-1 justify-center">
              {[...Array(5)].map((_, id) => (
                <StarIcon
                  key={id}
                  className="hover:text-amber-500 duration-300 cursor-pointer"
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
