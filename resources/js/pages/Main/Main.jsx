import React from 'react';
import { Link } from "react-router-dom";
import styles from './Main.module.css';


function Main() {

  return (
      <section className={styles.main}>
        <Link to="/login"
              className={styles['main-link']}>
            Войти
         </Link>
        <Link to="/register"
              className={styles['main-link']}>
            Зарегистрироваться
        </Link>
      </section>
  )
}

export default Main;
