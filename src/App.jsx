import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Catalogy from './components/Catalogy/Catalogy';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/catalogWrapper' element={<Catalogy/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;

