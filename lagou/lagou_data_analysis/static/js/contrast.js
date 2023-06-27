function init_t_1() {
	$.get("http://120.79.136.233:10098/count_data",function(res){
		res = res.data.salary_count
		// console.log(res)
		let t_1_data = echarts.init(document.getElementById('t_1'));
		let option = {
		    tooltip: {
		        trigger: 'item'
		    },
		  //   legend: {
		  //       top: '5%',
		  //       left: 'center',
				// textStyle: {
				// 	color: '#ffffff',
				// 	fontSize: 12
				// },
		  //   },
		    series: [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius: ['40%', '70%'],
		            avoidLabelOverlap: false,
		            itemStyle: {
		                borderRadius: 10,
		                borderColor: '#aa55ff',
		                borderWidth: 2
		            },
		            label: {
		                show: false,
		                position: 'center'
		            },
		            emphasis: {
		                label: {
		                    show: true,
		                    fontSize: '20',
		                    fontWeight: 'bold'
		                }
		            },
		            labelLine: {
		                show: false
		            },
		            data: res
		        }
		    ]
		};
		t_1_data.setOption(option);
	})
}

function init_t_2() {
	list_1 = []
	list_2 = []
	name_list = []
	dsj_list = []
	qt_list = []
	$.ajax({
			url:"http://120.79.136.233:10098/index/data_salary",
			async:false,
			success:function(res){list_1.push(res.data)},
			error:function() {alert("数据请求失败1")}
		})
	$.ajax({
			url:"http://120.79.136.233:10098/count_data",
			async:false,
			success:function(res){list_2.push(res.data.salary_count)},
			error:function() {alert("数据请求失败2")}
		})
	// console.log(list_1[0])
	// console.log(list_2)
	for(let i in list_1[0]){
		// console.log(i)
		name_list.push(list_1[0][i].name)
		dsj_list.push(list_1[0][i].value)
	}
	for(let i in list_2[0]){
		// console.log(i)
		qt_list.push(list_2[0][i].value)
	}
	// console.log(name_list)
	// console.log(data_dsj)
	// console.log(data_qt)
	let t_2_data = echarts.init(document.getElementById('t_2'));
	var name = ["大数据", "其他"];
	var option = {
	    tooltip: {
	        trigger: 'item',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
	        },
	        textStyle: {
	            fontSize: 24
	        }
	    },
	    "legend": {
	        "left": "center",
	        "top": "5%",
	        "show": true,
	        "type": "scroll",
	        "data": name,
	        "itemWidth": 20,
	        "itemHeight": 15,
	        "itemGap": 30,
	        "textStyle": {
	            "fontSize": 20,
	            "color": "#fff",
	            "fontFamily": "Microsoft YaHei"
	        },
	    },
	    "grid": [{
	        "left": "10%",
	        "right": "53%",
	        "top": 60,
	        "bottom": "30"
	    }, {
	        "left": "47%",
	        "right": "10%",
	        "top": 60,
	        "bottom": "30"
	    }, {
	        "left": "0%",
	        "right": "0%",
	        "top": 0,
	        "bottom": "0"
	    }],
	    "xAxis": [{
	        "type": "value",
	        "gridIndex": 0,
	        "inverse": true,
	        "axisLine": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "red"
	            }
	        },
	        "splitLine": {
	            "show": false,
	            "lineStyle": {
	                "type": "dotted",
	                "color": "#ccc",
	                "width": 1
	            }
	        },
	        "axisTick": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "#fff"
	            }
	        },
	        "axisLabel": {
	            "show": false,
	            "fontFamily": "Microsoft YaHei",
	            "fontSize": 20,
	            "color": "fff",
	            "interval": "auto",
	            "rotate": "0",
	        },
	        "data": [],
	    }, {
	        "type": "value",
	        "gridIndex": 1,
	        "inverse": false,
	        "axisLine": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "red"
	            }
	        },
	        "splitLine": {
	            "show": false,
	            "lineStyle": {
	                "type": "dotted",
	                "color": "red",
	                "width": 1
	            }
	        },
	        "axisTick": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "red"
	            }
	        },
	        "axisLabel": {
	            "show": false,
	            "fontFamily": "Microsoft YaHei",
	            "fontSize": 12,
	            "color": "#fff",
	            "interval": "auto",
	            "rotate": "0"
	        },
	        "data": [],
	    }, {
	        "type": "value",
	        "gridIndex": 2,
	        "inverse": false,
	        "axisLine": { //只有这个
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "red"
	            }
	        },
	        "splitLine": {
	            "show": false,
	            "lineStyle": {
	                "type": "dotted",
	                "color": "#ccc",
	                "width": 1
	            }
	        },
	        "axisTick": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "red"
	            }
	        },
	        "axisLabel": {
	            "show": false,
	            "fontFamily": "Microsoft YaHei",
	            "fontSize": 12,
	            "color": "red",
	            "interval": "auto",
	            "rotate": "0"
	        },
	        "data": [],
	    }],
	    "yAxis": [{
	        "type": "category",
	        "axisLine": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "red"
	            }
	        },
	        "splitLine": {
	            "show": false,
	            "lineStyle": {
	                "type": "dotted",
	                "color": "#ccc",
	                "width": 1
	            }
	        },
	        "axisTick": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "#888888"
	            }
	        },
	        "axisLabel": {
	            "show": false ,
	            "fontFamily": "Microsoft YaHei",
	            "fontSize": 12,
	            "color": "#FFA880",
	            "interval": "auto"
	        },
	        "data": name_list,
	        "position": "right"
	    }, {
	        "type": "category",
	        "gridIndex": 1,
	        "axisLine": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "#888888"
	            }
	        },
	        "splitLine": {
	            "show": false,
	            "lineStyle": {
	                "type": "dotted",
	                "color": "#ccc",
	                "width": 1
	            }
	        },
	        "axisTick": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "#888888"
	            }
	        },
	        "axisLabel": {
	            "show": false,
	            "fontFamily": "Microsoft YaHei",
	            "fontSize": 12,
	            "color": "#fff",
	            "interval": "auto"
	        },
	        "data": [],
	
	    }, {
	        "type": "category",
	        "gridIndex": 2,
	        "axisLine": {
	            "show": false,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "#888888"
	            }
	        },
	        "splitLine": {
	            "show": false,
	            "lineStyle": {
	                "type": "dotted",
	                "color": "#ccc",
	                "width": 1
	            }
	        },
	        "axisTick": {
	            "show": true,
	            "lineStyle": {
	                "width": 1,
	                "type": "solid",
	                "color": "#888888"
	            }
	        },
	        "axisLabel": {
	            "show": true,
	            "fontFamily": "Microsoft YaHei",
	            "fontSize": 20,
	            "color": "#777575",
	            "interval": "auto"
	        }
	    }],
	    "series": [{
	        "colId": "col402utokg",
	        "name": name[0],
	        "type": "bar",
	        "data": dsj_list,
	        barWidth: 15,
	        color: '#00f3df',
	        "xAxisIndex": 0,
	        "yAxisIndex": 0,
	        itemStyle: {
	            normal: {
	                barBorderRadius: [10, 10, 10, 10],
	                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: 'rgba(43,163,205,1)'
	                    },
	                    {
	                        offset: 1,
	                        color: "rgba(43,163,205,0)"
	                    }
	                ])
	            }
	        },
	        "label": {
	            "position": "left",
	            "fontFamily": "Microsoft YaHei",
	            "show": true,
	            "fontSize": 20,
	            "color": "#fff"
	        }
	    }, {
	        "colId": "col3kkgr6h9",
	        "name": name[1],
	        "type": "bar",
	        "data": qt_list,
	        barWidth: 15,
	        color: '#01b3e0',
	        "xAxisIndex": 1,
	        "yAxisIndex": 1,
	        itemStyle: {
	            normal: {
	                barBorderRadius: [10, 10, 10, 10],
	                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
	                        offset: 0,
	                        color: "rgba(140,113,246,1)"
	                    },
	                    {
	                        offset: 1,
	                        color: "rgba(140,113,246,0)"
	                    }
	                ])
	            }
	        },
	        "label": {
	            "position": "right",
	            "fontFamily": "Microsoft YaHei",
	            "show": true,
	            "fontSize": 20,
	            "color": "#fff",
	
	        }
	    }],
	}
	t_2_data.setOption(option);
}

