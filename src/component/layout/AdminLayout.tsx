"use client";

import React, { useState } from "react";
import {
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { MdOutlineComputer } from "react-icons/md";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const siderWidth = collapsed ? 80 : 200;
   const router = useRouter();
  
    const handleClick = () => {
      localStorage.removeItem('token');
      router.push("/login");
    };
  

  return (
    <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={200}
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            height: 70,
            margin: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
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

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Reservation",
            },
             {
              key: "2",
              icon: <CalendarOutlined />,
              label: "ReservationCalender",
            },
            {
              key: "3",
              icon: <MdOutlineComputer />,
              label: "Front Office",
            },
            {
              key: "4",
              icon: <UploadOutlined />,
              label: "House Keeping",
            },
          ]}
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
            justifyContent:"space-between",
            paddingLeft: 40,
            paddingRight:40
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
          <Button type="primary" size="middle" onClick={handleClick}>
            Logout
          </Button>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflowX: "hidden",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
