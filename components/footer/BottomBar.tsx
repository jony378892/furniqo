import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/Logos-01.png";

export default function BottomBar() {
  return (
    <div className="flex flex-col lg:flex-row items-center  justify-center lg:justify-between text-stone-500 py-7">
      <p>Furniqo. All Rights Reserved</p>
      <div className="flex gap-3">
        <Link href="">Privacy Policy</Link>
        <Link href="">Help</Link>
        <Link href="">FAQs</Link>
      </div>
      <Image
        src={logo}
        alt="payments logo"
        width={250}
        height={100}
        className="grayscale"
      />
    </div>
  );
}
