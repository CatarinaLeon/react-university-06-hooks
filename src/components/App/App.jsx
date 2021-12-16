import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import React, { Component } from 'react'

import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Main />

      <ToastContainer theme="colored" />
    </div>
  );
};

export default App;
