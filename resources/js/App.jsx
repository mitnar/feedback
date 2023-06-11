import React from 'react';
import { FeedbackContextProvider } from './context/FeedbackContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './pages/Main';
import Register from './pages/Register';
import Home from './pages/Home';
import styles from './App.module.css';

function App() {

  return (
      <FeedbackContextProvider>
        <main className={styles.main}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="register" element={<Register />}/>
                    <Route path="home" element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </main>
      </FeedbackContextProvider>
  )
}

export default App;
