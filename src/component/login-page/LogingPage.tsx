"use client";

import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
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
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <img
        src="/home_image/hotel2.jpg"
        alt="Hotel"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay for dark effect (optional) */}
      <div className="absolute inset-0 bg-black/10"></div>

     {/* Login Card Centered with Transparent Glass Effect */}
      {/* Login Card Centered with Transparent Glass Effect */}
      <div className="relative w-full h-full flex items-center justify-center">
  <Card
    className="w-full max-w-md !bg-black/20 backdrop-blur-xs shadow-2xl rounded-xl p-8 !border-none text-white text-2xl"
  >
    <div className="text-center mb-6">
      <Title level={2} className="!text-white !text-5xl">
        Mab Hotel Login
      </Title>
      <Text className="!text-white !text-xl opacity-80">
        Welcome back! Please login to continue.
      </Text>
    </div>

    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item
        label={<span className="text-white !text-lg">Email</span>}
        name="email"
        rules={[
          { required: true, message: "Please enter your email" },
          { type: "email", message: "Enter a valid email" },
        ]}
      >
        <Input size="large" placeholder="you@example.com" />
      </Form.Item>

      <Form.Item
        label={<span className="text-white !text-lg">Password</span>}
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password size="large" placeholder="••••••••" />
      </Form.Item>

      <div className="flex justify-between mb-4 text-lg">
        <Link href="/signup">
          <Text className="!text-md !text-white hover:underline">
            Create Account
          </Text>
        </Link>
        <Link href="/forgotpassword">
          <Text className="!text-md !text-white hover:underline">
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


    </div>
  );
};

export default LogingPage;
