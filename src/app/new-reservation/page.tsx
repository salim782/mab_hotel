import React from 'react';
import NewReservation from '../../component/new-reservation/NewReservation';
import AdminLayout from '@/component/layout/AdminLayout';

const page = () => {
    return (
        <AdminLayout>
            <NewReservation />
        </AdminLayout>
    );
};

export default page;