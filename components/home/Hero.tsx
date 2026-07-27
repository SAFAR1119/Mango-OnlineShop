"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">
      <div className="max-w-2xl">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold leading-tight"
        >
          Fresh Mangoes
          <span className="block text-green-700">
            Directly From Our Orchard
          </span>
        </motion.h1>

        <p className="mt-6 text-lg text-gray-600">
          Naturally ripened, carefully harvested,
          and delivered fresh to your doorstep.
        </p>

        <div className="mt-8 flex gap-4">
          <Button size="lg">
            Shop Now
          </Button>

          <Button
            variant="outline"
            size="lg"
          >
            Learn More
          </Button>
        </div>

      </div>
    </section>
  );
}