"use client";

import Link from "next/link";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useCartDrawerStore } from "@/store/cartDrawerStore";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Shop",
    href: "#shop",
  },
  {
    name: "Our Orchard",
    href: "#orchard",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const totalItems = useCartStore((state) => state.getTotalItems());
  const openDrawer = useCartDrawerStore((state) => state.openDrawer);


  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-black/25 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-3xl">🥭</span>

          <div>
            <h1 className="text-xl font-bold text-white">
              Amm-Ansi
            </h1>

            <p className="text-xs text-white/80">
              Fresh From Our Orchard
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white transition hover:text-yellow-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <button 
          onClick={openDrawer}
          className="relative text-white">
            <ShoppingCart size={25} />

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-semibold text-white">
              {mounted ? totalItems : 0}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-white/20 bg-black/80 backdrop-blur-md lg:hidden">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block border-b border-white/10 px-6 py-4 text-white transition hover:bg-white/10"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}