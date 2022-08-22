// ---Dependencies
import { UserData } from '@Redux/chatInfo/customTypes';
import { Avatar, Col, Row } from 'antd';
import { randomColors } from 'AppConfig/globalData';
import { ReactElement, RefObject } from 'react';
import { generate } from 'Utils/functions/valueGenerators';
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
 * SelfMessage Component: Do something
 * @returns {ReactElement}
 */
export function SelfMessage({ text, user }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES

  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Row>
      <Col offset={6} span={18}>
        <div className="SelfMessage">
          <p>{text}</p>
          <Avatar style={{ backgroundColor: user.color, verticalAlign: 'middle' }} size="small">
            {user.name[0]}
          </Avatar>
        </div>
      </Col>
    </Row>
  );
}
