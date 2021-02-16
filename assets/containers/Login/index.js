import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Checkbox, Button, Layout, Col, Row } from "antd";
import DatePicker from "./../../components/DatePicker";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const handleSubmit = () => {};
  return (
    <>
      <Layout>
        <Row justify="center" align="middle" style={{ height: "100vh" }}>
          <DatePicker />
          <Col span={6}>
            <Form
              form={form}
              name="normal_login"
              className="user-form"
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete="off"
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your Email!" },
                ]}
              >
                <Input size="large" type="text" placeholder="E-mail Address" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your Password!" },
                ]}
              >
                <Input size="large" type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Row justify="space-between">
                  <Col>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Keep me signed in</Checkbox>
                    </Form.Item>
                  </Col>
                  <Col>
                    <a className="user-form-forgot" href="/request-password">
                      Forgot your password?
                    </a>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                <Button
                  block
                  loading={loading}
                  type="primary"
                  htmlType="submit"
                  className="user-form-button"
                >
                  Log in
                </Button>
                <p style={{ marginTop: "1rem", textAlign: "center" }}>
                  Don't have an account?{` `}
                  <Link to="/register">Sign Up</Link>
                </p>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Layout>
    </>
  );
}
