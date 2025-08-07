function CustomPart({
  title,
  description,
  sign,
}: {
  title: string;
  description: string;
  sign: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 my-14">
      <h1 className="text-3xl md:text-5xl font-semibold">
        {title} <sup> {sign}</sup>
      </h1>
      <p className="text-xs sm:text-sm md:text-base text-center text-neutral-500">
        {description}{" "}
      </p>
    </div>
  );
}

export default function Statistic() {
  return (
    <section className="flex items-start gap-2 sm:gap-3 md:gap-5 justify-between custom-width px-2 md:px-4">
      <CustomPart
        title="900"
        description="Products that we have created and sold in markets"
        sign="+"
      />
      <CustomPart
        title="20K"
        description="Happy and loyal cutomers who bought our products"
        sign="+"
      />
      <CustomPart
        title="98"
        description="Customers who have purchsed who came back"
        sign="%"
      />
    </section>
  );
}
