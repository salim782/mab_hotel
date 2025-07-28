"use client";

import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard = () => {
  const router = useRouter();

  const handleClick = () => {
    localStorage.removeItem('token'); 
    router.push("/login");
  };

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-6 bg-gray-100'>
      <h1 className='text-6xl font-bold text-red-600'>
        Dashboard Here
      </h1>
      <Button type='primary' size='large' onClick={handleClick}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
