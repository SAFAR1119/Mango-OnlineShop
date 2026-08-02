import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/mangoes";

export default function Featured() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-14 text-center">

        <p className="font-semibold text-green-700">
          OUR PRODUCTS
        </p>

        <h2 className="mt-2 text-5xl font-bold">
          Fresh Mango Collection
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}