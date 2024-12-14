import VendorSidebar from "@/components/sidebar/VendorSidebar";

const VendorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <VendorSidebar />
      <main className="flex-1 overflow-y-auto bg-gray-100 p-8">{children}</main>
    </div>
  );
};

export default VendorLayout;
