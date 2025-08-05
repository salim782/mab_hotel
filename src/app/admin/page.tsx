import AdminDashboard from "@/component/admin_dashboard/AdminDashboard";
import AdminLayout from "@/component/layout/AdminLayout";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
};

export default page;
