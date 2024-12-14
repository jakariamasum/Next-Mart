"use server";

import axiosInstance from "@/lib/axiosInstance";
import { FieldValues } from "react-hook-form";

export const createCategory = async (payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(`/categories`, payload);
    return data.data;
  } catch (error: any) {
    console.error("Error creating category:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while creating  category"
    );
  }
};
export const getAllCategories = async () => {
  try {
    const { data } = await axiosInstance.get(`/categories`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting categories:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while getting  categories"
    );
  }
};

export const getSingleCategory = async (id: string) => {
  try {
    const { data } = await axiosInstance.get(`/categories/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting category:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while getting the category"
    );
  }
};
export const updateCategory = async (id: string, payload: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(`/categories/${id}`, payload);
    return data.data;
  } catch (error: any) {
    console.error("Error updating category:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while updating the category"
    );
  }
};
export const deleteleCategory = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/categories/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error deleting category:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while deleting the category"
    );
  }
};
