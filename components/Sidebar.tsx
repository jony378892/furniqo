import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FiMenu } from "react-icons/fi";
import { Navlinks } from "./Navlinks";
export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <FiMenu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-56">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Navlinks className="flex flex-col gap-5 p-5" />
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
