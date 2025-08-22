"use client";

import { Spin } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useNavigation } from "./NavigationProvider";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useNavigation();
  

  return (
    <>
      <div className="relative">
        {children}
        {loading && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <Spin size="large" tip="Loading..." />
          </div>
        )}
      </div>
    </>
  );
}
