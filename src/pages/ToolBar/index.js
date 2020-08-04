import React, { memo } from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import intl from 'react-intl-universal';
import {
        Button,
        Input,
        Space,
        Checkbox,
        Row,
        Col,
        Divider
      } from 'antd';

import ChangeLanguange from '../../Componets/ChangeLanguage';
import dark from '../../styles/dark';
import light from '../../styles/light';
import './styles.css'
import {
  FilterFilled
  } from '@ant-design/icons';

const { Search } = Input;

const styles = props => ({
  '--menu-bg': props.theme["@menu-bg"],
  '--border-color-base': props.theme['@border-color-base'],
  '--cascader-item-selected-bg': props.theme['@cascader-item-selected-bg'],
  '--primary-color': props.theme["@primary-color"],
  '--secondary-color': props.theme["@secondary-color"],
  '--logo-color': props.theme["@logo-color"],
  '--logo-bg': props.theme["@logo-bg"],
})

const Toolbar = () => {
  const [state, dispatch] = React.useContext(ContextAPI);
  const { data_mail, select_mail } = state;

  function changeAttributeCSS(theme) {
    const selectTheme = styles({theme});
    const root = document.documentElement;
    Object.entries(selectTheme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    }

  const onLight = async () => {
    await window.less.modifyVars(light);
    changeAttributeCSS(light)
  };

  const onDark = async () => {
    await window.less.modifyVars(dark);
    changeAttributeCSS(dark)
  };

  function handleRecord() {
    let remove = data_mail;

    select_mail.forEach(element => {
      remove = remove.filter(item => item.id !== element);
    });

    dispatch({ type: "setState", payload: {nested: "select_mail", value: []} });
    dispatch({ type: "setState", payload: {nested: "data_mail", value: remove} });
    dispatch({ type: "setState", payload: {nested: "enable_check", value: false } });
  }

  return (
    <>
    <Row className="header_toolbar">
    <Col span={24}>
    <Row className="options_toolbar">
    <Search
          placeholder={intl.get('SEARCH')}
          onSearch={value => console.log(value)}
          style={{ width: '40vw', marginTop: '0px' }}
        />
        <Space>
          <ChangeLanguange />
          <Button key="3" onClick={onLight}>
          {intl.get('button.LIGHT')}
          </Button>
          <Button key="2" onClick={onDark}>
          {intl.get('button.DARK')}
          </Button>
        </Space>

    </Row>
    </Col>
    <Col span={24}>
      <Row className="divider_content_toolbar">
        <Divider className="divider_toolbar" />
      </Row>
    </Col>
    <Col span={24}>
      <Row className="controlpanel_toolbar">
        <Space>
          <Checkbox />
          <Button>{intl.get('button.ASSING')}</Button>
          <Button onClick={handleRecord}>{intl.get('button.RECORD')}</Button>
          <Button>{intl.get('button.SCHEDULE')}</Button>
        </Space>
        <FilterFilled />
      </Row>
    </Col>
    </Row>
    </>
  );
};

export default memo(Toolbar);
