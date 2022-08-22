// ---Dependencies
import { SendOutlined } from '@ant-design/icons';
import { FullReduxState } from '@Redux/globalReducers';
import { Button, Col, Input, Row } from 'antd';
import { ChangeEvent, ReactElement, useState } from 'react';
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
  const { name } = useSelector((s: FullReduxState) => s.chatInfoReducer);
  const isLogedIn = !name;
  // -----------------------MAIN METHODS
  /** Text Onchange event */
  function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(event.target.value);
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className="MessageWritter">
      <Row gutter={[10, 10]}>
        <Col offset={1} span={18}>
          <Input.TextArea
            value={message}
            style={{ width: '100%', height: '100%' }}
            disabled={isLogedIn}
            onChange={onChange}
            placeholder={isLogedIn ? 'Inicia sessión para mandar mensajes' : 'Mensaje...'}
          />
        </Col>
        <Col span={4}>
          <Button disabled={isLogedIn} size="large">
            <SendOutlined />
            Enviar
          </Button>
        </Col>
      </Row>
    </div>
  );
}
