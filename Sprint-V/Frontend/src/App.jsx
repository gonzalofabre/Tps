// import { useState } from 'react'
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import peek from "./utils/peek";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import sleep from './utils/sleep'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
