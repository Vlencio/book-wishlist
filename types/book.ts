"/types/book.ts";

export type Book = {
  id: string;
  title: string;
  description: string | null;
  rating: number | null;
  read: boolean;
};
