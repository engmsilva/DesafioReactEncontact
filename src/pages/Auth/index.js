import React from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import intl from 'react-intl-universal';
import { navigate } from 'hookrouter';
import { postIsAuth } from './localStorage';
import {
          Row,
          Col,
          Layout,
          Form,
          Input,
          Button,
        } from 'antd';

import ChangeLanguage from '../../Componets/ChangeLanguage';
import logo from '../../assets/logo.svg';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './styles.css';

const { Content } = Layout;

export default function ConfirmEmail() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);
  const { language } = state;
  const [formSignup] = Form.useForm();
  const {getFieldError, setFields } = formSignup;
console.log(language);
  function onResetError(field) {
    if (getFieldError(field)) {
      setFields([
        {
          name: field,
          errors: [],
        },

      ]);
    }
  }

  function handleSubmit(auth) {
    if(auth.username === "admin@pantheon.com" && auth.password === "12345678") {
      postIsAuth(true);
      navigate('/home');
    } else {
      setFields([
        {
          name: 'password',
          errors: [intl.get('LOGIN.ERRORS.SIGNUP')],
        },
     ]);
    }
  }

return (
    <>
   <Layout>
      <Content className="content_login">
      <Row className="language-login">
          <ChangeLanguage />
      </Row>
      <Row>
        <Col
          xs={{span: 18, offset: 4}}
          sm={{span: 18, offset: 4}}
          md={{span: 12, offset: 8}}
          lg={{span: 8, offset: 8}}
        >
          <Row className="logo_login">
            <img className="logoSignup" src={logo} alt="logo"/>
          </Row>
          <Row className="card_login">
            <Col span={24}>
              <span className="title_card_login">
                {intl.get('LOGIN.TITLE')}
              </span>
            </Col>
            <Col span={24}>
            <Form
              form={formSignup}
              name="formSignup"
              onFinish={handleSubmit}
              layout="vertical"
            >
              <Form.Item
              name="username"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: intl.get('LOGIN.ERRORS.EMPATYMAIL')
                },
                {
                  type: 'email',
                  message: intl.get('LOGIN.ERRORS.VALIDMAIL'),
                }
              ]}
            >
            <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                size="large"
                placeholder={intl.get('LOGIN.USERNAME')}
                onChange={() => onResetError('username')}
                />
            </Form.Item>

            <Form.Item
              name='password'
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: intl.get('LOGIN.ERRORS.EMPATYPASSWORD'),
                },
                {
                  min: 8,
                  message: intl.get('LOGIN.ERRORS.VALIDPASSWORD')
                },
              ]}
              hasFeedback
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  onChange={() => onResetError('password')}
                  placeholder={intl.get('LOGIN.PASSWORD')}
                  />
              </Form.Item>
              <Form.Item >
                <Button size="large" type="primary" htmlType="submit" block>
                  {intl.get('LOGIN.ACCESS')}
                </Button>
              </Form.Item>
            </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      </Content>
    </Layout>
    </>
  );
}