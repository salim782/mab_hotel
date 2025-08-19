import AdminLayout from "@/component/layout/AdminLayout";
import ReservationStatus from "@/component/reservation-status/ReservationStatus";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <ReservationStatus />
    </AdminLayout>
  );
};

export default page;
