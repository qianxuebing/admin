import axios from 'axios'
import qs from 'qs'
import { promises } from 'fs';

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
})

// request interceptors
instance.interceptors.request.use(config => {
  let token = localStorage.getItem('token')
  if (token) {
    config.Token = token
  }
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, err => {
  return Promise.reject(err)
})

// response interceptors
instance.interceptors.response.use(res => {
  if (res.status !== 200) {
    return Promise.reject(res)
  }
  return res
}, err => {
  return Promise.reject(err)
})
