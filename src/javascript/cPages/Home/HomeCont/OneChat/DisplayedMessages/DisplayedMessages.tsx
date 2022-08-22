// ---Dependencies
import { Button } from 'antd';
import { users } from 'AppConfig/globalData';
import { ReactElement, useEffect, useRef } from 'react';
import { OthersMessage } from './OthersMessage/OthersMessage';
import { SelfMessage } from './SelfMessage/SelfMessage';
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
 * XXXXXX Component: Do something
 * @returns {ReactElement}
 */
export function DisplayedMessages(props: Props): ReactElement {
  // -----------------------CONSTS, HOOKS, STATES
  const messagesRef = useRef<HTMLDivElement>(null);
  useEffect(scrollToBottom, []);
  // -----------------------MAIN METHODS
  /** Scrollea al ultimo mensaje del chat */
  function scrollToBottom() {
    if (messagesRef.current) {
      messagesRef.current.scrollBy({ left: 0, top: messagesRef.current.scrollHeight });
    }
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div ref={messagesRef} className="DisplayedMessages">
      <SelfMessage text="Holo" user={users[0]} />
      <SelfMessage text="Holo" user={users[0]} />
      <OthersMessage text="Holo holo" user={users[2]} />
      <OthersMessage text="Como andas king?" user={users[2]} />
      <SelfMessage text="Chido" user={users[0]} />
      <SelfMessage text="Aqui con el REDUX" user={users[0]} />
      <SelfMessage text="xDDDDDDDD" user={users[0]} />
    </div>
  );
}
