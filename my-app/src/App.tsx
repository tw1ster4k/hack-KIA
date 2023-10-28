import React from 'react';
import { cn } from '@bem-react/classname';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Cabinet from './components/Cabinet/Cabinet';
import Registration from './components/Registration/Registration';
import Tests from './components/Tests/Tests';
import Test from './components/Test/Test';

function App() {
  const cnApp = cn("App")
  return (
    <div className={cnApp()}>
      <Header />
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<Login />} path='/login' />
        <Route element={<Cabinet />} path='/lk' />
        <Route element={<Registration />} path='/reg' />
        <Route element={<Tests />} path='/tests' />
        <Route element={<Test />} path='/tests/:id' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
