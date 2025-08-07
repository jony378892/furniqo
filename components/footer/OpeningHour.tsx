export default function OpeningHour({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="flex flex-col gap-5  text-stone-500 font-light">
        <h1 className="text-4xl font-extralight text-black mb-2 ">Furniqo</h1>
        <p>Text: +880 1521575254</p>
        <p>Mon - Fri: 8 ma - 8 pm</p>
        <p>Sat - Sun: 8 am - 7 pm</p>
      </div>
    </section>
  );
}
