"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const params = useSearchParams();

  const orderId = params.get("orderId");

  return (
    <main className="flex min-h-screen items-center justify-center bg-green-50 px-6">
      <div className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">
        <h1 className="text-4xl font-bold text-green-700">
          🎉 Order Placed!
        </h1>

        <p className="mt-6 text-lg">
          Thank you for ordering from <strong>Amm-Ansi</strong>.
        </p>

        <div className="mt-8 rounded-xl bg-gray-100 p-5">
          <p className="text-sm text-gray-600">
            Your Order ID
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {orderId}
          </h2>
        </div>

        <p className="mt-6 text-gray-600">
          We will contact you shortly to confirm your order.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-green-700 px-8 py-3 text-white hover:bg-green-800"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}