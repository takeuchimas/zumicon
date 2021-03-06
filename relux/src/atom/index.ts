/**
 * atom を一元管理
 * 画面共有 
 */
import { atom } from 'recoil';

export type UserInfoType = {
  user: string,
  user_info: {
    state: string,
    create_tag: string[]
  },
  tag_history: string[],
  bot: false
}

export type TagInfoType = {
  tag_name: string,
  tag_info: {},
  small_tag: [
    {
      tag_name: string,
      tag_info: {
        images_url: string,
        chat_key: string
      }
    }
  ]
}

export const countState = atom({
  key: 'sample/count',
  default: 0
});

export const tanakaState = atom({
  key: 'tanakaState',
  default: '田中'
});

// ユーザ情報
export const userApiState = atom({
  key: 'api/user',
  default: {
    user: '',
    user_info: {
      state: '',
      create_tag: []
    },
    tag_history: [],
    bot: true
  }
});

// 親タグ一覧

// 親タグ情報
export const tagApiState = atom({
  key: 'api/tag',
  default: {
    tag_name: "",
    tag_info: {},
    small_tag: [
      {
        tag_name: "",
        tag_info: {
          images_url: "",
          chat_key: ""
        }
      }
    ]
  }
});

// ホームで何押したか
export const tagState = atom({
  key: 'tag/state',
  default: ''
});

// チャットデータ
export const chatState = atom({
  key: 'api/chat',
  default: {
    chat_key: "",
    create_user: "",
    settings: {
      gobi: true,
      gobi_string: ""
    },
    data: {
      title: "",
      chat_history: []
    }
  }
});

export const timeState = atom({
  key: 'sample/time',
  default: null
});
