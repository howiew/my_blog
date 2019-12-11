
//该文件为连接mysql数据库的配置文件
//主要配置 Swquelize连接数据库时候的登录数据库相关信息
//1、主机地址；2、连接端口号；3、登录密码。

const Sequelize = require('sequelize');

//参数分别为：数据库名称，数据库用户名，密码，和相关参数选项
const theDb = new Sequelize('blog','root','wangshuang',{
	host:'localhost',//数据库地址
	port:'9090',//数据库服务器端口号
	dialect:'mysql',//要连接的数据库类型
	pool:{
		max:5,//连接池中的最大连接数
		min:0,//连接池中的最小连接数
		idle:100000//连接池中的连接存活时间，超过10秒就被释放
	}
});

//导出该数据库的连接
module.exports= theDb;