import React, { useState } from 'react';
import styles from './Modals.module.css';

function Modal(props) {
    const {
        isOpen,
        onClose
    } = props;

    return (
        isOpen && (
            <div className={styles.modal}>
                <div className={styles['modal-content']}>
                    <div className={styles['modal-close-container']}>
                        <button className={styles['modal-close-btn']} onClick={() => onClose()}>&times;</button>
                    </div>
                    {props.children}
                </div>
            </div>
        )
    );
}

export default Modal;
