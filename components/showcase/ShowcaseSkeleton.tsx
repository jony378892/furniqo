import { Skeleton } from "../ui/skeleton";

export default function ShowcaseSkeleton({ index }: { index: number }) {
  return (
    <Skeleton
      className={`flex flex-col gap-2 bg-stone-700 ${
        index % 2 === 1 ? "mt-6 sm:mt-12 -mb-6 sm:-mb-12 md:-mb-16" : ""
      }`}
    >
      <div className="overflow-hidden rounded-lg h-80 xl:h-96 w-full"></div>
      <Skeleton className="w-full h-6 bg-stone-700"></Skeleton>
    </Skeleton>
  );
}
