import genres from "@/data/genres";
import tBook from "@/types/book";
import { MessageCircleMoreIcon, StarIcon } from "lucide-react";

type Props = Pick<tBook, "title" | "author" | "rating" | "reviews">;

export default function BookHeader({ author, rating, reviews, title }: Props) {
  return (
    <div>
      <h2 className="font-bold hover:underline underline-offset-4 leading-none">
        {title}
      </h2>
      <h5 className="text-sub leading-normal mb-4">{author}</h5>

      <div className="flex-center gap-2 flex-wrap">
        {genres.slice(0, 6).map((item, id) => (
          <small
            key={id}
            className="bg-sub text-background px-3 py-0.5 whitespace-nowrap rounded-full"
          >
            {item}
          </small>
        ))}
      </div>

      <div className="flex-center gap-0.5">
        {[...Array(5)].map((_, id) => (
          <StarIcon
            key={id}
            fill={Math.floor(rating) <= id ? "var(--sub)" : "var(--star)"}
            className="text-transparent size-6"
          />
        ))}

        <h6 className="mb-2 ml-2">{rating}</h6>

        <span className="mx-4 text-sub">|</span>

        <div className="flex-center gap-2 text-sub">
          <MessageCircleMoreIcon className="size-4" />
          <h6 className="font-heading mb-2">{reviews}</h6>
        </div>
      </div>
    </div>
  );
}
