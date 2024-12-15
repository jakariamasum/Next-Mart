import UserActions from "@/components/admin/UserActions";
import { getAllUsers } from "@/services/userServices";
import { IUser } from "@/types/user.types";
export const dynamic = "force-dynamic";

const UserManagement = async () => {
  const users: IUser[] = await getAllUsers();

  return (
    <tbody>
      {users?.map((user) => (
        <tr
          key={user.id}
          className={`${
            user.isActive ? "text-center" : "bg-red-300 text-center"
          }`}
        >
          <td className="border p-2">{user.name}</td>
          <td className="border p-2">{user.email}</td>
          <td className="border p-2">{user.role}</td>
          <td className="border p-2">
            <UserActions user={user} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserManagement;
