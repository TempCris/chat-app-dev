/* eslint-disable require-jsdoc */
// ---TYPES
import { Cases } from '@Redux/chatInfo/constants';
import { Actions, UpdateEmpty, UpdateMessages, UpdateUser } from '@Redux/chatInfo/customTypes';
import { Dispatch } from 'redux';

// -------------------------------------------ACTIONS------------------------------------
function updateSession(data: UpdateUser['payload']) {
  return (dispatch: Dispatch<Actions>): void => {
    const action: UpdateUser = { type: Cases.UPDATE_SESSION, payload: data };
    dispatch(action);
  };
}

function updateOneChat(data: UpdateMessages['payload']) {
  return (dispatch: Dispatch<Actions>): void => {
    const action: UpdateMessages = { type: Cases.UPDATE_ONE_CHAT, payload: data };
    dispatch(action);
  };
}

function updateMultiChat(data: UpdateMessages['payload']) {
  return (dispatch: Dispatch<Actions>): void => {
    const action: UpdateMessages = { type: Cases.UPDATE_MULTI_CHAT, payload: data };
    dispatch(action);
  };
}
function clearSession() {
  return (dispatch: Dispatch<Actions>) => {
    const action: UpdateEmpty = { type: Cases.CLEAR_SESSION, payload: {} };
    dispatch(action);
  };
}
function clearState() {
  return (dispatch: Dispatch<Actions>) => {
    const action: UpdateEmpty = { type: Cases.CLEAR_STATE, payload: {} };
    dispatch(action);
  };
}

export const chatInfoActions = {
  updateSession,
  updateOneChat,
  updateMultiChat,
  clearSession,
  clearState,
};
