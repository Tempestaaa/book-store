import RatingRows from "@/app/(pages)/store/[slug]/_components/rating-rows";
import WriteReview from "@/app/(pages)/store/[slug]/_components/write-review";
import { Separator } from "@/components/ui/separator";

export default function RatingNReview() {
  return (
    <div className="flex flex-col gap-4 mx-1">
      <WriteReview />
      <Separator />
      <RatingRows />
    </div>
  );
}
