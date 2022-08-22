// ---Dependencys
import { combineReducers } from 'redux';
// ---Types
import { ReducerState as AppInfoState } from '@Redux/appInfo/customTypes';
import { ReducerState as ChatInfoState } from '@Redux/chatInfo/customTypes';
// ---Reducers
import { appInfoReducer } from '@Redux/appInfo/reducer';
import { chatInfoReducer } from '@Redux/chatInfo/reducer';
// https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react

/**
 * Interfaz con el tipado completo del estado global de redux
 */
export interface FullReduxState {
  appInfoReducer: AppInfoState;
  chatInfoReducer: ChatInfoState;
}

/**
 * Merge de todos los reducers
 */
export const rootReducer = combineReducers({
  appInfoReducer,
  chatInfoReducer,
});
