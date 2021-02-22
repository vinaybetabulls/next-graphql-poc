import React from 'react';
import { Form, Button, Checkbox, Select, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Field } from '../components/CustomField';
import Link from "next/link";
import styles from "../styles/Register.module.css";

const Register = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    const { Option } = Select;

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );

    return (
        <Form
            name="normal_register"
            className={styles.registerform}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            style={{ padding: "34px" }}
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please input your phone number!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                ]}
                // {...tailFormItemLayout}
            >
                <Checkbox>
                    Remember me
        </Checkbox>
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Register
        </Button>
            </Form.Item>
        </Form>
    )
}

export default Register;
