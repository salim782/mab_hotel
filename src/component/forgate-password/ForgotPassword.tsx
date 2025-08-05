'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    const res = await fetch("http://localhost:3000/auth/forget-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: values.email }),
    });

    const data = await res.json();

    if (!res.ok) {
      message.error(data.message);
    } else {
      message.success("Reset link sent to your email.");
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <Form onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Send Reset Link
          </Button>
        </Form>
      </Card>
    </div>
  );


  // const onFinish = async (values: any) => {
  //   try {
  //     const res = await fetch('http://localhost:3000/auth/forgot-password',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ email: values.email }),
  //       },
  //     );

  //     const data = await res.json();
  //     console.log('sent otp succesfully', data);

  //     if (res.ok) {
  //       toast.success('OTP sent to your email.');
  //       setEmail(values.email);
  //     } else {
  //       toast.error(data.message || 'Failed to send OTP');
  //     }

  //     setShowOtpField(true);
  //   } catch (err) {
  //     toast.error('Network error');
  //   }
  // };

  // const onOtpSubmit = async (values: any) => {
  //   try {
  //     const res = await fetch("http://localhost:3000/auth/verify-otp", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         otp: values.otp,
  //       }),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.message || "Invalid OTP");
  //     }

  //     toast.success("OTP verified! Redirecting to reset page...");
  //     router.push(`/resetpassword?email=${email}&token=${data.token}`);
  //   } catch (err: any) {
  //     toast.error(err.message);
  //   }
  // };

 

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //     <Card className="w-full max-w-md shadow-lg rounded-xl p-6">
  //       <div className="text-center mb-6">
  //         <Title level={3}>Forgot Password?</Title>
  //         <Text type="secondary">
  //           Enter your registered email. We'll send you an OTP to reset your
  //           password.
  //         </Text>
  //       </div>

  //       {!showOtpField ? (
  //       <Form layout="vertical" onFinish={onFinish}>
  //         <Form.Item
  //           label="Email"
  //           name="email"
  //           rules={[
  //             { required: true, message: 'Please enter your email' },
  //             { type: 'email', message: 'Enter a valid email' },
  //           ]}
  //         >
  //           <Input size="large" placeholder="you@example.com" />
  //         </Form.Item>

  //         <Form.Item>
  //           <Button type="primary" htmlType="submit" size="large" block>
  //             Send OTP
  //           </Button>
  //         </Form.Item>
  //       </Form>
  //       ) 
  //       : (
  //       <Form layout="vertical" onFinish={onOtpSubmit}>
  //           <Form.Item
  //             label="Enter OTP"
  //             name="otp"
  //             rules={[
  //               { required: true, message: 'Please enter the OTP' },
  //               { len: 6, message: 'OTP should be 6 digits' },
  //             ]}
  //           >
  //             <Input size="large" placeholder="123456" maxLength={6} />
  //           </Form.Item>

  //           <Form.Item>
  //             <Button type="primary" htmlType="submit" size="large" block>
  //               Verify OTP
  //             </Button>
  //           </Form.Item>
  //         </Form>
  //       )}

  //       <div className="text-center mt-4">
  //         <Text>
  //           Back to{' '}
  //           <Link href="/login" className="text-blue-600 hover:underline">
  //             Login
  //           </Link>
  //         </Text>
  //       </div>
  //     </Card>
  //   </div>
  // );



};

export default ForgotPassword;
