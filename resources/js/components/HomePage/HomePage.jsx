import React, { useContext, useState, useEffect } from 'react';
import ClientRequests from '../ClientRequests/ClientRequests';
import { PersonalAccountContext } from '../../context/PersonalAccountContext';
import { FeedbackContext } from '../../context/FeedbackContext';
import Modal from '../Modals/Modal';
import CreateClientRequestModal from '../Modals/CreateClientRequest/CreateClientRequestModal';
import SetAnswerModal from '../Modals/SetAnswer/SetAnswerModal';
import api from '../../api';
import roles from '../../enums/roles';
import styles from '../../App.module.css';
import stylesHome from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [clientRequests, setClientRequests] = useState([]);
    const [isCreateRequestModal, setIsCreateRequestModal] = useState(false);

    const {
        clientRequestCreateRequest,
        clientRequestsGetAllRequest,
        setAnswerRequest
    } = api;

    const {
        isAnswerModal,
        setIsAnswerModal,
        currentAnswerRequestId
    } = useContext(PersonalAccountContext);

    const { authenticatedUser } = useContext(FeedbackContext);

    useEffect(() => {
        if(authenticatedUser) {
            switch(authenticatedUser.role) {
                case roles.CLIENT:
                    const newClientRequests = [...clientRequests, ...authenticatedUser.client_requests];
                    setClientRequests(newClientRequests);
                    break;
                case roles.MANAGER:
                    getAllClientRequests();
                    break;
            }
        }
    }, [authenticatedUser]);

    const { logoutRequest } = api;
    const navigate = useNavigate();

    const logout = () => {
        logoutRequest().then(res => {
            if(res.status === 204) {
                navigate('/');
            }
        })
    }

    const createClientRequest = (params) =>  {
        clientRequestCreateRequest(params).then(res => {
            if(res.status === 201) {
                const newClientRequests = [...clientRequests, res.data];
                setClientRequests(newClientRequests);
                setIsCreateRequestModal(false);
            }
        })
    }

    const getAllClientRequests = () => {
        clientRequestsGetAllRequest().then(res => {
            const newClientRequests = [...clientRequests, ...res.data];
            setClientRequests(newClientRequests);
        })
    }

    const setAnswer = (params) => {

        setAnswerRequest(currentAnswerRequestId, params).then(res => {
            const updatedRequest = res.data;

            const newClientRequests = clientRequests.map((request) => {
                if(request.id === updatedRequest.id) {
                    return {
                        ...request,
                        ...updatedRequest
                    }
                }
                return request;
            })

            setClientRequests(newClientRequests);
            setIsAnswerModal(false);
        })
    }

    let createRequestBtn = '';

    if(authenticatedUser && authenticatedUser.role === roles.CLIENT) {
        createRequestBtn = <button onClick={() => setIsCreateRequestModal(true)}
                                   className={styles.btn}>
                                Создать заявку
                            </button>
    }

    return (
        authenticatedUser && (
            <section>
                <div class={stylesHome['home-header']}>
                    {createRequestBtn}
                    <button onClick={logout}
                            className={styles.btn}>
                        Выйти
                    </button>
                </div>
                <Modal isOpen={isCreateRequestModal}
                    onClose={() => setIsCreateRequestModal(false)}>
                    <CreateClientRequestModal onSubmit={createClientRequest}/>
                </Modal>
                <Modal isOpen={isAnswerModal}
                        onClose={() => setIsAnswerModal(false)}>
                    <SetAnswerModal onSubmit={(params) => setAnswer(params)}/>
                </Modal>
                <ClientRequests clientRequests={clientRequests}/>
            </section>
        )
    );
}


export default HomePage;
