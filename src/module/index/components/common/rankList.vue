<template>
	  <div class="rank-wrapper">
	   <div class="rank-item"  v-for="item in rank_list" :key="item.sort">
	   		<span class="number" :class="item.sort<4?'bg-blue':'bg-white'">{{item.sort}}</span>
	   		<a @href="item.src" class="rank-title">{{item.title}}</a>
	   </div>
	  </div>
</template>
<script>
	export default {
		data(){
			return {
				rank_list: [
					{
						sort: '1',
						title: '先有汤姆后雨天，铁裆匹数赛神仙',
						src: '#'
					},{
						sort: '2',
						title: '先有汤姆后雨天，铁裆匹数赛神仙',
						src: '#'
					},{
						sort: '3',
						title: '先有汤姆后雨天，铁裆匹数赛神仙',
						src: '#'
					},{
						sort: '4',
						title: '先有汤姆后雨天，铁裆匹数赛神仙',
						src: '#'
					},{
						sort: '5',
						title: '先有汤姆后雨天，铁裆匹数赛神仙11111',
						src: '#'
					},{
						sort: '6',
						title: '先有汤姆后雨天，铁裆匹数赛神仙',
						src: '#'
					},{
						sort: '7',
						title: '先有汤姆后雨天，铁裆匹数赛神仙',
						src: '#'
					},{
						sort: '8',
						title: '先有汤姆后雨天，铁裆匹数赛神仙',
						src: '#'
					}
				]
			}
		}
	}
</script>
<style lang="less" scoped>
@width-main: 240px;
.rank-wrapper {
	width: @width-main;
	.rank-item {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
		
		.number {
			display: inline-block;
			font-size: 12px;
			width: 18px;
			height: 18px;
			line-height: 18px;
			text-align: center;
		}
		.rank-title {
			font-family: '微软雅黑';
			display: inline-block;
			width: 205px;
			line-height: 18px;
			vertical-align: middle;
			font-size: 14px;
			text-indent: 10px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		&:hover {
			color: #73c9e5;
		}
	}
}
.bg-blue {
	background-color: blue;
	color: white;
}
.bg-white {
	background-color: white;
	color: gray;
}
</style>