import Banner from "@/components/Banner";
import OurGoal from "@/components/OurGoal";
import Quality from "@/components/Quality";
import Showcase from "@/components/Showcase";
import Statistic from "@/components/Statistic";
import Products from "./products/page";

export default function Home() {
  return (
    <>
      <Banner />
      <OurGoal />
      <Statistic />
      <Showcase />
      <Quality />
      <Products />
    </>
  );
}
