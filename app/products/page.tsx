import Error from "@/components/error";
import ProductCard from "@/components/products/ProductCard";
import ProductPage from "@/components/products/ProductPage";
import Product from "@/interfaces/product.interface";
import { baseurl } from "@/lib/utils";
import { Suspense } from "react";

export default async function Products() {
  /* const res = await axios.get("http://localhost:3000/api/products");
  const productsData = await res.data.data; */

  const res = await fetch(baseurl + "/api/products");
  const data = await res.json();

  if (!data.success) <Error error="Error fetching Data" />;

  const products = await data.data;

  return (
    <section className="custom-width px-2 md:px-4 my-14 text-center ">
      <h3 className="text-3xl my-10 font-semibold">
        Our <span className="text-amber-600">Products</span>
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 md:gap-x-5 gap-y-8 md:gap-y-10 ">
        {products?.map((data: Product) => (
          <Suspense fallback={<ProductCard />} key={data._id}>
            <ProductPage data={data} key={data._id} />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
