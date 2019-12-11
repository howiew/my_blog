const articleTypeModel = require('../models/articleType_model.js')

const getTags = async (ctx)=> {
	let receipt = await articleTypeModel.getTags();
	console.log('get the tags list...');
	ctx.body= {
		receipt
	}
}
const createTag = async (ctx)=> {
	let tvalue = ctx.query.tag;
	let receipt = await articleTypeModel.createTag(tvalue);
	console.log('create new tag ----');
	ctx.body= {
		receipt
	}
}
const deleteTag = async (ctx)=> {
	let tid = ctx.query.id;
	let receipt = await articleTypeModel.deleteTag(tid);
	console.log('delete ing ----');
	ctx.body= {
		receipt
	}
}

module.exports ={
	getTags,
	createTag,
	deleteTag
}