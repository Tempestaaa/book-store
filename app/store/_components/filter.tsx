export default function Filter() {
  return (
    <section className="h-fit">
      <div className="">
        <div className="gap-4">
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-full py-1 px-2 rounded-md focus-visible:outline-0 focus:ring-primary ring-2 ring-transparent flex-1"
          />
        </div>
      </div>
    </section>
  );
}
