import BookDesc from "@/app/(pages)/store/[slug]/_components/book-desc";
import BookHeader from "@/app/(pages)/store/[slug]/_components/book-header";
import MoreInformation from "@/app/(pages)/store/[slug]/_components/more-information";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import tBook from "@/types/book";

type Props = Pick<tBook, "title" | "author" | "rating" | "reviews">;

export default function BookDetails({ author, rating, title, reviews }: Props) {
  const moreInformation = [
    {
      label: "Format",
      value: "300 pages, Hardcover",
    },
    {
      label: "Language",
      value: "English",
    },
    {
      label: "IBSN",
      value: "9780765389091",
    },
    {
      label: "Published date",
      value: new Date(Date.now())
        .toUTCString()
        .split(" ")
        .slice(0, 4)
        .join(" "),
    },
  ];

  return (
    <ScrollArea className="flex-1 p-4 pt-0 pb-2 h-full">
      <BookHeader
        author={author}
        rating={rating}
        reviews={reviews}
        title={title}
      />
      <Separator className="mb-4 mt-2" />
      <BookDesc />
      <Separator className="mt-4 mb-2" />
      <MoreInformation moreInformation={moreInformation} />

      <ScrollBar />
    </ScrollArea>
  );
}
