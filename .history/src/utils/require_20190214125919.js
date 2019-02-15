import axios from 'axios'

//创建 axios 实例
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 10000
})