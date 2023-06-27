function init_t_3(res,div) {
	let t_3_data = echarts.init(div);
	var option = {
			// tooltip: {
			// 	trigger: 'item'
			// },
			legend: {
				top: '5%',
				left: 'center',
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				},
			},
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: 'dodgerblue',
					borderWidth: 2
				},
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '23',
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: res
			}],
		};
	
	
	
	t_3_data.setOption(option);
}

function init_t_4(res,div) {
	let t_4_data = echarts.init(div);
	data_list = []
	for (var i=0;i<res.length;i++) {
		data_list.push({"name":res[i].name,"max":4000})
	}
	data = []
	for (var i=0;i<res.length;i++) {
		data.push(res[i].max)
	}
	let option = {
		legend: {
			data: ['学历分析'],
			left: 'left',
			textStyle: {
				color: '#ffffff',
				fontSize: 12
			},
		},
		radar: {
			indicator: data_list
		},
		series: [{
			name: '学历分析',
			type: 'radar',
			data: [
				{
					value: data,
					name: '学历分析'
				},
			]
		}]
	};
	t_4_data.setOption(option);
}

function init_t_7(res,div) {
	let t_7_data = echarts.init(div);
	name_list = [];
	data_list = [];
	for (var i=0;i<res.length;i++) {
		name_list.push(res[i].name)
	}
	for (var i=0;i<res.length;i++) {
		data_list.push(res[i].value)
	}
	let option = {
		angleAxis: {
			type: 'category',
			data: name_list,
			axisLabel: {
				show: true,
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				}
			},
		},
		radiusAxis: {
		},
		polar: {
		},
		series: [{
			type: 'bar',
			data: data_list,
			coordinateSystem: 'polar',
			name: '所需工作经验统计',
			stack: 'a',
			emphasis: {
				focus: 'series'
			},
			color: '#00bbf9',
			
		},
		// {
		// 	type: 'bar',
		// 	data: [2, 4, 6, 1, 3],
		// 	coordinateSystem: 'polar',
		// 	name: 'B',
		// 	stack: 'a',
		// 	emphasis: {
		// 		focus: 'series'
		// 	},
		// 	color: '#00f5d4'
		// }, {
		// 	type: 'bar',
		// 	data: [1, 2, 3, 4, 1],
		// 	coordinateSystem: 'polar',
		// 	name: 'C',
		// 	stack: 'a',
		// 	emphasis: {
		// 		focus: 'series'
		// 	},
		// 	color: '#9b5de5'
		// },
		],
		legend: {
			show: true,
			data: ['A', 'B', 'C'],
			textStyle: {
				color: '#ffffff',
				fontSize: 12
			},
		}
	};
	t_7_data.setOption(option)
}

function init_t_9(res,div) {
	let t_9_data = echarts.init(div);
	data_list = [];
	name_list = [];
	for (var i=0;i<res.length;i++) {
		name_list.push(res[i].name)
	}
	for (var i=0;i<res.length;i++) {
		data_list.push(res[i].value)
	}
	let option = {
		grid: {
			left: '12%',
			top: '5%',
			bottom: '12%',
			right: '8%'
		},
		xAxis: {
			data: name_list,
		   axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 129, 109,.1)',
					width: 1 //这里是为了突出显示加上的
				}
			},
			axisLabel: {
				textStyle: {
					color: '#999',
					fontSize: 12
				}
			}
		},
		yAxis: [{
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'rgba(255, 129, 109, 0.1)',
						width: 1 //这里是为了突出显示加上的
					}
				},
				axisLabel: {
					textStyle: {
						color: '#999'
					}
				},
				splitArea: {
					areaStyle: {
						color: 'rgba(255,255,255,.5)'
					}
				},
				splitLine: {
					show: true,
					lineStyle: {
						color: 'rgba(255, 129, 109, 0.1)',
						width: 0.5,
						type: 'dashed'
					}
				}
			}
		],
		series: [{
			type: 'pictorialBar',
			barCategoryGap: '0%',
			symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
			label: {
				show: true,
				position: 'top',
				distance: 15,
				color: '#08DFFE',
				fontWeight: 'bolder',
				fontSize: 15,
			},
			itemStyle: {
				normal: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
								offset: 0,
								color:'#9A11FF'
							},
							{
								offset: 1,
								color:'#08DFFE'
							}
						],
						global: false //  缺省为  false
					}
				},
				emphasis: {
					opacity: 1
				}
			},
			data: data_list
		}]
	};
	t_9_data.setOption(option)
}



function init_all() {
	
	var ids=["map1","map2","map3","map4"];
	var ids2 = ["dot_img1","dot_img2","dot_img3","dot_img4"]
	getEchartsObj(ids);
	getEchartsObj(ids2);
	
	
    $.getJSON("/data_api",function(res) {
		
		hideLoad(getEchartsObj(ids));
		hideLoad(getEchartsObj(ids2));
		
		// Echartss.hideLoading();
		var map1 = document.getElementById("map1");
		var map2 = document.getElementById("map2");
		var map3 = document.getElementById("map3");
		var map4 = document.getElementById("map4");
		// console.log(map1);
		init_t_3(res.data.data_salary,map1);
		init_t_4(res.data.data_edu,map2);
		init_t_7(res.data.data_bar_workYear,map3);
		init_t_9(res.data.data_bar,map4);
		
		var echarts1 = document.getElementById("dot_img1");
		var echarts2 = document.getElementById("dot_img2");
		var echarts3 = document.getElementById("dot_img3");
		var echarts4 = document.getElementById("dot_img4");
		init_t_3(res.data.data_salary,echarts1);
		init_t_4(res.data.data_edu,echarts2);
		init_t_7(res.data.data_bar_workYear,echarts3);
		init_t_9(res.data.data_bar,echarts4);
	})
}
window.onload = init_all;

// myChart.showLoading({
//     text: 'loading',
//     color: '#4cbbff',
//     textColor: '#4cbbff',
//     maskColor: 'rgba(0, 0, 0, 0.9',
// });
// $.getJSON('/data_api').done(function (data) {
//     myChart.hideLoading();
//     myChart.setOption(...);
// });