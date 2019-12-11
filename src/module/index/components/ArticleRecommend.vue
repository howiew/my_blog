<template>
	<div class="tuwen">
    <h3 class="tit">图文推荐</h3>
    <ul>
      <li><a href="/"><img src="/static/01.jpg"><b>主宰手机里面的</b></a>
        <p><span class="tulanmu"><a href="/">手机配件</a></span><span class="tutime">2015-02-15</span></p>
      </li>
       <li><a href="/"><img src="/static//01.jpg"><b>主宰手机里面的</b></a>
        <p><span class="tulanmu"><a href="/">手机配件</a></span><span class="tutime">2015-02-15</span></p>
      </li>
       <li><a href="/"><img src="/static//01.jpg"><b>主宰手机里面的</b></a>
        <p><span class="tulanmu"><a href="/">手机配件</a></span><span class="tutime">2015-02-15</span></p>
      </li>
       <li><a href="/"><img src="/static//01.jpg"><b>主宰手机里面的</b></a>
        <p><span class="tulanmu"><a href="/">手机配件</a></span><span class="tutime">2015-02-15</span></p>
      </li>
       <li><a href="/"><img src="/static//01.jpg"><b>主宰手机里面的</b></a>
        <p><span class="tulanmu"><a href="/">手机配件</a></span><span class="tutime">2015-02-15</span></p>
      </li>
       <li><a href="/"><img src="/static//01.jpg"><b>主宰手机里面的</b></a>
        <p><span class="tulanmu"><a href="/">手机配件</a></span><span class="tutime">2015-02-15</span></p>
      </li>
    </ul>
  </div>
</template>
<script>
	export default {

	}
</script>
<style type="text/css">
.tuwen {
	width: 100%;
	clear: both;
	overflow: hidden;
	margin: 20px 0
}
.tuwen li {
	overflow: hidden;
	clear: both;
	margin-bottom: 10px
}
.tuwen li img {
	width: 70px;
	float: left;
	margin-right: 15px
}
.tuwen li b {
	overflow: hidden;
	width: 100%;
	font-weight: normal;
	color: #333;
	font-size: 14px;
	line-height: 30px
}
.tuwen li span {
	color: #999;
	margin-right: 10px
}
.tuwen p {
	margin-top: 5px
}
.tulanmu {
	background: url(/static/lanmbq.png) no-repeat center left;
	padding-left: 17px
}
.tulanmu a {
	color: #999;
}
.tulanmu a:hover {
	color: #066
}
.tutime {
	background: url(/static/datepng.png) no-repeat left center;
	padding-left: 15px
}
.tuwen li:hover {
	background: #f4f3f3
}	
</style>