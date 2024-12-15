"use server";

import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const createCart = async (payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/carts`, payload);
    return data.data;
  } catch (error: any) {
    console.error("Error creating cart:", error);
    throw new Error(
      error.response?.data?.message || "An error occurred while creating  cart"
    );
  }
};
export const getAllCarts = async () => {
  try {
    const { data } = await axiosInstance.get(`/carts`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting carts:", error);
    throw new Error(
      error.response?.data?.message || "An error occurred while getting  carts"
    );
  }
};
export const getUserCarts = async () => {
  try {
    const { data } = await axiosInstance.get(`/carts/user`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting carts:", error);
    throw new Error(
      error.response?.data?.message || "An error occurred while getting  carts"
    );
  }
};
