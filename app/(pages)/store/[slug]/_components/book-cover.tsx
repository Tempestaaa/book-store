import { Button } from "@/components/ui/button";
import tBook from "@/types/book";
import Image from "next/image";

type Props = Pick<tBook, "rating" | "reviews" | "price">;

export default function BookCover({ price, rating, reviews }: Props) {
  return (
    <div className="w-72 py-2 space-y-4">
      <div className="max-w-70 h-108 relative flex-center justify-center mx-auto rounded-xl overflow-hidden ring-4 ring-transparent hover:ring-foreground duration-300">
        <Image
          src="/images/test-cover.webp"
          alt="book's cover"
          fill
          className="p-0.5 rounded-xl"
        />
      </div>

      <div className="mx-2">
        <Button variant="negative" className="w-full h-14 rounded-2xl">
          <h4 className="flex-center gap-1">
            $<span className="mb-2">{price}</span>
          </h4>
        </Button>
      </div>
    </div>
  );
}
