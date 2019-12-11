<template>
	<div class="card-module">
		<a href="#">
			<img :src="item.img_src" alt="">
			<div class="card-mark">
				<p class="title">{{item.title}}</p>
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
	.card-module {
		display: block;
		width: @main-width;
		height: ;
		overflow: hidden;
		img {
			width: @main-width;
			height: 100px;
			transition: transform 2s;
		}
		.card-mark {
			width: @main-width;
			padding: 5px;
			background-color: white;

			.title {
				height: 18px;
				line-height: 18px;
				font-size: 16px;
				color: black;
				text-align: left;
				margin-bottom: 10px;
				margin-top: 10px;
			}
		}
		&:hover {
			img {
				transform: scale(1.2);
				transition: transform 2s;
			}
			.card-mark {
				.title {
					color: blue;
				}
			}
		}
	}
</style>