import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
