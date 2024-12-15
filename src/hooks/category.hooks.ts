import {
  createCategory,
  deleteleCategory,
  getAllCategories,
  getSingleCategory,
  updateCategory,
} from "@/services/categoryServices";

import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IUpdateCategory {
  id: string;
  data: FieldValues;
}

export const useCreateCategory = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (data) => await createCategory(data),
    onSuccess: () => {
      toast.success("Category created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUpdateCategory = () => {
  return useMutation<any, Error, IUpdateCategory>({
    mutationKey: ["UPDATE_CATEGORY"],
    mutationFn: async ({ id, data }) => await updateCategory(id, data),
    onSuccess: () => {
      toast.success("Category updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteCategory = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_CATEGORY"],
    mutationFn: async (id) => await deleteleCategory(id),
    onSuccess: () => {
      toast.success("Category deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["GET_ALL_CATEGORIES"],
    queryFn: async () => await getAllCategories(),
  });
};

export const useGetSingleCategory = (id: string) => {
  return useQuery({
    queryKey: ["GET_VENDORS_PRODUCT", id],
    queryFn: async () => await getSingleCategory(id),
  });
};
