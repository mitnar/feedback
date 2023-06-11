import React, { useContext, useState, useEffect } from 'react';
import LoginForm from '../components/Auth/Login/LoginForm';
import api from '../api';
import { useNavigate } from "react-router-dom";
import { FeedbackContext } from '../context/FeedbackContext';

function Home(props) {

const { loginRequest } = api;
const navigate = useNavigate();

const {
    checkAuth,
} = useContext(FeedbackContext);

const [authenticated, setAuthenticated] = useState(false);

useEffect(() => {
    const fetchAuth = async () => {
        const isAuthenticated = await checkAuth();
        setAuthenticated(isAuthenticated);
    };

    fetchAuth();
})

if(authenticated) {
    navigate('/home');
}

const login = (params) =>  {
    loginRequest(params).then(res => {
        if(res.status === 204) {
            navigate("/home");
        }
    })
}

  return (
      <section>
        <LoginForm login={login}/>
      </section>
  )
}

export default Home;
