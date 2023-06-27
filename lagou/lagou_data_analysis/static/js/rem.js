
function init_v1_box() {
	let v1_box_data = echarts.init(document.getElementById('v1-box'));
	let data_1 = [];
	$.get("http://10.10.0.114:5000/index/data_name", function(res) {
		
		let option = {
			tooltip: {
				trigger: 'item'
			},
			legend: {
				top: 'top',
				left: 'center',
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				},
				x: '15%',
				y: 50,
			},
			series: [{
				name: '访问来源',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#aa00ff',
					borderWidth: 2
				},
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '30',
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: res.data
			}]
		};
		v1_box_data.setOption(option);
	})
}

function init_v2_box() {
	let v2_box_data = echarts.init(document.getElementById('v2-box'));
	let data_1 = [];
	$.get("http://10.10.0.114:5000/index/data_salary", function(res) {
		let option = {
			legend: {
				top: 'top',
				left: 'center',
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				},
			},
			toolbox: {
				show: true,
				feature: {
					mark: {
						show: true
					},
					dataView: {
						show: true,
						readOnly: false
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			series: [{
				name: '面积模式',
				type: 'pie',
				radius: [10, 100],
				center: ['50%', '50%'],
				roseType: 'area',
				itemStyle: {
					borderRadius: 10,
					borderColor: '#aa00ff',
					borderWidth: 2
				},
				data: res.data
			}]
		};
		v2_box_data.setOption(option);
	})
}

function init_v3_box() {
	let v3_box_data = echarts.init(document.getElementById('v3-box'));
	$.get("http://10.10.0.114:5000/index/data_edu", function(res) {
		
		names = [];
		value = [];
		
		for(index in res.data) {
			// console.log(res.data[index])
			names.push(res.data[index].name);
			value.push(res.data[index].max);
		}
		
		console.log(names)

		let option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: names
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: value,
        type: 'line',
        areaStyle: {}
    }]
};
		v3_box_data.setOption(option);
	})
}

function init_v4_box() {
	let v4_box_data = echarts.init(document.getElementById('v4-box'));
	var names_list = [];
	var values_list = [];
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_name",
		async:false,
		success:function(res) {
			for(index in res.data) {
				names_list.push(res.data[index].name)
			}
		},
		error:function() {
			alert("数据加载错误!!!")
		}
	})
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data",
		async:false,
		success:function(res) {
			values_list.push(res.data);
		},
		error:function() {
			alert("数据加载错误!!!")
		}
	})
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_web",
		async:false,
		success:function(res) {
			values_list.push(res.data);
		},
		error:function() {
			alert("数据加载错误!!!")
		}
	})
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_java",
		async:false,
		success:function(res) {
			values_list.push(res.data);
		},
		error:function() {
			alert("数据加载错误!!!")
		}
	})
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_C",
		async:false,
		success:function(res) {
			values_list.push(res.data);
		},
		error:function() {
			alert("数据加载错误!!!")
		}
	})
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_PHP",
		async:false,
		success:function(res) {
			values_list.push(res.data);
		},
		error:function() {
			alert("数据加载错误!!!")
		}
	})
	
	var dict = []
	
	for(i in names_list) {
		dict.push({"name":names_list[i],"value":0});
	}
	
	for(v in values_list) {
		dict[v].value = values_list[v];
	}
	
	
	let option = {
		title: {
			textStyle: {
				color: '#ffffff'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c}%"
		},
		toolbox: {
			feature: {
				dataView: {
					readOnly: false
				},
				restore: {},
				saveAsImage: {}
			}
		},
		legend: {
			data: names_list,
			top: 'bottom',
			left: 'center',
			textStyle: {
				color: '#ffffff',
				fontSize: 12
			},
		},

		series: [{
			name: '漏斗图',
			type: 'funnel',
			left: '10%',
			top: 60,
			//x2: 80,
			bottom: 60,
			width: '80%',
			// height: {totalHeight} - y - y2,
			min: 0,
			max: 100,
			minSize: '0%',
			maxSize: '100%',
			sort: 'descending',
			gap: 2,
			label: {
				show: true,
				position: 'inside'
			},
			labelLine: {
				length: 10,
				lineStyle: {
					width: 1,
					type: 'solid'
				}
			},
			itemStyle: {
				borderColor: '#fff',
				borderWidth: 1
			},
			emphasis: {
				label: {
					fontSize: 20
				}
			},
			data:dict
		}]
	};
	v4_box_data.setOption(option)
}

