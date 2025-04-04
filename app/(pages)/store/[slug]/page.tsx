import BookCover from "@/app/(pages)/store/[slug]/_components/book-cover";
import BookDetails from "@/app/(pages)/store/[slug]/_components/book-details";
import BookReviews from "@/app/(pages)/store/[slug]/_components/book-reviews";
import { findBook } from "@/lib/book";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const book = await findBook(slug);

  if (!book || !slug) {
    return (
      <div className="size-full grid-center">
        <h1>Book not found</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-4 h-full overflow-y-hidden">
      <BookCover {...book} />
      <BookDetails {...book} />
      <BookReviews />
    </div>
  );
}
