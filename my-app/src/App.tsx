import React from 'react';
import { cn } from '@bem-react/classname';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
      <Header />
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Login />} path='/login' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
