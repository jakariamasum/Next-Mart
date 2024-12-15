import Image from "next/image";
import Link from "next/link";
import { BiStar } from "react-icons/bi";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  shopName: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  rating,
  shopName,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/product/${id}`}>
        <div className="relative h-48">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
      </Link>
      <div className="p-4">
        <Link
          href={`/product/${id}`}
          className="text-lg font-semibold text-gray-800 hover:text-blue-600"
        >
          {name}
        </Link>
        <p className="text-gray-600 mt-1">${price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <BiStar className="text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">{rating.toFixed(1)}</span>
        </div>
        <Link
          href={`/shop/${shopName}`}
          className="text-sm text-blue-600 hover:underline mt-2 block"
        >
          {shopName}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;