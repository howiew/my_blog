//阻止事件冒泡
function stopBubble(event){
	window.event?window.event.cancelBubble=true:event.stopPropagation();
}
function dateFormat(date){
	let d = new Date(date);
	let d_y = d.getFullYear();
	let d_m = d.getMonth();
	let d_d = d.getDate();

	return `${d_y}-${d_m}-$(d_d)`;
}

