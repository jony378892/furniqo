import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function RightSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCart className="stroke-1 size-6 cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader className="my-10 ">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
