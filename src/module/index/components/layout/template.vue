<template>
	<div class="template clearfix">
		<div class="template-item" v-for="item in list_template" :key="2">
			<show-card :item="item"></show-card>
		</div>
	</div>
</template>
<script>
	import ShowCard from '@/module/index/components/cardModule/ShowCard.vue'
	export default {
		data() {
			return {
				list_template: [
				{
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
			ShowCard
		}
	}
</script>
<style lang="less" scoped>
    @main-widht: 160px;
    @main-height: 100px;

	.template {
		display: -webkit-flex;
		display: flex;
		
		.template-item {
			width: @main-width;
			width: @main-height;

			float: left;
		}
	}
	.clearfix {
		display: block;
		zoom: 1;

		&.after {
			content: " ";
			display: block;
			visibility: hidden;
			height: 0;
			font-size: 0;
			clear: both;
		}
	}
</style>