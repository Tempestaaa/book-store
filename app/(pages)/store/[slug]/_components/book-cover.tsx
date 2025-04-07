import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import tBook from "@/types/book";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

type Props = Pick<tBook, "rating" | "reviews" | "price">;

export default function BookCover({ price, rating, reviews }: Props) {
  return (
    <div className="w-72 py-2 space-y-2">
      <div className="max-w-70 h-108 relative flex-center justify-center mx-auto rounded-xl overflow-hidden ring-4 ring-transparent hover:ring-foreground duration-200">
        <Image
          src="/images/test-cover.webp"
          alt="book's cover"
          fill
          className="p-0.5 rounded-xl"
        />
      </div>

      <div className="mx-2 flex flex-col gap-2 *:h-14">
        <div className="flex-center gap-1 *:h-full">
          <Button variant="outline" className="w-1/4">
            <MinusIcon />
          </Button>
          <Input
            type="number"
            placeholder="0"
            className="border-muted border flex-1 rounded-md text-center"
          />
          <Button variant="outline" className="w-1/4">
            <PlusIcon />
          </Button>
        </div>

        <Button variant="negative" className="rounded-2xl">
          <h4 className="flex-center gap-1">
            $<span className="mb-2">{price}</span>
          </h4>
        </Button>
      </div>
    </div>
  );
}
