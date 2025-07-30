import React from "react";
import Count from "./Count";
import Image from "next/image";
import HeroTypewriter from "./HeroTypewriter";

export default function Hero() {
  return (
    <section className="bg-black/5 pb-20 pt-32">
      <div className="w-full flex flex-col-reverse sm:flex-row sm:justify-between items-start sm:items-center max-w-[1400px] mx-auto">
        <div className="flex flex-col items-start sm:w-1/2 px-4 sm:gap-4 max-w-xl md:max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose our top picks <br />
            <HeroTypewriter />
          </h1>
          <p className="text-gray-700 mb-6 text-sm sm:text-base lg:text-lg">
            We stand for quality and style, offering a wide range of furniture
            that suits your taste and needs. Explore our collection to find the
            perfect pieces for your home.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white  font-semibold rounded hover:bg-blue-700 transition">
            Get Started
          </button>
          <Count />
        </div>
        <Image
          src="/pngtree-3d-wooden-gray-color-chair-on-transparent-background-png-image_13241927.png"
          alt="chair"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
