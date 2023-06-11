import React from 'react';
import { Link } from "react-router-dom";

function Main() {

  return (
      <section>
        <button type="button">Войти</button>
        <Link to="/register">Зарегистрироваться</Link>
      </section>
  )
}

export default Main;
