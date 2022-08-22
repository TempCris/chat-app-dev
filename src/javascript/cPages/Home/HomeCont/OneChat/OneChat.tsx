// ---Dependencies
import { ReactElement } from 'react';
import { DisplayedMessages } from './DisplayedMessages/DisplayedMessages';
import { MessageWritter } from './MessageWritter/MessageWritter';
// ---UI Dependencies
// ---Custom Hooks
// ---Redux
// ---Components
// ---AppConfig
// ---Assets
// ---Utils
// ---Requests
// ---Images

interface Props {}
/**
 * OneChat Component: Do something
 * @returns {ReactElement}
 */
export function OneChat(props: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  // -----------------------MAIN METHODS
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div className="OneChat">
      <DisplayedMessages />
      <MessageWritter />
    </div>
  );
}
