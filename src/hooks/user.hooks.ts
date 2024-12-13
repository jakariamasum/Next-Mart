import { deleteleUser, suspendUser } from "@/services/userServices";
import { useMutation } from "@tanstack/react-query";
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
      toast.success("User deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
