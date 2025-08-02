'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const ForgotPasswordPage = () => {
  const router = useRouter();

  const [showOtpField, setShowOtpField] = useState(false);
  const [email, setEmail] = useState('');


  const onFinish = async (values: any) => {
    try {
      const res = await fetch('http://localhost:3000/auth/forgot-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.email }),
        },
      );
      console.log('sent otp succesfully', res);

      const data = await res.json();
      console.log('sent otp succesfully', data);

      if (res.ok) {
        message.success('OTP sent to your email.');
        setEmail(values.email); // store for OTP verification
      } else {
        message.error(data.message || 'Failed to send OTP');
      }

      setShowOtpField(true);
    } catch (err) {
      message.error('Network error');
    }
  };

  const onOtpSubmit = async (values: any) => {
    try {
      const res = await fetch("http://localhost:3000/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          otp: values.otp,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid OTP");
      }

      message.success("OTP verified! Redirecting to reset page...");
      router.push(`/resetpassword?email=${email}&token=${data.token}`);
    } catch (err: any) {
      message.error(err.message);
    }
  };

 

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-xl p-6">
        <div className="text-center mb-6">
          <Title level={3}>Forgot Password?</Title>
          <Text type="secondary">
            Enter your registered email. We'll send you an OTP to reset your
            password.
          </Text>
        </div>

        {!showOtpField ? (
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Enter a valid email' },
            ]}
          >
            <Input size="large" placeholder="you@example.com" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Send OTP
            </Button>
          </Form.Item>
        </Form>
        ) 
        : (
        <Form layout="vertical" onFinish={onOtpSubmit}>
            <Form.Item
              label="Enter OTP"
              name="otp"
              rules={[
                { required: true, message: 'Please enter the OTP' },
                { len: 6, message: 'OTP should be 6 digits' },
              ]}
            >
              <Input size="large" placeholder="123456" maxLength={6} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" size="large" block>
                Verify OTP
              </Button>
            </Form.Item>
          </Form>
        )}

        <div className="text-center mt-4">
          <Text>
            Back to{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
