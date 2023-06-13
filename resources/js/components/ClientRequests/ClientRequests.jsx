import React, { useContext, useState } from 'react';
import ClientRequestRow from './ClientRequestRow';
import styles from './ClientRequests.module.css';
import { FeedbackContext } from '../../context/FeedbackContext';
import roles from '../../enums/roles';

function ClientRequests(props) {
    const {
        clientRequests
    } = props;

    const { authenticatedUser } = useContext(FeedbackContext);

    let emailHeader = '';
    let actionsHeader = '';

    if(authenticatedUser && authenticatedUser.role === roles.MANAGER) {
        emailHeader = <th className={styles['table-field']}>Email клиента</th>
        actionsHeader = <th className={styles['table-field']}>Действия</th>
    }

    const clientRequestRows = clientRequests.map(request => (
        <ClientRequestRow
            key={request.id}
            clientRequest={request}
        />
    ));

    return (
        {authenticatedUser} &&
        (   <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles['table-field']}>ID</th>
                            <th className={styles['table-field']}>Тема</th>
                            <th className={styles['table-field']}>Сообщение</th>
                            <th className={styles['table-field']}>Ответ от менеджера</th>
                            {emailHeader}
                            <th className={styles['table-field']}>Дата создания</th>
                            {actionsHeader}
                        </tr>
                    </thead>
                    <tbody>
                        {clientRequestRows}
                    </tbody>
                </table>
            </div>
        )
    )
}

export default ClientRequests;
