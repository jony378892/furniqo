"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navlinks({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <nav>
      <ul className={className}>
        <li>
          <Link
            className={`link ${
              pathname === "/"
                ? "text-black decoration-2 underline underline-offset-4"
                : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/products"
                ? "text-black decoration-2 underline underline-offset-4"
                : ""
            }`}
            href="/products"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/about"
                ? "text-black decoration-2 underline underline-offset-4"
                : ""
            }`}
            href="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === "/contact"
                ? "text-black decoration-2 underline underline-offset-4"
                : ""
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
