"use client";

import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigation } from "@/app/NavigationProvider";
import { API } from "@/lib/api";

const { Title, Text } = Typography;

const LogingPage = () => {
  const router = useRouter();
  const { navigate } = useNavigation();

  const onFinish = async (values: any) => {
    try {
      const response = await fetch(API.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!");
        const payload = jwtDecode(data.token) as { role: string };
        const role = payload.role;

        if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      } else {
        toast.error(data.message || "Login failed!");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side: Login Form */}
      <div className="flex items-center justify-center bg-gray-50  p-6" data-aos="fade-right">  
        <Card className="w-full max-w-md bg-gray-50 p-8 !border-none text-black">
          <div className="text-center mb-6">
            <Title level={2} className="!text-black !text-4xl">
              Mab Hotel Login
            </Title>
            <Text className="!text-black !text-lg opacity-80">
              Welcome back! Please login to continue.
            </Text>
          </div>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label={<span className="text-black !text-lg">Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input size="large" placeholder="you@example.com" />
            </Form.Item>

            <Form.Item
              label={<span className="text-black !text-lg">Password</span>}
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <Input.Password size="large" placeholder="••••••••" />
            </Form.Item>

            <div className="flex justify-between mb-4 text-md">
              <Link href="/signup">
                <Text className="!text-md !font-bold  !text-blue-500 hover:underline">
                  Create Account
                </Text>
              </Link>
              <Link href="/forgotpassword">
                <Text className="!text-md !font-bold !text-blue-600 hover:underline">
                  Forgot Password
                </Text>
              </Link>
            </div>

            <Form.Item className="flex justify-center !mt-6">
  <Button 
    type="primary" 
    htmlType="submit" 
    size="large" 
    className="!font-bold w-60 !text-lg flex justify-center"
  >
    Login
  </Button>
</Form.Item>

  <Link href="/">
  <Text className="!text-md !text-green-500 hover:underline flex justify-center">
     Go to back
  </Text>
</Link>


          </Form>
        </Card>
      </div>

      {/* Right Side: Image */}
      <div className="relative block" data-aos="fade-left">
        <img
          src="/home_image/hotel2.jpg"
          alt="Hotel"
          className="w-full h-72 md:h-full object-cover"
        />

        {/* Overlay text like in reference */}
        <div className="absolute bottom-6 right-6 bg-black/40 text-white p-6 rounded-xl max-w-lg backdrop-blur-xs">
          <h3 className="text-lg font-semibold">Your Luxury Escape Awaits</h3>
          <p className="text-md mt-2">
            Seamlessly book exquisite hotels and experience hospitality redefined
          </p>
        </div>
        <div className="absolute "></div>
      </div>
    </div>
  );
};

export default LogingPage;
