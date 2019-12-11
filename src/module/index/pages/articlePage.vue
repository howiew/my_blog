<template>
	<div class="container clearfix">
		<div class="loading" v-if="_loading">
			<img src="~assets/image/loading.gif" alt="加载中">
		</div>
		<ArticleContent :article="article.content"></ArticleContent>
	</div>
</template>
<script type="text/javascript">
import ArticleContent from '@/module/index/components/ArticlePageContent.vue'
import {getArticle} from '@/http/http.js'
const MarkdownIt = require('markdown-it')
const md = new MarkdownIt({
	html: true,//是否在源码中使用html标记
	xhtmlOut: false,//是否使用'/'来关闭单标签 ‘<br />’
	breaks: true,//是否将段落中的 '/n' 转化为<br>
	langPrefix: 'language-',//代码块的CSS语言预加载
	linkify: false,//是否自动转化url链接文本成为url链接
	typografyher: false
})
export default {
	name:'singlePage',
	components:{
		ArticleContent
	},
	data(){
		return {
			article: {
				id:' ',
				content:' ',
				time:0
			},
			mdFile:'',
			_loading:'false'
		}
	},
	props:['articleId'],
	created: async function(){
		console.log("正在请求文章数据")
		let vm = this;
		let id = vm.articleId;
		//组件创建完成，开始获取该ID的文章信息
		vm._loading = true;
		
		getArticle(id).then(function(res){
			vm._loading = false;
			vm.article.id = res.data.content.id;
			vm.article.time = res.data.content.time;
			vm.article.content = res.data.content.html;

		}).catch(function(err){
			console.log(err);
		});
	},
	methods:{

	}
}
</script>
<style type="text/css" scoped>
.loading {
	position: absolute;
	width:200px;
	height: 200px;
	margin-top: 100px;
	margin-left: 100px;
}
 .container {
 	width: 760px;
 	margin: 0 auto;
 	padding: 15px 10px;
 }
 .article-toolbar {
	width: 75px;
	position: fixed;
	top: 300px;
	left: 50px;
	border:1px solid #000;

}
.article-btn {
	display: inline-block;
	padding: 5px 10px;
	border: 1px solid #000;
	outline: none;
	border-radius: 5px;
}
.article-btn-share {

}
.article-container {
	width:800px;
	padding:10px 20px;
	margin: 0 auto;
	background-color: white;
}
.article-title {
	font-family: "微软雅黑";
	font-size: 32px;
	color: black;
	margin-top: 10px;
}
.article-describe {
	margin-top: 15px;
}
.article-describe-item {
	display: inline-block;
	padding: 3px 5px;
	margin-right: 20px;
}
.article-describe-time {
	color: black;
	font-size: 14px;
}
.article-describe-count-read {
	color: black;
	font-size: 14px;
}

.article-division {
	width: 100%;
	height: 1px;
	background-color: gray;
	margin-top: 15px;
}
.article-content {
	padding-top: 15px;
}


.article-related {
	display: inline-block;
	margin-top: 15px;
}
.article-related-prev {
	margin-right: 150px;
}
.article-related > a {
	font-size: 14px;
}
.article-related span {
	display: inline-block;
	padding:5px 10px;
	margin-right: 10px;
	border:1px solid #c8c8c8;
}
.article-related:hover span {
	border-color: red;
}
.article-bottom-bar {
	margin-top: 15px;
}
</style>