import { Button } from "@/components/ui/button";
import tBook from "@/types/book";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: tBook;
};

export default function BookCard({ book }: Props) {
  return (
    <div className="bg-background ring ring-muted p-4 rounded-3xl relative">
      <div className="max-w-60 h-92 relative flex-center justify-center mx-auto rounded-xl overflow-hidden">
        <Image src="/images/test-cover.webp" alt="book's cover" fill />
      </div>

      <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-transparent to-background rounded-3xl p-4 flex flex-col justify-end">
        <div className="rounded-xl p-4 space-y-1">
          <Link href={`/store/${book.id}`}>
            <p className="line-clamp-2 font-heading hover:underline underline-offset-4">
              {book.title}
            </p>
          </Link>

          <div className="flex items-end gap-4 justify-between">
            <small className="text-sub">
              <s>$20.99</s>
            </small>

            <h6 className="">${book.price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
