"use client";
import Link from "next/link";
import { useState } from "react";
import { BiHome, BiMenu, BiPackage, BiX } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiBarChart2, FiSettings, FiShoppingCart } from "react-icons/fi";
import { SiTarget } from "react-icons/si";

const VendorSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-2 text-white bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700"
        >
          {isOpen ? (
            <BiX className="w-6 h-6" />
          ) : (
            <BiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:static md:inset-0`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Vendor Dashboard</h1>
        </div>
        <nav className="flex-1">
          <Link
            href="/vendor"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <BiHome className="mr-3" />
            Dashboard
          </Link>
          <Link
            href="/vendor/products"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <BiPackage className="mr-3" />
            Products
          </Link>
          <Link
            href="/vendor/orders"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FiShoppingCart className="mr-3" />
            Orders
          </Link>
          <Link
            href="/vendor/reviews"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <SiTarget className="mr-3" />
            Reviews
          </Link>
          <Link
            href="/vendor/analytics"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FiBarChart2 className="mr-3" />
            Analytics
          </Link>
          <Link
            href="/vendor/settings"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <FiSettings className="mr-3" />
            Settings
          </Link>
          <Link
            href="/vendor/profile"
            className="flex items-center px-4 py-2 hover:bg-gray-700"
          >
            <CgProfile className="mr-3" />
            Profile
          </Link>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};
export default VendorSidebar;
