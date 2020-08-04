import React from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import { navigate } from 'hookrouter';
import intl from 'react-intl-universal';
import { logout } from '../Auth/localStorage';
import {
  Button,
  Menu,
  Avatar,
  Row,
  Col,
  Dropdown,
  Divider,
  Badge
} from 'antd';

import {
  UserOutlined,
  DownOutlined,
  MessageOutlined,
  EllipsisOutlined,
  StarOutlined,
  SettingOutlined,
  PoweroffOutlined,
  PushpinFilled,
} from '@ant-design/icons';

import './styles.css';

import photo from '../../assets/avatar.jpg'

const profile = ({intl, onLogout}) => (
  <Menu style={{minWidth: '130px'}} onClick={e => {}}>
    <Menu.Item key="1" icon={<UserOutlined />}>
    {intl.get('button.PROFILE')}
    </Menu.Item>
    <Menu.Item key="2" icon={<SettingOutlined />}>
    {intl.get('button.SETTING')}
    </Menu.Item>
    <Menu.Item key="3" icon={<PoweroffOutlined />} onClick={onLogout}>
    {intl.get('button.LOGOUT')}
    </Menu.Item>
  </Menu>
);

const new_message = ({intl}) => (
  <Menu style={{minWidth: '130px'}} onClick={e => console.log(e)}>
    <Menu.Item key="1" icon={<PushpinFilled />}>
      {intl.get('button.MESSAGE')} 1
    </Menu.Item>
    <Menu.Item key="2" icon={<PushpinFilled />}>
      {intl.get('button.MESSAGE')} 2
    </Menu.Item>
    <Menu.Item key="3" icon={<PushpinFilled />}>
      {intl.get('button.MESSAGE')} 3
    </Menu.Item>
  </Menu>
);

export default function HeaderPanel() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);
  const { collapsible_sider } = state;
  const widthAvatar = collapsible_sider ? '100%' : '50%';

  function onLogout(){
    logout();
    navigate('/');
  }

return (
    <>
      <Row >
        <Row className="header_panel">
          <Row style={{width: widthAvatar, paddingLeft: '20px'}}>
          <Dropdown overlay={profile({intl, onLogout})}>
            <Badge dot color={'green'}>
              <Avatar size="large" src={photo} />
            </Badge>
          </Dropdown>
          </Row>
          <Row justify="center" style={{width: widthAvatar}}>
          {collapsible_sider ?
              <Dropdown overlay={new_message({intl})}>
                <MessageOutlined className="message_icon_panel" />
              </Dropdown>
            :
            <Dropdown overlay={new_message({intl})}>
              <Button icon={<MessageOutlined />}>
              {intl.get('button.NEW')} <DownOutlined />
              </Button>
            </Dropdown>
            }
          </Row>
        </Row>
        {!collapsible_sider &&
        <Col span={24} >
          <Row className="divider_content_panel">
            <Divider className="divider_panel"/>
          </Row>
        </Col> }
        <Row className="favorite_panel">
          {collapsible_sider ?
          <StarOutlined className="favorite_icon_panel" onClick={() =>{}} />
          :
          <>
          <Button type="text" icon={<StarOutlined />}>
          {intl.get('button.FAVORITE')} <EllipsisOutlined />
          </Button>
          <Badge count={30} style={{backgroundColor: '#7c7c7c', color: '#fff'}} />
          </>}
        </Row>
      </Row>
    </>
  );
}