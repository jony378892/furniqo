"use client";

import Image from "next/image";

import { Heart } from "lucide-react";

import { useWishlist } from "@/src/contexts/wishlist.context";

export default function Page() {
  const { wishlist, handleWishlist } = useWishlist();

  return (
    <section className="custom-width px-2 md:px-4 my-10">
      <h3 className="font-semibold text-center text-3xl">
        My <span className="text-amber-600">Wishlist</span>
      </h3>
      {wishlist.length === 0 ? (
        <h3 className="text-2xl font-semibold text-center mt-10">
          {" "}
          Your wishlist is empty
        </h3>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 md:gap-x-5 gap-y-8 md:gap-y-10 mt-16">
          {wishlist?.map((product) => (
            <div key={product._id} className="relative h-80 sm:h-96 w-full">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center rounded-md"
              />

              {/* Heart Icon */}
              <Heart
                onClick={() => handleWishlist(product)}
                className={`absolute top-3 right-3 stroke-1 size-7 stroke-white rounded-full p-1 ${
                  wishlist.find((x) => x._id === product._id)
                    ? "bg-amber-600 fill-amber-600"
                    : "bg-black/30 "
                }`}
              />

              {/* Button */}
              <button className="absolute left-2 right-2 bottom-2 bg-white text-amber-600 border border-gray-200 shadow-md py-1 rounded-sm font-semibold text-sm hover:bg-white/80 cursor-pointer">
                SELECT OPTIONS
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
