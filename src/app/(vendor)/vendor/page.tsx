import CreateProduct from "@/components/vendor/CreateProduct";
import VendorActions from "@/components/vendor/VendorActions";
import { getAllCategories } from "@/services/categoryServices";
import { getAllProduts } from "@/services/productServices";
import { ICategory } from "@/types/category.type";
import { IProduct } from "@/types/product.type";
import Image from "next/image";

const VendorDashboard = async () => {
  const products: IProduct[] = await getAllProduts();
  const categories: ICategory[] = await getAllCategories();

  const categoryItems = categories?.map((category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <div className="container mx-auto p-4">
      <CreateProduct categoryItems={categoryItems} />
      <div className="mt-6 overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Inventory</th>
              <th className="border border-gray-300 px-4 py-2">Discount</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                    width={64}
                    height={64}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${product.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.category.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.inventory}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {product.discount}%
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center space-x-2">
                    <VendorActions product={product} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorDashboard;
