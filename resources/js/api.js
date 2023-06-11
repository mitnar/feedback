import axios from 'axios';

export default {
    registerRequest(params) {
        return axios.post('/register', params);
    },

    loginRequest(params) {
        return axios.post('/login', params);
    },

    getAuthorizedUserRequest() {
        return axios.post('/checkAuth');
    }
}
