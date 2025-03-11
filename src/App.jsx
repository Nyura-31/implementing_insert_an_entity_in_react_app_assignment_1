// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddBook from './components/AddBook';
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/   >}></Route>
        <Route path='/add-book' element={<AddBook/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

