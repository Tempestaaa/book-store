import BookCard from "@/components/shared/book-card";
import books from "@/data/books";

export default function BookGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 py-4 px-2">
      {books.map((item) => (
        <BookCard key={item.id} book={item} />
      ))}
    </div>
  );
}
