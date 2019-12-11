<template>
	<div class="container" id="project">
		<div class="content">
			<templateList :list_template='list_template' />
			<navigator :count='30' :per='6' :cur='1' />
		</div>	
	</div>
</template>
<script>
import TemplateList from '@/components/Index/IndexViewMainTemplateList.vue'
import Pagination from '@/components/common/Pagination.vue'
import BreadCrumb from '@/components/common/BreadCrumb.vue'
import http from '@/assets/js/http.js'
export default {
	data(){
		return {
			list_template: [{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			},{
				title:'蓝色玫瑰',
				image_src: '/src/assets/image/wang.jpg',
				up_time: '2011-11-1',
				up_author: 'howie',
				count: '2220'
			}]
		}
	},
	components: {
		TemplateList,
		Pagination,
		BreadCrumb
	},
	created: function() {
		console.log(`enter into project-page`);
		// let vm = this;
		// http.getProjet();
	},
	methods: {

	}
}
</script>
<style>
	* {
		box-sizing: border-box;
	}
	.container {
		width: 780px;
		margin-right: auto;
		margin-left: auto;
		padding-right: 15px;
		padding-left: 15px;
	}
	.content {
		min-height: 500px;
		border-top: 1px solid transparent;
		background-color: white;
	}
</style>