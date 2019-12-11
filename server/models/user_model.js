const userSchema = require('../schema/user_schema.js');

const getUserinfo = async user => {
	return await userSchema.findAll({
		where: {
			username: user
		},
		attributes:['uid','username','password'],
		raw:true
	}).then(res=> {
		console.log(res);
		if (!res.length) {
			console.log('no');
			return {
				code: 0
			}
		}else {
			console.log('yes');
			return {
				code: 1,
				data: res
			}
		}
	});
}
module.exports= {
	getUserinfo
}