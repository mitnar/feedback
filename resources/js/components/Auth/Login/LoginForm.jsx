import React, { useState, useContext } from 'react';
import styles from '../../../App.module.css';
import ValidationErrors from '../../ValidationErrors/ValidationErrors';
import { FeedbackContext } from '../../../context/FeedbackContext';

function LoginForm(props) {
  const {
    login
  } = props;

  const {
    validationErrors
  } = useContext(FeedbackContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    login({
        email: formData.get('email'),
        password: formData.get('password')
    });
  };

  return (
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <ValidationErrors errors={validationErrors}/>
        <div class={styles['form-actions']}>
            <button className={styles.btn}
                    type="submit">
                Войти
            </button>
        </div>
      </form>
  )
}

export default LoginForm;
