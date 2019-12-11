<template>
	<div class="fixed-content" id="page_news">
		<div>
			<postList/>
		</div>
	</div>
</template>
<script>
	import PostList from '@/components/Index/IndexViewMainPostList.vue'
	import {getLatestList} from '@/assets/js/http.js'
	import Pagination from '@/components/common/Pagination.vue'
	export default {
		components: {
			PostList
		},
		created: function() {
			let res = getLatestList();
			console.log(res);
		}
	}
</script>
<style>
.main  .view-main  .fixed-content {
	width: 100%;
}	
</style>