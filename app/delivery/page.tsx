export default function DeliveryPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="mb-8 text-4xl font-bold">
          Delivery Information
        </h1>

        <div className="space-y-6 rounded-2xl bg-white p-8 shadow">
          <div>
            <h2 className="text-xl font-semibold">
              🚚 Delivery Areas
            </h2>

            <p>
              We currently deliver fresh mangoes throughout
              Bangladesh.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              ⏱ Delivery Time
            </h2>

            <p>
              Orders are usually delivered within
              1–3 business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              📦 Packaging
            </h2>

            <p>
              Every mango is carefully packed to ensure it
              arrives fresh and undamaged.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              📞 Need Help?
            </h2>

            <p>
              Contact us if you have any questions about your
              delivery.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}