"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroImages } from "@/data/heroImages";

export default function HeroBackground() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">

      <AnimatePresence mode="wait">

        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
            className="relative h-full w-full"
          >
            <Image
              src={heroImages[currentImage]}
              alt="Amm-Ansi Orchard"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>

      </AnimatePresence>

      <div className="absolute inset-0 bg-black/45" />

    </div>
  );
}