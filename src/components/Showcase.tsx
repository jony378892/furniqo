import { showcseData } from "@/src/mock/showcase.data";
import Image from "next/image";

export default function Showcase() {
  return (
    <section className="my-16">
      <h3 className="text-3xl text-center mb-16 font-semibold">Top Products</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 custom-width px-2 md:px-4">
        {showcseData.map((data, index) => (
          <div
            key={data.title}
            className={`flex flex-col gap-2 ${
              index % 2 === 1 ? "mt-6 sm:mt-12 md:mt-16" : ""
            }`}
          >
            <div className="overflow-hidden rounded-lg h-80 xl:h-96 w-full">
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-neutral-700">{data.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
