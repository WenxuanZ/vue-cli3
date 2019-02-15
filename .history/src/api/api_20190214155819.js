import request from '@/utils/request'

export default {
    login (data) {
        return request({
            url: '/login',
            method: 'post',
            data
        })
    },
    getUserInfo () {
        return request({
            url: '/userinfo',
            method: 'get'
        })
    }
}