import { products } from "@/data/mangoes";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProducts() {
  return (
    <section
      id="shop"
      className="bg-[#FFFDF8] py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-green-700">
            OUR COLLECTION
          </p>

          <h2 className="mt-4 text-5xl font-bold md:text-5xl">
            Fresh From Our Orchard
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Choose from our freshly harvested mango varieties. Every mango is hand-picked, naturally ripened, and packed with care before delivery.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((product) => product.featured)
            .map((product) => (
           <ProductCard
            key={product.id}
            product={product}
           />
          ))}
        </div>

      </div>
    </section>
  );
}