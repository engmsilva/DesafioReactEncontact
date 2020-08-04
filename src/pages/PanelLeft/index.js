import React from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import MenuPanel from './MenuPanel';
import HeaderPanel from './HeaderPanel';
import {
          Row,
          Col,
        } from 'antd';

export default function PanelLeft() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);

  return (
      <Row>
        <Col span={24}>
          <HeaderPanel />
        </Col>
        <Col span={24}>
          <MenuPanel />
        </Col>
      </Row>
  );
}
