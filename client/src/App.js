import React from'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/index'
import Marketplace from './components/Marketplace';
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
