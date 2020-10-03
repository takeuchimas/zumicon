/**
 * Express テスト実施
 */
import express from 'express';
import _ from 'lodash';
import User, { UserInfoType } from './user';
import Tag, { TagInfoType } from './tag';
import Chat, { ChatInfoType } from './chat';

const app: express.Express = express();

// ReactでWebサイトを導入するなら
app.use(express.static('./public'));

// body-parserに基づいた着信リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ユーザ情報
app.get('/api/v1/user', (req, res) => {
  console.log(req.query);
  let results: UserInfoType | {} = {};
  if (!_.isEmpty(req.query.user)) {
    if (req.query.user?.toString()) {
      const user = new User();
      const tmp = user.getUser(req.query.user?.toString());
      if (tmp) results = tmp;
    }
  }
  res.send(results);
});

// ユーザ情報 履歴 を更新
app.get('/api/v1/user/addHistory', (req, res) => {
  let results = { state: false };
  if (!_.isEmpty(req.query.user) && !_.isEmpty(req.query.tag)) {
    if (req.query.user?.toString() && req.query.tag?.toString()) {
      const user = new User();
      const tmp = user.addHistory(req.query.user?.toString(), req.query.tag?.toString());
      if (tmp) results = tmp;
    }
  }
  res.send(results);
});

// タグ更新
app.get('/api/v1/tag', (req, res) => {
  let results: TagInfoType | {} = {};
  if (!_.isEmpty(req.query.tag)) {
    if (req.query.tag?.toString()) {
      const tag = new Tag();
      const tmp = tag.getTag(req.query.tag?.toString());
      if (tmp) results = tmp;
    }
  }
  res.send(results);
});

// おすすめタグ
app.get('/api/v1/spTags', (req, res) => {
  let results: string[] = [];
  const tag = new Tag();
  const tmp = tag.getSpTag();
  if (tmp) results = tmp;
  res.send(results);
});

// 検索タグ
app.get('/api/v1/tag/search', (req, res) => {
  let results: string[] = [];
  if (!_.isEmpty(req.query.value)) {
    if (req.query.value?.toString()) {
      const tag = new Tag();
      const tmp = tag.getSearchTag(req.query.value?.toString());
      if (tmp) results = tmp;
    }
  }
  res.send(results);
});

// チャット取得機能
app.get('/api/v1/chat', (req, res) => {
  let results: ChatInfoType | {} = {};
  if (!_.isEmpty(req.query.chatKey)) {
    if (req.query.chatKey?.toString()) {
      const chat = new Chat();
      const tmp = chat.getChat(req.query.chatKey?.toString());
      if (tmp) results = tmp;
    }
  }
  res.send(results);
});


// 3000番ポートでAPIサーバ起動
app.listen(3000,
  () => { }
);