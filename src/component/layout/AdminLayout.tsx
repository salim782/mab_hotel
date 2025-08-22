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
    "1-1": "/new-reservation",
    "1-2": "/res-booking",
    "1-3": "/res-status",
    "1-4": "/res-cancel",
    "1-5": "/reservation-calender",
    "1-6": "/advanced-deposit",
    "1-7": "/return-paidup",
  };

  // Set selected menu based on current path
  useEffect(() => {
    const foundKey = Object.keys(routeMap).find(
      (key) => routeMap[key] === pathname
    );
    if (foundKey) {
      setSelectedKeys([foundKey]);
    }
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  const handleNavigate = (path: string, key: string) => {
    setSelectedKeys([key]);
    navigate(path);
  };

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Reservation",
      children: [
        {
          key: "1-1",
          icon: <MdOutlineComputer />,
          label: (
            <span
              onClick={() => handleNavigate("/new-reservation", "1-1")}
              className="cursor-pointer"
            >
              New Reservation
            </span>
          ),
        },
        {
          key: "1-2",
          icon: <MdOutlineComputer />,
          label: (
            <span
              onClick={() => handleNavigate("/res-booking", "1-2")}
              className="cursor-pointer"
            >
              Reservation Booking Details
            </span>
          ),
        },
        {
          key: "1-3",
          icon: <MdOutlineComputer />,
          label: (
            <span
              onClick={() => handleNavigate("/res-status", "1-3")}
              className="cursor-pointer"
            >
              Reservation Status View
            </span>
          ),
        },
        {
          key: "1-4",
          icon: <MdOutlineComputer />,
          label: (
            <span
              onClick={() => handleNavigate("/res-cancel", "1-4")}
              className="cursor-pointer"
            >
              Cancel Reservation List
            </span>
          ),
        },
        {
          key: "1-5",
          icon: <MdOutlineComputer />,
          label: (
            <span
              onClick={() => handleNavigate("/reservation-calender", "1-5")}
              className="cursor-pointer"
            >
              Reservation Calendar
            </span>
          ),
        },
        {
          key: "1-6",
          icon: <MdOutlineComputer />,
          label: (
            <span
              onClick={() => handleNavigate("/advanced-deposit", "1-6")}
              className="cursor-pointer"
            >
              Advanced Deposit
            </span>
          ),
        },
        {
          key: "1-7",
          icon: <MdOutlineComputer />,
          label: (
            <span
              onClick={() => handleNavigate("/return-paidup", "1-7")}
              className="cursor-pointer"
            >
              Return/Paidup
            </span>
          ),
        },
      ],
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Front Office",
    },
    {
      key: "3",
      icon: <UserOutlined />,
      label: "House Keeping",
    },
  ];

  const screens = useBreakpoint();
  const { navigate, setLoading } = useNavigation();

  const isMobile = !screens.md;

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
            }}
            onClick={() => router.push("/admin")}
          >
            <img
              src="/logo.png"
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
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button type="primary" size="middle" onClick={handleLogout}>
            Logout
          </Button>
        </Header>

        <Content
          style={{
            // margin: "24px 16px",
            // padding: 24,
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
