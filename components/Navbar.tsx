"use client";

import { Heart, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [position, setPosition] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;
      if (scroll >= 250) {
        setPosition(true);
      } else {
        setPosition(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on first render

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex flex-col w-full">
      <p className="text-center text-white text-xs py-3 bg-black">
        UP TO 40% OFF ON BEST SELLING FURNITURE.{" "}
        <Link href="/shop" className="underline cursor-pointer">
          SHOP NOW
        </Link>
      </p>

      <div
        className={`flex items-center justify-between border-b px-3 py-4 w-full transform transition-transform duration-500 ease-in-out
        ${
          position
            ? "fixed bg-white shadow-md top-0 left-0 z-50 translate-y-0"
            : "translate-y-0"
        }`}
      >
        <div className="flex items-center gap-4">
          <Menu className="stroke-1 size-6" />
          <Search className="stroke-1 size-6" />
        </div>
        <h1 className="text-4xl font-extralight">Furniqo</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Heart className="stroke-1 size-6" />
            <span className="absolute w-5 h-5 flex items-center justify-center -top-2 -right-2 bg-black rounded-full text-white text-xs">
              0
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="stroke-1 size-6" />
            <span className="absolute w-5 h-5 flex items-center justify-center -top-2 -right-2 bg-black rounded-full text-white text-xs">
              0
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
