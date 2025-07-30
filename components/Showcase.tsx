import Image from "next/image";
import { Button } from "./ui/button";

import office_desk from "@/assets/office-desk.png";

export default function Showcase() {
  return (
    <section className="pb-10 lg:py-10 grid sm:grid-cols-2 sm:grid-rows-2 gap-5 max-w-[1400px] mx-auto px-3">
      <div className="flex gap-2 md:gap-3 rounded-lg p-3 bg-black/5 items-center justify-between h-40 lg:h-56">
        <div className="w-1/2 flex flex-col items-start pl-5 sm:pl-10 lg:pl-20 justify-center gap-2">
          <h3 className="text-sm lg:text-base font-semibold">
            Home and Living
          </h3>
          <h2 className="text-2xl text-black/70 font-bold">SOFA</h2>
          <Button className="text-sm lg:text-base bg-blue-500">
            Check Out
          </Button>
        </div>
        <div className="w-1/2">
          <Image
            src="/sofa.png"
            alt="sofa"
            width={300}
            height={300}
            className="pb-10"
          />
        </div>
      </div>
      <div className="flex gap-2 md:gap-3 rounded-lg p-3 bg-black/5 items-center justify-between sm:row-span-2">
        <div className="w-1/3 flex flex-col tems-start pl-5 sm:pl-10 lg:pl-20 justify-center gap-2">
          <h3 className="text-sm lg:text-base font-semibold">Office</h3>
          <h2 className="text-2xl text-black/70 font-bold">SOFA</h2>
          <Button className="text-sm lg:text-base bg-blue-500 w-fit">
            Check Out
          </Button>
        </div>
        <div className="w-2/3">
          <Image
            src={office_desk}
            alt="sofa"
            width={300}
            height={300}
            className="pb-10"
          />
        </div>
      </div>
      <div className="flex gap-2 md:gap-3 rounded-lg p-3 bg-black/5 items-center justify-between  h-40 lg:h-56">
        <div className="w-1/2 md:pl-10">
          <Image
            src="/chair.png"
            alt="sofa"
            width={200}
            height={200}
            className="lg:pb-10"
          />
        </div>
        <div className="w-1/2 flex flex-col items-start justify-center gap-2">
          <h3 className="text-sm lg:text-base font-semibold">Casual</h3>
          <h2 className="text-2xl text-black/70 font-bold">Modern Chair</h2>
          <Button className="text-sm lg:text-base bg-blue-500">
            Check Out
          </Button>
        </div>
      </div>
    </section>
  );
}
