<template>
	<aside class="view-aside">
		<NoticeList/>
		<!-- <SearchBar/> -->
		<RankList/>
	</aside>
</template>
<script>
	import NoticeList from '@/components/Index/IndexViewSiderNotice.vue'
	import RankList from '@/components/Index/IndexViewSiderRankList.vue'
	// import SearchBar from '@/components/Index/IndexViewSiderSearch.vue'

	export default {
		components: {
			NoticeList,
			RankList
			// SearchBar
		}
	}
</script>
<style>	

.view-aside {
	float: right;
	width: 320px;
	height: 400px;
	padding-right: 10px;
	padding-top: 20px;
}
@media screen and (min-width: 320px) and (max-width: 480px){
	.view-aside {
		display: none;
	}
}
</style>