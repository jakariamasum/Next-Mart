import {
  deleteleUser,
  getAllUsers,
  getSingleUser,
  suspendUser,
  updateUser,
} from "@/services/userServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

interface IUpdateUser {
  id: string;
  data: FieldValues;
}

export const useDeleteUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["DELETE_USER"],
    mutationFn: async (id) => await deleteleUser(id),
    onSuccess: () => {
      toast.success("User deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useSuspendUser = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["SUSPEND_USER"],
    mutationFn: async (id) => await suspendUser(id),
    onSuccess: () => {
      toast.success("User suspended successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateUser = () => {
  return useMutation<any, Error, IUpdateUser>({
    mutationKey: ["UPDATE_USER"],
    mutationFn: async ({ id, data }) => await updateUser(id, data),
    onSuccess: () => {
      toast.success("Data updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetSingleUser = () => {
  return useQuery({
    queryKey: ["GET_SINGLE_USER"],
    queryFn: async () => await getSingleUser(),
  });
};
export const useGetAllUser = () => {
  return useQuery({
    queryKey: ["GET_ALL_USER"],
    queryFn: async () => await getAllUsers(),
  });
};
