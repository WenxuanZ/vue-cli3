import axios from 'axios'

//创建 axios 实例
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        return res
    },
    error => {
        return Promise.reject(error)
    }
)