function init_t_3(t_3) {
	name_list = []
	data_list = []
	$.get("http://120.79.136.233:10098/count_data",function(res){
		res = res.data.edu_count
		// console.log(res)
		for(let i=0;i<res.length;i++){
			name_list.push(res[i].name)
			data_list.push(res[i].value)
		}
		let t_3_data = echarts.init(t_3);
		const man = data_list
		const total = [4000,4000,4000,4000,4000,4000,4000]
		  const indicator = [
		    {
		      name: name_list[0],
		      max: total[0],
		    },
		    {
		      name: name_list[1],
		      max: total[1],
		    },
		    {
		      name: name_list[2],
		      max: total[2],
		    },
		    {
		      name: name_list[3],
		      max: total[3],
		    },
		    {
		      name: name_list[4],
		      max: total[4],
		    },
		    {
		      name: name_list[5],
		      max: total[5],
		    },
			{
			  name: name_list[6],
			  max: total[6],
			}
		  ]
		option = {
		    tooltip: {
		      trigger: 'item',
		    },
		    // tooltip: {
		    //   trigger: 'item',
		    //   formatter: function (param) {
		    //     let html = '<div style="padding: 10px;border-right: 3px;background: rgba(127,122,122,0.4);"><div style="font-size: 14px;color: #FFF;">' + param.seriesName + '(' + param.name + ') </div>'
		    //     indicator.forEach((item, index) => {
		    //       html += '<div style="padding: 4px 0;font-size: 13px;color: #cee0f3;">' + item.name + '：' + param.value[index] + '人</div>'
		    //     })
		    //     html += '</div>'
		    //     return html
		    //   },
		    // },
		    color: ['#068AC3', '#B2782C'],
		
		    legend: {
		      icon: 'roundRect',
		      // left: '47%',
		      top: '90%',
		      show: true,
		      padding: [3, 5],
		      // right: '50',
		      y: '1',
		      center: 0,
		      itemWidth: 20,
		      itemHeight: 10,
		      itemGap: 26,
		      z: 3,
		      // orient: 'horizontal',
		      data: ['男', '女'],
		      textStyle: {
		        fontSize: 12,
		        color: '#F1F7FF',
		      },
		    },
		    radar: {
		      center: ['50%', '50%'], // 外圆的位置
		      radius: '55%',
		      name: {
		        textStyle: {
		          color: '#fff',
		          fontSize: 15,
		          fontWeight: 400,
		          fontFamily: 'PingFangSC-Regular,PingFang SC',
		          fontStyle: 'italic',
		        },
		      },
		      // TODO:
		      indicator: indicator,
		      splitArea: {
		        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
		        show: true,
		        areaStyle: {
		          // 分隔区域的样式设置。
		          color: ['#00224A', '#00224A', '#00224A', '#00224A', '#00224A'], // 画布颜色 // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
		        },
		      },
		      axisLine: {
		        // 指向外圈文本的分隔线样式
		        lineStyle: {
		          color: 'rgba(255,255,255,0.2)',
		        },
		      },
		      splitLine: {
		        lineStyle: {
		          type: 'solid',
		          color: ['#1781BA', '#1781BA'], // 分隔线颜色
		          width: 1, // 分隔线线宽
		        },
		      },
		    },
		    series: [
		      {
		        type: 'radar',
		        symbolSize: 5,
		        data: [
		          {
		            // TODO:
		            value: man,
		            name: '',
		            areaStyle: {
		              normal: {
		                color: {
		                  type: 'radial',
		                  x: 0.5,
		                  y: 0.5,
		                  r: 0.5,
		                  colorStops: [{
		                    offset: 0, color: 'rgba(46,203,255, 0.14)', // 0% 处的颜色
		                  },
		                  {
		                    offset: 0.15, color: 'rgba(46,203,255, 0.14)', // 100% 处的颜色
		                  },
		                  {
		                    offset: 0.75, color: '#057FB3', // 100% 处的颜色
		                  },
		                  {
		                    offset: 1, color: '#078DC6', // 100% 处的颜色
		                  }],
		                  global: false, // 缺省为 false
		                },
		              },
		            },
		            itemStyle: { // 折线拐点标志的样式。
		              normal: { // 普通状态时的样式
		                lineStyle: {
		                  width: 1,
		                },
		                opacity: 0.3,
		              },
		              emphasis: { // 高亮时的样式
		                lineStyle: {
		                  width: 5,
		                },
		                opacity: 0,
		              },
		            },
		          },
		        ],
		      }
		    ],
		  }
		t_3_data.setOption(option);
	})
}

