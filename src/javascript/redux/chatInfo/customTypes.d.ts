// ---TYPES
import { Cases } from '@Redux/chatInfo/constants';
import { CSSProperties } from 'react';

// ---------------DATA STRUCTURE ---------------
export interface MessageData {
  id: number;
  name: string;
  createdAt?: Date;
  color: CSSProperties['color'];
  text: string;
}
export interface UserData {
  id: number;
  name: string;
  color: CSSProperties['color'];
}

// ---------------CASES ACTIONS-----------------
export interface UpdateUser {
  type: Cases.UPDATE_SESSION;
  payload: UserData;
}

export interface UpdateMessages {
  type: Cases.UPDATE_ONE_CHAT | Cases.UPDATE_MULTI_CHAT;
  payload: MessageData[];
}

export interface UpdateEmpty {
  type: Cases.CLEAR_STATE | Cases.CLEAR_SESSION;
  payload: {};
}
// ----------------- REDUCER -----------------
export type Actions = UpdateUser | UpdateMessages | UpdateEmpty;

export interface ReducerState {
  id?: number;
  name?: string;
  oneChat: MessageData[];
  multiChat: MessageData[];
  color: CSSProperties['color'];
}
