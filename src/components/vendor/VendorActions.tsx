"use client";
import { useDeleteProduct } from "@/hooks/product.hooks";
import { IProduct } from "@/types/product.type";
import { BiCopy, BiTrash } from "react-icons/bi";
import EditProduct from "./EditProduct";
import { useState } from "react";
import ConfirmationDialog from "../ui/ConfirmationModal";

const VendorActions = ({
  product,
  categoryItems,
}: {
  product: IProduct;
  categoryItems: { value: string; label: string }[];
}) => {
  const { mutate: handleDelete } = useDeleteProduct();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const onSubmit = () => {
    handleDelete(product.id);
    setDialogOpen(false);
  };

  return (
    <div className="flex gap-1">
      <EditProduct product={product} categoryItems={categoryItems} />
      <button
        onClick={() => setDialogOpen(true)}
        className="p-1 bg-red-500 text-white rounded"
      >
        <BiTrash size={16} />
      </button>
      <button className="p-1 bg-green-500 text-white rounded">
        <BiCopy size={16} />
      </button>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={onSubmit}
        title="Delete Item"
        message="Are you sure you want to delete this item?"
      />
    </div>
  );
};

export default VendorActions;
