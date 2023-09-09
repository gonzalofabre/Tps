// import { useState } from 'react'
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./components/Login/Login";
import peek from "./utils/peek";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import sleep from './utils/sleep'
const queryClient = new QueryClient()
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element= {<Register />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
