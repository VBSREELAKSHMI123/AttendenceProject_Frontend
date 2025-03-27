import axios, { InternalAxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080";
// const BASE_URL = "https://attendance.com/api";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const privateRequest = axios.create({
    baseURL: BASE_URL
})

privateRequest.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token")

    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})