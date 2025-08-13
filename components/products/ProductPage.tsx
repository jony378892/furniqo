import Product from "@/interfaces/product.interface";
import Image from "next/image";
import ProductButton from "./ProductButton";

export default function ProductPage({ data }: { data: Product }) {
  return (
    <div className="relative h-80 sm:h-96 w-full">
      <Image
        src={data.image}
        alt={data.title}
        width={500}
        height={500}
        className="h-full w-full object-cover object-center rounded-md"
      />

      <ProductButton data={data} />
    </div>
  );
}
