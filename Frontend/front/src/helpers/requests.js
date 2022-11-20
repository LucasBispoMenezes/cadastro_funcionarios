import axios from 'axios'
import { getToken } from './sessionStorage.js'

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
})

export const requestLogin = async (url, body) => {
    try {
        return await instance.post(url, body)
    } catch (error) {
        return await error.response.data.message

    }
}

export const getUser = async (url) => {
    return await instance.get(url, {
        headers: {
            common: {
                Authorization: getToken()
            }
        }
    })
}

export const setTokenInRequest = (token) => {
    return instance.defaults.headers.common.authorization = token
}