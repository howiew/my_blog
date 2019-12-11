<template>
	<div id="app">
		<!-- <admin-main></admin-main> -->
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
import bootstrap from '@/assets/css/bootstrap.css'
import adminHead from '@/module/admin/components/TheHeader.vue'
import adminMain from '@/module/admin/components/AdminMain.vue'

import Login from '@/module/admin/pages/Login'
import Admin from '@/module/admin/pages/Admin'
export default {
  name: 'admin',
  components: {
  	adminHead,
  	adminMain,
  	Login
  }
}
</script>
<style type="text/css">
*{
	padding:0;
	margin:0;
	box-sizing: border-box;
}
html,body,#app{
	height: 100%; /*必须要给#app设置属性*/
}
.f-l{
	float:left;
}
.f-r{
	float: right;
}
</style>