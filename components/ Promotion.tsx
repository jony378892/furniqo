import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineChair } from "react-icons/md";
import { LuCircleDollarSign } from "react-icons/lu";

type PromotionProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

function Parts({ children, title, description }: PromotionProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-2 ">
      {children}
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold">{title}</h3>
      <p className="text-black/60">{description}</p>
    </div>
  );
}

export default function Promotion() {
  return (
    <section className=" py-20 flex flex-col sm:flex-row gap-5 lg:gap-10 items-start max-w-[1400px] mx-auto px-3">
      <Parts
        title="Free Worldwide Shipping"
        description="Enjoy free shipping to any location worldwide. We make sure your furniture arrives safely and on time, wherever you are."
      >
        <TbTruckDelivery size={40} />
      </Parts>
      <Parts
        title="Best Quality Guarantee"
        description="Our products are crafted with care and attention to detail, so you can trust you’re getting furniture that’s built to last."
      >
        <MdOutlineChair size={40} />
      </Parts>
      <Parts
        title="Super Affordable Prices"
        description="Find stylish, high-quality furniture at prices that fit your budget. We believe everyone deserves a beautiful home."
      >
        <LuCircleDollarSign size={40} />
      </Parts>
    </section>
  );
}
