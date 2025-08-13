import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Logos-01.png";

export default function BottomBar() {
  return (
    <div className="flex flex-col gap-1 lg:flex-row lg:justify-between items-center justify-center w-full py-4 lg:py-2 text-neutral-500 text-sm">
      <p>Furniqo. All Rights Reserved</p>
      <div className="flex gap-3  ">
        <Link href="">Privacy Policy</Link>
        <Link href="">Help</Link>
        <Link href="">FAQs</Link>
      </div>
      <Image
        style={{ width: "auto", height: "auto" }}
        src={logo}
        alt="payments logo"
        width={250}
        height={100}
        className="grayscale"
      />
    </div>
  );
}
