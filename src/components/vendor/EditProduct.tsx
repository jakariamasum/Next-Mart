/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useUpdateProduct } from "@/hooks/product.hooks";
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
import { BiEdit } from "react-icons/bi";

const EditProduct = ({
  product,
  categoryItems,
}: {
  product: IProduct;
  categoryItems: { value: string; label: string }[];
}) => {
  const { mutate: handleUpdateProduct } = useUpdateProduct();
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
    const { category, vendor, ...payload } = data;
    handleUpdateProduct({ id: data.id, data: payload });
    setIsModalOpen(false);
  };
  return (
    <div className="container md:mx-auto md:px-4 py-1">
      <button
        onClick={() => openModal(null)}
        className="p-1 bg-yellow-500 text-white rounded"
      >
        <BiEdit size={16} />
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingProduct ? "Edit Product" : "Create New Product"}
      >
        <UXForm onSubmit={onSubmit} defaultValues={product}>
          <div>
            <UXInput
              type="text"
              name="name"
              placeholder="Enter product name"
              label="Product Name"
              required={false}
            />
          </div>
          <div>
            {" "}
            <UXInput
              type="number"
              name="price"
              placeholder="Enter product price"
              label="Price"
              required={false}
            />
          </div>
          <div>
            <UXSelect
              name="category_id"
              label="Category"
              options={categoryItems}
              required={false}
            />
          </div>
          <div>
            <UXInput
              type="number"
              name="inventory"
              placeholder="Enter inventory count"
              label="Inventory Count"
              required={false}
            />
          </div>
          <div>
            <UXInput
              type="number"
              name="discount"
              placeholder="Enter discount"
              label="Discount"
              required={false}
            />
          </div>
          <div>
            <UXMultiImageInput
              name="images"
              label="Product Images"
              multiple={true}
              required={false}
            />
          </div>

          <Button>Add Product</Button>
        </UXForm>
      </Modal>
    </div>
  );
};

export default EditProduct;
