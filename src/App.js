import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import Quote from './components/pages/Quote';
import Home from './components/pages/Home';
import Nav from './components/pages/Nav';

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
