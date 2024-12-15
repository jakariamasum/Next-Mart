"use server";

import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const createProduct = async (payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/products`, payload);
    return data.data;
  } catch (error: any) {
    console.error("Error creating products:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while creating  products"
    );
  }
};
export const getAllProduts = async () => {
  try {
    const { data } = await axiosInstance.get(`/products`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting products:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while getting  products"
    );
  }
};

export const getSingleProduct = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/products/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting product:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while getting the product"
    );
  }
};
export const getVendorProducts = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/products/vendors/product/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting products:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while getting products"
    );
  }
};
export const updateProduct = async (id: string, payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(`/products/${id}`, payload);
    return data.data;
  } catch (error: any) {
    console.error("Error updating product:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while updating the product"
    );
  }
};
export const deleteleProduct = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/products/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error deleting product:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while deleting the product"
    );
  }
};
