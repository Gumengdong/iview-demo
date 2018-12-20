// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import {getCookie} from './utils/utils.js';
import TreeTable from 'tree-table-vue';

require('./mock');

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueAxios, axios);
require('../mock');
Vue.use(TreeTable);

var getToken = getCookie("token");
/* vuex store */
const store = new Vuex.Store({
  state: {
    count: 0,
    token: (getToken == "null" ? "" : getToken),
    isLogin: (getToken == "null" ? 0 : 100)
  },
  mutations: {
    changeLogin(state, data) {
      state.token = getCookie("token");
      state.isLogin = data;
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
