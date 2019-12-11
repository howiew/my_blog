<template>
<div class="f-l layout-main clearfix">
	<div class="f-l post-list">
		<div class="post-list-hd">
			<div class="hd-title">
				<p class="note-title">笔记</p>
				<div href="#" class="btn btn-primary note-create" @click="createNewNote">新建文章</div>
			</div>
			<div class="hd-tips">
				<div class="note-num">共6条笔记</div>
			</div>
		</div>
		<div class="post-list-bd">
			<ul>
				<li class="post-list-item" :class="{'post-list-item-selected':item.isSelect}"
					v-for="item in articles" :key="item.id" 
					@click="setState"
				>
					<div class="post-list-item-hoverOverlay"></div>
					<div class="post-list-item-selectOverlay"></div>
					<div class="post-list-item-snippetContent">
						<div class="post-list-item-noteTitle">
							{{item.title}}
						</div>
						<div class="post-list-item-noteTime">
							{{item.time}}
						</div>
						<div class="post-list-item-noteType">
							{{item.articleType.name}}
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="f-l post-editor">
		<div class="post-editor-hd">
			<input type="text" class="view-post-title" v-model.trim="con_title" v-on:keyup.enter="addTitle" placeholder="请输入新文章的标题">
			<div class="hd-toolbar">
				<div class="toolbar-default toolbar-category">
					<div class="category-title" @click="changeCateGoryState">
						<i class="iconfont icon-category"></i><span>未分组</span><i class="iconfont icon-arrow-down"></i>
					</div>
					
					<div class="category-change-model" v-show="isShow_category_model">
						<div class="model-hd">
							<div class="createCategory"><i class="iconfont icon-add"></i>创建新分类</div>
						</div>
						<div class="model-bd">
							<div class="category-item">
								个人日记
								<i class="iconfont icon-success-fill"></i>
							</div>
							<div class="category-item">
								javascript
								<i class="iconfont icon-success-fill"></i>
							</div>
							<div class="category-item">
								markdown
								<i class="iconfont icon-success-fill"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="toolbar-default toolbar-remind"><i class="iconfont icon-remind"></i></div>
				<div class="toolbar-default toolbar-collection"><i class="iconfont icon-collection"></i></div>
				<div class="toolbar-default toolbar-prompt"><i class="iconfont icon-prompt"></i></div>
				<div class="toolbar-default toolbar-delete" @click="deleteNote"><i class="iconfont icon-ashbin"></i></div>
				<div class="toolbar-default toolbar-more"><i class="iconfont icon-ellipsis"></i></div>
			</div>
		</div>
		<div class="post-editor-container">
			<mavon-editor ref=md v-model="con_md" style="height: 100%"
						:fontSize="editorFontSize"
						:toolbars="toolbars"
						:subfield="false"
						:scrollStyle="true" 
						@imgAdd="$imgAdd"
						@imgDel="$imgDel"
						@save="$saveNote"
						@change="$changeNote">
			</mavon-editor>
		</div>
	</div>
</div>	
</template>
<script type="text/javascript">
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import $ from  'jquery'
import * as $http from '@/http/http.js'

