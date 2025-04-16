import axios from 'axios'
import type { LoginCredentials, LoginResponse } from '../types/account'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.lolgap.gg.oups.net',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Request interceptor for API calls
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor for API calls
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token')
            if (window.location.pathname !== '/auth') {
                window.location.href = '/auth'
            }
        }
        return Promise.reject(error)
    }
)

export default api 