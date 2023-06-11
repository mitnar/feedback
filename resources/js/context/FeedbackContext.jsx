import React, { useState } from 'react';

const FeedbackContext = React.createContext();

function FeedbackContextProvider(props) {

    //const [itemsInCart, setItemsInCart] = useState([]);

    const value = {
    };

    return (
        <FeedbackContext.Provider
            value={value}
        >
            {props.children}
        </FeedbackContext.Provider>
    );
}

export { FeedbackContext, FeedbackContextProvider };
