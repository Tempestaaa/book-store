import ReviewCard from "@/app/(pages)/store/[slug]/_components/review-card";
import ReviewSearch from "@/app/(pages)/store/[slug]/_components/reviews-search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StarIcon } from "lucide-react";

export default function ReviewList() {
  const date = ["Ascended", "Descended"];

  return (
    <div className="flex flex-col gap-2 mb-14">
      <ReviewSearch />

      <div className="flex-center gap-4 justify-end">
        <Select>
          <SelectTrigger className="flex-1 font-heading">
            <SelectValue placeholder="Date" />
          </SelectTrigger>

          <SelectContent>
            {date.map((item, id) => (
              <SelectItem key={id} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="flex-1 font-heading">
            <SelectValue placeholder="Rating" />
          </SelectTrigger>

          <SelectContent>
            {[...Array(5)].map((_, id) => (
              <SelectItem key={id} value={JSON.stringify(5 - id)}>
                {5 - id}{" "}
                <StarIcon
                  fill="var(--star)"
                  className="size-4 text-transparent"
                />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4 mt-2">
        {[...Array(5)].map((_, id) => (
          <ReviewCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
