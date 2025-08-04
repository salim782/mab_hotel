"use client";

import { Button, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';


const { Text } = Typography

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
        <Link href="/forgatepassword">
          <Text className="text-blue-600 hover:underline">
            Forgot Password?
          </Text>
        </Link>
      </div>
  );
};

export default Dashboard;
