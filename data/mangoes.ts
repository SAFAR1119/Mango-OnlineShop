import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,

    slug: "haribhanga",

    name: "Haribhanga Mango",

    shortDescription:
      "Naturally sweet and juicy.",

    description:
      "Freshly harvested Haribhanga mangoes directly from our family orchard. Naturally ripened with rich aroma and exceptional sweetness.",

    price: 180,

    unit: "kg",

    stock: 200,

    featured: true,

    inStock: true,

    sweetness: 5,

    origin: "Rangpur",

    season: "May - June",

    images: [
      "/images/products/haribhanga/1.webp",
    ],
  },

  {
    id: 2,

    slug: "langra",

    name: "Langra Mango",

    shortDescription:
      "Rich aroma and creamy texture.",

    description:
      "Premium Langra mangoes harvested carefully from our orchard.",

    price: 200,

    unit: "kg",

    stock: 180,

    featured: true,

    inStock: true,

    sweetness: 4,

    origin: "Rajshahi",

    season: "June - July",

    images: [
      "/images/products/langra/1.webp",
    ],
  },

  {
    id: 3,

    slug: "amrapali",

    name: "Amrapali Mango",

    shortDescription:
      "Premium hybrid variety.",

    description:
      "Amrapali mangoes are famous for their deep sweetness, rich color, and very little fiber.",

    price: 200,

    unit: "kg",

    stock: 150,

    featured: true,

    inStock: true,

    sweetness: 5,

    origin: "Rajshahi",

    season: "June - July",

    images: [
      "/images/products/amrapali/1.webp",
    ],
  },
];