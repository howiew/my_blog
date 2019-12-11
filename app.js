// http server file

const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const bodyparser = require('koa-better-body');
const logger = require('koa-logger');
const session = require('koa-session');

// 进行数据库相关的初始化工作
require('./server/schema/ref.js');
//const historyApiFallback = require('koa-history-api-fallback');

//创建koa与路由实例
const app = new Koa();
const router = new Router();
const articleRouter = require('./server/router/article.js');

const session_signed_key = ["some secrect"];
const session_config = {
	key: 'koa:sess',
	maxAge: 86400000,
	autoCommit: true,
	overwrite:true,
	httpOnly: true,
	signed: true,
	rolling: true,
	renew: false
};
app.keys = session_signed_key;
app.use(session(session_config,app));
app.use(bodyparser());
app.use(logger());


app.on('error', (err, ctx) => {
  console.log('server error: ', err);
});

//将路由规则挂在到koa上
router.use('/api',articleRouter.routes());

app.use(router.routes());
//设置监听端口
app.listen(3030);
console.log(`http server listening at port:3030`);

