import React, { useState } from 'react';
import styles from '../Auth.module.css';

function RegisterForm(props) {
  const {
    register
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    register({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation')
    });
  };

  return (
      <form className={styles['register-form']} onSubmit={handleSubmit}>
        <div className={styles['field-container']}>
            <label for="name"
                   className={styles['field-label']}>
                Имя пользователя
            </label>
            <input id="name"
                className={styles['field-control']}
                type="text"
                name="name"
                required
                autofocus>
            </input>
        </div>
        <div className={styles['field-container']}>
            <label for="email"
                   className={styles['field-label']}>
                Email
            </label>
            <input id="email"
                className={styles['field-control']}
                type="email"
                name="email"
                required>
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
        <div className={styles['field-container']}>
            <label for="password-confirm"
                   className={styles['field-label']}>
                Подтвердите пароль
            </label>
            <input id="password-confirm"
                className={styles['field-control']}
                type="password"
                name="password_confirmation"
                required>
            </input>
        </div>
        <button className={styles.btn}
                type="submit">
            Зарегистрироваться
        </button>
      </form>
  )
}

export default RegisterForm;
