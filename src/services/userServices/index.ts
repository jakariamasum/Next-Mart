"use server";

import axiosInstance from "@/lib/axiosInstance";

export const getAllUsers = async () => {
  try {
    const { data } = await axiosInstance.get(`/users`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting users:", error);
    throw new Error(
      error.response?.data?.message || "An error occurred while getting  users"
    );
  }
};

export const getSingleUser = async () => {
  try {
    const { data } = await axiosInstance.get(`/users/me`);
    return data.data;
  } catch (error: any) {
    console.error("Error getting user:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while getting the user"
    );
  }
};
export const suspendUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.put(`/users/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error suspending user:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while suspending the user"
    );
  }
};
export const deleteleUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/users/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error deleting user:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while deleting the user"
    );
  }
};
