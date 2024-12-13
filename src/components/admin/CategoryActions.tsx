"use client";

import { useState } from "react";
import Modal from "@/components/modal/Modal";
import Button from "@/components/ui/Button";
import UXForm from "@/components/form/UXForm";
import UXInput from "@/components/form/UXInput";
import { FieldValues } from "react-hook-form";

interface ICategory {
  id: string | null;
  name: string | null;
}

const CategoryActions = ({ category }: { category: ICategory | null }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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