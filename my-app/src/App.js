import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Fragment } from 'react';
import Card from "./Card"
import CustomButton, { Button2, Button33 } from "./Button"
import CustomNameCard from "./BigCard"
import Product from "./Product"

function App() {

  let products =
    [
      {
        name: "one"
      },
      {
        name: "two"
      }
    ]

  return <>
    <Product name="product one" />
    <Product name="product two" />
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
