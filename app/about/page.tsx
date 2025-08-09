import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          About <span className="text-amber-600">furniqo</span>
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          At furniqo, we believe furniture is more than just a functional
          item—it’s an expression of style, comfort, and personality. We craft
          modern, timeless pieces that transform your space into a place you
          truly love.
        </p>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <Image
              src="https://i.ibb.co.com/Jwjc6Qwz/premium-photo-1683121022649-b38ed074d5e5.jpg"
              alt="furniqo Furniture"
              className="rounded-2xl shadow-lg w-full object-cover"
              width={500}
              height={500}
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for quality and design, furniqo blends
              craftsmanship with modern aesthetics to create furniture that’s as
              durable as it is beautiful. From sleek chairs to statement pieces,
              our collections are built to enhance any living space.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Promise</h2>
            <p className="text-gray-600">
              Every product we make is designed with you in mind—combining
              elegance, comfort, and sustainability. We’re committed to bringing
              you furniture that lasts for years while staying in style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
