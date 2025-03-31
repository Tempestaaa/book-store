import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StarIcon } from "lucide-react";

export default function FilterByRating() {
  return (
    <AccordionItem value="rating">
      <AccordionTrigger>Rating</AccordionTrigger>
      <AccordionContent className="flex-center gap-1">
        {[...Array(5)].map((_, id) => (
          <label key={id} className="group">
            <input type="radio" name="rating" className="hidden peer" />
            <StarIcon
              fill="var(--foreground)"
              className="size-6 group-hover:hidden peer-checked:!hidden"
            />
            <StarIcon
              fill="var(--star)"
              className="size-6 text-star hidden group-hover:block peer-checked:!block"
            />
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
