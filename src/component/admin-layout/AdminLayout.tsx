"use client";

import React, { useState, useEffect } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Grid, Layout, Menu, theme } from "antd";
import { MdOutlineComputer } from "react-icons/md";
import { useRouter, usePathname } from "next/navigation";
import { useNavigation } from "@/app/NavigationProvider";
import { API } from "@/lib/api";
const { useBreakpoint } = Grid;

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState<string[]>(["1"]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const siderWidth = collapsed ? 80 : 250;
  const router = useRouter();
  const pathname = usePathname();

  // Route mapping
  const routeMap: Record<string, string> = {
    "1-1": "/admin/new-reservation",
    "1-2": "/admin/res-booking",
    "1-3": "/admin/res-status",
    "1-4": "/admin/res-cancel",
    "1-5": "/admin/reservation-calender",
    "1-6": "/admin/advanced-deposit",
    "1-7": "/admin/return-paidup",
  };

  // Sync menu with current URL
  useEffect(() => {
    const foundKey = Object.keys(routeMap).find(
      (key) => routeMap[key] === pathname
    );
    if (foundKey) {
      setSelectedKeys([foundKey]);
      setOpenKeys([foundKey.split("-")[0]]); // parent menu open
    }
  }, [pathname]);

  const handleLogout = async () => {
    try {
      const res = await fetch(API.COOKIES_REMOVE, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Logout failed");

      await res.json();
      router.replace("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const { navigate } = useNavigation();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // Menu items
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Reservation",
      children: [
        { key: "1-1", icon: <MdOutlineComputer />, label: "New Reservation" },
        {
          key: "1-2",
          icon: <MdOutlineComputer />,
          label: "Reservation Booking Details",
        },
        {
          key: "1-3",
          icon: <MdOutlineComputer />,
          label: "Reservation Status View",
        },
        {
          key: "1-4",
          icon: <MdOutlineComputer />,
          label: "Cancel Reservation List",
        },
        {
          key: "1-5",
          icon: <MdOutlineComputer />,
          label: "Reservation Calendar",
        },
        { key: "1-6", icon: <MdOutlineComputer />, label: "Advanced Deposit" },
        { key: "1-7", icon: <MdOutlineComputer />, label: "Return/Paidup" },
      ],
    },
    { key: "2", icon: <UserOutlined />, label: "Front Office" },
    { key: "3", icon: <UserOutlined />, label: "House Keeping" },
  ];

  return (
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        <div className="text-center">
          <div
            style={{
              height: 70,
              margin: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/admin"); // Dashboard navigate
              setSelectedKeys([]); // Clear sidebar selection
              setOpenKeys([]); // Close open submenu
            }}
          >
            <img
              src="/images/mab-logo.png"
              alt="Logo"
              style={{
                height: collapsed ? 40 : "100%",
                width: collapsed ? 40 : "auto",
                objectFit: "contain",
                borderRadius: "100%",
                transition: "all 0.3s ease",
              }}
            />
          </div>

          {!collapsed && <h1 className="text-white text-lg">Dashboard</h1>}
        </div>

        <Menu
          theme="dark"
          mode="inline"
          openKeys={openKeys}
          onOpenChange={(keys) => setOpenKeys(keys)}
          selectedKeys={selectedKeys}
          onClick={({ key }) => {
            const path = routeMap[key];
            if (path) {
              setSelectedKeys([key]);
              navigate(path);
            }
          }}
          items={items}
        />
      </Sider>

      <Layout
        style={{
          marginLeft: siderWidth,
          transition: "margin-left 0.2s ease",
          width: `calc(100% - ${siderWidth}px)`,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 0,
            paddingRight: 20,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: "16px", width: 64, height: 64 }}
          />
          <Button type="primary" size="middle" onClick={handleLogout}>
            Logout
          </Button>
        </Header>

        <Content
          style={{
            margin: isMobile ? 0 : "24px 16px",
            padding: isMobile ? 0 : 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowX: "hidden",
            backgroundColor: "#f5f5f4",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
