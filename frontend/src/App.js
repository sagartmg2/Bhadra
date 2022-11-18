import './App.css';
import { useState } from "react"
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './page/Login';
import Signup from './page/Signup';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup email="em@em.com" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