function init_v5_box() {
	let v5_box_data = echarts.init(document.getElementById('v5-box'));
	
	list_1 = []
	list_2 = []
	list_3 = []
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_name_desc",
		async:false,
		success:function(res) {
			list_1 = res.data;
		},
		error:function() {
			alert("数据请求失败！！！")
		}
	})
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_salary_desc",
		async:false,
		success:function(res) {
			list_2 = res.data;
		},
		error:function() {
			alert("数据请求失败！！！")
		}
	})
	
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_jinyan_desc",
		async:false,
		success:function(res) {
			list_3 = res.data;
		},
		error:function() {
			alert("数据请求失败！！！")
		}
	})

	let option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			feature: {
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		// legend: {
		// 	data: ['往届', '应届', '综合'],
		// 	left: 'center',
		// 	textStyle: {
		// 		color: '#ffffff',
		// 		fontSize: 12
		// 	},
		// },
		xAxis: [{
			type: 'category',
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
			axisPointer: {
				type: 'shadow'
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					color: '#ffffff'
				}
			}
		}],
		yAxis: [{
				type: 'value',
				name: '求职人数',
				min: 0,
				max: 250,
				interval: 50,
				axisLabel: {
					formatter: '{value} k',
					show: true,
					textStyle: {
						color: '#ffffff',
						fontSize: 12
					},
				},
				axisLine: {
					lineStyle: {
						color: '#ffffff'
					}
				}
			},
			{
				type: 'value',
				name: '温度',
				min: 0,
				max: 25,
				interval: 5,
				axisLabel: {
					formatter: '{value} °C'
				}
			}
		],
		series: [{
				// name: '往届',
				type: 'bar',
				data: list_1
			},
			{
				// name: '应届',
				type: 'bar',
				data: list_2
			},
			{
				// name: '综合',
				type: 'line',
				yAxisIndex: 1,
				data: list_3
			}
		]
	};
	v5_box_data.setOption(option)
}

function init_v6_box() {
	let v6_box_data = echarts.init(document.getElementById('v6-box'));
	
	list_1 = [];
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_name_desc",
		async:false,
		success:function(res){list_1.push(res.data)},
		error:function() {alert("数据请求失败1")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_salary_desc",
		async:false,
		success:function(res){list_1.push(res.data)},
		error:function() {alert("数据请求失败2")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_raozhi_desc",
		async:false,
		success:function(res){list_1.push(res.data)},
		error:function() {alert("数据请求失败3")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_jinyan_desc",
		async:false,
		success:function(res){list_1.push(res.data)},
		error:function() {alert("数据请求失败4")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_edu_desc",
		async:false,
		success:function(res){list_1.push(res.data)},
		error:function() {alert("数据请求失败5")}
	})
	
	console.log(list_1)
	
	let option = {
		color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
		title: {
			text: '2020年求职高峰期对比图',
			textStyle: {
				color: '#ffffff',
				fontSize: 12
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#6a7985'
				}
			}
		},
		legend: {
			data: ['python', 'java', 'web', 'c', 'php'],
			textStyle: {
				color: '#ffffff',
				fontSize: 12
			},
		},
		toolbox: {
			feature: {
				saveAsImage: {}
			}
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			boundaryGap: false,
			data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
			axisLabel: {
				show: true,
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					color: '#ffffff'
				}
			}
		}],
		yAxis: [{
			type: 'value',
			axisLabel: {
				show: true,
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				}
			},
			axisLine: {
				lineStyle: {
					color: '#ffffff'
				}
			}
		}],
		series: [{
				name: 'python',
				type: 'line',
				stack: '总量',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(128, 255, 165)'
					}, {
						offset: 1,
						color: 'rgba(1, 191, 236)'
					}])
				},
				emphasis: {
					focus: 'series'
				},
				data: list_1[0]
			},
			{
				name: 'java',
				type: 'line',
				stack: '总量',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(0, 221, 255)'
					}, {
						offset: 1,
						color: 'rgba(77, 119, 255)'
					}])
				},
				emphasis: {
					focus: 'series'
				},
				data: list_1[1]
			},
			{
				name: 'web',
				type: 'line',
				stack: '总量',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(55, 162, 255)'
					}, {
						offset: 1,
						color: 'rgba(116, 21, 219)'
					}])
				},
				emphasis: {
					focus: 'series'
				},
				data: list_1[2]
			},
			{
				name: 'c',
				type: 'line',
				stack: '总量',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(255, 0, 135)'
					}, {
						offset: 1,
						color: 'rgba(135, 0, 157)'
					}])
				},
				emphasis: {
					focus: 'series'
				},
				data: list_1[3]
			},
			{
				name: 'php',
				type: 'line',
				stack: '总量',
				smooth: true,
				lineStyle: {
					width: 0
				},
				showSymbol: false,
				label: {
					show: true,
					position: 'top'
				},
				areaStyle: {
					opacity: 0.8,
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(255, 191, 0)'
					}, {
						offset: 1,
						color: 'rgba(224, 62, 76)'
					}])
				},
				emphasis: {
					focus: 'series'
				},
				data: list_1[4]
			}
		]
	};
	v6_box_data.setOption(option);
}

