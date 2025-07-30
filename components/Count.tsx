"use client";

import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";

export default function Count() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // 30% visible
  });

  return (
    <div className="flex gap-16 items-center mt-10" ref={ref}>
      {InView && (
        <>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              <CountUp start={122} end={3745} duration={1.5} />
            </div>
            <h3 className="text-black/60">Total Products</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
              <CountUp start={122} end={127350} duration={1.5} />+
            </div>
            <h3 className="text-black/60">Happy Customers</h3>
          </div>
        </>
      )}
    </div>
  );
}
