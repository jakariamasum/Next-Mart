import {
  deleteleUser,
  getAllUsers,
  getSingleUser,
  suspendUser,
} from "@/services/userServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

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
