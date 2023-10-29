import React from 'react';
import { cn } from '@bem-react/classname';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Cabinet from './components/Cabinet/Cabinet';
import Registration from './components/Registration/Registration';
import Tests from './components/Tests/Tests';
import Test from './components/Test/Test';
import Introduction from './components/Introduction/Introduction';
import CreateTest from './components/CreateTest/CreateTest';
import Tarifs from './components/Tarifs/Tarifs';

function App() {
  const cnApp = cn("App")
  const navigate = useNavigate()
  window.onload = () => {
    const loaded = sessionStorage.getItem('loaded')
      if(loaded){
        console.log("AAAA")
          navigate('/')
      }else{
        //@ts-ignore
        sessionStorage.setItem('loaded', true)
      }
  }
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
        <Route element={<Introduction />} path='/intro' />
        <Route element={<CreateTest />} path='/tests/create' />
        <Route element={<Tarifs />} path='/tarifs' />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