function init_t_4() {
	data_llist = []
	$.get("http://120.79.136.233:10098/locations",function(res){
		res=res.data
		for(let i=0;i<34;i++) {
			data_llist.push({"name":res[i].value,"value":res[i].name})
		}
		console.log(res)
		let t_4_data = echarts.init(document.getElementById('t_4'));
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
						end: 10000
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
				data: data_llist
			}]
		};
		t_4_data.setOption(option);
	})
	
}

function init_t_5() {
	list_1 = []
	list_2 = []
	name_list = []
	dsj_list = []
	qt_list = []
	$.ajax({
			url:"http://120.79.136.233:10098/index/data_edu",
			async:false,
			success:function(res){list_1.push(res.data)},
			error:function() {alert("数据请求失败1")}
		})
	$.ajax({
			url:"http://120.79.136.233:10098/count_data",
			async:false,
			success:function(res){list_2.push(res.data.edu_count)},
			error:function() {alert("数据请求失败2")}
		})
	for(let i=0;i<list_1[0].length;i++){
		name_list.push(list_1[0][i].name);
		dsj_list.push(list_1[0][i].max);
	}
	for(let i=0;i<list_1[0].length;i++){
		qt_list.push(list_2[0][i].value)
	}
	let t_5_data = echarts.init(document.getElementById('t_5'));
	option = {
		title: {
			text: '学历需求对比',
			textStyle: {
				align: 'center',
				color: '#fff',
				fontSize: 12,
			},
			top: '5%',
			left: 'center',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				lineStyle: {
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0,
							color: 'rgba(0, 255, 233,0)'
						}, {
							offset: 0.5,
							color: 'rgba(255, 255, 255,1)',
						}, {
							offset: 1,
							color: 'rgba(0, 255, 233,0)'
						}],
						global: false
					}
				},
			},
		},
		grid: {
			top: '15%',
			left: '5%',
			right: '5%',
			bottom: '15%',
			// containLabel: true
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				show: true
			},
			splitArea: {
				// show: true,
				color: '#f00',
				lineStyle: {
					color: '#f00'
				},
			},
			axisLabel: {
				color: '#fff'
			},
			splitLine: {
				show: false
			},
			boundaryGap: false,
			data: name_list,
	
		}],
	
		yAxis: [{
			type: 'value',
			min: 0,
			// max: 140,
			splitNumber: 4,
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.1)'
				}
			},
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false,
				margin: 20,
				textStyle: {
					color: '#d1e6eb',
	
				},
			},
			axisTick: {
				show: false,
			},
		}],
		series: [{
				name: '注册总量',
				type: 'line',
				// smooth: true, //是否平滑
				showAllSymbol: true,
				// symbol: 'image://./static/images/guang-circle.png',
				symbol: 'circle',
				symbolSize: 25,
				lineStyle: {
					normal: {
						color: "#6c50f3",
						shadowColor: 'rgba(0, 0, 0, .3)',
						shadowBlur: 0,
						shadowOffsetY: 5,
						shadowOffsetX: 5,
					},
				},
				label: {
					show: true,
					position: 'top',
					textStyle: {
						color: '#6c50f3',
					}
				},
				itemStyle: {
					color: "#6c50f3",
					borderColor: "#fff",
					borderWidth: 3,
					shadowColor: 'rgba(0, 0, 0, .3)',
					shadowBlur: 0,
					shadowOffsetY: 2,
					shadowOffsetX: 2,
				},
				tooltip: {
					show: false
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(108,80,243,0.3)'
							},
							{
								offset: 1,
								color: 'rgba(108,80,243,0)'
							}
						], false),
						shadowColor: 'rgba(108,80,243, 0.9)',
						shadowBlur: 20
					}
				},
				data: qt_list
			},
			{
				name: '注册总量',
				type: 'line',
				// smooth: true, //是否平滑
				showAllSymbol: true,
				// symbol: 'image://./static/images/guang-circle.png',
				symbol: 'circle',
				symbolSize: 25,
				lineStyle: {
					normal: {
						color: "#00ca95",
						shadowColor: 'rgba(0, 0, 0, .3)',
						shadowBlur: 0,
						shadowOffsetY: 5,
						shadowOffsetX: 5,
					},
				},
				label: {
					show: true,
					position: 'top',
					textStyle: {
						color: '#00ca95',
					}
				},
	
				itemStyle: {
					color: "#00ca95",
					borderColor: "#fff",
					borderWidth: 3,
					shadowColor: 'rgba(0, 0, 0, .3)',
					shadowBlur: 0,
					shadowOffsetY: 2,
					shadowOffsetX: 2,
				},
				tooltip: {
					show: false
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(0,202,149,0.3)'
							},
							{
								offset: 1,
								color: 'rgba(0,202,149,0)'
							}
						], false),
						shadowColor: 'rgba(0,202,149, 0.9)',
						shadowBlur: 20
					}
				},
				data: dsj_list,
			},
		]
	};
	t_5_data.setOption(option);
}

