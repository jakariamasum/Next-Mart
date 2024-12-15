"use server";

import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const createPayment = async (payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/payment/checkout`, payload);
    console.log(data);
    return data.data;
  } catch (error: any) {
    console.error("Error creating payment:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while creating  payment"
    );
  }
};
