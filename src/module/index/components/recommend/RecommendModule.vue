<template>
	<div>
		<div class="carousel-module">
			<CarouselModule :list='carousel_list'></CarouselModule>
		</div>
		<div class="recommend-module">
			<RecommendList 
			:item='item' 
			v-for="item in recommend_list" 
			:key="1" 
			class="item_f"></RecommendList>
		</div>
	</div>
</template>
<script>
	import CarouselModule from '@/module/index/components/carousel/RecommendModuleCarousel'
	import RecommendList from '@/module/index/components/recommend/RecommendModuleList'
	export default {
		data() {
			return {
				carousel_list: [
				{
					id:'1001', 
					title: 'hellow world1',
					pic: '/src/assets/image/wang.jpg'
				},{
					id:'1002',
					title: 'hellow world2',
					pic: '/src/assets/image/wang.jpg'
				},{
					id:'1003',
					title: 'hellow world3',
					pic: '/src/assets/image/wang.jpg'
				}],
				recommend_list: [
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
			CarouselModule,
			RecommendList
		}
	}
</script>
<style scoped>
	.carousel-module, .recommend-module {
		float: left;
		height: 220px;
		overflow: hidden;
	}
	.carousel-module {
		width: 440px;
		position: relative;
	}
	.recommend-module {
		width: 540px;
	}
	.item_f {
		margin-bottom: 20px;
		margin-left: 20px;
	}
	.carousel-module:after, .recommend-module:after{
		display: inline-block;
		content: " ";
		height: 0;
		visibility: hidden;
		clear: both;
	}
</style>