import axios from 'axios'
import store from '@/store'
//创建 axios 实例
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 10000
})

service.interceptors.request.use(
    config => {
        store.dispatch('SetLoading',true)
        return config
    },
    error => {
        setTimeout(function () {
            store.dispatch('SetLoading',0)
        },300)
        console.log(error)
        Promise.reject(error)
    }
)
service.interceptors.response.use(
    response => {
        const res = response.data
        store.dispatch('SetLoading', false)
        return res
    },
    error => {
        return Promise.reject(error)
    }
)
export default service