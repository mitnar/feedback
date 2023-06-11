import React, { useState } from 'react';
import styles from '../Auth.module.css';

function LoginForm(props) {
  const {
    login
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    login({
        email: formData.get('email'),
        password: formData.get('password')
    });
  };

  return (
      <form className={styles['register-form']} onSubmit={handleSubmit}>
        <div className={styles['field-container']}>
            <label for="email"
                   className={styles['field-label']}>
                Email
            </label>
            <input id="email"
                className={styles['field-control']}
                type="text"
                name="email"
                required
                autofocus>
            </input>
        </div>
        <div className={styles['field-container']}>
            <label for="password"
                   className={styles['field-label']}>
                Пароль
            </label>
            <input id="password"
                className={styles['field-control']}
                type="password"
                name="password"
                required>
            </input>
        </div>
        <button className={styles.btn}
                type="submit">
            Войти
        </button>
      </form>
  )
}

export default LoginForm;
