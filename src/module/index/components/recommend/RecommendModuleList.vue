<template>
	<div class="groom-module">
		<a href="#">
			<img :src="item.img_src" alt="" width="160" height="100">
		
			<div class="card-mark">
				<p class="title">{{item.title}}</p>
				<p class="author">UP主 : {{item.up_author}}</p>
				<p class="play">播放 : {{item.count}}</p>
			</div>
		</a>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			} 
		},
		props: ['item']
	}
</script>
<style scoped>
	.groom-module {
		float: left;
		width: 160px;
		height: 100px;
		position: relative;
		border-radius: 5px;
		overflow: hidden;
	}
	.card-mark {
		width: 160px;
		height: 100px;
		padding: 5px;
		position: absolute;
		top: 70px;
		left: 0;
		background-color: transparent;
	}
	.title {
		height: 40px;
		font-size: 16px;
		color: white;
		margin-bottom: 10px;
	}
	.author,
	.play {
		height: 20px;
		font-size: 12px;
		color: white;
		opacity: 0;
		transition: opacity .5s;
	}
	.groom-module:hover .card-mark {
		top: 0;
		cursor: pointer;
		background-color: rgba(0,0,0,.7)
	}
	.groom-module:hover .author,
	.groom-module:hover .play {
		opacity: 1;
	}
</style>