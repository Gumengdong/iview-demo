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
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'Welcome',
          component: Welcome,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/user',
          name: 'User',
          component: User,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/role',
          name: 'Role',
          component: Role,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/company',
          name: 'Company',
          component: Company,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/msg',
          name: 'Msg',
          component: Msg,
          meta: {
            requireAuth: true,
          }
        },
        {
          path: '/home/userinfo',
          name: 'Userinfo',
          component: Userinfo,
          meta: {
            requireAuth: true,
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
