import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Fragment } from 'react';
import Card from "./Card"
import CustomButton, { Button2, Button33 } from "./Button"
import CustomNameCard from "./BigCard"
import Product from "./Product"
import Counter from './Counter';
import Count from './Count';

function App() {

  // // let arr = [oth, 1st, 2nd]
  // let arr = [1, 2, 3]
  // // console.log(arr[1]);
  // // console.log(arr[0]);


  // let products =
  //   [
  //     {
  //       name: "one"
  //     },
  //     {
  //       name: "two"
  //     }
  //   ]
  // // for (let i = 0; condition; i++) {
  // // for (let i = 0; i < 2; i++) {


  // for (let i = 1; i <= products.length; i++) {
  //   // console.log(i);
  //   console.log(products[i - 1].name);
  // }

  // let status = true

  // // setTimeout(() => {
  // //   status = false
  // //   console.log({ status });
  // // }, 2000)

  // console.log("Test");

  // let count = 0;

  // while (status) {
  //   console.log("do something");
  //   count++
  //   if (count > 10) {
  //     status = false
  //   }
  // }






  return <>

    <Counter />
    <hr />
    <Count />

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
