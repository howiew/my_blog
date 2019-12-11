<tmeplate>
	<div>
		<div class="toolbar"></div>
		<div class="list-container">
			<div class="template" :class="{strip:isStrip,matrix:isMaxtrix}">
				<a href="#" class="img"></a>
				<div class="info"></div>
			</div>
		</div>
	</div>
</tmeplate>
<script>
	export default {
		data() {
			return {
				isStrip: false,
				isMaxtrix: true
			}
		}
	}
</script>
<style scope>
.list-container {
	width: 100%;
}
.template {
	;
}
.img-auchor {
	display: block;
}
.strip {
	margin-bottom: 30px;
}
.strip > .info {
	float: left;
}
.matrix {
	margin-right: 15px;
	margin-bottom: 30px;
}
.matrix > .info {
	;
}
.list-container:after {
	display: block;
	height: 0;
	content: '';
	visibility: hidden;
	clear: both;
}
</style>