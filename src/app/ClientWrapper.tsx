"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { Spin } from "antd";
import { useEffect } from "react";
import { useNavigation } from "./NavigationProvider";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ useEffect hamesha component ke andar hoga
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false,    // har scroll pe chale
    });

    AOS.refresh();
  }, []);

  const { loading } = useNavigation();

  return (
    <div className="relative">
      {children}
      {loading && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
}
