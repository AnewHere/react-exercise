import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import './index.scss';

class Login extends Component {
  //登陆提交数据
  onFinish = (value) => {
    //验证密码
    if (value.username === 'admin' && value.password === 'admin') {
      //保存用户信息
      localStorage.setItem('username', value.username);
      //跳转到后台
      this.props.history.replace('/product');
    } else {
      message.error('用户名和密码为admin');
    }
  }

  render () {
    return (
      <div className="login-wrap">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <h1>用户登陆</h1>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名：admin"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码:admin"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default withRouter(Login);
