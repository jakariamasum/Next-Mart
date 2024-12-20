"use client";
import { useCreateProduct } from "@/hooks/product.hooks";
import UXForm from "../form/UXForm";
import UXInput from "../form/UXInput";
import UXSelect from "../form/UXSelect";
import Button from "../ui/Button";
import { FieldValues } from "react-hook-form";
import { useState } from "react";
import { IProduct } from "@/types/product.type";
import Modal from "../modal/Modal";
import UXMultiImageInput from "../form/UXMultipleImage";
import { useUser } from "@/context/user.context";

const CreateProduct = ({
  categoryItems,
}: {
  categoryItems: { value: string; label: string }[];
}) => {
  const { mutate: handleCreateProduct } = useCreateProduct();
  const { user } = useUser();
  console.log(user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<IProduct | null>(null);

  const openModal = (product: IProduct | null) => {
    setIsModalOpen(true);
    console.log(product);
    if (product) {
      setEditingProduct(product);
    } else {
      setEditingProduct(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };
  const onSubmit = (data: FieldValues) => {
    const payload = { ...data, vendor_id: user?.id, rating: 0 };
    console.log(payload);
    handleCreateProduct(payload);
    setIsModalOpen(false);
  };
  return (
    <div className="container md:mx-auto md:px-4 py-1">
      <div className="flex justify-end mb-4">
        <Button onClick={() => openModal(null)}>Create Lesson</Button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingProduct ? "Edit Product" : "Create New Product"}
      >
        <UXForm onSubmit={onSubmit}>
          <div>
            <UXInput
              type="text"
              name="name"
              placeholder="Enter product name"
              label="Product Name"
            />
          </div>
          <div>
            {" "}
            <UXInput
              type="number"
              name="price"
              placeholder="Enter product price"
              label="Price"
            />
          </div>
          <div>
            <UXSelect
              name="category_id"
              label="Category"
              options={categoryItems}
            />
          </div>
          <div>
            <UXInput
              type="number"
              name="inventory"
              placeholder="Enter inventory count"
              label="Inventory Count"
            />
          </div>
          <div>
            <UXInput
              type="number"
              name="discount"
              placeholder="Enter discount"
              label="Discount"
            />
          </div>
          <div>
            <UXMultiImageInput
              name="images"
              label="Product Images"
              multiple={true}
            />
          </div>

          <Button>Add Product</Button>
        </UXForm>
      </Modal>
    </div>
  );
};

export default CreateProduct;
