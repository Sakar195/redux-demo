import React, { useState } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider } = Layout;

const Layout1: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      navigate("/");
    }
    if (e.key === "2") {
      navigate("/table"); // Adjust the route path as needed
    }
    if (e.key === "3") {
      navigate("/user"); // Adjust the route path as needed
    }
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh", width: "100vw" }}>
        {" "}
        {/* Full-width and full-height layout */}
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={handleMenuClick}
            items={[
              {
                key: "1",
                icon: <HomeOutlined />,
                label: "Home",
              },
              {
                key: "2",
                icon: <TableOutlined />,
                label: "Table",
              },
              {
                key: "3",
                icon: <UserOutlined />,
                label: "User",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
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
          </Header>
          <div
            style={{
              margin: "16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default Layout1;
