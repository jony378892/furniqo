import Image from "next/image";

interface ErrorProps {
  error: string;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="font-semibold text-center text-3xl text-red-700 py-8">
      <h2 className="flex items-center justify-center gap-3">
        <Image src="/error.png" alt="error" width={40} height={40} />
        {error}
      </h2>
    </div>
  );
}
