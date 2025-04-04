import books from "@/data/books";

export const findBook = async (slug: string) =>
  books.find((item) => item.slug === slug);
