"/app/page.tsx";
"use client";

import { useState } from "react";
import { Book } from "@/types/book";
import Shelf from "@/components/shelf";

export default function Home() {
  const [bookArray, setBookArray] = useState<Book[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem("bookArray");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <main>
      <div>
        <Shelf></Shelf>
      </div>
    </main>
  );
}
