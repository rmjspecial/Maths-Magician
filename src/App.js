import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Calculator from './components/Calculator.js';
import Quote from './components/pages/Quote.js';
import Home from './components/pages/Home.js';
import Nav from './components/pages/Nav.js';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>

  );
}

export default App;
