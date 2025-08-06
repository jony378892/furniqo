import Link from "next/link";

export default function FooterLinks() {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-6">
        <p className="font-semiblod font-bold">CUSTOMER SERVICES</p>
        <div className="flex flex-col gap-5 text-stone-500">
          <Link href="">Contact Us</Link>
          <Link href="">Customer Service</Link>
          <Link href="">Find Store</Link>
          <Link href="">Book Appointment</Link>
          <Link href="">Shipping & Returns</Link>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-bold">ABOUT</p>
        <div className="flex flex-col gap-5 text-stone-500">
          <Link href="">Our Story</Link>
          <Link href="">Careers</Link>
          <Link href="">Influencers</Link>
          <Link href="">Join our team</Link>
        </div>
      </div>
    </div>
  );
}
