// 适配设备

(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		var fs = 100 * (clientWidth / 750);
		fs > 100 ? fs = 100 : "";
		docEl.style.fontSize = fs.toFixed(2) + 'px';
		doc.getElementsByTagName("body")[0].style.opacity = "1";
		
		var oSearchbtn = doc.querySelector('.searchInput');
		if(oSearchbtn){
			oSearchbtn.addEventListener('touchstart',function(){
				window.location.href = '/medicine/search';
			},false);
		};
	};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
	
})(document, window);

