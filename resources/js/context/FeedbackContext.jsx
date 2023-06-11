import React from 'react';
import api from '../api';

const FeedbackContext = React.createContext();

function FeedbackContextProvider(props) {

    const { getAuthorizedUserRequest } = api;

    const checkAuth = async () => {
        try {
          const response = await getAuthorizedUserRequest('check-auth');
          return response.data.authenticated;
        } catch (error) {
          return false;
        }
    };

    const value = {
        checkAuth
    };

    return (
        <FeedbackContext.Provider
            value={value}
        >
            {props.children}
        </FeedbackContext.Provider>
    );
}

export { FeedbackContext, FeedbackContextProvider };
