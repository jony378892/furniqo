import About from "./footer/About";
import BottomBar from "./footer/BottomBar";
import Newsletter from "./footer/Newsletter";
import OpeningHour from "./footer/OpeningHour";
import Ourservice from "./footer/Ourservice";

export default function Footer() {
  return (
    <footer className="max-w-[1450px] mx-auto w-full flex flex-col divide-y px-2 md:px-5 mt-10 border-t">
      <Newsletter className="xl:hidden py-10" />
      <OpeningHour className="md:hidden flex items-center justify-center py-10" />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 w-full p-3 py-10">
        <OpeningHour className="hidden md:inline-block" />
        <div className="col-span-2 grid grid-cols-2 justify-items-center">
          <Ourservice />
          <About />
        </div>
        <Newsletter className="hidden xl:inline-block xl:col-span-2" />
      </div>
      <BottomBar />
    </footer>
  );
}
