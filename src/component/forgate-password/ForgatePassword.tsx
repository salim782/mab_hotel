'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const ForgotPasswordPage = () => {
  const router = useRouter();

  const [showOtpField, setShowOtpField] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const onFinish = (values: any) => {
    console.log('Reset Password Email:', values.email);
    // TODO: Send OTP to backend here
    message.success('If this email exists, a reset link or OTP has been sent.');
    setEmailSent(true);
    setShowOtpField(true);
  };

  const onOtpSubmit = (values: any) => {
    console.log('Verifying OTP:', values.otp);
    // TODO: Verify OTP with backend
    message.success('OTP verified successfully!');
  };

  const handleClick = ()=>{
    router.push("/signin")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-xl p-6">
        <div className="text-center mb-6">
          <Title level={3}>Forgot Password?</Title>
          <Text type="secondary">
            Enter your registered email. We'll send you an OTP to reset your password.
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
        ) : (
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
              <Button type="primary" htmlType="submit" onClick={handleClick} size="large" block>
                Verify OTP
              </Button>
            </Form.Item>
          </Form>
        )}

        <div className="text-center mt-4">
          <Text>
            Back to{' '}
            <Link href="/signin" className="text-blue-600 hover:underline">
              Login
            </Link>
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;
