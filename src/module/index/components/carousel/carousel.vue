<template>
	<div class="carousel-box">
		<!-- carousel contents -->
		<div class="carousel-inner">
			<div class="item">
				<img src="" alt="">
				<div class="carousel-caption"></div>
			</div>
		</div>
		<!-- carousel content's title -->
		<div class="title"></div>
		<!-- carousel Indicators  -->
		<ol class="carousel-indicators">
			<li data-target="" data-slide-to="1" class="active"></li>
			<li data-target="" data-slide-to="2"></li>
			<li data-target="" data-slide-to="3"></li>
			<li data-target="" data-slide-to="4"></li>
		</ol>

	</div>
</template>
<script>
	import jq from '@/assets/js/jquery-3.4.1.min.js'
	export default {
		data(){
			return {
				paused: null,
				$items: null,
				$indicators: null,
				interval: null,
				$active: null

			}
		},
		props: ['list'],
		methods: {
			cycle: function (e) {

			},
			getItemIndex:function (item) {
				this.$items = item.parent().child('.item');
				return this.$items.index(item || this.$active);
			},
			getItemForDirection: function (item) {
				let activeIndex = this.getItemIndex(active);
				let willWrap = (direction == 'prev' && active === 0)
							|| (direvtion == 'next' && active == (this.$items.length - 1));
				if (willWrap && !this.options.wrap) {
					return active;
				}

				let delta = direction == 'prev' ? -1 : 1;
				let itemIndex = (activeIndex + delta) % this.$items.length;
				return this.$items.eq(itemIndex);
			},
			to: function () {

			},
			pause: function () {
				e || (this.paused == false);


			},
			next: function () {

			},
			prev: function () {

			},
			to: function () {

			},
			slide: function () {
				let $active   = this.$element.find('.item.active');
				let $next     = next || this.getItemForDirection(type, $active);
				let isCycling = this.interval;
				let direction = type == 'next'? 'left' : 'right';
				let that      = this;

				if ($next.hasClass('active')) return (this.sliding = false);

				let relatedTarget = $next[0];
			}
		}
	}
</script>
<style lang="less" scoped>
	.carousel-box {
		width: 440px;
		position: relative;
	}
	.carousel-inner {
		width: 440px;
		height: 200px;
		overflow: hidden;
	}
	.carousel-inner > .item {
		width: 440px;
		height: 200px;
		float: left;
	}
	.title {
		width: 440px;
		height: 50px;

		position: absolute;
		bottom: 0;
		background-color: transparent;
	}
	.carousel-indicators {
		position: absolute;
		bottom: 0;
		left: 0;
	}
	.carousel-indicators > li {
		width: 18px;
		height: 18px;
		border-radius: 9px;
		background-color: white;
	}
	.carousel-indicators > li:hover {
		background-color: blue;
	}
</style>