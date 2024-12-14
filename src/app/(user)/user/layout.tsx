import UserSidebar from "@/components/sidebar/UserSidebar";

export const metadata = {
  title: "User Dashboard",
  description: "Multi-vendor e-commerce user dashboard",
};

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <UserSidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
};

export default UserLayout;
