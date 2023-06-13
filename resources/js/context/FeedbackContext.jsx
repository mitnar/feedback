import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import api from '../api';

const FeedbackContext = React.createContext();

function FeedbackContextProvider(props) {

    const [authenticatedUser, setAuthenticatedUser] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    const { getAuthorizedUserRequest } = api(true);
    const navigate = useNavigate();
    const location = useLocation();

    const getAuthenticatedUser = async () => {
        try {
          const response = await getAuthorizedUserRequest();
          return response.data;
        } catch (error) {
          console.log('произошла ошибка');
          return null;
        }
    };

    useEffect(() => {
        const fetchAuthenticatedUser = async () => {
            const user = await getAuthenticatedUser();
            setAuthenticatedUser(user);

            if(user !== null) {
                navigate('/home');
            }
        };

        fetchAuthenticatedUser();

        return () => {
            setValidationErrors({});
        }
    }, [location.pathname])

    const value = {
        authenticatedUser,
        validationErrors,
        setValidationErrors
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
