//引入mockjs
const Mock = require('mockjs');
const Random = Mock.Random
import {timestampToTime} from '@/utils/utils.js';
//使用mockjs模拟数据

/* 模拟登录 */
Mock.mock('/company/companyLogin', 'post', (options) => {
  // console.log(options.body);
  return {
    "msg": "cuser",
    "code": 200,
    "data": null
  }
});

/* 信息 */
Mock.mock('/company/info', 'get', (options) => {
  // console.log(options);
  return {
    "msg": "操作成功",
    "code": 200,
    "data": {
      "gender": 0,
      "mobile": "15766227558",
      "updateTime": 1515075450000,
      "type": "1000",
      "bindWechat": false,
      "createTime": 1515075450000,
      "name": "超级管理员",
      "enterpriseId": "1",
      "id": "1",
      "state": "enable",
      "email": "test"
    }
  }
});

var userData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|8-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    "id|+1": 0,
    // 属性 username 是一个随机字段
    "username|1": [
      "Make",
      "Jack",
      "Tom"
    ],
    "role|1": [
      "1",
      "2"
    ],
    "headurl|1": [
      "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png",
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      "https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191",
      "https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
    ],
    "phone|1":[
      "13111111111",
      "13211111111",
      "13311111111"
    ],
    "company|1": [
      "公司A",
      "公司B",
      "公司C"
    ],
    "bingwechat|1": [
      true,
      false
    ],
    "date": Random.datetime()
  }]
});

/* 用户列表 */
Mock.mock('/user/list', 'get', (options) => {
  // console.log(options);
  return {
    "msg": "操作成功",
    "code": 200,
    "data": {
      "offset": 0,
      "records": userData.list,
      "current": 1,
      "total": 50,
      "pages": 5,
      "size": 10,
    }
  }
});

var companyData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|8-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    "id|+1": 0,
    "address|+1": [
      "深圳南山",
      "广州白云",
      "北京朝阳"
    ],
    "logo|+1": ["http://platform.wookitech.com/manage/assets/img/logo.png"],

    "isVerified|+1": ["0","1"],
    "mobile|+1": [
      "13312121212",
      "13313131313",
      "13314141414",
      "13315151515"
    ],
    "type|+1":[
      "1000",
      "500",
      "400"
    ],
    "name|+1": [
      "阿里巴巴",
      "京东",
      "腾讯"
    ],
    "wechatId|+1": [
      "10561131338290421",
      "10513269847298134"
    ],
    "paymentnum|+1": [
      "10561131338290427",
      "10513269847213462"
    ],
    "email|+1": [
      "alibaba@aliyun.com",
      "tencent@qq.com"
    ],
    "status|+1": [0,1],
    "date|+1": [
      timestampToTime(new Date() + 1000),
      timestampToTime(new Date() - 1000)
    ]
  }]
});

/* 公司列表 */
Mock.mock('/company/list', 'get', (options) => {
  // console.log(options);
  return {
    "msg": "操作成功",
    "code": 200,
    "data": {
      "openSort": true,
      "offset": 0,
      "records": companyData.list,
      "offsetCurrent": 0,
      "searchCount": true,
      "asc": true,
      "current": 1,
      "total": 81,
      "pages": 9,
      "size": 10,
      "limit": 2147483647
    }
  }
});