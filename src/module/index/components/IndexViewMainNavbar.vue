<template>
  <nav class="navbar-sider">
      <router-link :to="{path:'/index'}">推荐</router-link>
      <router-link :to="{path:'/index/newArticle'}">最新</router-link>
      <router-link :to="{path:'/index/template'}">模版</router-link>
      <router-link :to="{path:'/index/mobile'}">移动</router-link>
      <router-link :to="{path:'/index/system'}">架构</router-link>
      <router-link :to="{path:'/index/other'}">其他</router-link>
  </nav>
</template>
<script>
	export default {

	}
</script>
<style scoped>
.navbar-sider {
  position: fixed;
  width: 60px;
  top: 70px;
  left: 10px;
  font-size: 0;
  border:1px solid #fff;
  border-radius: 5px;
  background-color: white;
}
.navbar-sider > a {
  display: block;
  padding: 10px;
  font-size: 12px;
  color: black;
  text-align: center;
  transition: background-color .7s;
}
.navbar-sider > a:hover {
  background-color: #00C1DE;
} 
.hasActive {
  background-color: #00C1DE;
} 
@media screen and (min-width: 320px) and (max-width: 480px){
  .navbar-sider {
    width: 100%;
    height: 40px;
    position: relative;
    top: 0;
    left: 0;
  }
  .navbar-sider > a {
    float: left;
  }
}

</style>