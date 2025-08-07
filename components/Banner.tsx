import Image from "next/image";

export default function Banner() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 xs:gap-2 sm:gap-3 custom-width mb-10 px-2 md:px-4 h-auto max-h-screen mt-7">
      <div className="row-span-2 h-auto">
        <Image
          src="https://i.ibb.co.com/Jwjc6Qwz/premium-photo-1683121022649-b38ed074d5e5.jpg"
          width={500}
          height={500}
          alt="sofa bannner"
          className="h-full w-full rounded-lg shadow-lg object-cover object-center  brightness-75"
        />
      </div>
      <div>
        <Image
          src="https://i.ibb.co.com/spJysJhP/132806.jpg"
          width={500}
          height={500}
          alt="sofa bannner"
          className="w-full h-full rounded-lg shadow-lg object-cover object-bottom brightness-75"
        />
      </div>
      <div>
        <Image
          src="https://i.ibb.co.com/7xz0VZKJ/954.jpg"
          width={500}
          height={500}
          alt="sofa bannner"
          className="w-full h-full rounded-lg shadow-lg object-cover  brightness-75"
        />
      </div>
    </div>
  );
}
