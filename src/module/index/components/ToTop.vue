<template>
	<div id="goTop" title="返回顶部" @click="goToTop" @scroll="scrollModule">
		<img src="">
	</div>
</template>
<script>
import $ from 'JQuery'
export default {
	data(){
		return {
			scrollTop
		}
	},
	methods:{
		scrollModule: function() {
		 let st = $('#goTop').scrollTop();
		 if(st >= 200) {
			//设置为显示
			$('#goTop').css('display','block');
		 }else {
		 	//否则为隐藏
		 	$('#goTop').css('display','hidden');
		 }
		},
		goToTop: function() {
			//set scrollTop value is 0
			$('#goTop').scrollTop(10);
		}

	}
}
</script>
<style>
#goTop {
	display: hidden;
	position: fixed;
	bottom: 120px;
	left: 50%;
	margin-left: 150px;
	opacity: 1;
	z-index: 9;
	cursor: pointer;
}
</style>