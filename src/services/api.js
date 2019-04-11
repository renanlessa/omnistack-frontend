import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rl-omnistack-backend.herokuapp.com',
});

export default api;