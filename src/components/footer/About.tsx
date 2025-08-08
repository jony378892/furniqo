import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <p className="font-bold">ABOUT</p>
      <div className="flex flex-col gap-5 text-stone-500">
        <Link href="">Our Story</Link>
        <Link href="">Careers</Link>
        <Link href="">Influencers</Link>
        <Link href="">Join our team</Link>
      </div>
    </div>
  );
}
