"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";
import { BiCreditCard } from "react-icons/bi";
import { BsTrash2 } from "react-icons/bs";
import { toast } from "sonner";
import { useGetUserCart } from "@/hooks/cart.hooks";
import { useUser } from "@/context/user.context";
import { loadStripe } from "@stripe/stripe-js";
import { envConfig } from "@/config/evgConfig";

const stripePromise = loadStripe(envConfig.stripe_publishable_key!);

interface ICart {
  id: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    images: string[];
    discount: number;
    price: number;
    vendor: {
      id: string;
      name: string;
    };
  };
}

export default function CartPage() {
  const { user } = useUser();
  const { data: fetchedCartItems } = useGetUserCart();
  const [cartItems, setCartItems] = useState<ICart[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (fetchedCartItems) {
      setCartItems(fetchedCartItems);
    }
  }, [fetchedCartItems]);

  const applyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      toast.error("Invalid coupon code");
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch(
      "https://next-mart-backend.vercel.app/v1/payment/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerEmail: user?.email,
          productId: "1233",
          amout: total,
          quantity: 2,
          currency: "usd",
        }),
      }
    );
    console.log(response.json());

    const { sessionId } = await response.json();

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        console.error("Stripe checkout error:", error.message);
      }
    }
  };

  const subtotal = cartItems.reduce(
    (sum: number, item: ICart) => sum + item.product.price * item.quantity,
    0
  );
  const total = subtotal * (1 - discount / 100);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item: ICart) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold">{item.product.name}</h3>
                  <p className="text-gray-600">
                    Sold by: {item.product.vendor.name}
                  </p>
                  <p className="text-gray-800">
                    ${item.product.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-r"
                  >
                    +
                  </button>
                </div>
                <button className="ml-4 text-red-500 hover:text-red-700">
                  <BsTrash2 size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between mb-2 text-green-600">
                <span>Discount:</span>
                <span>-${((subtotal * discount) / 100).toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="mt-6">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                className="w-full p-2 border rounded-md mb-2"
              />
              <button
                onClick={applyCoupon}
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Apply Coupon
              </button>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
            >
              <>
                <BiCreditCard className="mr-2" />
                Proceed to Checkout
              </>
            </button>
          </div>
        </div>
      )}

      {showWarning && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <div className="flex items-center mb-4 text-yellow-600">
              <FiAlertCircle className="mr-2" />
              <h2 className="text-xl font-semibold">Warning</h2>
            </div>
            <p className="mb-4">
              You&lsquo;re attempting to add a product from a different vendor.
              Your current cart will be replaced. Do you want to proceed?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowWarning(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-300"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300">
                Replace Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
