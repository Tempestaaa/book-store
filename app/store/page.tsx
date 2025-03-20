import BookGrid from "@/app/store/_components/book-grid";
import Filter from "@/app/store/_components/filter";
import Sort from "@/app/store/_components/sort";

export default function StorePage() {
  return (
    <div className="space-y-4">
      <section className="bg-secondary px-4 py-6 rounded-xl">
        <h1 className="leading-tight">Store</h1>
        <p className="text-sub">
          Where you will find all the books you wanted.
        </p>
      </section>

      <section className="grid md:grid-cols-[minmax(20rem,auto)_1fr] gap-2 md:gap-4 *:rounded-xl *:bg-secondary *:p-4">
        <Filter />
        <div className="space-y-4">
          <Sort />
          <BookGrid />
        </div>
      </section>
    </div>
  );
}
