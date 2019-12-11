<template>
	<div class="template-list clearfix">
		<div class="template-item" v-for="item in list_template" :key="2">
			<show-card :item="item"></show-card>
		</div>
	</div>
</template>
<script>
	import ShowCard from '@/module/index/components/cardModule/ShowCard170.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			ShowCard
		},
		props: ['list_template']
	}
</script>
<style lang="less" scoped>
    @main-width: 170px;


	.template-list {
		width: 760px;
		height: 220px;

		.template-item {
			width: @main-width;
			

			float: left;
			margin-right: 20px;
			margin-bottom: 20px;
		}
	}
	.clearfix {
		display: block;
		zoom: 1;

		&:after {
			content: " ";
			display: block;
			visibility: hidden;
			height: 0;
			font-size: 0;
			clear: both;
		}
	}
</style>