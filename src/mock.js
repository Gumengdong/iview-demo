//引入mockjs
const Mock = require('mockjs');
import {timestampToTime} from '@/utils/utils.js';
//使用mockjs模拟数据

var userData = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|8-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    "id|+1": 1,
    "username|+1": [
      "Make",
      "Jack",
      "Tom"
    ],
    "role|+1": [
      "1",
      "2"
    ],
    "headurl|+1": [
      "https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png",
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      "https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191",
      "https://panjiachen.github.io/vue-element-admin/static/img/401.089007e.gif"
    ],
    "phone|+1":[
      "13111111111",
      "13211111111",
      "13311111111"
    ],
    "company|+1": [
      "公司A",
      "公司B",
      "公司C"
    ],
    "bingwechat|+1": [
      true,
      false
    ],
    "date|+1":[
      timestampToTime(new Date() + 1000),
      timestampToTime(new Date() - 1000)
    ]
  }]
})

/* 图片懒加载 */
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