"use client";
import { useDeleteProduct } from "@/hooks/product.hooks";
import { IProduct } from "@/types/product.type";
import { BiCopy, BiEdit, BiTrash } from "react-icons/bi";

const VendorActions = ({ product }: { product: IProduct }) => {
  const { mutate: handleDelete } = useDeleteProduct();
  return (
    <div className="flex gap-1">
      <button className="p-1 bg-yellow-500 text-white rounded">
        <BiEdit size={16} />
      </button>
      <button
        onClick={() => handleDelete(product.id)}
        className="p-1 bg-red-500 text-white rounded"
      >
        <BiTrash size={16} />
      </button>
      <button className="p-1 bg-green-500 text-white rounded">
        <BiCopy size={16} />
      </button>
    </div>
  );
};

export default VendorActions;
