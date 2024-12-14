import {
  createProduct,
  deleteleProduct,
  updateProduct,
} from "@/services/productServices";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IUpdateProduct {
  id: string;
  data: FieldValues;
}

export const useCreateProduct = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_PRODUCT"],
    mutationFn: async (data) => await createProduct(data),
    onSuccess: () => {
      toast.success("Product created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUpdateProduct = () => {
  return useMutation<any, Error, IUpdateProduct>({
    mutationKey: ["UPDATE_PRODUCT"],
    mutationFn: async ({ id, data }) => await updateProduct(id, data),
    onSuccess: () => {
      toast.success("Product updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteProduct = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_PRODUCT"],
    mutationFn: async (id) => await deleteleProduct(id),
    onSuccess: () => {
      toast.success("Product deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
