import React from 'react';
import { PersonalAccountContextProvider } from '../context/PersonalAccountContext';
import HomePage from '../components/HomePage/HomePage';

function Home() {
    return (
        <PersonalAccountContextProvider>
            <HomePage/>
        </PersonalAccountContextProvider>
    )
}

export default Home;
