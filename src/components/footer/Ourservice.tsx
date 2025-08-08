import Link from "next/link";

export default function Ourservice() {
  return (
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
  );
}
