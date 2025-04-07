import RatingNReview from "@/app/(pages)/store/[slug]/_components/rating-and-review";
import ReviewList from "@/app/(pages)/store/[slug]/_components/review-list";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BookReviews() {
  return (
    <Tabs defaultValue="rating-n-review" className="w-110">
      <TabsList>
        <TabsTrigger value="rating-n-review">Rating and Review</TabsTrigger>

        <TabsTrigger value="review-list">Community Reviews</TabsTrigger>
      </TabsList>

      <ScrollArea className="h-full pr-4">
        <TabsContent value="rating-n-review">
          <RatingNReview />
        </TabsContent>

        <TabsContent value="review-list">
          <ReviewList />
        </TabsContent>

        <ScrollBar />
      </ScrollArea>
    </Tabs>
  );
}
