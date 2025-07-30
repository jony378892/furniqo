import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Newsletter() {
  return (
    <section className="mt-10 px-3 py-10 bg-black/5 rounded-lg flex flex-col items-center justify-center gap-6">
      <h3 className="text-2xl lg:text-3xl font-semibold">
        Subscribe to our Newsletter
      </h3>
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input type="email" placeholder="Email" className="bg-white" />
        <Button type="submit">Subscribe</Button>
      </div>
    </section>
  );
}
