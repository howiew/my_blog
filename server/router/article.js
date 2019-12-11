//article路由规则
const articleController = require('../controller/article_controller.js');
const articleTypeController = require('../controller/articleType_controller.js');
const userController = require('../controller/user_controller.js');
const router = require('koa-router')();
router
	.post('/articles', articleController.createArticle) //新建文章
	.get('/articles', articleController.getArticleList)//获取文章列表
	.get('/articles/latest', articleController.getArticleListLatest)//获取最新文章
	// .get('/article/:type',articleController.getArticleListByType)
	.get('/articles/:id', articleController.getArticleDetail)
	.put('/articles/:id', articleController.updateArticle)//更新指定文章信息
	.delete('/articles/:id', articleController.delArticle)//删除指定文章
	.post('/edit/uploadimg',function () {
		console.log('服务器接收成功');
	})
	.get('/tags', articleTypeController.getTags)
	.post('/tags', articleTypeController.createTag)
	.delete('/tags', articleTypeController.deleteTag)
	.post('/login',userController.login)
	.post('/logout', userController.logout)
	.get('/getSession',userController.getUserSession);
module.exports = router;










