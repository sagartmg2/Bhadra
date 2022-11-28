import './App.css';
import { useState } from "react"
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home';
import Show from './page/Product/Show';

export default function App() {


  const [search_term, setSearchTerm] = useState("");

  return (
    <div>
      <BrowserRouter>
        <Navbar setSearchTerm={setSearchTerm} search_term={search_term} />
        <div className='container'>
          <Routes>
            <Route path='' element={<Home search_term={search_term} />} />
            <Route path='products'>
              <Route index element={<Home search_term={search_term} />} />
              <Route path=':id' element={<Show />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup email="em@em.com" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
