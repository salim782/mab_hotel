"use client";

import { Button, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';


const { Text } = Typography

const Dashboard = () => {
  const router = useRouter();

  return (
      <div className='h-screen flex flex-col justify-center items-center gap-6 bg-gray-100'>
       Welcome to Dashboard
      </div>
  );
};

export default Dashboard;
