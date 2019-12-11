const fs = require('fs')
const path = require('path')
const dirname = path.resolve('static')

const readMDFile = function(files){
	let filePath = `${dirname}${files}`;
	return new Promise(function(resolve,reject){
		fs.readFile(filePath,'utf-8',function(err,data){
			if(err){
				reject(err);
			}else {
				resolve(data);
			}
		});
	});
}
const writeMDFile = async (files,datas) => {
	return new Promise(function(resolve,reject){
		fs.writeFile(files,datas,function(err){
			if (err){
				reject(err);
			}else{
				resolve("写入成功");
			}
		});
	});
}


module.exports= {
	readMDFile,
	writeMDFile
}