"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProduts, getSingleProduct } from "@/services/productServices";
import { IProduct } from "@/types/product.type";
import { FaShoppingCart } from "react-icons/fa";
import { BiStar } from "react-icons/bi";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useState(() => {
    const fetchData = async () => {
      const productData = await getSingleProduct(params.id);
      setProduct(productData);
      setSelectedImage(productData.images[0]);

      const allProducts: IProduct[] = await getAllProduts();
      const related: IProduct[] = allProducts.filter(
        (p) =>
          p.category.id === productData.category.id && p.id !== productData.id
      );
      setRelatedProducts(related.slice(0, 4));
    };
    fetchData();
  }, [params?.id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li>
            <Link
              href={`/category/${product.category.id}`}
              className="text-gray-600 hover:text-gray-900"
            >
              {product.category.name}
            </Link>
          </li>
          <li>
            <span className="text-gray-500 mx-2">/</span>
          </li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={selectedImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-5 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 ${
                  selectedImage === image ? "ring-2 ring-indigo-500" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <BiStar
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(4.5)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({12} reviews)</span>
          </div>
          <p className="text-3xl font-semibold">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">Category: {product.category.name}</p>
          <Link
            href={`/shop/${product.vendor.id}`}
            className="text-indigo-600 hover:underline inline-block"
          >
            Sold by: {product.vendor.name}
          </Link>
          <p className="text-gray-700">{product.description}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button
                className="px-3 py-1 text-xl"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-3 py-1 text-xl border-x">{quantity}</span>
              <button
                className="px-3 py-1 text-xl"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button className="flex-grow bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center">
              <FaShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Product Details</h2>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Specifications
            </h3>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Brand</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.vendor.name}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.category.name}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Rating</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {product.rating} out of 5
                </dd>
              </div>
              {/* Add more specifications as needed */}
            </dl>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {product.review?.map((rev) => (
            <div key={rev.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <BiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < rev.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{rev.name}</span>
              </div>
              <p className="text-gray-700">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
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
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
