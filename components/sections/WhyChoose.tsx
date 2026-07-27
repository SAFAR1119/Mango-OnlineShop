"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Truck, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Naturally Ripened",
    description:
      "Our mangoes are naturally ripened without harmful chemicals.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Every mango is carefully selected before packing.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Freshly harvested and delivered directly to your doorstep.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Family Farm",
    description:
      "A family-owned orchard committed to freshness and quality.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-700">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Why Customers Love Amm-Ansi
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Icon className="text-green-700" size={28} />
                </div>

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}