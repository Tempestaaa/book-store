import { Button } from "@/components/ui/button";
import books from "@/data/books";
import { MessageCircleMoreIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] flex-1 md:max-h-full overflow-y-auto">
      {books.slice(0, 5).map(({ id, price, rating, reviews, title }) => (
        <div
          key={id}
          className="border border-muted border-r-0 border-b-0 h-fit"
        >
          <div className="max-[375px]:p-1 p-2 md:p-4 space-y-2 group">
            <figure className="relative max-[375px]:h-56 max- h-72 overflow-hidden">
              <Link href={`/book/${id}`}>
                <Image
                  src="/images/test-cover.webp"
                  alt="book's cover"
                  fill
                  className="max-w-52 mx-auto group-hover:scale-110 duration-300"
                />
              </Link>
            </figure>

            <div className="flex flex-col gap-1 items-center">
              <Link href={`/book/${id}`}>
                <p className="font-medium hover:underline underline-offset-2">
                  {title}
                </p>
              </Link>

              <div className="flex-center gap-4 text-sub">
                <div className="flex-center gap-0.5">
                  <StarIcon className="size-3" />
                  <small>{rating}</small>
                </div>

                <div className="flex-center gap-0.5">
                  <MessageCircleMoreIcon className="size-3" />
                  <small>{reviews}</small>
                </div>
              </div>

              <Button
                variant="ghost"
                className="w-full text-xl group-hover:bg-primary group-hover:text-background hover:bg-primary hover:text-background"
              >
                ${price}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
