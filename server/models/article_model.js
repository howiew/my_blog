const theDB = require('../config/db.js');
const articleSchema = require('../schema/article_schema.js');
const articleTypeSchema = require('../schema/articleType_schema.js');

//查询文章列表
const getArticleList = async (options) =>{
	let limit = options.pageSize-0;//进行计算并且同时进行类型转换
	let offset = (options.page - 1)*limit-0;
	let sort = options.sort;
	let order = options.order;
	
	//查询关键字
	let type = options.type;

	return await articleSchema.findAndCount({
		// where:{
		// 	categoryid: type
		// },
		include:[articleTypeSchema],
		attributes:[
			"id","title","categoryid","time"
		],
		limit: limit,
		offset: offset,
		order: `${sort} ${order}`
	});
}

//查询文章的详细信息
const getArticleDetail = async id =>{
	return await articleSchema.findById(id,{
		include: [articleTypeSchema],
		attributes:[
			"id","title","md","html","categoryid","time"
		]
	});
}
//更新文章
const updateArticle = async (id,title,md,html,time,categoryid) =>{
	//article_md为内容的原markdown格式
	await articleSchema.update({
		title,
		md,
		html,
		time,
		categoryid
	},{
		where:{
			id
		}
	});
	return await articleSchema.findById(id);
}

//添加新文章
const createArticle = async (title,md,time,categoryid) =>{
	return await articleSchema.create({
		title,
		md,
		time,
		categoryid
	});
}
//删除文章
const delArticle = async id =>{
	return await articleSchema.destroy({
		where:{
			id
		}
	});
}

module.exports = {
	getArticleList,
	getArticleDetail,
	createArticle,
	updateArticle,
	delArticle
}