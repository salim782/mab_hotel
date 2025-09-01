import AdminLayout from "@/component/layout/AdminLayout";
import ReservationUpdate from "@/component/reservation-update/ReservationUpdate";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <ReservationUpdate />
    </AdminLayout>
  );
};

export default page;
