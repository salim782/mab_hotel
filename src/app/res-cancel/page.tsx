import AdminLayout from "@/component/layout/AdminLayout";
import CancelReservation from "@/component/res-cancel/CancelReservation";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <CancelReservation />
    </AdminLayout>
  );
};

export default page;
