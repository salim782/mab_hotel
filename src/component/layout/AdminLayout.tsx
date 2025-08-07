"use client";

import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { MdOutlineComputer } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Item from "antd/es/list/Item";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

interface AdminLayoutProps {
  children: React.ReactNode;
}

const items = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Reservation",
    children: [
      {
        key: "1-1",
        icon: <MdOutlineComputer />,
        label: "New Reservation",
      },
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
        label: "Reservation Calender",
      },
      {
        key: "1-6",
        icon: <MdOutlineComputer />,
        label: "Advanced Deposit",
      },
      {
        key: "1-7",
        icon: <MdOutlineComputer />,
        label: "Return/Paidup",
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

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const siderWidth = collapsed ? 80 : 250;
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

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
          defaultSelectedKeys={["1"]}
          items={items}
        >
          {/* <SubMenu key="1" icon={<UserOutlined />} title="Reservation">
            <Menu.Item key="1-1" icon={<MdOutlineComputer />}>
              New Reservation
            </Menu.Item>
            <Menu.Item key="1-2" icon={<UploadOutlined />}>
              Reservation Booking Detail
            </Menu.Item>
              <Menu.Item key="1-3" icon={<MdOutlineComputer />}>
               Reservation Status View
            </Menu.Item>
            <Menu.Item key="1-4" icon={<UploadOutlined />}>
              Cancel Reservation List
            </Menu.Item>
             <Menu.Item key="1-5" icon={<MdOutlineComputer />}>
               Reservation Calender
            </Menu.Item>
            <Menu.Item key="1-6" icon={<UploadOutlined />}>
              Advanced Deposit
            </Menu.Item>
              <Menu.Item key="1-7" icon={<MdOutlineComputer />}>
               Return/paidup
            </Menu.Item>
            <Menu.Item key="1-8" icon={<UploadOutlined />}>
              Cancel Reservation List
            </Menu.Item>
          </SubMenu> */}
          {/* <Menu.Item key="2" icon={<MdOutlineComputer />}>
            Front Office
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            House Keeping
          </Menu.Item> */}

          {/* Setting Dropdown as SubMenu */}
          {/* <SubMenu key="4" icon={<IoSettingsOutline />} title="Settings"> */}
          {/* <div> */}
          {/* <Menu.Item
                key="4-1"
                // onClick={() => router.push("/forgatepassword")}
              >
                Change Password
              </Menu.Item> */}
          {/* <Menu.Item key="4-1" onClick={handleLogout}>
              Logout
            </Menu.Item>
          </SubMenu> */}
        </Menu>
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
            paddingLeft: 40,
            paddingRight: 40,
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
