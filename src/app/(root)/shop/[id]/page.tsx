"use client";

import { useState } from "react";
import Image from "next/image";
import { BiStar } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { useGetSingleUser } from "@/hooks/user.hooks";
import { useGetVendorProducts } from "@/hooks/product.hooks";
import { IProduct } from "@/types/product.type";
import { useUser } from "@/context/user.context";
import { useCreateCart } from "@/hooks/cart.hooks";

export default function ShopPage({ params }: { params: { id: string } }) {
  const { user } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(0);

  const { data: vendor } = useGetSingleUser();
  const { data: products } = useGetVendorProducts(params.id);
  const { mutate: handleCreateCart } = useCreateCart();
  console.log(products, vendor);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowerCount((prevCount) =>
      isFollowing ? prevCount - 1 : prevCount + 1
    );
  };

  const handleAddToCart = (product_id: string) => {
    const payload = { user_id: user?.id, product_id };
    console.log(`Added product ${product_id} to cart`);
    handleCreateCart(payload);
  };

  if (!vendor) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-4">
          <Image
            src={vendor?.image || ""}
            alt={`${vendor.name} banner`}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white -mt-12 md:-mt-16 z-10">
            <Image
              src={vendor?.image || ""}
              alt={`${vendor.name} logo`}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">{vendor.name}</h1>
            <p className="text-gray-600 mt-2">{vendor?.description}</p>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <button
              onClick={handleFollow}
              className={`px-4 py-2 rounded-full font-semibold ${
                isFollowing
                  ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              } transition duration-300`}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <div className="text-gray-600">
              <span className="font-semibold">{followerCount}</span> followers
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product: IProduct) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative aspect-square">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <div className="flex items-center mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <BiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  ({product?.review?.length || 0})
                </span>
              </div>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center justify-center"
              >
                <FaShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
