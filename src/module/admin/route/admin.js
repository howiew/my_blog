
import dashBoard from '@/module/admin/components/AdminMainDashBoard.vue'
import articleAdmin from '@/module/admin/components/AdminMainArticle.vue'
import pictureAdmin from '@/module/admin/components/AdminMainPicture.vue'
import messageAdmin from '@/module/admin/components/AdminMainMessage.vue'
// import articleAdmin from '@/module/admin/pages/ArticleList' 
export default[
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
