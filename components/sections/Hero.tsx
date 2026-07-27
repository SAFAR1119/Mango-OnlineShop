"use client";

import HeroBackground from "./HeroBackground";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">

      <HeroBackground />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center text-white">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-6 rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm tracking-[0.4em] backdrop-blur-md"
        >
          FAMILY OWNED ORCHARD
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl lg:text-8xl"
        >
          Fresh Mangoes

          <span className="mt-3 block text-yellow-400">
            From Bangladesh
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-8 max-w-3xl text-lg leading-9 text-white/90 md:text-xl"
        >
          Freshly harvested from our own orchard and delivered
          with care. Every mango is naturally ripened to bring
          authentic sweetness straight to your home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="mt-12 flex flex-col gap-5 sm:flex-row"
        >
          <Button
            size="lg"
            className="rounded-full bg-yellow-500 px-10 py-7 text-lg text-black hover:bg-yellow-400"
          >
            Shop Now
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white bg-white/10 px-10 py-7 text-lg text-white backdrop-blur-md hover:bg-white hover:text-black"
          >
            Explore Orchard
          </Button>
        </motion.div>

        {/* Glass Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-20 grid gap-5 md:grid-cols-3"
        >

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="text-3xl">🌱</div>

            <h3 className="mt-3 text-lg font-semibold">
              Naturally Ripened
            </h3>

            <p className="mt-2 text-sm text-white/80">
              No harmful chemicals. Only natural ripening.
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="text-3xl">🥭</div>

            <h3 className="mt-3 text-lg font-semibold">
              Premium Quality
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Hand-picked mangoes from our own orchard.
            </p>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="text-3xl">🚚</div>

            <h3 className="mt-3 text-lg font-semibold">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm text-white/80">
              Freshly packed and delivered with care.
            </p>
          </div>

        </motion.div>

      </div>

      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce">

        <ChevronDown
          size={40}
          className="text-white"
        />

      </div>

    </section>
  );
}