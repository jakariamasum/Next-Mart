import AdminLayout from "@/components/layout/AdminLayout";

const AdminRootLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminRootLayout;
