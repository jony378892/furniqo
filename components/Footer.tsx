import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black/85 w-full flex flex-col">
      <div className="grid sm:grid-cols-3 gap-8  justify-between md:grid-cols-5 lg:grid-cols-6 text-white/50 text-sm sm:text-base px-3 py-10">
        <div className="flex flex-col gap-3 col-span-2">
          <h2 className="text-4xl font-bold text-white">Furniqo</h2>
          <p>
            Find beautifully crafted furniture built with original designs,
            premium materials, and backed by cushrefmer-first service you can
            trust.
          </p>

          <p>Call Us: +880152575254</p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white/80">Useful links</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="">Product Category</Link>
            </li>
            <li>
              <Link href="">Special Promo</Link>
            </li>
            <li>
              <Link href="">Affiliate Product</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white/80">Information</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="">About Us</Link>
            </li>
            <li>
              <Link href="">Main Office</Link>
            </li>
            <li>
              <Link href="">Join Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white/80">Support</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="">FAQ</Link>
            </li>
            <li>
              <Link href="">Support Center</Link>
            </li>
            <li>
              <Link href="">Help Center</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white/80">Social Media</h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="">Facebook</Link>
            </li>
            <li>
              <Link href="">Instagram</Link>
            </li>
            <li>
              <Link href="">Twitter</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center bg-black/70 text-white text-sm">
        <p className=" text-sm sm:text-base py-3">
          &copy; {new Date().getFullYear()} Furniqo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
