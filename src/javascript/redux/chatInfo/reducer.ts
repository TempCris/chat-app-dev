/* eslint-disable require-jsdoc */
// ---TYPES
import { Cases } from '@Redux/chatInfo/constants';
import { Actions, ReducerState } from '@Redux/chatInfo/customTypes';

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE: ReducerState = {
  id: undefined,
  name: undefined,
  color: '#68037c',
  oneChat: [],
  multiChat: [],
};

// ------------------------------------------REDUCER-----------------------------------
export function chatInfoReducer(state = INITIAL_STATE, action: Actions): ReducerState {
  const { type, payload } = action;
  switch (type) {
    case Cases.UPDATE_SESSION:
      return { ...state, ...payload };
    case Cases.CLEAR_SESSION:
      return {
        ...state,
        id: undefined,
        name: undefined,
      };
    case Cases.UPDATE_ONE_CHAT:
      return {
        ...state,
        oneChat: payload,
      };
    case Cases.UPDATE_MULTI_CHAT:
      return {
        ...state,
        multiChat: payload,
      };
    case Cases.CLEAR_STATE:
      return INITIAL_STATE;

    default:
      return state;
  }
}
