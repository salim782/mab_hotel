"use client";
import React from "react";
import { Form, Input, Button, Typography, Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { API } from "@/lib/api";

const { Text } = Typography;

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
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden">
      
      {/* 🔹 Animated Background */}
      <div className="area">
        <ul className="circles">
          <li className="circle circle1"></li>
          <li className="circle circle2"></li>
          <li className="circle circle3"></li>
          <li className="circle circle4"></li>
          <li className="circle circle5"></li>
          <li className="circle circle6"></li>
          <li className="circle circle7"></li>
          <li className="circle circle8"></li>
          <li className="circle circle9"></li>
          <li className="circle circle10"></li>
        </ul>
      </div>

      {/* 🔹 Page Content */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl relative z-10">
        {/* Left side image */}
        <div className="w-full h-[500px] md:w-1/2 relative">
          <img
            src="/home_image/forget2.jpg"
            alt="Forget"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right side form */}
        <div className="min-h-[500px] w-full md:w-1/2 flex justify-center items-center bg-white/80 backdrop-blur-md p-6 rounded-r-lg">
          <Card className="w-full max-w-lg !bg-white/90">
            <h2 className="text-3xl font-semibold mb-6 text-black">Forgot Password?</h2>
            <p className="text-sm mb-6 text-gray-600">
              Enter your email and we'll send you a link to reset your password
            </p>
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please enter your email" }]}
              >
                <Input placeholder="Enter your email" size="large" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="!font-bold w-60 mx-auto"
              >
                Send Reset Link
              </Button>
            </Form>

            <Link href="/login">
              <Text className="!text-md !text-green-600 hover:underline flex justify-center mt-4">
                Back to Login
              </Text>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
