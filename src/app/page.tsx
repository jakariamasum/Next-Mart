import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/types/product.type";
import { getAllProduts } from "@/services/productServices";
import { ICategory } from "@/types/category.type";
import { getAllCategories } from "@/services/categoryServices";

const Home = async () => {
  const products: IProduct[] = await getAllProduts();
  const categories: ICategory[] = await getAllCategories();
  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category}`}
              className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
            >
              {category.name}
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
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default Home;
