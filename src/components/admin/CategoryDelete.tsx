"use client";

import { useDeleteCategory } from "@/hooks/category.hooks";
import ConfirmationDialog from "../ui/ConfirmationModal";
import { useState } from "react";

const CategoryDelete = ({ id }: { id: string }) => {
  const { mutate: handleDelete } = useDeleteCategory();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const Delete = () => {
    handleDelete(id);
    setDialogOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        className="text-red-600 hover:text-red-900"
      >
        Delete
      </button>
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={Delete}
        title="Delete Item"
        message="Are you sure you want to delete this item?"
      />
    </>
  );
};

export default CategoryDelete;
