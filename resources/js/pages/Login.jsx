import React, { useContext, useState, useEffect } from 'react';
import LoginForm from '../components/Auth/Login/LoginForm';
import api from '../api';
import { useNavigate } from "react-router-dom";

function Login(props) {

const { loginRequest } = api();
const navigate = useNavigate();

const login = (params) =>  {
    loginRequest(params).then(res => {
        if(res.status === 204) {
            navigate("/home");
        }
    });
}

  return (
      <section>
        <LoginForm login={login}/>
      </section>
  )
}

export default Login;
