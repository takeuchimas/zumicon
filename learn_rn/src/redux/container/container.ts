import { connect } from "react-redux";
import { Dispatch } from "redux";
import { userActions } from "../action/user";
import { AppState } from "../store";

export interface changeHandler {
  handleOnChangeValue(value: string): void
  handleOnSelectValue(value: string): void
  handleOnClick(): void
}

// 画面個別の定義 Reducerから使いたいデータのみを画面ごと定義でOK
const mapStateToProps = (appState: AppState) => {
  return {
    id: appState.state.id,
    user_name: appState.state.user_name,
    age: appState.state.age,
    state: appState.state.state,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleOnChangeId: (value: string) => { dispatch(userActions.updateId(value)) },
    handleOnChangeUserName: (value: string) => { dispatch(userActions.updateUserName(value)) },
    handleOnChangeAge: (value: number) => { dispatch(userActions.updateAge(value)) },
    handleOnChangeState: (value: string) => { dispatch(userActions.updateState(value)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)