const url_base = '/api'
import axios from 'axios'
// 获取热点模版列表

// 获取最新文章列表
async function getLatestList(data) {
	return await axios({
		method:'GET',
		url: `${url_base}/articles`,
		responseType: 'json',
		params: data
	});
}
// 获取指定文章信息 
async function getArticle(id) {
	return await axios({
		method: 'GET',
		url: `${url_base}/articles/${id}`,
		responseType: 'json'
	});
}
// 获取指定分类的文章列表
async function getListByCate(type) {
}
// 获取全部文章列表
// 获取热点文章排名列表
// 新建文章
async function createArticle(data) {
	return await axios({
		method: 'POST',
		url: `${url_base}/articles`,
		data: data
	});
}
// 删除指定文章
async function deleteArticle(id) {
	console.log(id);
	return await axios({
		method: 'DELETE',
		url: `${url_base}/articles/${id}`,
	});
}
// 修改指定文章
async function modifyArticle(id,data) {
	return await axios({
		method: 'PUT',
		url: `${url_base}/articles/${id}`,
		data: data
	});
}
//上传图片
async function uploadImg(data) {
	return await axios({
		method: 'POST',
		url: `${url_base}/edit/uploadimg`,
		data: data,
		headers: {'Content-Type':'multipart/form-data'}
	});
}
//标签分类api
//获取标签列表
async function getTags() {
	return await axios({
		method: 'GET',
		url: `${url_base}/tags`,
		responseType: 'json'
	});
}
//增加新标签
async function createTag(data) {
	return await axios({
		method: "POST",
		url: `${url_base}/tags`,
		data: {
			tag: data
		}
	});
}
//删除旧标签
async function deleteTag(tid) {
	return await axios({
		method: "DELETE",
		url: `${url_base}/tags`,
		data: {
			id: tid
		}
	});
}

//获取用户登录信息
async function login(data) {
	return await axios({
		method: 'POST',
		url: `${url_base}/login`,
		data: data
	});
}
async function logout() {
	return await axios({
		method:'POST',
		url: `${url_base}/logout`
	});
}
async function getSession() {
	return await axios({
		method: 'GET',
		url: `${url_base}/getSession`
	});
}
export {
	getArticle,
	getLatestList,
	getListByCate,
	modifyArticle,
	deleteArticle,
	createArticle,
	uploadImg,
	getTags,
	createTag,
	deleteTag,
	login,
	logout,
	getSession
}

