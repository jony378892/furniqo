import Promotion from "@/components/ Promotion";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Showcase from "@/components/Showcase";
import TopProducts from "@/components/TopProducts";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Promotion />
      <Showcase />
      <TopProducts />
      <Reviews />
      <Newsletter />
    </>
  );
}