function init_t_6() {
	name1_list = []
	data_list = []
	$.get("http://120.79.136.233:10098/count_data",function(res){
		res = res.data.jinyan_count
		
		for(let i=0;i<res.length;i++){
			name1_list.push(res[i].name)
			data_list.push(res[i].value)
		}
		// console.log(name1_list)
		let t_6_data = echarts.init(document.getElementById('t_6'));
		option = {
		    angleAxis: {
		        type: 'category',
		        data: name1_list,
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
		        name: '',
		        stack: 'a',
		        emphasis: {
		            focus: 'series'
		        },
				color: '#aa55ff',
		    }],
		    legend: {
		        show: true,
		        data: ['A', 'B', 'C'],
				left: 'left',
				textStyle: {
					color: '#ffffff',
					fontSize: 12
				}
		    }
		};
		t_6_data.setOption(option);
	})
}

function init_t_7(res) {
	$.get("http://120.79.136.233:10098/count_data",function(res){
		res = res.data.all_count
		let t_7_data = echarts.init(document.getElementById('t_7'));
		var dataArr = [{
		    value: res,
		    name: '已统计岗位数量'
		}];
		var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
		        offset: 0,
		        color: '#5CF9FE' // 0% 处的颜色
		    },
		    {
		        offset: 0.17,
		        color: '#468EFD' // 100% 处的颜色
		    },
		    {
		        offset: 0.9,
		        color: '#468EFD' // 100% 处的颜色
		    },
		    {
		        offset: 1,
		        color: '#5CF9FE' // 100% 处的颜色
		    }
		]);
		var colorSet = [
		    [0.91, color],
		    [1, '#15337C']
		];
		var rich = {
		    white: {
		        fontSize: 20,
		        color: '#fff',
		        fontWeight: '500',
		        padding: [-90, 0, 0, 0]
		    },
		    bule: {
		        fontSize: 30,
		        fontFamily: 'DINBold',
		        color: '#fff',
		        fontWeight: '700',
		        padding: [-90, 0, 0, 0],
		    },
		    radius: {
		        width: 350,
		        height: 80,
		        // lineHeight:80,
		        borderWidth: 1,
		        borderColor: '#0092F2',
		        fontSize: 40,
		        color: '#fff',
		        backgroundColor: '#1B215B',
		        borderRadius: 20,
		        textAlign: 'center',
		    },
		    size: {
		        height: 400,
		        padding: [80, 0, 0, 0]
		    }
		}
		let option = {
		    tooltip: {
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		
		    series: [{ //内圆
		            type: 'pie',
		            radius: '85%',
		            center: ['50%', '50%'],
		            z: 0,
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.RadialGradient(.5, .5, 1, [{
		                            offset: 0,
		                            color: 'rgba(17,24,43,0)'
		                        },
		                        {
		                            offset: .5,
		                            // color: '#1E2B57'
		                            color:'rgba(28,42,91,.6)'
		                        },
		                        {
		                            offset: 1,
		                            color: '#141C33',
		                            // color:'rgba(17,24,43,0)'
		                        }
		                    ], false),
		                    label: {
		                        show: false
		                    },
		                    labelLine: {
		                        show: false
		                    }
		                },
		            },
		            hoverAnimation: false,
		            label: {
		                show: false,
		            },
		            tooltip: {
		                show: false
		            },
		            data: [100],
		        },
		        {
		            type: 'gauge',
		            name: '外层辅助',
		            radius: '74%',
		            startAngle: '225',
		            endAngle: '-45',
		            splitNumber: '100',
		            pointer: {
		                show: false
		            },
		            detail: {
		                show: false,
		            },
		            data: [{
		                value: 1
		            }],
		            // data: [{value: 1, name: 90}],
		            title: {
		                show: true,
		                offsetCenter: [0, 30],
		                textStyle: {
		                    color: '#fff',
		                    fontStyle: 'normal',
		                    fontWeight: 'normal',
		                    fontFamily: '微软雅黑',
		                    fontSize: 20,
		                }
		            },
		            axisLine: {
		                show: true,
		                lineStyle: {
		                    color: [
		                        [1, '#00FFFF']
		                    ],
		                    width: 2,
		                    opacity: 1
		                }
		            },
		            axisTick: {
		                show: false
		            },
		            splitLine: {
		                show: true,
		                length: 20,
		                lineStyle: {
		                    color: '#051932',
		                    width: 0,
		                    type: 'solid',
		                },
		            },
		            axisLabel: {
		                show: false
		            }
		        },
		        {
		            type: 'gauge',
		            radius: '70%',
		            startAngle: '225',
		            endAngle: '-45',
		            pointer: {
		                show: false
		            },
		            detail: {
		                formatter: function(value) {
		                    var num = Math.round(value);
		                    return '{bule|' + num + '}{white|个}' + '{size|' + '}\n{radius|综合健康评分}';
		                },
		                rich: rich,
		                "offsetCenter": ['0%', "0%"],
		            },
		            data: dataArr,
		            title: {
		                show: false,
		            },
		            axisLine: {
		                show: true,
		                lineStyle: {
		                    color: colorSet,
		                    width: 25,
		                    // shadowBlur: 15,
		                    // shadowColor: '#B0C4DE',
		                    shadowOffsetX: 0,
		                    shadowOffsetY: 0,
		                    opacity: 1
		                }
		            },
		            axisTick: {
		                show: false
		            },
		            splitLine: {
		                show: false,
		                length: 25,
		                lineStyle: {
		                    color: '#00377a',
		                    width: 2,
		                    type: 'solid',
		                },
		            },
		            axisLabel: {
		                show: false
		            },
		        },
		        {
		            name: '灰色内圈', //刻度背景
		            type: 'gauge',
		            z: 2,
		            radius: '60%',
		            startAngle: '225',
		            endAngle: '-45',
		            //center: ["50%", "75%"], //整体的位置设置
		            axisLine: { // 坐标轴线
		                lineStyle: { // 属性lineStyle控制线条样式
		                    color: [
		                        [1, '#018DFF']
		                    ],
		                    width: 2,
		                    opacity: 1, //刻度背景宽度
		                }
		            },
		            splitLine: {
		                show: false
		            },
		            // data: [{
		            //     show: false,
		            //     value: '80'
		            // }], //作用不清楚
		            axisLabel: {
		                show: false
		            },
		            pointer: {
		                show: false
		            },
		            axisTick: {
		                show: false
		            },
		            detail: {
		                show: 0
		            }
		        },
		        {
		            name: "白色圈刻度",
		            type: "gauge",
		            radius: "60%",
		            startAngle: 225, //刻度起始
		            endAngle: -45, //刻度结束
		            z: 4,
		            axisTick: {
		                show: false
		            },
		            splitLine: {
		                length: 16, //刻度节点线长度
		                lineStyle: {
		                    width: 2,
		                    color: 'rgba(1,244,255, 0.9)'
		                } //刻度节点线
		            },
		            axisLabel: {
		                color: 'rgba(255,255,255,0)',
		                fontSize: 12,
		            }, //刻度节点文字颜色
		            pointer: {
		                show: false
		            },
		            axisLine: {
		                lineStyle: {
		                    opacity: 0
		                }
		            },
		            detail: {
		                show: false
		            },
		            data: [{
		                value: 0,
		                name: ""
		            }]
		        },
		        { //内圆
		            type: 'pie',
		            radius: '50%',
		            center: ['50%', '50%'],
		            z: 1,
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
		                            offset: 0,
		                            color: '#4978EC'
		                        },
		                        {
		                            offset: .5,
		                            color: '#1E2B57'
		                        },
		                        {
		                            offset: 1,
		                            color: '#141F3D'
		                        }
		                    ], false),
		                    label: {
		                        show: false
		                    },
		                    labelLine: {
		                        show: false
		                    }
		                },
		            },
		            hoverAnimation: false,
		            label: {
		                show: false,
		            },
		            tooltip: {
		                show: false
		            },
		            data: [100],
		        },
		    ]
		};
		t_7_data.setOption(option);
	})
}

