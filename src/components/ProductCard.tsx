import { IProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import { BiStar } from "react-icons/bi";

const ProductCard: React.FC<IProduct> = ({
  id,
  name,
  price,
  images,
  rating,
  vendor,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/product/${id}`}>
        <div className="relative h-48">
          <Image src={images[0]} alt={name} layout="fill" objectFit="cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link
          href={`/product/${id}`}
          className="text-lg font-semibold text-gray-800 hover:text-indigo-600"
        >
          {name}
        </Link>
        <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <BiStar className="text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">{rating}</span>
        </div>
        <Link
          href={`/shop/${name}`}
          className="text-sm text-indigo-600 hover:underline mt-2 block"
        >
          {vendor.name}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
