// ---Dependencies
import { UserData } from '@Redux/chatInfo/customTypes';
import { Avatar, Col, Row } from 'antd';
import { ReactElement } from 'react';
// ---UI Dependencies
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images

interface Props {
  text: string;
  user: UserData;
}
/**
 * OthersMessage Component: Do something
 * @returns {ReactElement}
 */
export function OthersMessage({ text, user }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Row>
      <Col span={18}>
        <div className="OthersMessage">
          <Avatar style={{ backgroundColor: user.color, verticalAlign: 'middle' }} size="small">
            {user.name[0]}
          </Avatar>
          <p>{text}</p>
        </div>
      </Col>
    </Row>
  );
}
