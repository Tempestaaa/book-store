import ReviewCard from "@/app/(pages)/store/[slug]/_components/review-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function BookReviews() {
  return (
    <ScrollArea className="h-full">
      <div className="w-90 rounded-2xl m-2 p-4 flex flex-col gap-4">
        {[...Array(5)].map((_, id) => (
          <ReviewCard key={id} id={id} />
        ))}
      </div>

      <ScrollBar />
    </ScrollArea>
  );
}
