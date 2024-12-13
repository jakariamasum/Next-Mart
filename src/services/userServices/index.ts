"use server";

import axiosInstance from "@/lib/axiosInstance";

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
