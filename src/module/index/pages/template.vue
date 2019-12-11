<template>
	<div id="template">
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
	</div>
</template>
<script>
import TemplateList from '@/module/index/components/templatelist/TemplateList'
import Pagination from '@/module/index/components/Pagination.vue'
import RankList from '@/module/index/components/common/rankList.vue'

export default {
	data() {
		return {
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
			}]
		}
	},
	components: {
		TemplateList,
		Pagination,
		RankList
	},
	created: function(){
		
	},
	computed: {
		
	},
	methods: {
		
		pagechange: async function (page) {
			console.log(page);
			let vm = this;
			vm.pages.page = page;
			await getLatestList(vm.pages).then(res => {
				console.log(res.data);
				vm.list_post = res.data.data;
			});
		}
	}
}
</script>
<style lang="less" scoped>
	@width-container:1000px;
	@width-left:760px;
	@width-right:240px;
	@space-between: 20px;
	
	#template {
		background-color: white;
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