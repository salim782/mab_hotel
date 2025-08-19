import AdminLayout from "@/component/layout/AdminLayout";
import ReservationBooking from "@/component/reservation-booking/ReservationBooking";
import React from "react";

const page = () => {
  return (
    <AdminLayout>
      <ReservationBooking />
    </AdminLayout>
  );
};

export default page;
