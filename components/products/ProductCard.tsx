import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductCard() {
  return (
    <div className="relative h-80 sm:h-96 w-full bg-stone-500 rounded-lg">
      <Skeleton className="h-full w-full rounded-md" />
      {/* Button */}
      <Skeleton className="absolute left-2 right-2 bottom-2 py-1 h-10 rounded-sm font-semibold"></Skeleton>
    </div>
  );
}
