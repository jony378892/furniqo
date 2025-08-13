import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Toaster } from "@/components/ui/sonner";
import WishlistProvider from "@/contexts/wishlist.context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furniqo | Furniture Store",
  description: "The best furniture store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-full flex flex-col`}
      >
        <WishlistProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <Toaster />
        </WishlistProvider>
      </body>
    </html>
  );
}
