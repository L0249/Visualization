
// 滚动索引
var index=0;
var imgs = document.getElementsByClassName("img");
var dots = document.getElementsByClassName("dots")[0];
var dotss = dots.children;

var len = imgs.length;  //图片张数
var timer = null; //定时器

dotss[0].className="active";

//改变图片
function ChangeImg() {
	index++;
	if(index>=len) index=0;

	// 循环将全部图片和圆点重置为默认样式
	for(var i=0; i<len; i++){
		imgs[i].style.display='none';
		
	}

	// 将当前图片显示
	imgs[index].style.display='block';
}

// 循环添加小圆点的触发事件
for(var i=0; i<len; i++){
	dotss[i].index = i;
	// 鼠标经过事件
	dotss[i].onmouseover = function(){
		for(var j=0; j<len; j++){
			imgs[j].style.display='none';
		}
		index = this.index;
	
		imgs[index].style.display='block';
	}
}

// 添加事件：鼠标移动到show上，暂停切换图片
show.onmouseover = function(){
	clearInterval(timer);
}
// 添加事件：鼠标移出show，开始切换图片
show.onmouseout = function(){
	timer = setInterval(ChangeImg,2000);
}

//设置定时器，每隔两秒切换一张图片
timer = setInterval(ChangeImg,2000);