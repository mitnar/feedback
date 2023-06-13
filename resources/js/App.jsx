import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import styles from './App.module.css';
import { FeedbackContextProvider } from './context/FeedbackContext';

function App() {

  return (
    <main className={styles.main}>
            <BrowserRouter>
                <FeedbackContextProvider>
                    <Routes>
                        <Route path="/" element={<Main />}/>
                        <Route path="home" element={<Home />}/>
                        <Route path="login" element={<Login />}/>
                    </Routes>
                </FeedbackContextProvider>
                <Routes>
                    <Route path="register" element={<Register />}/>
                </Routes>
            </BrowserRouter>
    </main>
  )
}

export default App;
