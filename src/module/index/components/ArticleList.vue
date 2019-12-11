<template>
	<div class="list post">
		<h3>文章推荐</h3>
		<div class="list-item" v-for="item in list_post" :key="item.id">
		  <router-link tag="h2" :to="{name:'articlePage',params:{articleId:item.id}}">
		    <a>{{item.title}}</a>
		  </router-link>
		  <p>近年来，深度学习方法极大的推动了自然语言处理领域的发展。几乎在所有的 NLP 任务上我们都能看到深度学习技术的应用</p>
		  <div class="item-describe">
		  	<span class="f_l d_author">howie</span>
		  	<div class="split"></div>
		    <span class="f_l d_type">{{item.articleType.name}}</span>
			<div class="split"></div>
		    <span class="f_l d_time">{{item.time}}</span>  
		    <div class="f_r interactive">
		    	<span class="f_l d_read">阅读(199)</span>
		    	<div class="split"></div>
		    	<span class="f_l d_comment">评论(15)</span>
		    </div>
		  </div>
		</div>
	</div>
</template>
<script>
export default {
	props:{
		list_post: {
			required: true,
			type: Array
		}
	}
}
</script>
<style>
.list {
	display: block;
}
.list-item {
	display: block;
	padding: 10px;
	margin-bottom: 15px;
	border-bottom: 1px solid transparent;
}
.list {
	background-color: #fff;
}
.list > h3 {
	color: white;
	font-size: 14px;
	text-align: center;
	padding: 5px 0;
	background-color: #F45555;
}
.post > .list-item {
	background-color: #F5F5F6;
	padding: 20px 10px 10px 20px;
	margin-bottom: 10px;
	border:1px solid transparent;
}
.post > .list-item:hover {
	cursor: pointer;
	background-color: #ffffff;
	border-color: #00C1DE;
}
.post > .list-item > h2 {
	margin-bottom: 10px;
}
.post > .list-item > h2 >a {
	display: block;
	font-size: 16px;
	color: black;
	text-overflow: ellipsis;
}
.post > .list-item > h2> a:hover {
	color: red;
}
.post > .list-item > p {
	font-size: 12px;
	font-family: "微软雅黑";
	text-overflow: ellipsis;
	margin-bottom: 10px;
}
.item-describe {
	height: 24px;
	line-height: 24px;
}
.split {
	float: left;
	width: 2px;
	height: 2px;
	background-color: #adadad;
	border-radius: 50%;
	margin-top: 12px;
	margin-right: 8px;
	margin-left: 8px;
}
.d_author,.d_type, .d_time, .d_read, .d_comment{
	font-size: 12px;
	/*background-image: url();
	background-repeat: no-repeat;*/
}	
</style>