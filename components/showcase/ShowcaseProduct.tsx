import ShowcaseInterface from "@/interfaces/showcase.interface";
import Image from "next/image";

export default function ShowcaseProduct({
  item,
  index,
}: {
  item: ShowcaseInterface;
  index: number;
}) {
  return (
    <div
      className={`flex flex-col gap-2 h-fit ${
        index % 2 === 1 ? "mt-6 sm:mt-12 md:mt-16" : ""
      }`}
    >
      <div className="overflow-hidden rounded-lg h-80 xl:h-96 w-full">
        <Image
          src={item.image}
          alt={item.title}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </div>
      <p className="text-neutral-700">{item.title}</p>
    </div>
  );
}
