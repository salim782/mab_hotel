'use client';

import React from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const SignupPage = () => {
  const router = useRouter();
  const onFinish = async (values: any) => {
    try {
      const response = await fetch('http://192.168.112.164:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        message.success('Login successful!');
        router.push('/login');
      } else {
        const errorData = await response.json();
        message.error(errorData.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      message.error('Something went wrong!');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-xl p-6">
        <div className="text-center mb-6">
          <Title level={2}>Create Your Account</Title>
          <Text type="secondary">Join Mab Hotel to get started</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your full name' }]}
          >
            <Input size="large" placeholder="John Doe" />
          </Form.Item>

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

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please enter a password' }]}
          >
            <Input.Password size="large" placeholder="••••••••" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password size="large" placeholder="••••••••" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              // onClick={handleClick}
              block
            >
              Sign Up
            </Button>
          </Form.Item>

          <div className="text-center">
            <Text>
              Already have an account?{' '}
              <Link href="/signin" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </Text>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default SignupPage;
