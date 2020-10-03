/**
 * ユーザ情報返却
 */
import { readFileSync, writeFileSync } from 'fs';
import _ from 'lodash';

export type UserInfoType = {
  user: string,
  user_info: {
    state: string,
    create_tag: string[]
  },
  tag_history: string[],
  bot: false
}

type UserDB = UserInfoType[];

export default class {
  private file = './data/user.json';
  constructor() { }
  getUser = (userId: string) => {
    const userList = JSON.parse(readFileSync(this.file, 'utf-8')) as UserDB;
    const results = _.find(userList, (user: UserInfoType) => {
      return user.user === userId;
    });
    return results;
  }
  addHistory = (userId: string, tag: string) => {
    const userList = JSON.parse(readFileSync(this.file, 'utf-8')) as UserDB;
    _.each(userList, (user: UserInfoType) => {
      if (user.user === userId) {
        user.tag_history.push(tag);
      }
      user.tag_history = _.uniq(user.tag_history);
    });
    writeFileSync(this.file, JSON.stringify(userList));
    return { state: true };
  }
}