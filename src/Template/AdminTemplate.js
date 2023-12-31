import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { lauDuLieuLocal } from "../Utils/localStore";
const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  //Khi người dùng kp quản trị vào sẽ đá về trang bất kì
  useEffect(() => {
    //gọi dữ liệu từ local lên
    const user = lauDuLieuLocal("user");
    console.log(user, "ỦE");
    //một là không có dữ liệu
    //hai là mã loại khác hàng không phải là quản trị
    if (user) {
      console.log(user);
      if (user.maLoaiNguoiDung !== "QuanTri") {
        window.location.href = "https://www.google.com";
      }
    } else {
      window.location.href = "https://www.google.com";
    }
  }, []);

  return (
    <Layout className="min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        {/* Menu */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <i className="fa-solid fa-user"></i>,
              label: <NavLink to={"/admin/user"}>User</NavLink>,
            },
            {
              key: "2",
              icon: <i className="fa-solid fa-video"></i>,
              label: <NavLink to={"/admin/movie"}>Movie</NavLink>,
            },
            {
              key: "3",
              icon: <i className="fa-solid fa-business-time"></i>,
              label: <NavLink to={"/admin/show-time"}>Show time</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
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
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminTemplate;
