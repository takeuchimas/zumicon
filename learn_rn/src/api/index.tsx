/**
 * API 呼び出し共通処理
 */
import axios from 'axios';

// テスト用
export type TestType = string;
export const TestURL = 'http://13.231.69.127:3000/';
// NOTE: 何か追加するときはURLと返却値の型は一緒に定義しましょう

export default class {
  getJSONData = async (URL: string) => {
    try {
      const response = await axios.get(URL);
      // TODO: 共通のチェック処理を実装する
      console.log(response);
      return JSON.parse(response.data);
    } catch (e) {
      console.log(e);
      return {};
    }
  }
  getStringData = async (URL: string) => {
    try {
      const response = await axios.get(URL);
      // TODO: 共通のチェック処理を実装する
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
      return '';
    }
  }
}