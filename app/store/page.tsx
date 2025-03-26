import BookGrid from "@/app/store/_components/book-grid";
import Filter from "@/app/store/_components/filter";

export default function StorePage() {
  return (
    <section className="h-full flex">
      <div className="pt-14 flex flex-col md:flex-row size-full">
        <Filter />
        <BookGrid />
      </div>
    </section>
  );
}
