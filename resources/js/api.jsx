import React, { useContext } from 'react';
import axios from 'axios';
import { FeedbackContext } from './context/FeedbackContext';

const api = (noContext = false) => {
    const axiosApi = axios.create();

    let setValidationErrors = undefined;

    if(!noContext) {
        setValidationErrors = useContext(FeedbackContext).setValidationErrors;
    }

    // Добавляем перехватчик ответов
    axiosApi.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            console.log('обрабатываем ошибку');
            if(error.response.status === 422 && setValidationErrors) { // ошибки валидации
                console.log('Устанавливаем ошибки валидации')
                setValidationErrors(error.response.data.errors);
            }
        }
    );

    const httpRequests = {
        registerRequest(params) {
            return axiosApi.post('/register', params);
        },

        loginRequest(params) {
            return axiosApi.post('/login', params);
        },

        logoutRequest() {
            return axiosApi.post('/logout');
        },

        getAuthorizedUserRequest() {
            return axiosApi.post('/getAuthorizedUser');
        },

        clientRequestCreateRequest(params, config) {
            return axiosApi.post('/clientRequests', params, config);
        },

        clientRequestsGetAllRequest() {
            return axiosApi.get('/clientRequests');
        },

        setAnswerRequest(id, params) {
            return axiosApi.post(`/clientRequests/${id}/setAnswer`, params);
        }
    }

    return httpRequests;
}

export default api;
