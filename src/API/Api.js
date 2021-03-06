import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '449239c2-9e17-4da1-8175-11b81b35487a'
    }
})


export const getUsersAPI = (usersPageCount, usersPage) => {
    return instance.get(`users?count=${usersPageCount}&page=${usersPage}`).then((response) => response.data);
}

export const checkFollowAPI = (userId) => {
    return instance.get(`follow/${userId}`,).then((response) => response.data);
}

export const followAPI = (userId) => {
    return instance.post(`follow/${userId}`,).then((response) => response.data);
}

export const unfollowAPI = (userId) => {
    return instance.delete(`follow/${userId}`,).then((response) => response.data);
}

export const checkAuthAPI = () => {
    return instance.get('auth/me').then((response) => response.data);
}

export const getUserPageAPI = (userId) => {
    return instance.get(`profile/${userId}`).then((response) => response.data);
}

export const saveStatusAPI = (status) => {
    return instance.put(`profile/status`, {status}).then((response) => response.data);
}

export const loginAPI = (email, password, rememberMe) => {
    return instance.post(`/auth/login`, {email, password, rememberMe}).then((response) => response.data);
}

export const logoutAPI = () => {
    return instance.delete(`/auth/login`).then((response) => response.data);
}
