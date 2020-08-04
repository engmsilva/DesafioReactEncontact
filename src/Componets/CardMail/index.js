import React from 'react';
import shortid from "shortid";
import {
        Row,
        Col,
        Space,
        Checkbox,
        Avatar
      } from 'antd';
import {
      DeleteFilled,
      MailFilled,
      FlagFilled,
      PushpinFilled,
      WhatsAppOutlined
    } from '@ant-design/icons';

// import styles from './CardMail.module.less';
import './styles.css'

export default function CardMail(props) {
  const [ shwCheck, setShwCheck] = React.useState(false);
  const [ checked, setCheked] = React.useState(false);
  const {
    id,
    name,
    subject,
    owner,
    users,
    ownerColor,
    userColor,
    onChange,
    allCheck,
    intl
  } = props;

  function handleOver() {
    if(!allCheck){
      setShwCheck(true);
    }
  }

  function handleOut() {
    if(!checked && !allCheck) {
      setShwCheck(false)
    }
  }

  function handleCheckbox(e) {
    setCheked(e.target.checked)
    onChange({status: e.target.checked , id: id})
  }

  React.useEffect(() =>{
    setShwCheck(allCheck);
    if(!allCheck){
      setCheked(false);
    }
  }, [allCheck])

return (
    <>
    <Row
      id='content_cardmail'
      className={
        `content_cardmail
        ${!checked && 'hover_cardmail_bg'}
        ${checked && 'content_cardmail_bg'}`
      }
      onMouseOver={handleOver}
      onMouseOut={handleOut}
    >
      <Col span={2}>
        <Row className="owner_cardmail">
          {shwCheck ?
            <Checkbox onChange={handleCheckbox}/> :
          <Avatar
            style={{background: ownerColor}}
            size="large"
            >
            {owner}
          </Avatar>
          }
        </Row>
      </Col>
      <Col span={14}>
        <Row className="box_cardmail">
          <Space direction="vertical">
            <span className={`name_cardmail  ${checked && 'name_cardmail_select'}`}>{name}</span>
            <span className="subject_cardmail">{subject}</span>
            <span className={`${checked && 'whatsapp_cardmail_select'}`}><WhatsAppOutlined /> {intl.get('CARDMAIL.INBOX')}</span>
          </Space>
        </Row>
      </Col>
      <Col span={8}>
        <Row className={`info_cardmail  ${checked && 'info_cardmail_select'}`}>
        <Space direction="vertical" align="end" size={0}>
          <div style={{height:25}}>
        {(shwCheck && !allCheck) &&
        <Space>
          <DeleteFilled onClick={() => {}} />
          <MailFilled onClick={() => {}}/>
          <FlagFilled onClick={() => {}}/>
          <PushpinFilled onClick={() => {}}/>
        </Space>
        }
        </div>
          <span className="datetime_cardmail">{intl.get('CARDMAIL.DATE')}, 11:42</span>
          <span className="moment_cardmail">30 min</span>
        <Avatar.Group>
          {users.map((user, index) => (
            <Avatar
              key={shortid.generate()}
              style={{background: userColor[index] }}
               >
                {user}
              </Avatar>
          ))}
        </Avatar.Group>
        </Space>
        </Row>
    </Col>
</Row>
    </>
  );
}