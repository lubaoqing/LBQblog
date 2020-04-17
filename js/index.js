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

/*滚动条事件*/
var navbar = document.querySelector('.navbar')
var dh = document.documentElement.clientHeight
var ditems = document.querySelectorAll('.c-container>div')

window.addEventListener('scroll', function () {
	var ds = document.documentElement.scrollTop || document.body.scrollTop;
	if (ds > dh) {
		navbar.style.position = 'fixed';
	}else {
		navbar.style.position = 'absolute';
	}
	for(var i = 0;i < ditems.length; i++) {
		if(ds >= (i * dh)-80) {
			ditems[i].classList.add('active')
			for (var o = 0; o < aitems.length; o++) {
				aitems[o].classList.remove('active')
			}
			if(i>=1){
				aitems[i-1].classList.add('active');
			}
		}
	}
})

var aitems = document.querySelectorAll('.ul-nav li');
var timers = null;
for (var i = 0; i < aitems.length; i++) {
	(function (j) {
		aitems[j].addEventListener('click', function () {
			for (var o = 0; o < aitems.length; o++) {
				aitems[o].classList.remove('active')
			}
			aitems[j].classList.add('active');
			var num = (j+1) * dh
			mscrollTo(num)
		})
	})(i)
}

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