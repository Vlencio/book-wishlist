"/lib/bookUtils.ts";

import { Book } from "@/types/book";

export function saveBooks(books: Book[]) {
  localStorage.setItem("bookArray", JSON.stringify(books));
}

export function getBooks(): Book[] {
  const stored = localStorage.getItem("bookArray");
  return stored ? JSON.parse(stored) : [];
}

export function getBook(id: string): Book | undefined {
  const books: Book[] = getBooks();
  return books.find((book) => book.id === id);
}
