"use client";

import Loading from "@/src/components/Loading";
import useFetch from "@/src/hooks/useFetch";
import Product from "@/src/interfaces/product.interface";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Products() {
  const pathname = usePathname();
  const {
    data: productData,
    loading,
    error,
  } = useFetch<Product>("/api/products");

  return (
    <section className="custom-width px-2 md:px-4 my-14 text-center ">
      <h3 className="text-3xl my-10 font-semibold">Our Products</h3>

      {loading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 md:gap-x-5 gap-y-8 md:gap-y-10 ">
          {productData?.map((data) => (
            <div key={data._id} className="relative h-80 sm:h-96 w-full">
              <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center rounded-md"
              />

              {/* Heart Icon */}
              <Heart className="absolute top-3 right-3 stroke-1 size-6 stroke-white bg-black/30 rounded-full p-1" />

              {/* Button */}
              <button className="absolute left-2 right-2 bottom-2 bg-white border border-gray-200 shadow-md py-1 rounded-sm font-semibold text-sm hover:bg-white/80 cursor-pointer">
                SELECT OPTIONS
              </button>
            </div>
          ))}
        </div>
      )}

      {(pathname === "/products" || loading) && (
        <Link
          href="/products"
          className=" self-center justify-self-center cursor-pointer mx-auto"
        >
          <button className="bg-black/85 hover:bg-black px-10 py-2.5 text-white w-fit h-fit rounded-md mt-16">
            See More
          </button>
        </Link>
      )}
    </section>
  );
}
