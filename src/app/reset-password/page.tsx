import AdminLayout from "@/component/admin-layout/AdminLayout";
import ResetPassword from "@/component/reset-password/ResetPassword";
import React, { Suspense } from "react";

const page = () => {
  return (
    // <div>
    //   <ResetPassword />
    // </div>
    <Suspense fallback={<div>Loading...</div>}>
      <ResetPassword />
    </Suspense>
  );
};

export default page;
