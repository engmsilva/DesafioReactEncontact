import React from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import intl from 'react-intl-universal';
import { Select } from 'antd';

const { Option} = Select;

export default function ChangeLanguage() {
  const [state, dispatch] = React.useContext(ContextAPI);
  const { language } = state;

  function onChangeLanguange(value) {
    dispatch({ type: "setState", payload: {nested: "language", value: value} });
  }

return (
    <>
    <Select value={language} style={{ width: 120 }} onChange={onChangeLanguange}>
      <Option value="pt-BR"><span className="select_text_toolbar">{intl.get('button.LANGUAGE.BR')}</span></Option>
      <Option value="en-US"><span className="select_text_toolbar">{intl.get('button.LANGUAGE.EN')}</span></Option>
    </Select>
    </>
  );
}