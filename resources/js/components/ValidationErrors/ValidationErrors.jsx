import React, { useState } from 'react';
import styles from './ValidationErrors.module.css';

function ValidationErrors(props) {
    const {
        errors
    } = props;

    return (
        <>
            {Object.keys(errors).length > 0 && (
                <div className="error-messages">
                    {Object.entries(errors).map(([field, messages]) => (
                        <ul key={field} className={styles['validation-list']}>
                            {messages.map((message, index) => (
                                <li key={index} className={styles['validation-message']}>{message}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            )}
        </>
    );
}

export default ValidationErrors;
