import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeftIcon } from "lucide-react";

export default function GridTools() {
  const sorts = [
    "Alphabetical",
    "Reverse Alphabetical",
    "Price: High to Low",
    "Price: Low to High",
    "Rating: High to Low",
    "Rating: Low to High",
  ];

  return (
    <section className="flex-center gap-4 justify-between">
      <Button variant="ghost" size="icon">
        <ChevronLeftIcon />
      </Button>

      <Select>
        <SelectTrigger className="w-60 font-heading">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sorts.map((item, id) => (
            <SelectItem key={id} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