function init_t_8() {
	list_name = []
	list_data = []
	$.get("http://120.79.136.233:10098/count_data",function(res){
		res = res.data.rozhi_count
		for(let i=0;i<res.length;i++){
			list_name.push(res[i].name)
			list_data.push(res[i].value)
		}
		let t_8_data = echarts.init(document.getElementById('t_8'));
		let option = {
		    grid: {
				left: '12%',
				top: '5%',
				bottom: '12%',
				right: '8%'
			},
		    xAxis: {
		        data: list_name,
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
						color: '#999',
						fontSize: 12
					}
				}
		    },
		    yAxis: [{
					splitNumber: 2,
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
		        name: 'hill',
		        type: 'pictorialBar',
		        barCategoryGap: '0%',
		        symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
		        label: {
					show: true,
					position: 'top',
					distance: 15,
					color: '#DB5E6A',
					fontWeight: 'bolder',
					fontSize: 20,
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
									color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
								},
								{
									offset: 1,
									color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
								}
							],
							global: false //  缺省为  false
						}
					},
					emphasis: {
						opacity: 1
					}
		        },
		        data: list_data,
		        z: 10
		    }]
		};
	
		t_8_data.setOption(option);
	})
}

function init_all() {
		init_t_1();
		init_t_2();
		var t = document.getElementById("t_3");
		init_t_3(t);
		init_t_4();
		init_t_5();
		init_t_6();
		init_t_7();
		init_t_8();
}

window.onload = init_all;