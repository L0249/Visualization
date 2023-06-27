
function showLoad(Echarts) {
	Echarts.showLoading({
    text: '数据加载中loading',
	textFontSize:30,
    color: '#4cbbff',
    textColor: '#4cbbff',
    maskColor: 'rgba(0, 0, 0, 0.9',
	});
}

function getEchartsObj(ids) {
	var EchartsObj = []
	for(obj in ids) {
		let Echartss = echarts.init(document.getElementById(ids[obj]));
		showLoad(Echartss);
		EchartsObj.push(Echartss);
	}
	
	return EchartsObj;
}

function hideLoad(echartsList) {
	for(index in echartsList) {
		echartsList[index].hideLoading();
	}
}