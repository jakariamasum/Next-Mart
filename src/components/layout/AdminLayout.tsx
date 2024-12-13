import React from "react";
import Link from "next/link";
import { getSingleUser } from "@/services/userServices";
import Logout from "@/components/auth/Logout";
import AdminSidebar from "../sidebar/AdminSidebar";
import Image from "next/image";
import { IUser } from "@/types/user.types";

const AdminLayout: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  const user: IUser = await getSingleUser();

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="lg:ml-64">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link href="/admin" className="text-2xl font-bold text-gray-800">
                Next-Mart Admin
              </Link>
              <div className="flex items-center">
                {user && (
                  <>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {user?.image ? (
                        <Image
                          src={user?.image}
                          alt={user?.name}
                          className="w-full h-full object-cover"
                          width={100}
                          height={100}
                        />
                      ) : (
                        <span className="text-gray-600 font-semibold ">
                          {user.name[0]}
                        </span>
                      )}
                    </div>

                    <span className="text-gray-700 mx-4">{user?.name}</span>
                    <Logout />
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>

        <footer className="bg-white shadow-sm mt-8">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              © 2024 Next-Mart Admin. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
