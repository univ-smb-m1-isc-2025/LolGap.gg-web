import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'api.lolgap.gg.oups.net',
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add a request interceptor to add the auth token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export { api } 