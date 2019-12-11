//此文件为构建articler的数据关系定义表映射表
const Sequelize = require('sequelize');
const sequelize = require('../config/db.js');

//创建Model
const ArticleTypeModel = sequelize.define('articleType',{
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		field: 'articleType_id'
	},
	name:{
		type: Sequelize.STRING, //制定值得类型
		field:'articleType_name' //指定值在数据表中的键名，未指定field，表中的键名和建立的对象键名一致
	}
},{
	tableName:'articleType',
	timestamps: false,//时间戳
	freezeTableName:false
});

module.exports = ArticleTypeModel;
