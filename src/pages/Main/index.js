import React from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import { Layout } from 'antd';
import Toolbar from '../ToolBar';
import PanelLeft from '../PanelLeft';
import Mail from '../Mail';
import isAuthenticated from '../Auth/isAuthenticated';
import './styles.css';

const { Content, Sider } = Layout;

export default function Main() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);

  function onCollapse(params) {
    dispatch({ type: "setState", payload: {nested: "collapsible_sider", value: params } });
  }
 
  return isAuthenticated() && (
    <Layout className="content_layout">
      <Sider  className="sider" collapsible onCollapse={onCollapse}>
        <PanelLeft />
      </Sider>
      <Content>
        <Toolbar title="test app" />
        <div className="content">
          <Mail />
        </div>
      </Content>
    </Layout>
  );
}
