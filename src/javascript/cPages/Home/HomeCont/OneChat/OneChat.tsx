import { FullReduxState } from '@Redux/globalReducers';
// ---Dependencies
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
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

/**
 * OneChat Component: Do something
 * @returns {ReactElement}
 */
export function OneChat(): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const { chatInfoReducer } = useSelector((s: FullReduxState) => s);
  const user = {
    id: chatInfoReducer?.id,
    name: chatInfoReducer?.name,
    color: chatInfoReducer?.color,
  };
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
