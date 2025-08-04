import Dashboard from '@/component/dashboard/Dashboard'
import AdminLayout from '@/component/layout/AdminLayout'
import React from 'react'

const page = () => {
  return (
    <AdminLayout>
      <div>
        <Dashboard />
      </div>
    </AdminLayout>
  )
}

export default page
