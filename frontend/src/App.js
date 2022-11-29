import './App.css';
import { useState, useEffect } from "react"
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home';
import Show from './page/Product/Show';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/slice/UserSlice';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.getItem("access_token")
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/get-user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(user_res => {
        console.log({ user_res })
        dispatch(setUser(user_res.data))
      }).catch(err => {
        console.log(err)
      })
  }, []);

  const [user, setUser] = useState(null) //{name;email,role}

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
            <Route path='orders' element={<h1>order page</h1>} />
            <Route path='cart' element={<h1>cart page</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
