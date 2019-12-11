const articleType_schema = require('../schema/articleType_schema.js')
const articleSchema = require('../schema/article_schema.js');

const getTags = async ()=> {
	return await articleType_schema.findAll({
		attributes: ['id','name']
	});
}
const createTag = async (value)=> {
	return await articleType_schema.create({
		name: value
	},{
		fields:['name']
	});
}
const deleteTag = async (id)=> {
	return await articleType_schema.destroy({
		where: {
			id
		}
	});
}
module.exports ={
	getTags,
	createTag,
	deleteTag
}