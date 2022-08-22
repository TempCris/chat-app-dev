// ---Dependencies
import { chatInfoActions } from '@Redux/chatInfo/actions';
import { UserData } from '@Redux/chatInfo/customTypes';
import { Avatar, Button, Col } from 'antd';
import { auth } from 'AppConfig/firebase/appData';
import { randomColors } from 'AppConfig/globalData';
// ---UI Dependencies
import { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { generate } from 'Utils/functions/valueGenerators';
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images

interface Props {
  user: UserData;
}
/**
 * UserButton Component: Simple styled button for navigate in the navbar
 * @returns {ReactElement}
 */
export function UserButton({ user }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const dispatch = useDispatch();
  // -----------------------MAIN METHODS
  /** Inicia sesion como usuario seleccionado */
  function logIn() {
    dispatch(chatInfoActions.updateSession(user));
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Col xs={24} sm={12} md={6} lg={6} xl={4} xxl={3}>
      <Button onClick={logIn} size="large" title={`Logeate como ${user.name}`}>
        <Avatar style={{ backgroundColor: user.color, verticalAlign: 'middle' }} size="small">
          {user.name[0]}
        </Avatar>
        <br />
        {user.name}
      </Button>
    </Col>
  );
}
