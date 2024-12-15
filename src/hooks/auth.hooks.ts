import { loginUser, registerUser } from "@/services/authServices";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useUserRegistration = () => {
  const router = useRouter();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      return await registerUser(userData);
    },
    onSuccess: (data) => {
      toast.success(data?.message || "User registration successful.");
      console.log(data?.data?.user);
      if (data?.data?.user?.role) {
        router.push(data?.data?.user?.role === "USER" ? "/user" : "/vendor");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  const router = useRouter();
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
      return await loginUser(userData);
    },
    onSuccess: (data) => {
      toast.success(data?.message || "User login successful.");
      if (data?.data?.user) {
        router.push(data?.data?.role === "USER" ? "/user" : "/vendor");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
