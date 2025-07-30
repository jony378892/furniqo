import React from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Navlinks } from "./Navlinks";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="fixed w-full backdrop-blur-xl">
      <div className="flex items-center p-3 mx-auto max-w-[1400px] justify-between">
        <h2 className="text-3xl font-bold">Furniqo</h2>
        <Navlinks className="hidden md:flex gap-6 text-sm lg:text-base text-black/70 font-semibold " />
        <div className="hidden md:flex items-center gap-3">
          {" "}
          <Button className="w-32 text-sm lg:text-base">Cart</Button>
          <Button className="w-32 text-sm lg:text-base">Sign In</Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <FiMenu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <div className="grid flex-1 auto-rows-min gap-6 px-4">
                <Navlinks className="flex flex-col gap-2 font-semibold" />
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
