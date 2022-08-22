// ---Dependencies
import { FullReduxState } from '@Redux/globalReducers';
import { useCollection } from 'react-firebase-hooks/firestore';
import { query, orderBy } from 'firebase/firestore';
import { ReactElement, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OthersMessage } from './OthersMessage/OthersMessage';
import { SelfMessage } from './SelfMessage/SelfMessage';
import { messages } from 'AppConfig/firebase/appData';
import { chatInfoActions } from '@Redux/chatInfo/actions';
import { MessageData } from '@Redux/chatInfo/customTypes';
import { generate } from 'Utils/functions/valueGenerators';
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
  const [value] = useCollection(query(messages, orderBy('createdAt', 'asc')), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });
  const dispatch = useDispatch();
  const {
    name: loggedUserName,
    oneChat,
    id: loggedUserId,
  } = useSelector((s: FullReduxState) => s.chatInfoReducer);
  const isLogendIn = !loggedUserName;
  const messagesRef = useRef<HTMLDivElement>(null);
  useEffect(scrollToBottom, []);
  useEffect(scrollToBottom, [isLogendIn, oneChat?.length]);
  useEffect(cleanData, [value]);
  // -----------------------MAIN METHODS
  /** Scrollea al ultimo mensaje del chat */
  function scrollToBottom() {
    if (messagesRef.current) {
      messagesRef.current.scrollBy({ left: 0, top: messagesRef.current.scrollHeight });
    }
  }
  /** Limpia los datos de los mensajes desde la db */
  function cleanData() {
    const messagesData = value?.docs;
    if (messagesData && messagesData.length > 0 && messagesData[0]?.data) {
      const cleanedData = messagesData.map((singleMessage) => singleMessage.data());
      dispatch(chatInfoActions.updateOneChat(cleanedData as MessageData[]));
    }
  }
  // -----------------------AUX METHODS
  // -----------------------RENDER
  return (
    <div ref={messagesRef} className="DisplayedMessages">
      {isLogendIn
        ? 'Inicia sesion para chatear'
        : oneChat.map(({ id, name, color, text }) =>
            id === loggedUserId ? (
              <SelfMessage
                key={generate.uniqueString()}
                text={text}
                user={{
                  name,
                  color,
                  id,
                }}
              />
            ) : (
              <OthersMessage
                key={generate.uniqueString()}
                text={text}
                user={{
                  name,
                  color,
                  id,
                }}
              />
            ),
          )}
    </div>
  );
}
