// ---Dependencies
import { Avatar, Button, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
// ---UI Dependencies
import { ForwardRefExoticComponent, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';
import { chatInfoActions } from '@Redux/chatInfo/actions';
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images

interface Props {
  label: string;
  path: string;
  Icon: ForwardRefExoticComponent<any>;
}
/**
 * SessionButton Component: Simple styled button for navigate in the navbar
 * @returns {ReactElement}
 */
export function SessionButton(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const { chatInfoReducer } = useSelector((s: FullReduxState) => s);
  const dispatch = useDispatch();
  const user = {
    name: chatInfoReducer?.name,
    id: chatInfoReducer?.id,
    color: chatInfoReducer?.color,
  };
  // -----------------------MAIN METHODS
  /** Logout from redux */
  function logout() {
    dispatch(chatInfoActions.clearSession());
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  if (user.name) {
    return (
      <Col span={24}>
        <Avatar style={{ backgroundColor: user.color }} size="small">
          {user.name[0]}
        </Avatar>
        <Button onClick={logout} title="Cerrar sesion">
          logout
        </Button>
      </Col>
    );
  }
  return (
    <Col span={24}>
      <p>No hay sessión</p>
    </Col>
  );
}
