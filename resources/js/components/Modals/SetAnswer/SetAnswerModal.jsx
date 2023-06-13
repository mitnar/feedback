import React from 'react';
import styles from '../../../App.module.css';

function SetAnswerModal(props) {
    const {
        onSubmit
    } = props;

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        onSubmit({
            answer: formData.get('answer'),
        });
      };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles['field-container']}>
              <label for="answer"
                     className={styles['field-label']}>
                  Ответ
              </label>
              <textarea id="answer"
                  className={styles['field-control']}
                  name="answer"
                  rows="6"
                  required>
              </textarea>
          </div>
          <button className={styles.btn}
                  type="submit">
              Сохранить
          </button>
        </form>
    )

}

export default SetAnswerModal;
