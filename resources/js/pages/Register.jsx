import React from 'react';
import RegisterForm from '../components/Register/RegisterForm';
import api from '../api';
import { useNavigate } from "react-router-dom";

function Register() {

  const { registerRequest } = api;
  const navigate = useNavigate();

  const register = (params) =>  {
    registerRequest(params).then(res => {
        if(res.status === 201) {
            navigate("/home");
        }
    })
  }

  return (
      <section>
        <RegisterForm register={register}/>
      </section>
  )
}

export default Register;
