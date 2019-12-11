<template>
	<div class="card-module">
		<a href="#">
			<img :src="item.img_src" alt="" width="160" height="100">
			<div class="card-mark">
				<p class="title">{{item.title}}</p>
				<p class="author">{{item.up_author}}</p>
				<p class="play">{{item.count}}</p>
			</div>
		</a>
		
	</div>
</template>
<script>
	export default {
		props: ['item']
	}
</script>
<style lang="less" scoped>
	@main-width:170px;
	@main-height:100px;
	.card-module {
		display: block;
		width: @main-width;
		height: @main-height;
		border-radius: 5px;
		overflow: hidden;
		position: relative;
		img {
			width: @main-width;
		}
		.card-mark {
			width: @main-width;
			height: @main-height;
			padding: 5px;
			position: absolute;
			top: 70px;
			left: 0;
			background-color: transparent;

			.title {
				height: 40px;
				font-size: 16px;
				color: white;
				margin-bottom: 10px;
			}
			.author,
			.play {
				height:20px;
				font-size: 12px;
				color: white;
				opacity: 0;
				transition: opacity .5s;
			}
		}
		&:hover {
			.card-mark {
				top: 0;
				cursor: pointer;
				background-color: rgba(0,0,0,.7);
			}
			.author,
			.play {
				opacity: 1;
			}
		}
	}
</style>