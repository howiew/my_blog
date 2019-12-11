<template>
	<swiper :options="swiperOption" ref="mySwiper" @onmouseover="stop" @onmouseout="start">
    <!-- slides -->
	    <swiper-slide v-for="(slide, index) in list" :key="index">
	    	<a href="#"><img :src="slide.pic" alt="slide.title" class="slide-img"></a>
	    	
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
	    <div class="swiper-button-next" slot="button-next"></div> -->
	    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data(){
			return {
				swiperOption: {
					pagination: {
			            el: '.swiper-pagination',
			            type: 'bullets'
			        },
			        autoplay: {
			        	delay: 2500,
			        	disableOnInteraction: false
			        }
				},
				autoplayDisableOnInteraction : false
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		computed: {
			swiper() {
		        return this.$refs.mySwiper.swiper
		    }
		},
		mounted() {
	      // current swiper instance
	      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
	      console.log('this is current swiper instance object', this.swiper)
	      this.swiper.slideTo(3, 1000, false)
	    },
		props: ['list'],
		methods: {
			start: function () {
				console.log('start');
				this.swiper.startAutoplay();
			},
			stop: function () {
				console.log('stop');
				this.swiper.stopAutoplay();
			}
		}
	}
</script>
<style scoped>
	.carousel-box {
		width: 100%;
	}
	.slide-img {
		width: 100%;
		height: 220px;
	}
</style>