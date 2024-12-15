import Link from "next/link";
import { BiSearch, BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          NextMart Shop
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Link href="/cart" className="text-gray-600 hover:text-indigo-600">
            <FaShoppingCart />
          </Link>
          <Link href="/account" className="text-gray-600 hover:text-indigo-600">
            <BiUser />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
