
function setAjax(api) {
	
	$.ajax({
		// url:"http://10.10.0.114:5000/index/"+api,
		success:function() {
			// hideLoad(getEchartsObj(ids));
			init_t_1("word_cloud"+api);
			init_t_2("data_name"+api);
			init_t_3("data_salary"+api);
			init_t_4("data_edu"+api);
			init_t_5("all_map_data"+api);
			init_t_6("data_edu_desc"+api,"data_jinyan_desc"+api,"data_raozhi_desc"+api,"data_salary_desc"+api,"data_name_desc"+api);
			init_t_7("data_bar_workYear"+api);
			init_t_8("data_all_data"+api);
			init_t_9("data_bar"+api);
		},
		error:function() {
			alert("获取数据失败！");
		}
	})
}

// ajax点击事件
function eConsole(param) {
			if(param.name == "python") {
				setAjax("");
				$(".top-center h1").html(param.name+"就业分析");
			}
			if(param.name == "web") {
				setAjax("_web");
				$(".top-center h1").html(param.name+"就业分析");
			}
			if(param.name == "java") {
				setAjax("_java");
				$(".top-center h1").html(param.name+"就业分析");
			}
			if(param.name == "C++") {
				setAjax("_C");
				$(".top-center h1").html(param.name+"就业分析");
			}
			if(param.name == "PHP") {
				setAjax("_PHP");
				$(".top-center h1").html(param.name+"就业分析");
			}
		
		}
