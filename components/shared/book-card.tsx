import tBook from "@/types/book";
import { MessageCircleMoreIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  book: tBook;
};

export default function BookCard({ book }: Props) {
  return (
    <div className="bg-background ring ring-muted p-4 rounded-3xl relative group hover:ring-foreground duration-300">
      <div className="max-w-60 h-92 relative flex-center justify-center mx-auto rounded-xl overflow-hidden">
        <Image
          src="/images/test-cover.webp"
          alt="book's cover"
          fill
          className="group-hover:scale-110 duration-300"
        />
      </div>

      <div className="absolute top-0 left-0 size-full bg-gradient-to-b from-transparent to-background rounded-3xl p-4 flex flex-col justify-end font-heading">
        <div className="rounded-xl p-4">
          <Link href={`/store/${book.slug}`}>
            <p className="line-clamp-2 hover:underline underline-offset-4 text-center">
              {book.title}
            </p>
          </Link>

          <div className="text-sub flex-center justify-center gap-4">
            <div className="flex-center gap-1">
              <StarIcon fill="var(--sub)" className="size-2.5" />
              <span className="text-xs">{book.rating}</span>
            </div>

            <div className="flex-center gap-1">
              <MessageCircleMoreIcon fill="var(--sub)" className="size-2.5" />
              <span className="text-xs">{book.reviews}</span>
            </div>
          </div>

          <div className="flex items-end gap-4 justify-between max-w-60 mx-auto">
            <small className="text-sub">
              <s>$20.99</s>
            </small>

            <button>
              <h6>${book.price}</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
