import UserActions from "@/components/admin/UserActions";
import { getAllUsers } from "@/services/userServices";
import { IUser } from "@/types/user.types";

const UserManagement = async () => {
  const users: IUser[] = await getAllUsers();

  return (
    <tbody>
      {users?.map((user) => (
        <tr key={user.id} className="text-center">
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
