import Index from '@/module/index/pages/index'
import Template from '@/module/index/pages/template'
import Article from '@/module/index/pages/article'
import System from '@/module/index/pages/system'
import Mobile from '@/module/index/pages/mobile'
import ArticlePage from '@/module/index/pages/articlePage'

export default[
{
  path: '/',
  redirect: '/index' // 重定向路由
}, {
  path: '/index',
  component: Index
}, {
  path: '/template',
  component: Template
},{
  path: '/system',
  component: System
},{
  path: '/newArticle',
  component: Article
},{
  path: '/mobile',
  component: Mobile
},{
  path:'/article/:articleId',
  name: 'articlePage', 
  component: ArticlePage, 
  props: true
}]
