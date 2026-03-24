
import Link from "next/link";

export default function Home() {
 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-4 text-4xl font-bold">Beacon Health Products</h1>
      <p className="mb-8 text-lg text-gray-600">
        Your health & wellness product catalog
      </p>
      <Link
        href="/products"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        Browse Products
      </Link>
    </main>
  );
}
