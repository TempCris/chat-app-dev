// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import { UserSelector } from 'CComps/UserSelector/UserSelector';
import { OneChat } from './OneChat/OneChat';

/**
 * HomeCont Component: Contenedor principal donde se construye todo el contenido de la pagina
 * @returns {ReactElement} ReactElement
 */
export function HomeCont(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className="HomeCont">
      <UserSelector />
      <OneChat />
    </div>
  );
}
