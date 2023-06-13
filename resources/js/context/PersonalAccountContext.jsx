import React, { useState, useEffect } from 'react';

const PersonalAccountContext = React.createContext();

function PersonalAccountContextProvider(props) {

    const [isAnswerModal, setIsAnswerModal] = useState(false);
    const [currentAnswerRequestId, setCurrentAnswerRequestId] = useState(null);

    const openAnswerModal = (clientRequestId) => {
        setIsAnswerModal(true);
        setCurrentAnswerRequestId(clientRequestId);
    }

    const value = {
        isAnswerModal,
        setIsAnswerModal,
        currentAnswerRequestId,
        setCurrentAnswerRequestId,
        openAnswerModal
    };

    return (
        <PersonalAccountContext.Provider
            value={value}
        >
            {props.children}
        </PersonalAccountContext.Provider>
    );
}

export { PersonalAccountContext, PersonalAccountContextProvider };
