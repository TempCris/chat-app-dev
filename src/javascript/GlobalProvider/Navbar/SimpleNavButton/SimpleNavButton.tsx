// ---Dependencies
import { Button, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
// ---UI Dependencies
import { ForwardRefExoticComponent, ReactElement } from 'react';
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
 * SimpleNavButton Component: Simple styled button for navigate in the navbar
 * @returns {ReactElement}
 */
export function SimpleNavButton({ label, path, Icon }: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const navigate = useNavigate();
  // -----------------------MAIN METHODS
  /** Navigate to a specific path in the app */
  function linkTo() {
    navigate(path);
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
      <Button onClick={linkTo} title={`Navega a la pagina ${label}`}>
        <Icon />
        {label}
      </Button>
    </Col>
  );
}
