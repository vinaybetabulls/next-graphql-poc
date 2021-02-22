import React, { useState, useEffect } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderComponent = () => {
  const [itemIndex, setItemIndex] = useState();
  const router = useRouter();
  const { pathname } = router;
  useEffect(() => {
    if (pathname === "/") setItemIndex("1");
    if (pathname === "/about") setItemIndex("2");
    if (pathname === "/login") setItemIndex("3");
    if (pathname === "/register") setItemIndex("4");
  }, [pathname]);

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" selectedKeys={[itemIndex]}>
        <Menu.Item key="1">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/register">Register</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/profile">Profile</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
