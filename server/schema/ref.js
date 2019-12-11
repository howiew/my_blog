const db = require('../config/db.js')
const ArticleModel = require('./article_schema.js')
const ArticleTypeModel = require('./articleType_schema.js')
const User = require('./user_schema.js')

// 建立模型关系
ArticleTypeModel.hasMany(ArticleModel,{foreignKey:'categoryid',targetKey:'id'});
ArticleModel.belongsTo(ArticleTypeModel,{foreignKey:'categoryid',targetKey:'id'});

db.sync().then(function(result){
	console.log('数据库连接成功');
});

//关系模型之间进行数据同步
