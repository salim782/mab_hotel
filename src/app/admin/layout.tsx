// /app/admin/layout.tsx
"use client";

import AdminLayout from "@/component/admin-layout/AdminLayout";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminLayout>{children}</AdminLayout>;
}
