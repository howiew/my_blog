import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from '@/module/admin/route/index.js'
import * as $http from '@/http/http.js'
Vue.config.productionTop = true
Vue.use(VueRouter)
Vue.use({AdminVue})


const router = new VueRouter({
	mode:'history',
	routes:routes,
	base: 'admin.html'
})
//遍历路由
router.beforeEach((to,from,next) => {
	// const userInfo = localStorage.userinfo;
	let token = true;
	if (to.path== '/login') {
		next();
	}
	else {
		$http.getSession().then(res =>{
			res.data.code?next():next('/login');
		}).catch(e => {
			console.log(e);
		});
	}
});
const AdminVue = new Vue({
  el: '#app',
  template: '<App/>',
  components: {App},
  router
})



