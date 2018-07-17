import qs from 'querystring';
import RNFetchBlob from 'rn-fetch-blob';
import httpConfig from '../../config/httpConfig.js';

const baseUrl = `${httpConfig.baseUrl}${!httpConfig.port?'':':'}${httpConfig.portv}${!httpConfig.prefix?'':'/'}${httpConfig.prefix}`

// 序列化成axios的res结构
const axiosResponse = async(res) => {
  if (!res) {
    return null
  };
  try {
    let newres = {};
    newres.status = res.respInfo.status;
    newres.url = res.respInfo.redirects[0];
    newres.headers = res.respInfo.headers;
    if(res.respInfo.status === 200 || res.respInfo.status === 304) {
      newres.data = (res.data === '') ? res.data : await JSON.parse(res.data);
    } else {
      newres.data = res.data;
    }
    return newres;
  } catch (error) {
    console.warn(error);
  }
};


export default class http {
  static async get(url, params, headers, callback) {
    try {
      let query = await qs.stringify(params)
      let task = null;
      if (!headers) {
        headers = {};
      }
      if (!params) {
        // 如果没有query形式参数
        task = RNFetchBlob.config({trusty : true}).fetch('GET', `${baseUrl}${url}`, headers)
      } else {
        // 如果有query形式参数
        task = RNFetchBlob.config({trusty : true}).fetch('GET', `${baseUrl}${url}?${query}`, headers);
      }
      if(callback){
        callback(task.cancel);
      }
      if (typeof headers !== "object") {
        headers(task.cancel);
      }
      const res = await task;
      checkTimeout(res);
      let newres = await axiosResponse(res); // 为了保持与pc端请求代码的兼容性，进行axios库返回代码格式的序列化
      return newres;
    } catch (error) {
      console.warn(error);
    }
  }
  static async post(url, params, headers, callback) {
    try {
      if (!headers) {
        headers = {};
      }
      headers['Accept'] = 'application/json';
      headers['Content-Type'] = 'application/json';
      const task = RNFetchBlob.config({trusty : true}).fetch('POST', `${baseUrl}${url}`, headers, JSON.stringify(params));
      if(callback){
        callback(task.cancel);
      }
      if (typeof headers !== "object") {
        headers(task.cancel);
      }
      const res = await task;
      checkTimeout(res);
      let newres = await axiosResponse(res); // 为了保持与pc端请求代码的兼容性，进行axios库返回代码格式的序列化
      return newres;
    } catch (error) {
      console.warn(error);
    }
  }
  static async fetchImg(url, ext) {
    try {
      if (!ext) {
        ext = 'jpg'
      } 
      res = await RNFetchBlob.config({trusty : true,fileCache:true,appendExt : ext}).fetch('GET', `${baseUrl}${url}`)
      if(res.respInfo.status === 200 || res.respInfo.status === 304) {
        return res.path();
      } else {
        return null
      }
    } catch (error) {
      console.warn(error);
    }
  }
}