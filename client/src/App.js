import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Landing from './components/Landing/Landing';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing/>} />
      <Route path="/home" element={<h1>Home</h1>} />
    </Routes>
  );
}

export default App;
