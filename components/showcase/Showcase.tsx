import Error from "@/components/error";

import ShowcaseInterface from "../../interfaces/showcase.interface";
import ShowcaseProduct from "./ShowcaseProduct";
import ShowcaseSkeleton from "./ShowcaseSkeleton";
import { Suspense } from "react";

export default async function Showcase() {
  const res = await fetch("/api/showcases");
  const data = await res.json();

  if (!data.success) {
    return (
      <div>
        <h3 className="text-3xl text-center font-semibold">
          Top <span className="text-amber-600">Products</span>
        </h3>
        <Error error="Error fetching data" />;
      </div>
    );
  }

  const showcaseData: ShowcaseInterface[] = await data.data;

  return (
    <section className="my-16">
      <h3 className="text-3xl text-center mb-16 font-semibold">
        Top <span className="text-amber-600">Products</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 custom-width px-2 md:px-4 pb-16">
        {showcaseData?.map((item, index) => (
          <Suspense
            fallback={<ShowcaseSkeleton index={index} />}
            key={item._id}
          >
            <ShowcaseProduct item={item} index={index} key={item._id} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
