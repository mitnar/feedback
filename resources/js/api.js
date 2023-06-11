import axios from 'axios';

export default {
    registerRequest(params) {
        return axios.post('/register', params);
    },
}
