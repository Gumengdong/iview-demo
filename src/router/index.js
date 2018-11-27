import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import Welcome from '@/components/page/Welcome';
import User from '@/components/page/User';
import Role from '@/components/page/Role';
import Company from '@/components/page/Company';
import Msg from '@/components/page/Msg';
import Userinfo from '@/components/page/Userinfo';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'Welcome' }
    },
    {
      path: '/manage',
      name: 'Home',
      component: Home,
      meta: {
        title: '配置端'
      },
      children: [
        {
          path: '/manage',
          name: 'Welcome',
          component: Welcome,
          meta: {
            requireAuth: true,
            title: 'Home'
          }
        },
        {
          path: '/manage/user',
          name: 'User',
          component: User,
          meta: {
            requireAuth: true,
            title: '用户管理'
          }
        },
        {
          path: '/manage/role',
          name: 'Role',
          component: Role,
          meta: {
            requireAuth: true,
            title: '角色管理'
          }
        },
        {
          path: '/manage/company',
          name: 'Company',
          component: Company,
          meta: {
            requireAuth: true,
            title: '公司管理'
          }
        },
        {
          path: '/manage/msg',
          name: 'Msg',
          component: Msg,
          meta: {
            requireAuth: true,
            title: '消息'
          }
        },
        {
          path: '/manage/userinfo',
          name: 'Userinfo',
          component: Userinfo,
          meta: {
            requireAuth: true,
            title: '个人资料'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    }
  ]
})
