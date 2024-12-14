"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { SiTarget } from "react-icons/si";

const navItems = [
  { name: "Products", href: "/products", icon: BiShoppingBag },
  { name: "Recent Products", href: "user/recent-products", icon: BsClock },
  { name: "Followed Shops", href: "user/followed-shops", icon: BiHeart },
  { name: "Order History", href: "user/order-history", icon: FiFileText },
  { name: "Reviews", href: "/reviews", icon: SiTarget },
];

const UserSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">User Dashboard</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 ${
                    isActive ? "bg-gray-200 font-semibold" : ""
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
export default UserSidebar;
