import { loginUser, registerUser } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      return await registerUser(userData);
    },
    onSuccess: (data) => {
      toast.success(data?.message || "User registration successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
      return await loginUser(userData);
    },
    onSuccess: (data) => {
      toast.success(data?.message || "User login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
