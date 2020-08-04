import React from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import useCustomHooks from '../../ContextAPI/useCustomHooks';
import intl from 'react-intl-universal';
import {
          Menu,
        } from 'antd';
import {
        MailOutlined,
      } from '@ant-design/icons';

const { SubMenu } = Menu;

const url = {
  ptBR: 'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/menus',
  enUS: 'http://my-json-server.typicode.com/engmsilva/DesafioReactEncontact/menus'
}


export default function MenuPanel() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);
  const { data_menu, id_account, language } = state;
  const { getAPI } = useCustomHooks();

  const fetchData = React.useRef(get_data);
  function handleClick(e) {
    dispatch({ type: "setState", payload: {nested: "id_account", value: e.key} });
  }

  async function get_data() {
    await getAPI([url[intl.get('URL')]])
    .then(response => {
      const data = response.data;
      const id_initial = data[0].subMenus[0].id;
      const id_menu = data[0].id;
      dispatch({ type: "setState", payload: {nested: "data_menu", value: data} });
      dispatch({ type: "setState", payload: {nested: "id_account", value: id_initial} });
      dispatch({ type: "setState", payload: {nested: "id_menu", value: id_menu} });
    })}

  React.useEffect(() =>{
    fetchData.current();
  },[language])

  return (
    <>
   {data_menu &&
      <Menu
        onClick={handleClick}
        // style={{ width: 256 }}
        selectedKeys={[`${id_account}`]}
        defaultOpenKeys={[`sub${1}`]}
        mode="inline"
      >
        {
        data_menu.map(menu => (
          <SubMenu key={`sub${menu.id}`} icon={<MailOutlined />} title={menu.name}>
            {menu.subMenus && menu.subMenus.map(subMenu => (
              <Menu.Item key={`${subMenu.id}`}>{subMenu.name}</Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    }
    </>
  );
}
