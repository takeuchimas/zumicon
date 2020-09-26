import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const userActions = {
  updateId: actionCreator<string>('ACTIONS_UPDATE_USER_ID'),
  updateUserName: actionCreator<string>('ACTIONS_UPDATE_USER_USER_NAME'),
  updateAge: actionCreator<number>('ACTIONS_UPDATE_USER_AGE'),
  updateState: actionCreator<string>('ACTIONS_UPDATE_USER_STATE'),
}