import Banner from "@/src/components/Banner";
import Quality from "@/src/components/Quality";
import Showcase from "@/src/components/Showcase";
import Statistic from "@/src/components/Statistic";
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
