import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { UserReducer } from './reducer/user';
import { UserState } from './types/user';
import thunk from 'redux-thunk' // 非同期用
import logger from 'redux-logger' // ログ出力

export type AppState = {
  state: UserState
}

const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers<AppState>({
    state: UserReducer
  }),
  storeEnhancers(applyMiddleware(thunk, logger))
)

export default store