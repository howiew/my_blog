<template>
  <div id="app">
    <VHead></VHead>
    <router-view></router-view>
    <VFoot></VFoot>   
  </div>
</template>
<script>
import VHead from '@/module/index/components/TheHeader.vue'
import VFoot from '@/module/index/components/TheFooter.vue'
export default {
  components:{
    VHead,
    VFoot
  }
}
</script>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
a {
	color: black;
	text-decoration: none;
}
a:hover {
	color: red;
}
li {
	list-style: none;
}
html,body {
	height: 100%;
}
body {
	position: relative;
}

.f_l {
	float: left;
}
.f_r {
	float: right;
}
.clearfix:after {
	content: '';
	height: 0;
	visibility: hidden;
	clear: both;
}
.text-ellipsis {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
}
</style>