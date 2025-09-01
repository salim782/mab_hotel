"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Form, Input, Button, Card, Typography } from "antd";
import { toast } from "react-toastify";
import { API } from "@/lib/api";
import Link from "next/link";

const { Title } = Typography;

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get token + email from URL query
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const onFinish = async (values: any) => {
    try {
      const res = await fetch(API.RESET_PASSWORD, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          email,
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to reset password.");
      } else {
        toast.success("Password reset successfully.");
        router.push("/login");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="bg-white overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        
        {/* Left side image */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-50">
          <img
            src="/home_image/resetpassword.jpg"
            alt="Reset Password"
            className="max-h-[350px] w-auto object-contain"
          />
        </div>

        {/* Right side form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-10">
          <Card className="w-full max-w-md !shadow-none !border-0">
            <Title level={2} className="!text-3xl !mb-4 !text-black">
              Change your Password
            </Title>
            <p className="text-gray-600 mb-6">
              Enter your new password below to change your password.
            </p>

            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                name="newPassword"
                rules={[
                  { required: true, message: "Please enter a new password" },
                  { min: 6, message: "Password must be at least 6 characters" },
                ]}
              >
                <Input.Password placeholder="New Password" size="large" />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                dependencies={["newPassword"]}
                rules={[
                  { required: true, message: "Please confirm your password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" size="large" />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="!font-bold !text-md mt-2"
              >
                Reset Password
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
