import Image from "next/image";

export default function Quality() {
  return (
    <section className="flex flex-col sm:flex-row gap-5 items-center text-left px-2 md:px-4 custom-width my-16">
      <div className="space-y-4 md:w-1/2">
        <h3 className="text-2xl sm:text-3xl font-semibold">
          Quality keep us moving forward
        </h3>
        <p>
          We have more than 30 years of experience producing and exprting
          furniture foe international markets. More than ten million pieces of
          furniture have been delivered to families and businesses around the
          world.
        </p>
        <button className="border border-black/70 text-sm rounded-full px-4 py-2 hover:bg-black/75 hover:text-white mt-2">
          Learn More
        </button>
      </div>
      <Image
        src="https://i.ibb.co.com/3ySCmYrD/129804.jpg"
        alt="chair image "
        width={500}
        height={500}
        className="w-full sm:w-3/5 md:w-1/2 rounded-lg h-full object-cover"
      />
    </section>
  );
}