import axios from 'axios'
export default {
	components: {
		mavonEditor
	},
	data(){
		return {
			count: 0,
			articles:[],
			con_md:'',
			con_title: '',
			img_files:{},
			current_item_index: null,//当前激活item的index
			current_item_id: null,//当前激活item的文章ID
			toolbars: {
				//编辑框的工具栏选项
				bold: true, // 粗体
				italic: true,// 斜体
				header: true,// 标题
				underline: true,// 下划线
				strikethrough: true,// 中划线
				mark: true,// 标记
				superscript: true,// 上角标
				subscript: true,// 下角标
				quote: true,// 引用
				ol: true,// 有序列表
				ul: true,// 无序列表
				link: true,// 链接
				imagelink: true,// 图片链接
				code: true,// code
				table: true,// 表格
				subfield: true,// 是否需要分栏
				fullscreen: true,// 全屏编辑
				readmodel: true,// 沉浸式阅读
				htmlcode: true,// 展示html源码
				help: false,// 帮助
				save: true
			},
			editorFontSize: "16",
			isShow_category_model: false
		}
	},
	computed: {
		
	},
	created: async function() {
		let $vm = this;
		//获取文章的信息

		await $vm.getArticleList();
		console.log($vm.articles);
		// 设置自动加载为第一条文章记录
		$vm.current_item_index = 0; 
		$vm.current_item_id = $vm.articles[$vm.current_item_index].id;
	},
	methods:{
		getArticleList: async function() {
			let $vm = this;
			await $http.getLatestList().then(function(response) {
					console.log(response);
					$vm.articles = response.data.data;
					$vm.count = response.data.paging.total;
				})
				.catch(e => console.log(e));
		},
		getArticleDetail:async function(id) {
			let $vm = this;
			console.log(`当前获取的文章id:${id}`);
			await $http.getArticle(id)
				.then(function(res) {
					$vm.con_md = res.data.content.md;
				})
				.catch(e => console.log(e));
			for(let i=0; i<$vm.articles.length; i++){
				let article = $vm.articles[i];
				for(let key in article){
					if (key == 'article_id'){
						if(article.article_id == id){
						$vm.con_title = article.article_title;}
					}
				}
			}
		},
		createNewNote: function(){
			let $vm = this;
			let time = $vm.getTime();
			//在文章列表队列中添加一个新的文章对象
			let data = {
				title: '新文章',
				md: '',
				time: time,
				categoryid: 7
			}
			//创建新的节点插入到DOM TREE中
			this.articles.unshift(data);
			//将编辑框内的内容重置为空
			this.con_md ='';
			
			$http.createArticle(data).then((res) => {
				//返回新创建的文章的id
				console.log(res);
			});
		},
		deleteNote: function() {
			let $vm = this;
			let id = $vm.current_item_id;
			$http.deleteArticle(id).then(function(res){
				console.log("sucess");
				$vm.getArticleList();
			}).catch(e => console.log(e));
			
		},
		setState: function(e){
			let node = e.currentTarget;
			this.current_item_index = $(node).index();
		},
		$imgAdd: function (pos,$file){
			//first:upload image to server
			var formdata = new FormData();
			formdata.append('image',$file);
			this.img_files[pos] = $file;
			$http.uploadImg(formdata).then((url) => {
				//second:将返回的url替换文本原本的位置格式为![...](0) -> ![...](url)
				$vm.$img2Url(pos, url);
			})
		},
		$imgDel: function (pos){
			delete this.img_files[pos];
		},
		$saveNote: function(markdown,html){
			// 本函数是用于上传文本内容的
			let $vm = this;
			let time = $vm.getTime();
			let id = $vm.current_item_id;
			let typeid = $vm.articles[$vm.current_item_index].categroyid;
			console.log(`typeid:${typeid}`);

			/*调用ajax来上传文章内容上传格式为
			*1、title:文章内容
			*2、md:文章markdown格式
			*3、html:文章html片段格式
			*4、time:文章创造时间
			*5、type:文章类型id
        	*/
			let data = {
				title: $vm.con_title,
				md: markdown,
				html: html,
				time: time,
				typeid: typeid,
				keyword: ''
			};
			$http.modifyArticle(id,data).then((res) => {
				console.log('upload-result:.....');
			});
		},
		$changeNote: function (markdown,html) {
			let $vm = this;
			let time = $vm.getTime();
			let id = $vm.current_item_id;
			let typeid = $vm.articles[$vm.current_item_index].categroyid;

			let data ={
				title: $vm.con_title,
				md: markdown,
				html: html,
				time: time,
				typeid: typeid,
				keyword: ''
			};
			$http.modifyArticle(id,data).then(res =>{
				console.log(res);
			});
		},
		addTitle: function(){
			console.log(this.con_title);
			console.log(this.current_item_index);
			this.articles[this.current_item_index].title = this.con_title;
			//将键入的新标题赋值给Object article
		},
		getTime:function(){
			let date = new Date();
			return date;
		},
		changeCateGoryState: function () {
			//改变分类状态模块的显示状态
			let $vm = this;
			$vm.isShow_category_model = !$vm.isShow_category_model;
		}
	},
	watch:{
		con_md: function(val,old) {
			let $vm = this;
			// $vm.con_html = $vm.$refs.md.d_render;
		},
		current_item_index: function(val,old){
			// current_item_index的值是从 1开始的,但是articles[]为数字 所以 对应 val -1
			let $vm = this;
			$vm.current_item_id = $vm.articles[val].id;
			let type = $vm.articles[val].articleType.name;
			$vm.con_title = $vm.articles[val].title;
			$vm.getArticleDetail($vm.current_item_id);
		}
	}
}
</script>
<style type="text/css" scoped>
.iconfont {
	font-size: 24px;
	color: #c8ccd3;
}
.layout-main{
	background-color: #EAEDF1;
	height: 100%;
	width: calc(100% - 100px);
}
.post-list{
	box-sizing: border-box;
	width: 350px;
	background-color: white;
	border-right: 1px solid #c8ccd3;
}
.post-list-hd {
	border-bottom: 1px solid #c8ccd3;
}
.hd-title {
	height: 50px;
	padding: 24px 20px 0 24px;

	position: relative;

}
.hd-title .note-title {
	font-size: 24px;
}
.hd-title .note-create {
	position: absolute;
	top: 24px;
	right: 20px;
}
.hd-tips {
	padding: 30px 20px 7px 24px;
}
.hd-tips .note-num {
	height: 12px;
	line-height: 12px;
	font-size: 12px;
}
.post-list-bd {
	height: calc(100vh - 100px);
	overflow-y: scroll;
	overflow-x: hidden;
}
.post-list-item {
	position: relative;
	height:120px;
	cursor: pointer;
	border-bottom: 1px solid #cccccc;
}
.post-list-item-hoverOverlay,
.post-list-item-selectOverlay{
	position: absolute;
	top: 0;
	left: 0;
	width: 350px;
	height: 120px;
	opacity: 0;
}
.post-list-item-snippetContent {
	position: absolute;
	top: 10px;
	left: 10px;
	bottom: 10px;
	right: 10px;
	width: 330px;
	height: 100px;
}
.post-list-item-toolbar {
	position: absolute;
	top: 10px;
	right: 0;
	width: 140px;
	height: 120px;
	opacity: 0;
}
.post-list-item-selectOverlay{
	border: 3px solid #d9d9d9;
}
.post-list-item-hoverOverlay {
	background-color: green;
}
.post-list-item-snippetContent {
	padding: 10px;
}
.post-list-item .post-list-item-noteTitle{
	color: black;
	font-size: 16px;
	font-family: "微软雅黑";
	margin-bottom: 10px;
}
.post-list-item .post-list-item-noteTime{
	color: black;
	font-size: 12px;
	font-family: "微软雅黑";
	margin-bottom: 10px;
}
.post-list-item .post-list-item-noteType {
	color: black;
	font-size: 12px;
	font-family: "微软雅黑";
}
.post-list-item:hover .post-list-item-hoverOverlay,
.post-list-item:hover .post-list-item-toolbar {
	opacity: 1;
}
.post-list-item-selected  .post-list-item-selectOverlay{
	opacity: 1;
}
.post-list-item:hover .post-list-item-noteTitle,
.post-list-item:hover .post-list-item-noteTime,
.post-list-item:hover .post-list-item-noteType{
	color: white;
}
.post-item-toolbar-container {
	width: 24px;
	height: 24px;
	float: left;
	margin-right: 10px;
}
.post-item-toolbar-container > .post-item-toolbar-itemIcon {
	width: 24px;
	height: 24px;
	cursor: pointer;
	background-image: url('/src/assets/image/admin_icon.png');
}
.post-item-toolbar-iconItem > .icon-delete {
	background-position: 0px 0px;
}
.post-item-toolbar-iconItem > .icon-recommend {
	background-position: 0px 49px;
}
.post-editor{
	position: relative;
	z-index: 10;
	width: calc(100% - 350px);
	height: 100%;	
	background-color: white;
	overflow-y: auto;
	overflow-x: hidden;
}
.post-editor-hd {
	position: relative;
	z-index: 100;
	padding:16px 20px 10px 20px;
}
.view-post-title {
	outline: none;
	border:none;
	width: 100%;
	height: 50px;
	font-size: 24px;
	font-weight: 400;
	color: green;
}
.hd-toolbar {
	height: 24px;
	line-height: 24px;
	
}
.toolbar-default {
	display: inline-block;
	height: 24px;
	line-height: 24px;
}
.hd-toolbar .toolbar-category {
	max-width: 200px;
	margin-right: 15px;
	vertical-align: top;
	position: relative;
}
.hd-toolbar .toolbar-category .category-title {
	cursor: pointer;
}
.hd-toolbar .toolbar-category .category-title > span {
	font-size: 12px;
	margin-right: 5px;
	margin-left: 5px;
}
.hd-toolbar .toolbar-category .category-title > i {
	font-size: 12px;
	color: black;
}
.hd-toolbar .toolbar-delete,
.hd-toolbar .toolbar-prompt,
.hd-toolbar .toolbar-collection,
.hd-toolbar .toolbar-remind,
.hd-toolbar .toolbar-more {
	width: 24px;
	height: 24px;
}
.hd-toolbar .toolbar-delete > i,
.hd-toolbar .toolbar-prompt > i,
.hd-toolbar .toolbar-collection > i,
.hd-toolbar .toolbar-remind > i,
.hd-toolbar .toolbar-more > i {
	font-size: 24px;
	font-weight: bold;
	color: #c8ccd3;
}
.hd-toolbar .toolbar-delete:hover > i,
.hd-toolbar .toolbar-prompt:hover > i,
.hd-toolbar .toolbar-collection:hover > i,
.hd-toolbar .toolbar-remind:hover > i,
.hd-toolbar .toolbar-more:hover > i {
	cursor: pointer;
	color: green;
}
.category-change-model {
	position: absolute;
	top: 34px;
	left: 0;
	z-index: 999;

	width: 326px;
	padding: 16px 16px 0 16px;
	border: 1px solid #c8ccd3;
	background-color: white;
}
.category-change-model .model-hd {
	border-bottom: 1px solid #c8ccd3;
}
.model-hd > .createCategory {
	position: relative;
	font-size: 16px;
	padding: 20px 0 10px 0;
	vertical-align: middle;
}
.model-hd > .createCategory > i {
	position: relative;
	top: 3px;
}
.category-change-model .model-bd {
	max-height: 400px;
	overflow-y: scroll;
}
.model-bd > .category-item {
	position: relative;
	font-size: 16px;
	padding: 16px 0 14px 20px;
	border-bottom: 1px solid #c8ccd3;
}
.model-bd > .category-item > i {
	position: absolute;
	top: 20px;
	right: 30px;
	font-size: 18px;
	color: green;
}
.model-bd > .category-item:hover > i {
	color: white;
}
.model-hd > .createCategory:hover,
.model-hd > .createCategory:hover > i {
	color: green;
}
.model-bd > .category-item:hover {
	background-color: green;
	color: white;
	cursor: pointer;
}
.post-editor-container {
	position: relative;
	z-index: 50;
	height: calc(100vh - 100px);
}
.title-dropdown {
	position: relative;
}
.dropdown-bd {
	position: absolute;
	z-index: 999;
	top: 30px;
	left: 0;

	width: 350px;
	min-height: 300px;
	border: 1px solid #c8ccd3;
	background-color: white;
}
</style>