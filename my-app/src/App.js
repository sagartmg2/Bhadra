import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Fragment } from 'react';
import Card from "./Card"
import CustomButton, { Button2, Button33 } from "./Button"
import CustomNameCard from "./BigCard"
import Product from "./Product"
import Counter from './Counter';
import Count from './Count';
import SwtichExample from "./ReactSwitch.jsx"
import Table from "./Table"
import Todo from './Todo';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';

function App() {
  const [url, setUrl] = useState("todos");
  console.log("parent-render")
  return <>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to='/users'>users</Link></li>
          <li><Link to='/products'>products</Link></li>
          <li><Link to='/products/single-product-id'>single product</Link></li>
          <li><Link to='/orders'>orders</Link></li>
          <li><Link to='/login'>login</Link></li>
          <li><button>logout</button></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/users" element={<Count url="users" />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path="/orders" element={<h1>orders route</h1>} />
          <Route path="/products" >
            <Route index element={<Product />} />
            <Route path=":id" element={<h1>Show Single product
              {/* <Route path=":slug" element={<h1>Show Single product */}
            </h1>} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
  return <>




    <button onClick={() => setUrl("todos")}>fetch todos</button>
    <button onClick={() => setUrl("users")}>fetch users</button>

    <Count url={url} />
    {/* <Counter url={url} /> */}
  </>
  return <Todo />
  return <Table />

  return <>
    <SwtichExample />
    <Counter />
    <hr />
    <Count name="Hari" />

  </>
  return <>
    <Product name="product one" />
    {/* <Product name="product two" /> */}
  </>

  return (
    <div>
      <h1>app component</h1>
      <h1>app component</h1>
      product list
      <hr />

      <div className='d-flex'>

        {/* 
          displayProduct("one")
        */}
        {/*         
        {
          map
        } */}

        <Card name="one" />
        <Card name="two" />
        <Card />
        <Card />
        <Card />
        {/* <div className='card'>
          <p>name</p>
          <p>price</p>
          <p>stocke</p>
          <p>discounted price</p>
          <p>loream ipsume.... </p>
        </div>
        <div className='card'>
          <p>name</p>
          <p>price</p>
          <p>stocke</p>
          <p>discounted price</p>
          <p>loream ipsume.... </p>
        </div>
        <div className='card'>
          <p>name</p>
          <p>price</p>
          <p>stocke</p>
          <p>discounted price</p>
          <p>loream ipsume.... </p>
        </div> */}
      </div>
    </div>
  )
  return (
    // <>
    <React.Fragment>

      <div className='two'>
        hello world !!
      </div>
      <div>

        <Card />

        <CustomNameCard />


        {/* 
          function button(str){
            return <button>str</button
          }
          button("login")
        */}
        <CustomButton text="custom button" color="red" arr={[1, 2, 3]} obj={{ a: 1, b: 2 }} />
        <Button2 text="second button" />
        <Button33 />
      </div>
      {/* </> */}
    </React.Fragment>


  );
}

export default App;
// module.exports = App
// module.exports = App2 

/* 
  module.exports ={
    login,
    signup
  }
*/
