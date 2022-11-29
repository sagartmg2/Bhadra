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
import ProtectedRoute from './component/ProtectedRoute';
import Create from './page/Product/Create';

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    let access_token = localStorage.getItem("access_token")
    if (access_token) {
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
    }
  }, []);

  // const [user, setUser] = useState(null) //{name;email,role}

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
              <Route path='create' element={<Create />} />
              <Route path=':id' element={<Show />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup email="em@em.com" />} />
            <Route  element={<ProtectedRoute role="buyer" />}>
              <Route path='orders' element={<h1>order page</h1>} />
              <Route path='cart' element={<h1>cart page</h1>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}