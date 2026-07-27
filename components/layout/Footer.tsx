import Link from "next/link";
import { Mail } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#123524] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-3">

          <div>

            <h2 className="text-3xl font-bold">
              🥭 Amm-Ansi
            </h2>

            <p className="mt-4 text-white/80">
              Fresh mangoes harvested directly from our orchard
              and delivered with care.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              <Link href="/">Home</Link>

              <Link href="#shop">Shop</Link>

              <Link href="#orchard">Our Orchard</Link>

              <Link href="#contact">Contact</Link>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold">
              Follow Us
            </h3>

            <div className="mt-5 flex gap-5">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 transition hover:bg-green-600">
              <FaFacebookF size={18} />
              </div>

             <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 transition hover:bg-pink-600">
              <FaInstagram size={18} />
            </div>

            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white/10 transition hover:bg-blue-600">
           <Mail size={18} />
           </div>
            </div>

          </div>

        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/70">

          © 2026 Amm-Ansi. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}