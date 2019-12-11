//此文件为构建articler的数据关系定义表映射表
const Sequelize = require('sequelize');
const sequelize = require('../config/db.js');

//创建Model
const ArticleModel = sequelize.define('articles',{
	id:{
		type: Sequelize.INTEGER,
		field: 'article_id',
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	title:{
		type: Sequelize.STRING, //制定值得类型
		field: 'article_title',
		allowNull: false
	},
	md:{
		type: Sequelize.TEXT,
		field: 'article_md',
		allowNull: false
	},
	html: {
		type: Sequelize.TEXT,
		field: 'article_html'
	},
	keyword: {
		type: Sequelize.TEXT,
		field: 'article_keyword'
	},
	time:{
		type: Sequelize.DATE(6),
		field: 'article_time'
	},
	categoryid:{
		type: Sequelize.INTEGER,
		field: 'article_typeid'
	},
	up: {
		type: Sequelize.INTEGER,
		field: 'article_up'
	},
	support: {
		type: Sequelize.INTEGER,
		field: 'article_support'
	}
},{
	tableName:'articles',
	timestamps: false,//时间戳
	freezeTableName:false
});

module.exports = ArticleModel;
