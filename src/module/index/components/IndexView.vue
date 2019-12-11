<template>
    <div class="main clearfix">
    	<SiderView></SiderView>
    	<MainView></MainView>
    </div>
</template>
<script>
	import MainView from '@/components/Index/IndexViewMain.vue'
	import SiderView from '@/components/Index/IndexViewSider.vue'
	export default {
		components: {
			MainView,
			SiderView
		}
	}
</script>
<style>
.main {
	width: 100%;
	position: relative;
	background-color: transparent;
	margin-right: auto;
	margin-left: auto;
	overflow-y: hidden;
}
</style>	