/**
 * Express テスト実施
 */
import express from 'express';

const app: express.Express = express();

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ReactでWebサイトを導入するなら
app.use(express.static('./public'));

// body-parserに基づいた着信リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// APIの設定
app.get('/api/v1/user', (req, res) => {
  res.send(req.query);
});
app.post('/api/postTest', (req, res) => {
  res.send(req.body);
});

// 3000番ポートでAPIサーバ起動
app.listen(3000,
  () => {
    console.log('Example app listening on port 3000!');
  }
);