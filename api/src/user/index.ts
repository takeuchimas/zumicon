/**
 * ユーザ情報返却
 */
import { readFileSync, readSync } from 'fs';
import _ from 'lodash';

export type UserInfoType = {
  user: string,
  user_info: "",
  tag_history: string[],
  bot: false
}

type UserDB = UserInfoType[];

export default class {
  private file = './data/user.json';
  constructor() {

  }
  getUser = (userId: string) => {
    const userList = JSON.parse(readFileSync(this.file, 'utf-8')) as UserDB;
    const results = _.find(userList, (user: UserInfoType) => {
      return user.user === userId;
    });
    console.log(results);
    return results;
  }
}