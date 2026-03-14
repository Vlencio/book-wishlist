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

export function getColor(): string {
  const colorOptions = [
    "bg-red-300",
    "bg-red-500",
    "bg-red-700",
    "bg-green-300",
    "bg-green-500",
    "bg-green-700",
    "bg-blue-300",
    "bg-blue-500",
    "bg-blue-700",
    "bg-amber-300",
    "bg-amber-500",
    "bg-amber-700",
    "bg-cyan-300",
    "bg-cyan-500",
    "bg-cyan-700",
    "bg-gray-300",
    "bg-gray-500",
    "bg-gray-700",
  ];

  return colorOptions[Math.floor(Math.random() * colorOptions.length)];
}
