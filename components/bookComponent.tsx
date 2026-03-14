export default function Book({
  bgColor,
  title,
}: {
  bgColor: string;
  title: string;
}) {
  return (
    <div>
      <div
        className={`h-38 border rounded-lg w-18 ${bgColor} flex items-center justify-center cursor-pointer`}
      >
        <p className={`rotate-[-90deg] font-bold`}>{title}</p>
      </div>
    </div>
  );
}
