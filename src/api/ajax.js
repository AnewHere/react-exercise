import axios from 'axios';
import { message } from 'antd';

//axios实例，用于设置默认设置
const instance = axios.create({
  timeout: 5000
});


//封装axios函数
const ajax = (url, data, method) => {
  let promise;
  return new Promise((resolve, reject) => {
    if (method === "GET") {
      promise = instance.get(url, { params: data })
    } else if (method === "POST") {
      promise = instance.post(url, data);
    }
    promise.then(response => {
      resolve(response);
    }).catch(err => {
      message.error(err.message);
    });
  });
}

export default ajax;