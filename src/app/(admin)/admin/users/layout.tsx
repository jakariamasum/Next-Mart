import React, { ReactNode } from "react";

const layout = ({
  usersList,
  children,
}: {
  usersList: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        {usersList}
      </table>
      {children}
    </div>
  );
};

export default layout;
