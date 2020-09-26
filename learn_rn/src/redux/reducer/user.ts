/**
 * ユーザ情報
 */

import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { userActions } from '../action/user';
import { UserState } from '../types/user';

export const initialUserState: UserState = {
  // ここにstateの初期値を書く
  id: '',
  user_name: 'no name',
  age: 0,
  state: '0'
}
export const UserReducer = reducerWithInitialState(initialUserState)
  .case(userActions.updateId, (state, value) => {
    return { ...state, value }
  })
  .case(userActions.updateUserName, (state, value) => {
    return { ...state, value }
  })
  .case(userActions.updateAge, (state, value) => {
    return { ...state, value }
  })
  .case(userActions.updateAge, (state, value) => {
    return { ...state, value }
  });
