import BottomBar from "./BottomBar";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import OpeningHour from "./OpeningHour";

export default function Footer() {
  return (
    <footer className="px-3">
      <div className="grid grid-cols-1 [&>*]:py-14 border-b divide-y">
        <Newsletter />
        <OpeningHour />
        <FooterLinks />
      </div>
      <BottomBar />
    </footer>
  );
}
