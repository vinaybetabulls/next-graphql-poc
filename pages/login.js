import Link from "next/link";
import {useRouter} from "next/router";
import React, { useState } from "react";
import { Form, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Field } from "../components/CustomField";

import styles from "../styles/Login.module.css";
import Spinner from "../components/Spin";

const Login = () => {
  const [isSpin, setSpin] = useState(false);
  const router = useRouter();
  const onFinish = (values) => {
    setSpin(true);
    console.log("Received values of form: ", values);
    setTimeout(() => {
      setSpin(false);
      // router.push("/"); // TODO: after successfull login navigate to products page..
    }, 3000);
  };

  return (
    <>
      {isSpin && <Spinner message="Login" description="Please while loging.."></Spinner>}
      <Form
        name="normal_login"
        className={styles.loginform}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        style={{ padding: "34px" }}
      >
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Field
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Field
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="loginFormForgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="loginFormButton">
            Log in
          </Button>
          Or{" "}
          <Link href="/register">
            <a>Register now!</a>
          </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
