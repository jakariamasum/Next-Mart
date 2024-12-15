import { createPayment } from "@/services/paymentServices";
import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreatePayment = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["CREATE_CATEGORY"],
    mutationFn: async (data) => await createPayment(data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
