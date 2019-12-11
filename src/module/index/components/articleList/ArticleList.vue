<template>
	<div class="list post">
		<div class="list-item clearfix" v-for="item in list_post" :key="item.id">
		   <router-link tag="a" :to="{name:'articlePage',params:{articleId:item.id}}">
		   	<img src="/src/assets/image/111.webp" alt="">
		    <p class="item-title">{{item.title}}</p>
		    <p class="item-tag">
		    	<span><i class="iconfont icon-clock"></i>{{item.time}}</span>
		    	<span><i class="iconfont icon-clock"></i>{{item.articleType.name}}</span>
		    </p>
		  </router-link>
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
<style lang="less" scoped>
	@item-width: 170px;
	.list {
		width: 760px;
		height: 586px;
		
	}
	.list-item {
		width: @item-width;
		float: left;
		margin-right: 20px;
		margin-bottom: 20px;
		background-color: white;
		overflow: hidden;
		
		img {
			width: @item-width;
			height: 227px;
		}
		.item-title {
			width: 170px;
			height: 18px;
			line-height: 18px;
			font-size: 14px;
			color: black;
			text-align: left;
			margin-top: 10px;
			margin-bottom: 10px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;

		}
		.item-tag {
			height: 14px;
			line-height: 14px;
			font-size: 12px;
			span {
				color: #999;
				margin-right: 15px;
			}
		}
		&:hover {
			
		}
	}
	
	.clearfix {
		display: block;
		zoom: 1;

		&:after {
			display: block;
			content: ' ';
			height: 0;
			font-style: 0;
			clear: both;
			visibility: hidden;
		}
	}
</style>