import Banner from "@/components/Banner";
import Quality from "@/components/Quality";
import Showcase from "@/components/Showcase";
import Statistic from "@/components/Statistic";
import Products from "./products/page";

export default function Home() {
  return (
    <>
      <Banner />
      <Statistic />
      <Showcase />
      <Quality />
      <Products />
    </>
  );
}
