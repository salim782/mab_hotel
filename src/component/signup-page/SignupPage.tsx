"use client";

import React, { useState } from "react";
import { Form, Input, Button, Typography, Card, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useNavigation } from "@/app/NavigationProvider";
import { API } from "@/lib/api";
import Image from "next/image";

const { Title, Text } = Typography;

const SignupPage = () => {
  const router = useRouter();
  const { navigate, setLoading } = useNavigation();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Account created successfully!");
        navigate("/login");
      } else {
        toast.error(data.message || "Signup failed!");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden grid grid-cols-1 md:grid-cols-2 bg-gray-100">
      {/* LEFT SIDE - Image */}
      <div className="relative hidden md:block">
        <Image
          src="/home_image/event.jpg"
          alt="Signup Illustration"
          fill
          className="object-cover"
        />

        {/* Overlay text like in reference */}
        <div className="absolute bottom-6 left-6 bg-black/40 text-white p-6 rounded-xl max-w-lg backdrop-blur-xs">
          <h3 className="text-xl font-semibold">Book Your Stay with Ease</h3>
          <p className="text-md mt-2">
            Discover exclusive deals, enjoy seamless reservations, and make
            every stay memorable.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - Form */}
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white p-5 rounded-2xl shadow-xl">
          {/* Logo */}
          <div className="flex items-center mb-2">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="ml-2 text-sm font-bold text-black">
              Mabsol Hotel
            </span>
          </div>

          <Title level={2}>Create Your Account Now</Title>
          <Text type="secondary" className="!text-gray-600 ">
            Your journey to effortless stays begins here
          </Text>

          <Form layout="vertical" className="mt-4" onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input size="large" placeholder="Your name here..." />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input size="large" placeholder="Your email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please enter a password" }]}
            >
              <Input.Password size="large" placeholder="Your password" />
            </Form.Item>

            <Form.Item className="flex justify-center !mt-6">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="!font-bold w-60 flex justify-center"
              >
                Sign Up
              </Button>
            </Form.Item>

            <div className="flex items-center justify-between mt-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-600 text-sm">Remember me</span>
              </label>
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">
                Or Sign in with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                block
                size="large"
                className="flex items-center justify-center border"
              >
                <Image
                  src="/icons/google.png"
                  alt="Google"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Google
              </Button>

              <Button
                block
                size="large"
                className="flex items-center justify-center border"
              >
                <Image
                  src="/icons/apple.png"
                  alt="Apple"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                Apple
              </Button>
            </div>

            <div className="text-center mt-4">
              <Text>
                Already have an account?{" "}
                <Link href="/login" className="text-blue-800 hover:underline">
                  Login
                </Link>
              </Text>
            </div>

            <Link href="/">
              <Text className="!text-md !text-green-500 hover:underline flex justify-center">
                Go to back
              </Text>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
