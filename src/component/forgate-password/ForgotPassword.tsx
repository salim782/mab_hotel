'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { API } from '@/lib/api';

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const res = await fetch(API.FORGOT_PASSWORD, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: values.email }),
    });

    const data = await res.json();

    if (!res.ok) {
      toast.error(data.message);
    } else {
      toast.success("Reset link sent to your email.");
      router.push("/login");
    }
  };

  return (
<div className="flex flex-col md:flex-row min-h-screen w-full overflow-hidden">
  {/* Left side image section */}
  <div className="w-full md:w-1/2 relative">
    <img
      src="/home_image/forget2.jpg"
      alt="Forget"
      className="w-full h-64 md:h-full object-cover"
    />
  </div>

  {/* Right side form section */}
  <div className="min-h-screen w-full md:w-1/2 flex justify-center items-center bg-gray-50 p-4">
    <Card className="w-full max-w-md !shadow-2xl rounded-xl !bg-gray-100">
      <h2 className="text-3xl md:text-7xl font-bold mb-6 text-left text-black">
        Forgot <br /> Password?
      </h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please enter your email' }]}
        >
          <Input placeholder="Enter your email" size="large" />
        </Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          Send Reset Link
        </Button>
      </Form>
    </Card>
  </div>
</div>

    
  );
};

export default ForgotPassword;
