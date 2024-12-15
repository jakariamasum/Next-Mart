"use client";
import { useState } from "react";
import Link from "next/link";
import { BiChevronUp } from "react-icons/bi";
import ProductCard from "@/components/ProductCard";

const initialProducts = [
  {
    id: "1",
    name: "Product 1",
    price: 19.99,
    image: "/placeholder.svg",
    rating: 4.5,
    shopName: "Shop A",
  },
  {
    id: "2",
    name: "Product 2",
    price: 29.99,
    image: "/placeholder.svg",
    rating: 4.2,
    shopName: "Shop B",
  },
  {
    id: "3",
    name: "Product 3",
    price: 39.99,
    image: "/placeholder.svg",
    rating: 4.8,
    shopName: "Shop C",
  },
];

const categories = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports",
  "Books",
  "Toys",
];

const Home = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const loadMoreProducts = () => {
    const newProducts = [];
    setProducts([...products, ...newProducts]);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setShowScrollTop(window.pageYOffset > 300);
    });
  }

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/products?category=${category}`}
              className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Flash Sale */}
      <div className="mb-8 bg-red-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Flash Sale</h2>
        <p className="mb-4">Don&lsquo;t miss out on our amazing deals!</p>
        <Link
          href="/flash-sale"
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
        >
          View All Flash Sale Items
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button
          onClick={loadMoreProducts}
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          Load More Products
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <BiChevronUp />
        </button>
      )}
    </div>
  );
};

export default Home;
