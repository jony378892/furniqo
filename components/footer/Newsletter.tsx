import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Newsletter({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h3 className="text-xl font-bold">SIGN UP FOR EMAILS</h3>
        <p className="text-zinc-500">
          Enjoy 15% off* your first order when sign up to our newsletter
        </p>
        <div className="flex items-center w-full max-w-2xl justify-center">
          <input
            type="text"
            className="px-5 py-2 sm:py-3 sm:px-5 bg-gray-200 w-2/3"
            placeholder="Enter your email"
          />
          <button className="h-full px-4 bg-black font-semibold text-white text-sm py-2.5 sm:p-3.5">
            SUBSCRIBE
          </button>
        </div>
        <div className="flex gap-5  [&>*]:size-6 [&>*]:stroke-1 items-center justify-center">
          <Facebook />
          <Twitter />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </section>
  );
}
