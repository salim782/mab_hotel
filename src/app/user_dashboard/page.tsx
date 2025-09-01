import Dashboard from "@/component/dashboard/Dashboard";
import AdminLayout from "@/component/admin-layout/AdminLayout";
import UserLayout from "@/component/user_layout/UserLayout";
import React from "react";

const page = () => {
  return (
    <UserLayout>
      <div>
        <Dashboard />
      </div>
    </UserLayout>
  );
};

export default page;
