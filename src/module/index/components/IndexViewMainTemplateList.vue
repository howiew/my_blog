<template>
	<ul class="list template">
		<h3>模版推荐</h3>
		<li class="template-item" v-for="item in list_template" :key="2">
		  <div class="img-scan">
		    <a href="#">
		      <img :src="item.image_src" alt="">
		    </a>
		  </div>
		  <div class="info">
		  	<div class="headline">
		  		<a href="" :title="item.title">{{item.title}}</a>
		  	</div>
		  	<div class="tags"></div>
		  	<div class="des">
		  		<span title="上传时间" class="des-icon des-watch">
		  			<i class="icon-readtime"></i>
		  			{{item.up_time}}
		  		</span>
		  		<span title="观看数量" class="des-icon des-sum">
		  			<i class="icon-readsum"></i>
		  			{{item.count}}
		  		</span>
		  		<span title="发布作者" class="des-icon des-author">
		  			<i class="icon-author"></i>
		  			<a href="#" class="au-name">{{item.up_author}}</a>
		  		</span>
		  	</div>
		  </div>
		</li>
	</ul>
</template>
<script>

export default {
	data(){
		return {
			img_src: '/src/assets/image/wang.jpg'
		}
	},
	props:['list_template'],
	components: {
		
	},
	methods: {

	}
}
</script>
<style>
.list {
	display: block;
}
.template-item {
	display: block;
	margin-bottom: 15px;
	border-bottom: 1px solid transparent;
	background-color: #ffffff;
}
.template {
	overflow-y: hidden;
	background-color: white;
}
.template>.template-item {
	width: calc(25% - 20px);
	outline: none;
	float: left;
	margin-right: 20px;
	margin-top: 10px;
	border:1px solid #e5e9ef;
	border-radius: 5px;
}
.template>.template-item:nth-child(4n+1) {
	margin-right: 4px;
}
.template>.template-item:nth-child(n+1) {
	margin-left: 4px;
}
@media screen and (min-width: 320px) and (max-width: 480px) {
	.template > .template-item {
		width: calc(50% - 10px);
		margin-right: 10px;
	}
	.template > .template-item:nth-child(2n+1) {
		margin-right: 0px;
	}
}
.template .img-scan {
	overflow: hidden;
	border-radius: 3px;
}
.img-scan > a {
	display: block;
}
.template .img-scan img{
	width: 100%;
}
.info {
	padding-top: 5px;
	padding-left: 10px;
}
.headline {
	margin-bottom: 10px;
}
.headline>a {
	font-size: 12px;
	font-family: "微软雅黑";
}
.des{
	overflow: hidden;
}
.des-icon {
	display: inline;
	height: 12px;
	line-height: 12px;
	font-size: 12px;
	color: #99a2aa;
	float: left;
	margin-right: 15px;
	margin-bottom: 10px;
	position: relative;
	padding-left: 18px;
}
.des-icon i {
	display: inline-block;
	width: 11px;
	height: 11px;
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(/src/assets/image/sprite-11.png);
}
.des-sum {
	margin-right: 0px;
}
.icon-readtime {
	background-position: -442px -165px;
}
.icon-readsum {
	background-position: -485px -543px;
}
.icon-author {
	background-position: -442px -83px;
}
.des-author .au-name {
	display: inline-block;
	max-width: 100px;
	font-size: 12px;
	height: 12px;
	line-height: 12px;
	color: #99a2aa;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>