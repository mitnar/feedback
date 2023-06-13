import React, { useContext } from 'react';
import styles from './ClientRequests.module.css';
import roles from '../../enums/roles';
import { PersonalAccountContext } from '../../context/PersonalAccountContext';
import { FeedbackContext } from '../../context/FeedbackContext';

function ClientRequestRow(props) {
    const {
        clientRequest
    } = props;

    const { openAnswerModal } = useContext(PersonalAccountContext);
    const { authenticatedUser } = useContext(FeedbackContext);

    let emailField = '';
    let actionsField = '';
    const actionsFieldClass = [styles['table-field'], styles['edit-field']];

    if(authenticatedUser && authenticatedUser.role === roles.MANAGER && clientRequest.user) {
        emailField = <td className={styles['table-field']}>{clientRequest.user.email}</td>

        actionsField = <td className={actionsFieldClass.join(' ')}>
            <button type="button"
                className={styles['edit-btn']}
                onClick={() => openAnswerModal(clientRequest.id)}>
            </button>
        </td>
    }

    let fileField = <td className={styles['table-field']}></td>

    if(clientRequest.file) {
        fileField = <td className={styles['table-field']}>
            <a href={clientRequest.file.url}>{clientRequest.file.title}</a>
        </td>
    }

    return (
        <tr>
            <td className={styles['table-field']}>{clientRequest.id}</td>
            <td className={styles['table-field']}>{clientRequest.theme}</td>
            <td className={styles['table-field']}>{clientRequest.message}</td>
            <td className={styles['table-field']}>{clientRequest.answer}</td>
            {emailField}
            {fileField}
            <td className={styles['table-field']}>{clientRequest.created_at}</td>
            {actionsField}
        </tr>
    )
}

export default ClientRequestRow;
