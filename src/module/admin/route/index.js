import Login from '@/module/admin/Pages/Login.vue'
import Admin from '@/module/admin/Pages/Admin.vue'


import dashBoard from '@/module/admin/components/AdminMainDashBoard.vue'
import articleAdmin from '@/module/admin/components/AdminMainArticle.vue'
import pictureAdmin from '@/module/admin/components/AdminMainPicture.vue'
import messageAdmin from '@/module/admin/components/AdminMainMessage.vue'
export default [
	{
		path: '/login',
		name: 'login',
		component: Login
	},
	{
		path: '/admin',
		name: 'admin',
		component: Admin,
		children: [
		{
			path:'/dashboard',
			name:'dashbord',
			component:dashBoard
		},{
			path:'/article',
			name: 'articleAdmin',
			component:articleAdmin
		},{
			path:'/picture',
			name: 'pictureAdmin',
			component:pictureAdmin
		},
		{
			path:'/message',
			name:'messageAdmin',
			component:messageAdmin
		},
		{
			path:'/',
			redirect:'/dashboard'
		}]
	}
]