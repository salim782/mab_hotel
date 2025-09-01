// /app/admin/layout.tsx
"use client";

import UserLayout from "@/component/user_layout/UserLayout";

export default function UserRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <UserLayout>{children}</UserLayout>;
}
