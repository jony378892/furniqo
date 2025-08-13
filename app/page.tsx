import Banner from "@/components/Banner";
import Quality from "@/components/Quality";
import Showcase from "@/components/showcase/Showcase";
import Statistic from "@/components/Statistic";
import Products from "./products/page";
import Video from "@/components/Video";

export default function Home() {
  return (
    <>
      <Banner />
      <Statistic />
      <Showcase />
      <Quality />
      <Products />
      <Video />
    </>
  );
}
