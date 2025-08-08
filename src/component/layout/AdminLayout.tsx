"use client";

import React, { useState } from "react";
import {
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  PlusCircleOutlined,
  FileTextOutlined,
  EyeOutlined,
  CloseCircleOutlined,
  DollarCircleOutlined,
  RedoOutlined,
  StopOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { MdOutlineComputer } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter, usePathname } from "next/navigation";

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();
  const siderWidth = collapsed ? 80 : 250;
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "logout") {
      handleLogout();
    } else {
      router.push(key);
    }
  };

  const menuItems = [
    {
      key: "/reservation",
      icon: <UserOutlined />,
      label: "Reservation",
      children: [
        { key: "/new-reservation", icon: <PlusCircleOutlined />, label: "New Reservation" },
        { key: "/reservation/details", icon: <FileTextOutlined />, label: "Reservation Booking Details" },
        { key: "/reservation/status", icon: <EyeOutlined />, label: "Reservation Status View" },
        { key: "/reservation/cancel", icon: <CloseCircleOutlined />, label: " Cancel Reservation List" },
        { key: "/reservation-calendar", icon: <CalendarOutlined />, label: "ReservationCalendar" },
        { key: "/reservation/deposit", icon: <DollarCircleOutlined />, label: "Advanced Deposit" },
        { key: "/reservation/return", icon: <RedoOutlined />, label: "Return / Paidup" },
        { key: "/reservation/noshow", icon: <StopOutlined />, label: "No Show Room Report" },
        { key: "/reservation/accounts", icon: <BookOutlined />, label: "Booking Sheet Accounts" },
      ],
    },
    { key: "/front-office", icon: <MdOutlineComputer />, label: "Front Office" },
    { key: "/house-keeping", icon: <UploadOutlined />, label: "House Keeping" },
    {
      key: "settings",
      icon: <IoSettingsOutline />,
      label: "Settings",
      children: [
        { key: "/changepassword", label: "Change Password" },
        { key: "logout", label: "Logout" },
      ],
    },
  ];

  return (
    <Layout className="min-h-screen overflow-hidden">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={250}
        className="!bg-red-700"
        style={{ position: "fixed", height: "100%" }}
      >

        <div className="h-[70px] m-4 flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className={`transition-all duration-300 rounded-full object-contain ${collapsed ? "h-10 w-10" : "h-full w-auto"}`}
          />
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[pathname]}
          onClick={handleMenuClick}
          items={menuItems}
          inlineIndent={10}
          className="!text-sm !bg-red-700 [&_.ant-menu-item]:!py-2 [&_.ant-menu-submenu-title]:!py-2 [&_.ant-menu-item]:!text-white [&_.ant-menu-submenu-title]:!text-white"
        />
      </Sider>
      <Layout className=" transition-all duration-200"
        style={{
          marginLeft: siderWidth,
          transition: "margin-left 0.2s ease",
          width: ` calc(100% - ${siderWidth}px)`,

        }}
      >
        <Header
          className=" flex items-center justify-between px-10 "
          style={{
            background: colorBgContainer,
            position: "fixed",
            top: 0,
            left: siderWidth,
            width: `calc(100% - ${siderWidth}px)`,
            height: 70,
            zIndex: 1000,
            paddingInline: 20,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-lg w-16 h-16"
          />
          <Button type="primary" size="middle" onClick={handleLogout}>
            Logout
          </Button>
        </Header>
        <Content
          className="m-6 p-6 overflow-x-hidden"
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
