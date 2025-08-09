"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Heart, Search, User } from "lucide-react";
import LeftSidebar from "./sidebar/LeftSidebar";
import RightSidebar from "./sidebar/RightSidebar";

import { useWishlist } from "../contexts/wishlist.context";

export default function Navbar() {
  const [position, setPosition] = useState(false);
  const { wishlist } = useWishlist();

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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={` w-full flex flex-col gap-7`}>
      <div className="flex flex-col">
        <p className="text-center text-white text-xs py-3 bg-black">
          UP TO 40% OFF ON BEST SELLING FURNITURE.{" "}
          <Link href="/products" className="underline cursor-pointer">
            SHOP NOW
          </Link>
        </p>

        <div
          className={` w-full transform transition-transform duration-500 ease-in-out 
        ${
          position
            ? "fixed top-0 left-0 right-0 z-50 translate-y-0 border-b bg-white"
            : "translate-y-0"
        }`}
        >
          <div className="flex items-center justify-between px-3 sm:px-5  py-4 custom-width">
            <div className="flex items-center gap-4">
              <LeftSidebar />
              <Search className="stroke-1 size-6" />
            </div>
            <Link href="/">
              <h1 className="text-4xl font-semibold text-amber-600">Furniqo</h1>
            </Link>
            <div className="flex items-end gap-4">
              <Link href="/user">
                <User className="hidden md:inline-flex stroke-1 size-7" />
              </Link>

              <Link href="/wishlist" className="relative">
                <Heart className="stroke-1 size-6" />
                <span className="absolute w-5 h-5 flex items-center justify-center -top-2 -right-2 bg-black rounded-full text-white text-xs">
                  {wishlist.length > 0 ? wishlist.length : 0}
                </span>
              </Link>
              <div className="relative flex items-center">
                <RightSidebar />
                <span className="absolute w-5 h-5 flex items-center justify-center -top-2 -right-2 bg-black rounded-full text-white text-xs">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
