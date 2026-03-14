"/components/shelf";
import Book from "@/components/bookComponent";
import { getColor } from "@/lib/bookUtils";

export default function Shelf() {
  return (
    <div className="flex flex-col">
      <div className="h-4 bg-cyan-800"></div>
      <div className="h-40 flex flex-row items-end">
        <Book bgColor={getColor()} title="book2"></Book>
        <Book bgColor={getColor()} title="book3"></Book>
        <Book bgColor={getColor()} title="book4"></Book>
        <Book bgColor={getColor()} title="book5"></Book>
        <Book bgColor={getColor()} title="book6"></Book>
      </div>
      <div className="h-4 bg-cyan-800"></div>
    </div>
  );
}
