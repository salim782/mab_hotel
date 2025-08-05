import AdminLayout from '@/component/layout/AdminLayout'
import ReservationCalender from '@/component/reservation-calender/ReservationCalender'
import React from 'react'

const page = () => {
  return (
    <AdminLayout>
        <ReservationCalender />
    </AdminLayout>
  )
}

export default page