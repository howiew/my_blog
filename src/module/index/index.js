import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from '@/module/index/route/index.js'
// import $http from '@/assets/js/http.js'
Vue.config.productionTop = false
Vue.use(VueRouter)
Vue.use({IndexVue})

const router = new VueRouter({
	mode: 'history',
	routes: routes,
	linkActiveClass: 'hasActive',
	scrollBehavor (to, from, savedPosition) {
	  //return 期望滚动到哪个位置
	  if (savedPosition){
	  	return savedPosition;
	  }else {
	  	return {x:0,y:0};
	  }
	}
})


const IndexVue = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
})
