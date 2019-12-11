const userModel = require('../models/user_model.js')

const login = async ctx => {
	//获取用户输入的用户名和密码
	let params = ctx.request.fields;
	let u = params.username;
	let p = params.password;

	let status = null;

	if (!ctx.session.u) {
		ctx.session.u = false;
		//如果session中没有关于当前用户的登录记录，则跳转登录页面
		//通过用户名获取数据库的密码
		await userModel.getUserinfo(u).then(res=>{
			db_user = res.username;
			db_password = res.password;

			if (res.code) {
				//存在该用户
				let db_user = res.data[0].username;
				let db_password = res.data[0].password;
				let db_uid = res.data[0].uid;
				//记录该用户session登录状态
				ctx.session.u = {db_uid,db_user};
				//存在该用户密码正确返回1 密码不正确返回0 
				// status = db_password == p?1:0;
				if (db_password == p) {
					ctx.session.userinfo = {db_uid,db_user};
					status = 1;
				}
				else {
					status = 0;
				}
			}
			else {
				//不存在该用户 返回-1
				status = -1;
			}
		});
	}
	
	ctx.body = {
		status
	};
}
const getUserSession = async ctx => {
	if (ctx.session.userinfo) {
		ctx.body = {code: 1, message: '已登录'};
	}else {
		console.log('这个用户未登录');
		ctx.body = {code: 0, message: '未登录'};
	}
}
const logout = async ctx => {
	ctx.session = null;
}
module.exports= {
	login,
	logout,
	getUserSession
}