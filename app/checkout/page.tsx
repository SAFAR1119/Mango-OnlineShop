"use client";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const router = useRouter();
  const clearCart = useCartStore((state) => state.clearCart);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        {/* Customer Form */}
        <div className="rounded-3xl bg-white p-8 shadow">
          <h1 className="mb-8 text-3xl font-bold">
            Checkout
          </h1>

          <div className="space-y-5">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
            />

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
            />

            <textarea
              name="address"
              rows={4}
              placeholder="Delivery Address"
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
            />

            <textarea
              name="notes"
              rows={4}
              placeholder="Additional Notes (Optional)"
              onChange={handleChange}
              className="w-full rounded-xl border p-4"
            />

            <button
              onClick={async () => {
               if (!form.name || !form.phone || !form.address) {
                 toast.error("Please fill in all required fields (Name, Phone, Address).");
                 return;
              }

         try {
         const response = await fetch("/api/order", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
          body: JSON.stringify({
          ...form,
          items,
          total: subtotal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Order could not be sent.");
       return;
      }   

     clearCart();
     router.push(`/success?orderId=${data.orderId}`);
      
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit the order.");
    }
  }}
  className="w-full rounded-xl bg-green-700 py-4 text-lg font-semibold text-white hover:bg-green-800"
>
  Confirm Order
</button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="rounded-3xl bg-white p-8 shadow">
          <h2 className="mb-8 text-2xl font-bold">
            Order Summary
          </h2>

          <div className="space-y-5">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex justify-between border-b pb-4"
              >
                <div>
                  <h3 className="font-semibold">
                    {item.product.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.quantity} × ৳{item.product.price}
                  </p>
                </div>

                <div className="font-bold">
                  ৳{item.quantity * item.product.price}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-between border-t pt-6 text-2xl font-bold">
            <span>Total</span>

            <span>৳{subtotal}</span>
          </div>
        </div>
      </div>
    </main>
  );
}