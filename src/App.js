import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Marial from './pages/Marial';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/marial' element={<Marial/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
