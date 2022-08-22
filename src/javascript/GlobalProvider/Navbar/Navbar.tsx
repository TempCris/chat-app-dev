// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies
import { Row, Col } from 'antd';
import { SimpleNavButton } from './SimpleNavButton/SimpleNavButton';
// ---Config
import { general } from 'AppConfig/globalData';
// ---Images
import AppLogo from 'Images/ahuevo-hahaha.jpg';
// ---Components
import { UserSwitchOutlined, DeploymentUnitOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { FullReduxState } from '@Redux/globalReducers';
import { SessionButton } from './SessionButton/SessionButton';

/**
 * Navbar Component: Ejemplo de navbar para la aplicación
 * @returns {ReactElement} ReactElement
 */
export function Navbar(): ReactElement {
  const { isMovil } = useSelector((s: FullReduxState) => s.appInfoReducer);
  // -----------------------RENDER
  return (
    <nav className={`Navbar Navbar-${isMovil ? 'movil' : 'desktop'}`}>
      <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <img src={AppLogo} alt={general.alt} />
        </Col>
        <Col xs={24} sm={24} md={15} lg={15} xl={15} xxl={15}>
          <Row style={{ height: '100%' }} align="middle">
            <SimpleNavButton label="Uno a uno" path="/" Icon={UserSwitchOutlined} />
            <SimpleNavButton label="Grupo" path="/grupo" Icon={DeploymentUnitOutlined} />
          </Row>
        </Col>
        <Col xs={24} sm={24} md={3} lg={3} xl={3} xxl={3}>
          <Row style={{ height: '100%' }} align="middle">
            <SessionButton />
          </Row>
        </Col>
      </Row>
    </nav>
  );
}
