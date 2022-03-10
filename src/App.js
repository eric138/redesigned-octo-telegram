import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import Monsters from './views/Monsters';
import MonsterStats from './views/MonsterStats';

import './components/component.css';

const App = () => {
  return(
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/monsters' element={<Monsters />} />
        <Route path='/monsters/:monsterIndex' element={<MonsterStats />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
