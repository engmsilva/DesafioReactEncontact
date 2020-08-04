import React from 'react';
import { ContextAPI } from '../../ContextAPI/context';
import useCustomHooks from '../../ContextAPI/useCustomHooks';
import CardMail from '../../Componets/CardMail';
import intl from 'react-intl-universal';
import {
  Row,
  Col,
  Empty
} from 'antd';
import './styles.css';

export default function Main() {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = React.useContext(ContextAPI);
  const { id_account, data_mail, select_mail, enable_check } = state;
  const fetchData = React.useRef(get_data);
  const { getAPI } = useCustomHooks();
  const urlMain = 'http://my-json-server.typicode.com/EnkiGroup/DesafioReactEncontact/items'
  const initialGetMail = React.useRef(true)
  const enableEmpaty = data_mail.length === 0 && true;

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function addColor(data) {
    data.subMenuItems.forEach(owner => {
      Object.assign(owner, { ownerColor: getRandomColor() })
      Object.assign(owner, { userColor: [] })
      owner.users.forEach(user => {
        owner.userColor.push(getRandomColor())
      })
    })
    return data.subMenuItems
  }

  async function get_data(id) {
    await getAPI([`${urlMain}/${id}`])
      .then(response => {
        const data = addColor(response.data)
        dispatch({ type: "setState", payload: { nested: "data_mail", value: data } });
        dispatch({ type: "setState", payload: { nested: "enable_check", value: false } });
      });
  }

  React.useEffect(() => {
    if (initialGetMail.current) {
      initialGetMail.current = false
    } else {
      fetchData.current(id_account);
    }
  }, [id_account])

  function handleCkeckedMail(e) {
    const { status, id } = e;
    let update = [];

    if (status) {
      dispatch({ type: "setState", payload: { nested: "select_mail", value: select_mail.concat(id) } });
      update = select_mail.concat(id);
    } else {
      update = select_mail.filter(item => item !== id);
      dispatch({ type: "setState", payload: { nested: "select_mail", value: update } });
    }

    if (update.length > 0) {
      dispatch({ type: "setState", payload: { nested: "enable_check", value: true } });
    } else {
      dispatch({ type: "setState", payload: { nested: "enable_check", value: false } });
    }
  }

  return (
    <Row>
      <Col span={24}>
        <Row justify="space-between" align="middle" style={{ padding: '10px', height: '5vh' }}>
          {data_mail &&
            data_mail.map(mail => (
              <React.Fragment key={mail.id}>
                <CardMail
                  {...mail}
                  intl={intl}
                  allCheck={enable_check}
                  onChange={handleCkeckedMail}
                />
              </React.Fragment>
            ))
          }
          {enableEmpaty &&
            <Row className="empaty_box_mail">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={intl.get('EMPATYBOX')} />
            </Row>
          }
        </Row>
      </Col>
    </Row>
  );
}
