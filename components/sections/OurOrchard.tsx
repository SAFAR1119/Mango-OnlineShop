"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const gallery = [
  "/images/orchard/orchard1.webp",
  "/images/orchard/orchard2.webp",
  "/images/orchard/orchard3.webp",
  "/images/orchard/orchard4.webp",
];

export default function OurOrchard() {
  return (
    <section
      id="orchard"
      className="bg-green-50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-700">
            OUR ORCHARD
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Grown With Love,
            <br />
            Harvested With Care
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Every mango at Amm-Ansi comes directly from our orchard.
            We carefully nurture every tree so your family can enjoy
            naturally ripened mangoes with authentic taste.
          </p>

        </div>

        {/* Large Image */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="relative mt-20 h-[500px] overflow-hidden rounded-3xl shadow-2xl"
        >
          <Image
            src="/images/orchard/orchard1.webp"
            alt="Amm-Ansi Orchard"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Gallery */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {gallery.map((image, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .1,
              }}
              className="group relative h-72 overflow-hidden rounded-2xl"
            >

              <Image
                src={image}
                alt="Our Orchard"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}