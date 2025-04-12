import StarRating from "@/app/(pages)/store/[slug]/_components/star-rating";
import { Button } from "@/components/ui/button";

export default function WriteReview() {
  return (
    <div className="flex flex-col gap-2">
      <h6>Write a review</h6>
      <textarea
        rows={6}
        placeholder="Share us some of your thoughts?"
        className="resize-none focus-visible:outline-0 p-2 rounded-xl border-2 border-muted focus-visible:border-foreground duration-300"
      />

      <div className="flex-center gap-4 justify-between">
        <StarRating />
        <Button variant="negative" className="font-heading">
          Submit
        </Button>
      </div>
    </div>
  );
}
