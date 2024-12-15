import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">
              NextGen Shop is your one-stop destination for all your shopping
              needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-indigo-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/flash-sale"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  Flash Sale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-600">Email: support@nextmartshop.com</p>
            <p className="text-gray-600">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          © 2024 NextMart Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
