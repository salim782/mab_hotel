"use client";

import React from "react";
import { Form, Input, Button, Typography, Card, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const { Title, Text } = Typography;

const LogingPage = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("Login successful:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        toast.success("Login successful!");
        const payload = jwtDecode(data.token) as { role: string };
        const role = payload.role;

        if (role === "admin") {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-xl rounded-xl p-6">
        <div className="text-center mb-6">
          <Title level={2}>Mab Hotel Login</Title>
          <Text type="secondary">Welcome back! Please login to continue.</Text>
        </div>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input size="large" placeholder="you@example.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password size="large" placeholder="••••••••" />
          </Form.Item>

          <div className="flex justify-between mb-4">
            <Link href="/signup">
              <Text className="text-blue-600 hover:underline">
                Create Account
              </Text>
            </Link>
            <Link href="/forgotpassword">
              <Text className="text-blue-600 hover:underline">
                Forgot Password
              </Text>
            </Link>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LogingPage;
