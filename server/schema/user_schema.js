//此文件为构建user的数据关系定义表映射表
const Sequelize = require('sequelize');
const sequelize = require('../config/db.js');

//创建Model
const UserModel = sequelize.define('user',{
	uid: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
		field: 'user_id'
	},
	username:{
		type: Sequelize.STRING, 
		field:'user_login' 
	},
	password:{
		type: Sequelize.STRING,
		field: 'user_password'
	},
	name: {
		type: Sequelize.STRING,
		field: 'user_name'
	},
	sex:{
		type: Sequelize.STRING,
		field: 'user_sex'
	},
	age:{
		type: Sequelize.INTEGER,
		field: 'user_age'
	},
	level: {
		type: Sequelize.INTEGER,
		field: 'user_level'
	}
},{
	tableName:'user',
	timestamps: false,//时间戳
	freezeTableName:false
});

module.exports = UserModel;
