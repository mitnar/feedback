import React from 'react';
import { Link } from "react-router-dom";

function Main() {

  return (
      <section>
        <Link to="/login">Войти</Link>
        <Link to="/register">Зарегистрироваться</Link>
      </section>
  )
}

export default Main;
