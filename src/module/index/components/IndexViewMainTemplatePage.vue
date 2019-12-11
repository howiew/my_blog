<template>
	<div class="fixed-content" id="page_template">
		<div class="template">
			<templateList :list_template='list_template'/>
		</div>
	</div>
</template>
<script>
	import TemplateList from '@/components/Index/IndexViewMainTemplateList.vue'
	export default {
		components: {
			TemplateList
		},
		data(){
			return {
				list_template:[{
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
		}
	}
</script>
<style>
.main > .view-main > .fixed-content {
	margin-left: 160px;
}	
</style>