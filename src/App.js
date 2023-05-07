

import React, { useState, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';

import FeedbackContextProvider from './context/FeedbackContextProvider';
function App() {

  return (
    <>
      <FeedbackContextProvider>
        <Header />
        <Landing />
      </FeedbackContextProvider>

    </>
  );
}

export default App;
