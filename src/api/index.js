/**
 * 接口函数模块
 */
import ajax from './ajax';

const BASE = "http://localhost:3000"

//登陆接口函数
export const reqLog = (user) => ajax(BASE + '/api/login', user, "POST");

//商品列表接口
export const reqProduct = () => ajax(BASE + '/api/getProducts', {}, 'GET');