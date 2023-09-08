// import { useState } from 'react'
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./components/Login/Login";
import peek from "./utils/peek";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useCartStore} from './stores/useCartStore';
// import sleep from './utils/sleep'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element= {<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
