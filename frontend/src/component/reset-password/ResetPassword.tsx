"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Form, Input, Button, message, Card } from "antd";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const onFinish = async (values: any) => {
    const res = await fetch("http://localhost:3000/auth/reset-password", {
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
      message.error(data.message);
    } else {
      message.success("Password reset successfully");
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Reset Your Password</h2>
        <Form onFinish={onFinish}>
          <Form.Item
            name="newPassword"
            rules={[{ required: true, message: "Enter new password" }]}
          >
            <Input.Password placeholder="New Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Passwords do not match");
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Reset Password
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ResetPassword;
