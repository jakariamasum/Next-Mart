import { IProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";

export function RelatedProducts({ products }: { products: IProduct[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="group"
        >
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
