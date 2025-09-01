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

const UserLayout: React.FC<AdminLayoutProps> = ({ children }) => {
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
    
    "1-1": "/use-profile",
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

  const item = [
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
              onClick={() => handleNavigate("/user-profile", "1-1")}
              className="cursor-pointer"
            >
             profile
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
            onClick={() => router.push("/dashboard")}
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
          items={item}
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
  )
}

export default UserLayout
