/**
 * API 呼び出し共通処理
 */
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import RNFS from 'react-native-fs';

// ユーザ情報
export type UserInfoType = {
  user: string,
  user_info: "",
  tag_history: string[],
  bot: false
}
export const UserGetURL = 'http://13.231.69.127:3000/api/v1/user';
export const TagGetURL = 'http://13.231.69.127:3000/api/v1/tag';
export const SpTagGetURL = 'http://13.231.69.127:3000/api/v1/spTags';
export const AddTagHistoryURL = 'http://13.231.69.127:3000/api/v1/user/addHistory';
// NOTE: 何か追加するときはURLと返却値の型は一緒に定義しましょう

export default class {
  getUserData = async (userId: string) => {
    try {
      console.log(userId);
      const response = await axios.get(`${UserGetURL}?user=${userId}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return '';
    }
  }
  getTagData = async (tag: string) => {
    try {
      const response = await axios.get(`${TagGetURL}?tag=${tag}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return '';
    }
  }
  addHistoryData = async (user: string, tag: string) => {
    try {
      const response = await axios.get(`${AddTagHistoryURL}?user=${user}&tag=${tag}`);
      console.log(response.data);
      return response.data;
    } catch (e) {
      console.log(e);
      return '';
    }
  }
  getTagSp = async () => {
    try {
      const response = await axios.get(`${SpTagGetURL}`);
      return response.data;
    } catch (e) {
      return '';
    }
  }
  /////////////////
  fetchImage = async (fileData: RequestInfo) => {
    // const res: Response = await fetch(fileData);
    // const b = await res.blob();
    // console.log();
    // API 呼び出し
  }
  postImage = async (fileUrl: string, osType: string) => {
    // let b64data = await RNFS.readFile(fileUrl, 'base64');
    // await RNFS.readFileAssets(fileUrl, 'base64');
    // console.log(b64data);
  }
}