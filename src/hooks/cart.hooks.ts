import { createCart, getAllCarts, getUserCarts } from "@/services/cartServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreateCart = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (data) => await createCart(data),
    onSuccess: () => {
      toast.success("Cart added successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetUserCart = () => {
  return useQuery({
    queryKey: ["GET_USER_CART"],
    queryFn: async () => await getUserCarts(),
  });
};

export const useGetAllCart = () => {
  return useQuery({
    queryKey: ["GET_ALL_CART"],
    queryFn: async () => await getAllCarts(),
  });
};
