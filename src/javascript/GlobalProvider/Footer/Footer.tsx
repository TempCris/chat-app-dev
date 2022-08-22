// ---Dependencies
import { ReactElement } from 'react';
// ---Images
import AppLogo from 'Images/ahuevo-hahaha.jpg';
import { general } from 'AppConfig/globalData';
/**
 * Footer Component: Ejemplo de Footer para la aplicación
 * @returns {ReactElement} ReactElement
 */
export function Footer(): ReactElement {
  // -----------------------RENDER
  return (
    <footer className="Footer">
      <img src={AppLogo} alt={general.alt} />
    </footer>
  );
}
