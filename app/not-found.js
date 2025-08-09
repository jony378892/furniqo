import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 h-screen">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
