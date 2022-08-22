// ---Dependencies
import { SendOutlined } from '@ant-design/icons';
import { MessageData } from '@Redux/chatInfo/customTypes';
import { FullReduxState } from '@Redux/globalReducers';
import { Button, Col, Input, Row } from 'antd';
import { addMessage } from 'AppConfig/firebase/appData';
import { ChangeEvent, KeyboardEvent, ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
// ---UI Dependencies
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images

/**
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function MessageWritter(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const [message, setMessage] = useState('');
  const { name, id, color } = useSelector((s: FullReduxState) => s.chatInfoReducer);
  const isLogedIn = !name;
  // -----------------------MAIN METHODS
  /** Text Onchange event */
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }
  /** Envía mensaje a firebase */
  function onSendMessage() {
    const messageData = {
      name,
      id,
      color,
      text: message,
    };
    addMessage(messageData as MessageData).then(() => setMessage(''));
  }
  /** Envía mensaje a firebase */
  function onKeyPress(event: KeyboardEvent<unknown>) {
    if (event.key === 'Enter') {
      onSendMessage();
    }
  }
  // -----------------------RENDER
  return (
    <div className="MessageWritter">
      <Row gutter={[10, 10]}>
        <Col offset={1} span={18}>
          <Input
            value={message}
            style={{ width: '100%', height: '100%' }}
            disabled={isLogedIn}
            onChange={onChange}
            onKeyDown={onKeyPress}
            placeholder={isLogedIn ? 'Inicia sessión para mandar mensajes' : 'Mensaje...'}
          />
        </Col>
        <Col span={4}>
          <Button disabled={isLogedIn} onClick={onSendMessage} size="large">
            <SendOutlined />
            Enviar
          </Button>
        </Col>
      </Row>
    </div>
  );
}
