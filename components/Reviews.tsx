import React from "react";

export default function Reviews() {
  return (
    <section className="my-10 py-10 max-w-[1400px] mx-auto px-3 lg:px-5py-10 bg-black/5 flex flex-col gap-5 items-center rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="bg-white p-5 rounded-lg shadow-md max-w-sm">
          <blockquote className="text-gray-700 mb-4">
            Absolutely love my new sofa! The quality is amazing and it fits
            perfectly in my living room.
          </blockquote>
          <p className="font-semibold">- Sarah J.</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md max-w-sm">
          <blockquote className="text-gray-700 mb-4">
            Great service and fast delivery. The chair I bought is so
            comfortable!
          </blockquote>
          <p className="font-semibold">- Mike T.</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md max-w-sm">
          <blockquote className="text-gray-700 mb-4">
            I was impressed with the quality of the furniture. It looks even
            better in person!
          </blockquote>
          <p className="font-semibold">- Emily R.</p>
        </div>
      </div>
    </section>
  );
}
