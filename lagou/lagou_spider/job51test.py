import json
from urllib.request import urlopen
from lagou_spider.handle_insert_data import lagou_mysql
from urllib.parse import quote
import requests  # 数据请求
urls = 'http://api.map.baidu.com/geocoder/v2/'
output = 'json'
ak = 'XeCfCY777qDMTKSqyc3LTiGPnMA7fqzy'#你的ak
def getjwd(a):
    for i in a:
         add = quote(i)
         uri = urls + '?' + 'address=' + add  + '&output=' + output + '&ak=' + ak #百度地理编码API
         # print(uri)
         req = requests.get(uri)
         # print(req.read().decode('gbk'))
         req.encoding='gbk'
         temp = req.json()
         return temp['result']['location']['lng'],temp['result']['location']['lat']#打印出经纬度



import re  # 正则表达式模块
import json  # 序列化与反序列化模块
import pprint  # 格式化输出模块
import csv  # 保存CSV 数据


# f = open('前程无忧招聘数据.csv', mode='a', encoding='utf-8', newline='')
# csv_writer = csv.DictWriter(f, fieldnames=['标题', '公司名字', '城市', '薪资', '学历', '经验', '公司属性', '公司规模', '企业性质', '招聘发布日期', '公司详情页','招聘详情页', '公司福利', ])
# csv_writer.writeheader()  #写入表头数据
url = 'https://search.51job.com/list/000000,000000,0000,00,9,99,%25E8%25B0%25B7%25E6%25AD%258C,2,1.html?lang=c&postchannel=0000&workyear=99&cotype=99&degreefrom=99&jobterm=99&companysize=99&ord_field=0&dibiaoid=0&line=&welfare='
# 把代码进行伪装
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'
        }
response = requests.get(url=url, headers=headers)

# print(response.text)
# [] 表示列表
# {} 可能想到的是字典数据类型
html_data = re.findall('window.__SEARCH_RESULT__ =(.*?)</script>', response.text)[0]
json_data = json.loads(html_data)
# print(html_data)
# 把字符串数据类型 转为 字典数据类型 通过键值对取值方式提取想要的内容
# print(type(html_data))
# 字符串的时候 里面的引号是双引号  字典的时候变为单引号
# print(json_data)
# pprint.pprint(json_data['engine_jds'])
# 字典取值  根据冒号左边的内容 提取冒号右边的内容
for index in json_data['engine_jds']:
    # pprint.pprint(index)
    cs=index['workarea_text'].split("-")
    jwd=getjwd([cs[0]])

    cs1=''
    cs2=''
    if (len(cs)==2):
        cs1=cs[0]
        cs2=cs[1]
    else:
        cs1 = cs[0]
        cs2= cs[0]

    dit = {
        # 岗位ID,非空字段
        'positionId': index['jobid'],
        # 经度
        'longitude':jwd[0],
        # 纬度
        'latitude':jwd[1],
        # 岗位名称
        'positionName': index['job_name'],
        # 工作年限
        'workYear': index['attribute_text'][1],
        # 学历
        'education': index['attribute_text'][2],
        # 岗位性质
        'jobNature': index['job_title'],
        # 公司类型
        'financeStage': index['companyind_text'],
        # 公司规模
        'companySize': index['companysize_text'],
        # 业务方向
        'industryField': index['job_name'],
        # 所在城市
        'city': cs1,
        # 岗位标签
        'positionAdvantage': index['companytype_text'],

        # '公司详情页': index['company_href'],
        # '招聘详情页': index['job_href'],
        # 公司简称
        'companyShortName': index['company_name'],
        # 公司全称
        'companyFullName': index['company_name'],
        # 公司所在区
        'district': cs2,
        # 公司福利标签
        'companyLabelList': index['jobwelf'],
        # 工资
        'salary': index['providesalary_text'],
        # 抓取日期
        '招聘发布日期': index['issuedate'],
    }

    lagou_mysql.insert_item(dit)



