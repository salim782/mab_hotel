'use client';
import AdminLayout from '@/component/layout/AdminLayout';
import ReservationCalendar from '@/component/reservation-calendar/ReservationCalendar';

export default function Page() {
  return (
    <AdminLayout>
      <ReservationCalendar />
    </AdminLayout>
  );
}
