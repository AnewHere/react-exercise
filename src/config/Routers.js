/**
 * 路由配置文件
 */
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Home from '../components/Home';
import Product from '../components/Product';

export const logRouters = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Admin,
  }
];

//后台路由
export const mainRouters = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/product',
    component: Product
  }
];