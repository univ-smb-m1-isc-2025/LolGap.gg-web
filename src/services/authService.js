import api from './api';

const authService = {
    async login(username, password) {
        try {
            const response = await api.post('/login', {
                username,
                password,
            });
            console.log(response)
            if (response.data.token) {
                localStorage.setItem('jwt_token', response.data.token);
                this.setAuthHeader(response.data.token);
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('jwt_token');
        this.setAuthHeader(null);
    },

    setAuthHeader(token) {
        if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            delete api.defaults.headers.common['Authorization'];
        }
    },

    initializeAuth() {
        const token = localStorage.getItem('jwt_token');
        if (token) {
            this.setAuthHeader(token);
        }
    }
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401) {
            authService.logout();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default authService; 