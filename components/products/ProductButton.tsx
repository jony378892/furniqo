"use client";

import Product from "@/interfaces/product.interface";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProductButton({ data }: { data: Product }) {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    const localWishlist = localStorage.getItem("wishlist");
    if (localWishlist) {
      setWishlist(JSON.parse(localWishlist));
    }
  }, []);

  function handleWishlist(product: Product) {
    const exists = wishlist.some((item) => item._id === product._id);
    const updatedWishlist = exists
      ? wishlist.filter((x) => x._id !== product._id)
      : [...wishlist, product];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    toast(
      `"${product.title}" ${exists ? "removed from" : "added to"} wishlist`
    );
  }

  return (
    <>
      <Heart
        onClick={() => handleWishlist(data)}
        className={`absolute top-3 right-3 stroke-1 size-7 stroke-white rounded-full p-1 ${
          wishlist.find((x) => x._id === data._id)
            ? "bg-amber-600 fill-amber-600"
            : "bg-black/30 "
        }`}
      />

      {/* Button */}
      <button className="absolute left-2 right-2 bottom-2 bg-white text-amber-600 border border-gray-200 shadow-md py-1 rounded-sm font-semibold text-sm hover:bg-white/80 cursor-pointer">
        SELECT OPTIONS
      </button>
    </>
  );
}
