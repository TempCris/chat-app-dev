// ---Dependencies
import { ReactElement } from 'react';
// ---UI Dependencies
import { Col, Row } from 'antd';
// ---AppConfig
import { users } from 'AppConfig/globalData';
// ---Utils
import { generate } from 'Utils/functions/valueGenerators';
// ---Components
import { UserButton } from './UserButton/UserButton';

/**
 * UserSelector Component: Componente para seleccionar un usuario
 * @returns {ReactElement}
 */
export function UserSelector(): ReactElement {
  // -----------------------RENDER
  return (
    <div className="UserSelector">
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <h1>Selección de usuario</h1>
        </Col>
        {users.map((user) => (
          <UserButton key={generate.uniqueString()} user={user} />
        ))}
      </Row>
    </div>
  );
}
