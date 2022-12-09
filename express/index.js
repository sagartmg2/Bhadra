

// import  express from "expres" // es6 module system
const express = require("express") // common js  module
// const path = require("path")
// const fs = require("fs")
const mongoose = require('mongoose');
const app = express();
app.use(express.json());  // gloal middleware. 

mongoose.set('strictQuery', false);


/* 

    middleware
        - functions in route 
        - which has access / modification-aceess  to request and response
    
     - global middleware
     - local middleware
     - third party middleware. 

    -next  in middlware. 
        - next function calls the next valid route in line

*/
// app.use(middleware)  
// app.use((req, res, next) => {
//     console.log("firstmiddleware.");
//     // res.send("inside middleware.")
//     next();
// })

// // app.use(middleware)  
// app.use((req, res, next) => {
//     console.log("second middleware.");
//     next();
// })



// app.use(auth_middleware) // global middleware
const { auth_middleware } = require("./middleware/auth")

app.get("/", (req, res) => {
    res.send("welcome to expreess")
})

app.get("/api/products", (req, res) => {
    res.send([{ id: 1, name: "One" }, { id: 2, name: "Two" }])
})

app.post("/api/products", (req, res) => {
    console.log("body", req.body);

    /* 
        DBProduct.createOne({name: req.body.name})
    */

    res.send("product created.")
    // res.send([{ id: "prodouct 1" }, {}])
})

app.get("/api/orders", auth_middleware, (req, res) => {
    console.log(req.query);
    console.log(req.user);
    res.send([{ id: "list of orders..." }, {}])
})

app.get("/api/students", (req, res) => {

    let students = [] // fetch from database. 

    res.send([])
})

mongoose.connect('mongodb://localhost:27017/hospital')
    .then(() => console.log('Connected!'));

app.listen(8000, (data) => {
    console.log("lilstenin server....");
})