function init_v7_box() {
	$.get("http://10.10.0.114:5000/locations", function(res) {
		let v7_box_data = echarts.init(document.getElementById('v7-box'));
		// console.log(res.data)
		data = []
		for(let i=0;i<34;i++) {
			data.push({"name":res.data[i].value,"value":res.data[i].name})
		}
		// console.log(data);
		var option = {
			title: {
				text: '全国岗位需求概览(单位:-(万))',
				subtext: '',
				x: 'left',
				textStyle: {
					color: '#ffffff',
					fontSize: 20
				},
			},
			tooltip: {
				trigger: 'item'
			},
		
			//图例
			visualMap: {
				show: true,
				x: 'left',
				y: 'bottom',
				splitList: [{
						start: 2500,
						end: 8000
					}, {
						start: 2000,
						end: 2500
					},
					{
						start: 1500,
						end: 2000
					}, {
						start: 1000,
						end: 1500
					},
					{
						start: 500,
						end: 1000
					}, {
						start: 0,
						end: 500
					},
				],
				color: ['#7400B8', '#6930C3', '#5390D9', '#48BFE3', '#64DFDF', '#80FFDB'],
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				},
			},
		
			//配置属性
			series: [{
				name: '数据',
				type: 'map',
				mapType: 'china',
				roam: true,
				label: {
					normal: {
						show: true //省份名称  
					},
					emphasis: {
						show: false
					}
				},
				data: data
			}]
		};
		v7_box_data.setOption(option)
	})
}

function totle() {
	var temp = 0;
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data",
		async:false,
		success:function(res) {
			temp = temp+res.data;
		},
		error:function() {alert("数据请求失败")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_web",
		async:false,
		success:function(res) {
			temp = temp+res.data;
		},
		error:function() {alert("数据请求失败")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_C",
		async:false,
		success:function(res) {
			temp = temp+res.data;
		},
		error:function() {alert("数据请求失败")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_java",
		async:false,
		success:function(res) {
			temp = temp+res.data;
		},
		error:function() {alert("数据请求失败")}
	})
	$.ajax({
		url:"http://10.10.0.114:5000/index/data_all_data_PHP",
		async:false,
		success:function(res) {
			temp = temp+res.data;
		},
		error:function() {alert("数据请求失败")}
	})
	$("#text").html(temp);
	
	
}

function init_all() {
	init_v1_box();
	init_v2_box();
	init_v3_box();
	init_v4_box();
	init_v5_box();
	init_v6_box();
	init_v7_box();
	totle();
}
window.onload = init_all;
