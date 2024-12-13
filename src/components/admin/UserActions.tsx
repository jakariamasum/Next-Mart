"use client";
import { useDeleteUser, useSuspendUser } from "@/hooks/user.hooks";
import { IUser } from "@/types/user.types";

const UserActions = ({ user }: { user: IUser }) => {
  const { mutate: handleSuspendUser } = useSuspendUser();
  const { mutate: handleDeleteUser } = useDeleteUser();
  return (
    <div>
      <button
        className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
        onClick={() => handleSuspendUser(user.id)}
      >
        Suspend
      </button>
      <button
        className="bg-red-500 text-white px-2 py-1 rounded"
        onClick={() => handleDeleteUser(user.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default UserActions;
