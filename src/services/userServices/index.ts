"use server";

import { envConfig } from "@/config/evgConfig";
import axiosInstance from "@/lib/axiosInstance";
import { revalidateTag } from "next/cache";

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
export const getAllUsers = async () => {
  const fetchOption = {
    next: {
      tags: ["users"],
    },
  };

  const res = await fetch(`${envConfig.baseApi}/users`, fetchOption);
  const result = await res.json();
  console.log(result);
  return result.data;
};
export const suspendUser = async (id: string) => {
  try {
    const { data } = await axiosInstance.put(`/users/${id}`, {
      isActive: false,
    });
    revalidateTag("users");

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
    revalidateTag("users");

    return data.data;
  } catch (error: any) {
    console.error("Error deleting user:", error);
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while deleting the user"
    );
  }
};
