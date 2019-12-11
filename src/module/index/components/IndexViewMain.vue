<template>
	<div class="view-main">
		<SiderNavBar></SiderNavBar>
		<div class="page-container">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import SiderNavBar from '@/components/index/IndexViewMainNavbar.vue'
export default {
	components: {
		SiderNavBar
	}
}
</script>
<style>
.main > .view-main {
	overflow-y: hidden;
}
.view-main > .page-container {
	float: left;
	width: calc(100% - 70px);
	padding-top: 20px;
	padding-left: 20px;	
	padding-right: 20px;
	margin-left: 70px;
}
@media screen and (min-width: 320px) and (max-width: 480px){
	.view-main > .page-container {
		width: 100%;
		padding:10px;
		margin-left: 0px;
	}
}
</style>