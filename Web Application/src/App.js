import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import DisplayItem from './pages/DisplayItem';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path="men" element={<DisplayItem/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
