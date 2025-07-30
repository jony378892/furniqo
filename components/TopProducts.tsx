import { showcaseData } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function TopProducts() {
  return (
    <section className="py-10 max-w-[1400px] mx-auto px-3">
      <h2 className="text-2xl md:text-3xl :text-4xl font-bold text-center mb-8">
        Top Products
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols3 md:grid-cols-4 lg:grid-cols-5 grid-rows-1 gap-4 overflow-x-auto">
        {showcaseData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="mb-4 rounded-lg "
            />
            <div className="flex flex-col items-center p-3 w-full -gap-1">
              <h3 className="text-lg font-semibold mb-2 text-black/80">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <span className="text-xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <Button className=" w-full mt-3">Add To Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
