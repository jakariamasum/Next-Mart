import CategoryActions from "@/components/admin/CategoryActions";
import { getAllCategories } from "@/services/categoryServices";
import { ICategory } from "@/types/category.type";

export const dynamic = "force-dynamic";

const ProductCategories = async () => {
  const categories: ICategory[] = await getAllCategories();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex justify-end mb-4 p-2">
        <CategoryActions category={null} />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category Name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories?.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <CategoryActions category={category} />

                  <button className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCategories;
