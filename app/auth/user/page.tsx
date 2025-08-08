"use client";

import google from "@/assets/logo/google.png";
import fb from "@/assets/logo/fb.png";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  function handleSubmit() {}

  return (
    <section className="flex items-center justify-center custom-width px-2 md:px-4 py-32">
      <div className="flex flex-col border px-5 py-8  w-full max-w-sm shadow-lg rounded-lg">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <p className="text-sm font-light">FURNIQO</p>
          <h3 className="text-3xl font-semibold">Sign in</h3>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full px-3 py-1.5 border border-gray-400 rounded-sm"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Password</label>
            <input
              type="text"
              className="w-full px-3 py-1.5 border border-gray-400 rounded-sm"
            />
          </div>

          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-sm">Remember me</p>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black/85 text-white rounded-sm"
          >
            Sign in
          </button>
          <p className="text-center underline underline-offset-4 decoration-gray-500">
            Forget your password?
          </p>
        </form>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-full h-[2px] text-gray-500"></div>
            or
            <div className="w-full h-[2px] text-gray-500"></div>
          </div>
          <button className="flex items-center justify-center gap-2 py-1.5 w-full border border-gray-300 shadow-sm text-center  rounded-sm">
            <Image src={google} alt="google logo" width={32} height={32} />
            Sign in with Google
          </button>
          <button className="flex items-center justify-center gap-2 py-2 w-full border border-gray-300 shadow-sm text-center rounded-sm ">
            <Image src={fb} alt="facebook logo" width={20} height={20} />
            Sign in with Facebook
          </button>
          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/"
              className="underline underline-offset-4 decoration-gray-500"
            >
              Sing up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
