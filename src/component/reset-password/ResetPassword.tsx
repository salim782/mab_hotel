"use client";
import { Button, Card, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {

    try {
    const token = localStorage.getItem("token");
    console.log(token,"**********");
    

      const res = await fetch("http://localhost:3000/auth/reset-password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
             Authorization: `Bearer ${token}`, 
        },
        body: JSON.stringify({  
          newPassword: values.newPassword,
          confirmPassword:values.confirmPassword
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("Password reset successful! Redirecting to login...");
      router.push("/login");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card title="Reset Your Password" className="w-full max-w-md">
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[{ required: true, message: "Please enter your new password" }]}
          >
            <Input.Password size="large" placeholder="Enter new password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password size="large" placeholder="Confirm new password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Reset Password
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ResetPassword;
