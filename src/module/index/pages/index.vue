<template>
	<div id="home" class="blog-wrapper">
		<div id="recommend" class="clearfix">
			<recommend-module></recommend-module>
		</div>
		<div id="template" class="clearfix">
			<div class="template-latest">
				<h3>网页模板</h3>
				<TemplateList :list_template="list_template"></TemplateList>
			</div>
			<div class="template-rank">
				<h3>排行榜</h3>
				<rank-list></rank-list>
			</div>
		</div>
		<div id="article" class="clearfix">
			<div class="article-latest">
				<h3>最新文章</h3>
				<ArticleList :list_post="post_show"></ArticleList>
				<Pagination
					:total="pages_count"
					:current-page="pages.page"
					:page-display="pages.pageSize"
					@pagechange="pagechange"
				></Pagination>
			</div>
			<div class="article-rank">
				<h3>排行榜</h3>
				<rank-list></rank-list>
			</div>
		</div>
	</div>
</template>
<script>
import TemplateList from '@/module/index/components/templatelist/TemplateList'
import ArticleList from '@/module/index/components/articleList/ArticleList.vue'
import Pagination from '@/module/index/components/Pagination.vue'
import RankList from '@/module/index/components/common/rankList.vue'
import {getLatestList} from '@/http/http.js'

import RecommendModule from '@/module/index/components/recommend/RecommendModule.vue'
export default {
	data(){
		return {
			list_post:[],
			list_template:[{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				img_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			}],
			pages_count: 0,
			pages: {
				//页信息
				pageSize: 8, //每页显示条数
				page: 1 //当前显示页
			}
		}
	},
	components: {
		TemplateList,
		ArticleList,
		Pagination,
		RecommendModule,
		RankList
	},
	created: function(){
		let vm = this;
		// 发送请求获取最新的消息列表
		getLatestList().then(function(res){
			//返回消息的列表数组
			return res.data;
		}).then(function(res){
			console.log(res);
			// 计算数据条数
			vm.pages_count = res.paging.total;
			vm.list_post = res.data;
		});
	},
	computed: {
		post_show: function () {
			let vm = this;
			let len = vm.list_post.length;
			for (let i = 0;i < len; i++) {
				vm.list_post[i].time = vm.dateFormat(vm.list_post[i].time);
			}
			return vm.list_post;
		}
	},
	methods: {
		dateFormat: function(d){
			//该函数对服务器返回的消息时间进行格式化处理
			let date = new Date(d);
			let date_y = date.getFullYear();
			let date_m = date.getMonth();
			let date_d = date.getDate();
			return `${date_y}-${date_m}-${date_d}`;
		},
		pagechange: async function (page) {
			console.log(page);
			let vm = this;
			vm.pages.page = page;
			await getLatestList(vm.pages).then(res => {
				console.log(res.data);
				vm.list_post = res.data.data;
			});
		}
	},
	watch: {
	}
}
</script>
<style lang="less" scoped>
	@width-container:1000px;
	@width-left:760px;
	@width-right:240px;
	@space-between: 20px;
	
	#home {
		background-color: white;
		min-height: 600px;
	}
	#recommend {
		width: @width-container;
		margin: 0 auto;
		margin-bottom: @space-between;
	}

	#template {
		width: @width-container;
		margin: 0 auto;
		margin-bottom: @space-between;
		.template-latest {
			width: @width-left;
			float: left;

			h3 {
				width: 100%;
				margin-bottom: 15px;
			}
		}
		.template-rank {
			width: @width-right;
			float: right;

			h3 {
				width: 100%;
				margin-bottom: 15px;
			}
		}
	}

	#article {
		width: @width-container;
		margin: 0 auto;
		margin-bottom: @space-between;
		.article-latest {
			width: @width-left;
			float: left;

			h3 {
				width: 100%;
				margin-bottom: 15px;
			}
		}
		.article-rank {
			width: @width-right;
			float: right;

			h3 {
				width: 100%;
				margin-bottom: 15px;
			}
		}
	}

	.clearfix {
		display: block;
		zoom: 1;

		&:after {
			display: block;
			content: '';
			height: 0;
			visibility: hidden;
			clear: both;
		}
	}
</style>