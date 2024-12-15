"use client";

import { useState } from "react";
import Modal from "@/components/modal/Modal";
import Button from "@/components/ui/Button";
import UXForm from "@/components/form/UXForm";
import UXInput from "@/components/form/UXInput";
import { FieldValues } from "react-hook-form";
import UXImage from "../form/UXImage";
import { useCreateCategory, useUpdateCategory } from "@/hooks/category.hooks";

interface ICategory {
  id: string | null;
  name: string | null;
}

const CategoryActions = ({ category }: { category: ICategory | null }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { mutate: handleUpdateCategory } = useUpdateCategory();
  const { mutate: handleCreateCategory } = useCreateCategory();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    if (category && category.id) {
      handleUpdateCategory({ id: category.id, data: data });
    } else {
      handleCreateCategory(data);
    }
    closeModal();
  };

  return (
    <>
      {category ? (
        <button
          onClick={() => openModal()}
          className="text-indigo-600 hover:text-indigo-900 mx-2"
        >
          Edit
        </button>
      ) : (
        <Button onClick={() => openModal()}>Create Category</Button>
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={category ? "Edit Category" : "Create New Category"}
      >
        <UXForm onSubmit={onSubmit} defaultValues={category || {}}>
          <div>
            <UXInput
              type="text"
              name="name"
              placeholder="Enter category name"
              label="Category Name"
            />
            <UXImage
              name="image"
              label="Category Photo (optional)"
              required={false}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="danger" onClick={closeModal}>
              Cancel
            </Button>
            <Button>{category ? "Update Category" : "Create Category"}</Button>
          </div>
        </UXForm>
      </Modal>
    </>
  );
};

export default CategoryActions;
