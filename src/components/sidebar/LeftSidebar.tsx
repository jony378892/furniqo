import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { Menu, User } from "lucide-react";
import Link from "next/link";

export default function LeftSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="stroke-1 size-6 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="my-10 ">
          <SheetTitle className="text-4xl text-left font-light">
            Furniqo
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-4 text-sm lg:text-base items-start divide-y divide-black/10 px-4 font-medium *:pb-2 *:w-full">
          <Link href="/">HOME</Link>
          <Link href="/blogs">BLOGS</Link>
          <Link href="/gallery">GALLERY</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <SheetFooter className="w-full bg-black/95 p-1">
          <button className="text-white flex items-center text-sm gap-2">
            <User className="md:hidden  stroke-1" /> Login/Signup
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
