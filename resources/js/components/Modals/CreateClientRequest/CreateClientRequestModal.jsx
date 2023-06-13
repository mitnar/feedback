import React from 'react';
import styles from '../../../App.module.css';

function CreateClientRequestModal(props) {
    const {
        onSubmit
    } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        onSubmit(formData);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles['field-container']}>
              <label for="theme"
                     className={styles['field-label']}>
                  Тема
              </label>
              <input id="theme"
                  className={styles['field-control']}
                  type="text"
                  name="theme"
                  required
                  autofocus>
              </input>
          </div>
          <div className={styles['field-container']}>
              <label for="message"
                     className={styles['field-label']}>
                  Сообщение
              </label>
              <textarea id="message"
                  className={styles['field-control']}
                  name="message"
                  rows="6"
                  required>
              </textarea>
          </div>
          <div className={styles['field-container']}>
              <label for="file"
                     className={styles['field-label']}>
                Выберите файл
              </label>
              <input id="file"
                  className={styles['field-control']}
                  type="file"
                  name="file"
                  autofocus>
              </input>
          </div>
          <ValidationErrors errors={validationErrors}/>
          <div class={styles['form-actions']}>
            <button className={styles.btn}
                    type="submit">
                Сохранить
            </button>
          </div>
        </form>
    )

}

export default CreateClientRequestModal;

