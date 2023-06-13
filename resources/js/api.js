import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api = axios.create();

// Добавляем перехватчик ответов
api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log('обрабатываем ошибку');
    //   if(error.response.status === 401) { // не авторизован
    //     document.location.href('/');
    //   }
    }
  );

export default {
    registerRequest(params) {
        return api.post('/register', params);
    },

    loginRequest(params) {
        return api.post('/login', params);
    },

    logoutRequest() {
        return api.post('/logout');
    },

    getAuthorizedUserRequest() {
        return api.post('/getAuthorizedUser');
    },

    clientRequestCreateRequest(params) {
        return api.post('/clientRequests', params);
    },

    clientRequestsGetAllRequest() {
        return api.get('/clientRequests');
    },

    setAnswerRequest(id, params) {
        return api.post(`/clientRequests/${id}/setAnswer`, params);
    }
}
