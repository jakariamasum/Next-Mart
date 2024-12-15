"use client";

import { useDeleteCategory } from "@/hooks/category.hooks";

const CategoryDelete = ({ id }: { id: string }) => {
  const { mutate: handleDelete } = useDeleteCategory();
  return (
    <button
      onClick={() => handleDelete(id)}
      className="text-red-600 hover:text-red-900"
    >
      Delete
    </button>
  );
};

export default CategoryDelete;
