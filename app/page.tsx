import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChoose from "@/components/sections/WhyChoose";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import OurOurchard from "@/components/sections/OurOrchard";
import Contact from "@/components/sections/Contact";
import CartDrawer from "@/components/cart/CartDrawer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />
        <WhyChoose />
        <FeaturedProducts />
        <OurOurchard />
        <Contact />
      </main>
    </>
  );
}