"use client";
import { logout } from "@/services/authServices";
import React from "react";

const Logout = () => {
  return (
    <button
      onClick={() => logout()}
      className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Logout
    </button>
  );
};

export default Logout;
