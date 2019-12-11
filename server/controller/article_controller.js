
// 此文件是有关文章数据获取的逻辑函数
const articleModel = require('../models/article_model.js')


const getRequestOptions = function(options){
	//服务器默认设定的请求参数
	//1、页码
	//2、每页个数
	//3、排序字段
	//4、排序字段
	//5、查询类型
	const request_options_default = {
		page: 1,
		pageSize: 8,
		sort: 'article_time',
		order:'DESC',
		typeid:''
	};
	let _options = request_options_default || {};
	Object.assign(_options,options);
	return _options;
}
const getArticleList = async (ctx) => {
	let options = ctx.query;
	let _options = getRequestOptions(options);

	let receipt = await articleModel.getArticleList(_options);
	console.log(receipt);
	ctx.body= {
		"paging": {"total": receipt.count, "page": _options.page},
		"data": receipt.rows
	};
}
const getArticleListLatest = async (ctx) => {
	let options = ctx.query;
	let _options = getRequestOptions(options);

	let receipt = await articleModel.getArticleList(_options);

	ctx.body= {
		content: receipt
	};
}

const getArticleDetail = async ctx => {
	//存储浏览器发送请求时候，携带的参数信息
	let id = ctx.params.id;
	//获取数据库的相关信息
	let receipt = await articleModel.getArticleDetail(id);

	ctx.body= {
		content: receipt
	};
}

const updateArticle = async ctx => {
	let params = ctx.request.fields;
	
	params.id = ctx.params.id;

	let receipt = await articleModel.updateArticle(
		params.id,
		params.title,
		params.md,
		params.html,
		params.time,
		params.typeid,
		params.up,
		params.support
	).then(res =>{
		return res;
	});

	ctx.body = {
		receipt
	};

}
const createArticle = async ctx => {
	//post 请求
	let params = ctx.request.fields;
	console.log(params);
	//直接向数据库添加新文章
	let receipt = await articleModel.createArticle(
			params.title,
			params.md,
			params.time,
			params.categoryid
		);

	ctx.body = {
		msg: '新文章发布成功'
	};
}
const delArticle = async ctx => {
	let id = ctx.params.id;

	//判断数据库是否有该文章
	let receipt = await articleModel.delArticle(id);

	ctx.body = {
		msg: '删除文章成功'
	};
}



module.exports = {
	getArticleList,
	getArticleListLatest,
	getArticleDetail,
	createArticle,
	updateArticle,
	delArticle
}