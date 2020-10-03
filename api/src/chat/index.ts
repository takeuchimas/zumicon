/**
 * ユーザ情報返却
 */
import { readFileSync, writeFileSync } from 'fs';
import _ from 'lodash';

export type ChatInfoType = {
  chat_key: string,
  create_user: string,
  settings: {
    gobi: boolean,
    gobi_string: string
  },
  data: {
    title: string,
    chat_history: [
      {
        number: number,
        user: string,
        data: string
      }
    ]
  }
}

type ChatDB = ChatInfoType[];

export default class {
  private file = './data/chat.json';
  constructor() { }
  getChat = (chatKey: string) => {
    const chatList = JSON.parse(readFileSync(this.file, 'utf-8')) as ChatDB;
    const results = _.find(chatList, (chat: ChatInfoType) => {
      return chat.chat_key === chatKey;
    });
    return results;
  }
  addChat = (chatKey: string, user: string, value: string) => {
    const chatList = JSON.parse(readFileSync(this.file, 'utf-8')) as ChatDB;
    _.each(chatList, (chat) => {
      if (chat.chat_key === chatKey) {
        const data = {
          number: chat.data.chat_history.length + 1,
          user: user,
          data: value
        };
        chat.data.chat_history.push(data);
      }
    });
    writeFileSync(this.file, JSON.stringify(chatList));
    return { state: true };
  }
}