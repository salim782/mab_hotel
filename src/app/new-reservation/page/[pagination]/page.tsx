import AdminLayout from "@/component/layout/AdminLayout";
import NewReservation from "@/component/new-reservation/NewReservation";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <NewReservation />
    </AdminLayout>
  );
};

export default page;
