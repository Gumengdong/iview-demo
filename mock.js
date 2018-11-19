//引入mockjs
const Mock = require('mockjs')
/* 模拟登录 */
Mock.mock('/company/companyLogin', 'post', (options) => {
  // console.log(options.body);
  return {
    "msg": "cuser",
    "code": 200,
    "data": null
  }
});