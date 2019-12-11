<template>
	<div class="main-container clearfix">
		<sider-bar></sider-bar>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
import siderBar from '@/module/admin/components/AdminMainSiderbar.vue'
export default {
	name: 'adminPanel',
	components: {
      siderBar
	}
}
</script>
<style type="text/css">
.main-container{
	width: 100%;
	height: 100%;
}
</style>