var items = document.querySelectorAll('.bg li');
var count = 0;
var length = items.length;

function change(num) {
	for (var i = 0; i < length; i++) {
		items[i].classList.remove('show')
	}
	items[num].classList.add('show')
}
change(count)
setInterval(function () {
	count++;
	if (count >= length) {
		count = 0;
	}
	change(count)
}, 8000)

var ditems = document.querySelectorAll('.c-container>div')
var divHeights = [];
/*计算divHeights的值方法*/
function getDivHeights () {
	for (var i = 0; i < ditems.length; i++) {
		divHeights[i] = ditems[i].offsetHeight;
	}
}
getDivHeights();/*初始化数组*/
/*窗口大小变化监听*/
window.addEventListener('resize', function () {
	/*得到最新的元素高度*/
	getDivHeights();// 提高性能可以使用防抖函数
})
/*滚动条事件*/
var navbar = document.querySelector('.navbar')
var dh = document.documentElement.clientHeight
/*滚动条监听*/
window.addEventListener('scroll', function () {
	var ds = document.documentElement.scrollTop || document.body.scrollTop;
	if (ds > getHeight(0)) {
		navbar.style.position = 'fixed';
	}else {
		navbar.style.position = 'absolute';
	}
	for(var i = 1;i < ditems.length; i++) {
		if(ds >= (getHeight(i-1)-20)) {
			ditems[i].classList.add('active')
			for (var o = 0; o < aitems.length; o++) {
				aitems[o].classList.remove('active')
				mitems[o].classList.remove('active')
			}
			if(i>=1){
				aitems[i-1].classList.add('active');
				mitems[i-1].classList.add('active');
			}
		}
	}
	try{
		navIcon.classList.remove('active')
	}catch {
		
	}
})
var aitems = document.querySelectorAll('.ul-nav li');
var mitems = document.querySelectorAll('.navM .nav-list');
var timers = null;
for (var i = 0; i < aitems.length; i++) {
	(function (j) {
		aitems[j].addEventListener('click', function () {
			for (var o = 0; o < aitems.length; o++) {
				aitems[o].classList.remove('active')
			}
			aitems[j].classList.add('active');
			var num = getHeight(j)
			mscrollTo(num)
		})
		mitems[j].addEventListener('click', function () {
			for (var o = 0; o < aitems.length; o++) {
				mitems[o].classList.remove('active')
			}
			mitems[j].classList.add('active');
			var num = getHeight(j)
			mscrollTo(num)
		})
	})(i)
}
/*计算滚动高度的方法*/
function getHeight(index) {
	var scrollHeight = 0;
	for (var i = 0; i <= index; i++) {
		scrollHeight += divHeights[i]
	}
	return scrollHeight
}
/*滚动到指定位置的方法*/
function mscrollTo(top) {
	if (timers) {
		clearInterval(timers)
	}
	var ds = document.documentElement.scrollTop || document.body.scrollTop;
	timers = setInterval(function () {
		ds += (top-ds)/5;
		window.scrollTo(0, ds)
		if (top > ds) {
			if (ds >= top-5) {
				window.scrollTo(0, top)
				clearInterval(timers)
			}
		} else{
			if (ds-5 <= top) {
				window.scrollTo(0, top)
				clearInterval(timers)
			}
		}
	}, 33)
}
/**/
var adMe = document.querySelector('.adMe');
adMe.addEventListener('click', function () {
	mscrollTo(dh)
})
var mrPro = document.querySelector('.mrPro');
mrPro.addEventListener('click', function () {
	mscrollTo(3*dh)
})


/*菜单按钮*/
var navIcon = document.querySelector('.nav-icon');
navIcon.addEventListener('click', function() {
	if (navIcon.classList.contains('active')) {
		navIcon.classList.remove('active')
	} else{
		navIcon.classList.add('active')
	}
})